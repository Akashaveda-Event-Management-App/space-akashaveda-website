import { ArrowUpRight } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const navRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<(HTMLElement | null)[]>([]);
  const navigate = useNavigate();
  const location = useLocation();

  /* ── Scroll detection ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── Active section scroll spy ── */
  useEffect(() => {
    const sectionIds = ['about', 'services', 'platform', 'products', 'integrations'];
    let ticking = false;

    const determineActiveSection = () => {
      // If near top of page, no section link should be highlighted (Hero view)
      if (window.scrollY < 220) {
        setActiveSection('');
        return;
      }

      // Checkpoint offset below the floating navbar
      const scrollPos = window.scrollY + 160;

      // Find the last section whose top is above the scrollPos checkpoint
      let current = '';
      for (let i = 0; i < sectionIds.length; i++) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY;
          if (scrollPos >= top) {
            current = sectionIds[i];
          }
        }
      }

      // Bottom of page override for last section
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
        current = 'integrations';
      }

      setActiveSection(current);
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          determineActiveSection();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    determineActiveSection();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [location.pathname]);

  /* ── Body lock when mobile menu open ── */
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  /* ── Close menu on route change ── */
  useEffect(() => { setIsMenuOpen(false); }, [location.pathname]);

  const handleSectionClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' }), 140);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  interface NavLinkItem {
    to: string;
    label: string;
    sectionId?: string;
    isRoute?: boolean;
  }

  const navLinks: NavLinkItem[] = [
    { to: '#about',        label: 'About',        sectionId: 'about' },
    { to: '#services',     label: 'Services',     sectionId: 'services' },
    { to: '#platform',     label: 'Platform',     sectionId: 'platform' },
    { to: '#products',     label: 'Products',     sectionId: 'products' },
    { to: '#integrations', label: 'Integrations', sectionId: 'integrations' },
  ];

  return (
    <>
      {/* ══════════════════════════════════════════
          FLOATING NAV PILL
      ══════════════════════════════════════════ */}
      <header className="fixed top-0 inset-x-0 z-50 flex justify-center pt-3 sm:pt-5 px-3 sm:px-6 pointer-events-none">
        <nav
          className={`
            pointer-events-auto relative w-full max-w-[940px]
            flex items-center justify-between gap-3 sm:gap-4
            px-3.5 sm:px-5 ${scrolled ? 'h-[50px] sm:h-[54px]' : 'h-[58px] sm:h-[62px]'}
            rounded-full border transition-all duration-500 ease-out
            animate-navDown
            ${scrolled
              ? 'bg-[#070C1A]/90 backdrop-blur-2xl border-white/[0.12] shadow-[0_12px_45px_rgba(0,0,0,0.7)]'
              : 'bg-[#070C1A]/60 backdrop-blur-xl border-white/[0.1]'
            }
          `}
        >
          {/* ── Logo ── */}
          <Link
            to="/"
            className="flex items-center gap-3 flex-shrink-0 group"
          >
            <div className="relative w-[38px] h-[38px] sm:w-[42px] sm:h-[42px] rounded-full bg-[#f4f5f7] border border-white/50 flex items-center justify-center p-1.5 shadow-[0_0_15px_rgba(255,255,255,0.25)] group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] transition-all duration-300">
              <img 
                src="/logo.svg" 
                alt="Akashaveda Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-[15px] sm:text-[17px] font-bold text-white tracking-tight leading-none">
              Akashaveda
            </span>
          </Link>

          {/* ── Desktop Links with gliding indicator ── */}
          <div
            ref={navRef}
            className="hidden md:flex items-center gap-1 relative"
          >
            {navLinks.map((link, i) => {
              const base = 'relative px-4 py-2 text-[14px] font-medium rounded-full transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50';
              if (link.isRoute) {
                const isActive = location.pathname === link.to;
                return (
                  <Link
                    key={i}
                    to={link.to}
                    ref={(el) => { linkRefs.current[i] = el; }}
                    className={`${base} ${
                      isActive
                        ? "text-white after:content-[''] after:absolute after:bottom-0 after:left-2 after:right-2 after:h-[2px] after:bg-blue-400 after:rounded-full"
                        : 'text-[#C7CEDA] hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              }
              return (
                <a
                  key={i}
                  href={link.to}
                  ref={(el) => { linkRefs.current[i] = el; }}
                  onClick={(e) => link.sectionId && handleSectionClick(e, link.sectionId)}
                  className={`${base} cursor-pointer transition-colors duration-200 ${
                    activeSection === link.sectionId
                      ? "text-white after:content-[''] after:absolute after:bottom-0 after:left-2 after:right-2 after:h-[2px] after:bg-blue-400 after:rounded-full"
                      : 'text-[#C7CEDA] hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* ── Right side ── */}
          <div className="flex items-center gap-2.5 flex-shrink-0">
            {/* Contact CTA — desktop + tablet */}
            <button
              onClick={(e) => handleSectionClick(e as any, 'contact')}
              className="hidden sm:flex items-center gap-1.5 text-[13px] sm:text-[14px] font-semibold bg-white text-black px-4 sm:px-5 py-2 rounded-full hover:bg-blue-50 active:scale-95 transition-all duration-200 shadow-md"
            >
              Contact Us
              <ArrowUpRight className="w-4 h-4" />
            </button>

            {/* Animated hamburger — mobile only */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              className="md:hidden w-10 h-10 flex flex-col justify-center items-center rounded-full border border-white/15 bg-white/10 hover:bg-white/15 transition-all duration-200 gap-[5px]"
            >
              <span
                className={`block h-[1.5px] bg-white transition-all duration-300 origin-center ${
                  isMenuOpen ? 'w-4 rotate-45 translate-y-[3.25px]' : 'w-4'
                }`}
              />
              <span
                className={`block h-[1.5px] bg-white transition-all duration-300 ${
                  isMenuOpen ? 'w-0 opacity-0' : 'w-3'
                }`}
              />
              <span
                className={`block h-[1.5px] bg-white transition-all duration-300 origin-center ${
                  isMenuOpen ? 'w-4 -rotate-45 -translate-y-[3.25px]' : 'w-4'
                }`}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* ══════════════════════════════════════════
          MOBILE FULL-SCREEN MENU
      ══════════════════════════════════════════ */}
      {/* Backdrop */}
      <div
        aria-hidden
        onClick={() => setIsMenuOpen(false)}
        className={`fixed inset-0 z-40 md:hidden bg-black/75 backdrop-blur-md transition-all duration-400 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Drawer */}
      <div
        className={`
          fixed inset-x-0 top-0 z-50 md:hidden
          transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]
          ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
        `}
      >
        <div className="mx-3 mt-3 rounded-[24px] bg-[#0c0c0e]/95 backdrop-blur-2xl border border-white/8 overflow-hidden shadow-2xl">

          {/* Top bar inside drawer */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/6">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-3"
            >
              <div className="w-[34px] h-[34px] rounded-full bg-[#f4f5f7] border border-white/40 flex items-center justify-center p-1.5 shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                <img src="/logo.svg" alt="Akashaveda" className="w-full h-full object-contain" />
              </div>
              <span className="text-base font-bold text-white tracking-tight">Akashaveda</span>
            </Link>

            {/* Close button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white/6 hover:bg-white/12 border border-white/8 transition-all duration-200 text-gray-400 hover:text-white"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Nav links — staggered */}
          <nav className="px-3 py-3">
            {navLinks.map((link, i) => {
              const isActive = link.isRoute && location.pathname === link.to;
              const style = { transitionDelay: isMenuOpen ? `${i * 40 + 60}ms` : '0ms' };
              const cls = `
                flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-medium
                transition-all duration-300
                ${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}
                ${isActive
                  ? 'text-white bg-white/8'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
                }
              `;

              return link.isRoute ? (
                <Link
                  key={i}
                  to={link.to}
                  onClick={() => setIsMenuOpen(false)}
                  className={cls}
                  style={style}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-mono text-[#5A7AB3] font-bold w-5 flex-shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span>{link.label}</span>
                  </div>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />}
                </Link>
              ) : (
                <a
                  key={i}
                  href={link.to}
                  onClick={(e) => link.sectionId && handleSectionClick(e, link.sectionId)}
                  className={cls}
                  style={style}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-mono text-[#5A7AB3] font-bold w-5 flex-shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span>{link.label}</span>
                  </div>
                </a>
              );
            })}
          </nav>

          {/* Footer CTA area */}
          <div
            className={`px-3 pb-3 transition-all duration-300 ${
              isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: isMenuOpen ? '340ms' : '0ms' }}
          >
            <div className="border-t border-white/6 pt-3 space-y-2">
              <button
                onClick={(e) => handleSectionClick(e as any, 'contact')}
                className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold bg-white text-black rounded-xl hover:bg-blue-50 active:scale-[0.98] transition-all duration-200"
              >
                Contact Us
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <p className="text-center text-[11px] text-gray-600 pb-1">
                © {new Date().getFullYear()} Akashaveda Technologies
              </p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
