import { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Crosshair, ChevronRight } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { toggleSpaceCursor } from '../utils/cursorEvents';

interface NavLinkItem {
  to: string;
  label: string;
  sectionId: string;
}

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const [cursorActive, setCursorActive] = useState(true);
  const [utcTime, setUtcTime] = useState<string>('');
  const navRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Load cursor preference
  useEffect(() => {
    const saved = localStorage.getItem('space_cursor_enabled');
    if (saved !== null) {
      setCursorActive(saved === 'true');
    }
  }, []);

  const handleToggleCursor = () => {
    const next = !cursorActive;
    setCursorActive(next);
    toggleSpaceCursor(next);
  };

  // Live UTC Clock for aerospace mission control
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setUtcTime(now.toUTCString().slice(17, 25) + ' UTC');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Active section scroll spy
  useEffect(() => {
    const sectionIds = ['about', 'services', 'platform', 'products', 'integrations'];
    let ticking = false;

    const determineActiveSection = () => {
      if (window.scrollY < 220) {
        setActiveSection('');
        return;
      }

      const scrollPos = window.scrollY + 180;
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

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
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

  // Lock body scroll on mobile menu open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  // Close menu on route change
  useEffect(() => { setIsMenuOpen(false); }, [location.pathname]);

  const handleSectionClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 140);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks: NavLinkItem[] = [
    { to: '#about',        label: 'About',        sectionId: 'about' },
    { to: '#services',     label: 'Services',     sectionId: 'services' },
    { to: '#platform',     label: 'Platform',     sectionId: 'platform' },
    { to: '#products',     label: 'Products',     sectionId: 'products' },
    { to: '#integrations', label: 'Integrations', sectionId: 'integrations' },
  ];

  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════
          ORBTRIX-STYLE FLOATING AEROSPACE COMMAND HEADER
      ══════════════════════════════════════════════════════════════════ */}
      <header className="fixed top-0 inset-x-0 z-50 flex justify-center pt-3 sm:pt-4 px-3 sm:px-6 pointer-events-none">
        <nav
          className={`
            pointer-events-auto relative w-full max-w-[1020px]
            flex items-center justify-between gap-3 sm:gap-4
            px-3.5 sm:px-5 ${scrolled ? 'h-[52px] sm:h-[56px]' : 'h-[60px] sm:h-[64px]'}
            rounded-full border transition-all duration-300 ease-out
            ${scrolled
              ? 'bg-[#08080A]/92 backdrop-blur-2xl border-white/[0.14] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15),0_18px_50px_rgba(0,0,0,0.9)]'
              : 'bg-[#08080A]/80 backdrop-blur-xl border-white/[0.10] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.10),0_10px_35px_rgba(0,0,0,0.65)]'
            }
          `}
        >
          {/* Top Hairline Ambient Rim Glow */}
          <div className="absolute top-0 inset-x-12 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none rounded-full" />

          {/* ── Brand Logo Block ── */}
          <Link
            to="/"
            className="flex items-center gap-2.5 sm:gap-3 flex-shrink-0 group focus:outline-none"
          >
            <div className="relative w-[34px] h-[34px] sm:w-[38px] sm:h-[38px] rounded-full bg-[#FFFFFF] border border-white/40 flex items-center justify-center p-1.5 shadow-[0_0_15px_rgba(255,255,255,0.25)] group-hover:scale-105 group-hover:shadow-[0_0_22px_rgba(167,139,250,0.55)] transition-all duration-300">
              <img 
                src="/logo.svg" 
                alt="Akashaveda Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[15px] sm:text-[16px] font-semibold text-white tracking-tight leading-none">
                Akashaveda
              </span>
              <span className="hidden sm:block text-[8px] font-mono text-[#A78BFA] tracking-[0.14em] uppercase mt-0.5 opacity-90">
                AI MISSION CONTROL
              </span>
            </div>
          </Link>

          {/* ── Desktop Links with Magnetic Floating Capsule ── */}
          <div
            ref={navRef}
            className="hidden md:flex items-center gap-0.5 sm:gap-1 relative"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.sectionId;
              return (
                <a
                  key={link.sectionId}
                  href={link.to}
                  onClick={(e) => handleSectionClick(e, link.sectionId)}
                  className={`
                    relative px-3.5 py-1.5 sm:px-4 sm:py-2 text-[13px] sm:text-[14px] font-normal rounded-full
                    transition-colors duration-200 outline-none flex items-center gap-1.5
                    ${isActive ? 'text-white font-medium' : 'text-[#A3A3AE] hover:text-white'}
                  `}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavCapsule"
                      className="absolute inset-0 bg-white/[0.10] border border-white/12 rounded-full -z-10 shadow-[0_0_18px_rgba(167,139,250,0.22)]"
                      transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                    />
                  )}
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA] shadow-[0_0_8px_#7C3AED]" />
                  )}
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* ── Right Utility Cluster ── */}
          <div className="flex items-center gap-2 sm:gap-2.5 flex-shrink-0">
            {/* Real-Time UTC Flight Time Clock (Desktop) */}
            {utcTime && (
              <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#121216] border border-white/10 text-[10px] font-mono text-[#A3A3AE]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[#C4B5FD] font-medium">{utcTime}</span>
              </div>
            )}

            {/* Space Reticle Cursor HUD Mode Toggle Button */}
            <button
              onClick={handleToggleCursor}
              title={cursorActive ? 'Disable Aerospace Reticle' : 'Enable Aerospace Reticle'}
              aria-label="Toggle Space Reticle Cursor"
              className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full bg-[#121216] border border-white/10 text-[#A3A3AE] hover:text-[#A78BFA] hover:border-[#A78BFA]/40 transition-colors"
            >
              <Crosshair className={`w-3.5 h-3.5 ${cursorActive ? 'text-[#A78BFA]' : 'text-[#71717A]'}`} />
            </button>

            {/* Primary Action Button — Orbtrix Pill Style */}
            <button
              onClick={(e) => handleSectionClick(e, 'contact')}
              className="hidden sm:inline-flex items-center gap-1.5 text-[13px] sm:text-[14px] font-medium bg-white text-black px-4 sm:px-5 py-2 sm:py-2.5 rounded-full hover:bg-[#F3F4F6] hover:shadow-[0_0_24px_rgba(255,255,255,0.35)] active:scale-95 transition-all duration-200 shadow-sm group"
            >
              <span>Contact Us</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMenuOpen}
              className="md:hidden w-9 h-9 flex flex-col justify-center items-center rounded-full border border-white/15 bg-white/10 hover:bg-white/15 transition-all duration-200 gap-[4.5px]"
            >
              <span
                className={`block h-[1.5px] bg-white transition-all duration-300 origin-center ${
                  isMenuOpen ? 'w-4 rotate-45 translate-y-[3px]' : 'w-4'
                }`}
              />
              <span
                className={`block h-[1.5px] bg-white transition-all duration-300 ${
                  isMenuOpen ? 'w-0 opacity-0' : 'w-3'
                }`}
              />
              <span
                className={`block h-[1.5px] bg-white transition-all duration-300 origin-center ${
                  isMenuOpen ? 'w-4 -rotate-45 -translate-y-[3px]' : 'w-4'
                }`}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* ══════════════════════════════════════════════════════════════════
          MOBILE FULL-SCREEN MENU DRAWER
      ══════════════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 z-40 md:hidden bg-black/80 backdrop-blur-md"
            />

            {/* Drawer */}
            <motion.div
              initial={{ y: '-100%', opacity: 0 }}
              animate={{ y: '0%', opacity: 1 }}
              exit={{ y: '-100%', opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
              className="fixed inset-x-0 top-0 z-50 md:hidden"
            >
              <div className="mx-3 mt-3 rounded-[20px] bg-[#08080A]/98 backdrop-blur-2xl border border-white/12 overflow-hidden shadow-2xl">
                {/* Top Header Inside Drawer */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
                  <Link
                    to="/"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-3"
                  >
                    <div className="w-[34px] h-[34px] rounded-full bg-[#FFFFFF] border border-white/40 flex items-center justify-center p-1.5 shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                      <img src="/logo.svg" alt="Akashaveda" className="w-full h-full object-contain" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-base font-semibold text-white tracking-tight">Akashaveda</span>
                      <span className="text-[8px] font-mono text-[#A78BFA] tracking-wider">AI MISSION CONTROL</span>
                    </div>
                  </Link>

                  <button
                    onClick={() => setIsMenuOpen(false)}
                    aria-label="Close menu"
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/15 border border-white/10 transition-all duration-200 text-gray-300 hover:text-white"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Staggered Navigation Items */}
                <nav className="px-3 py-3">
                  {navLinks.map((link, i) => {
                    const isActive = activeSection === link.sectionId;
                    return (
                      <a
                        key={link.sectionId}
                        href={link.to}
                        onClick={(e) => handleSectionClick(e, link.sectionId)}
                        className={`
                          flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-normal
                          transition-all duration-200
                          ${isActive
                            ? 'text-white bg-white/10 font-medium'
                            : 'text-[#A3A3AE] hover:text-white hover:bg-white/5'
                          }
                        `}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-[11px] font-mono text-[#A78BFA] font-medium w-5 flex-shrink-0">
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          <span>{link.label}</span>
                        </div>
                        {isActive ? (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA]" />
                        ) : (
                          <ChevronRight className="w-4 h-4 text-white/30" />
                        )}
                      </a>
                    );
                  })}
                </nav>

                {/* Mobile Drawer Bottom Actions */}
                <div className="px-3 pb-4">
                  <div className="border-t border-white/10 pt-3 space-y-2.5">
                    <button
                      onClick={(e) => handleSectionClick(e, 'contact')}
                      className="w-full flex items-center justify-center gap-2 py-3 text-sm font-medium bg-white text-black rounded-full hover:bg-[#f3f4f6] active:scale-[0.98] transition-all duration-200 shadow-md"
                    >
                      <span>Contact Us</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                    <div className="flex items-center justify-between text-[10px] font-mono text-[#71717A] px-2 pt-1">
                      <span>GS-BLR · 12.97°N, 77.59°E</span>
                      <span className="text-emerald-400">NET 99.8% OK</span>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
