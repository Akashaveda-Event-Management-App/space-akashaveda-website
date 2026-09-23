import { useState, useEffect } from 'react';
import { ArrowUpRight, ChevronRight, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface NavItem {
  to: string;
  label: string;
  sublabel?: string;
}

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [utcTime, setUtcTime] = useState<string>('');
  const location = useLocation();

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
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll on mobile menu open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  // Close menu on route change
  useEffect(() => { setIsMenuOpen(false); }, [location.pathname]);

  const navLinks: NavItem[] = [
    { to: '/chakravyuh', label: 'Chakravyuh', sublabel: 'Platform' },
    { to: '/chakra', label: 'Chakra', sublabel: 'SSA' },
    { to: '/vyuh', label: 'Vyuh', sublabel: 'MCS' },
    { to: '/ground-operations', label: 'Ground Operations' },
    { to: '/technology', label: 'Technology' },
    { to: '/about', label: 'About' },
    { to: '/resources', label: 'Resources' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {/* ── Aerospace Command Header ── */}
      <header className="fixed top-0 inset-x-0 z-50 flex justify-center pt-2 sm:pt-3 px-2.5 sm:px-6 pointer-events-none">
        <nav
          className={`
            pointer-events-auto relative w-full max-w-[1240px]
            flex items-center justify-between gap-2 sm:gap-3
            px-3 sm:px-4 ${scrolled ? 'h-[52px]' : 'h-[58px]'}
            rounded-[10px] border transition-all duration-200 ease-out
            ${scrolled
              ? 'bg-[#080C16]/95 backdrop-blur-xl border-white/[0.12] shadow-[0_8px_30px_rgba(0,0,0,0.85)]'
              : 'bg-[#080C16]/85 backdrop-blur-lg border-white/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.6)]'
            }
          `}
        >
          {/* Subtle top rim hairline */}
          <div className="absolute top-0 inset-x-6 h-[1px] bg-gradient-to-r from-transparent via-[#47B2E4]/40 to-transparent pointer-events-none" />

          {/* ── Brand Logo Block ── */}
          <Link
            to="/"
            className="flex items-center gap-2 sm:gap-2.5 flex-shrink-0 group focus:outline-none"
          >
            <div className="w-[30px] h-[30px] sm:w-[32px] sm:h-[32px] rounded-[6px] bg-[#FFFFFF] border border-white/20 flex items-center justify-center p-1 shadow-sm group-hover:border-[#47B2E4]/60 transition-all duration-200 flex-shrink-0">
              <img 
                src="/logo.svg" 
                alt="Akashaveda" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[14px] sm:text-[15px] font-semibold text-white tracking-tight leading-none whitespace-nowrap">
                Akashaveda
              </span>
              <span className="hidden sm:block text-[8px] font-mono text-[#47B2E4] tracking-[0.14em] uppercase mt-0.5 whitespace-nowrap">
                GROUND &amp; MISSION SEGMENT
              </span>
            </div>
          </Link>

          {/* ── Desktop Navigation Links ── */}
          <div className="hidden lg:flex items-center gap-0.5 xl:gap-1 flex-shrink min-w-0">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`
                    px-2 xl:px-2.5 py-1.5 text-[12px] xl:text-[13px] font-medium rounded-[6px]
                    transition-colors duration-150 flex items-center gap-1.5 whitespace-nowrap
                    ${isActive
                      ? 'text-white bg-white/[0.08] border border-white/[0.12]'
                      : 'text-[#94A3B8] hover:text-white hover:bg-white/[0.04]'
                    }
                  `}
                >
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#47B2E4] flex-shrink-0" />}
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </div>

          {/* ── Right Utility Cluster ── */}
          <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
            {/* Live UTC Telemetry Time - visible on xl+ to prevent squeeze on smaller laptops */}
            {utcTime && (
              <div className="hidden xl:flex items-center gap-1.5 px-2.5 py-1 rounded-[6px] bg-[#0E1626] border border-white/10 text-[10px] font-mono text-[#94A3B8] whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                <span className="text-[#E2E8F0]">{utcTime}</span>
              </div>
            )}

            {/* Primary Action Button - responsive with no outflow */}
            <Link
              to="/contact?type=demo"
              className="inline-flex items-center gap-1 sm:gap-1.5 text-[11px] sm:text-[12px] xl:text-[13px] font-medium bg-white text-black px-2.5 sm:px-3.5 xl:px-4 py-1.5 sm:py-2 rounded-[6px] hover:bg-[#F1F5F9] active:scale-[0.98] transition-all shadow-sm group whitespace-nowrap flex-shrink-0"
            >
              <span className="sm:hidden">Demo</span>
              <span className="hidden sm:inline">Schedule Demo</span>
              <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 flex-shrink-0" />
            </Link>

            {/* Mobile / Tablet Hamburger Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="lg:hidden w-8 h-8 flex items-center justify-center rounded-[6px] border border-white/15 bg-white/5 hover:bg-white/10 text-white transition-colors flex-shrink-0"
            >
              {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </nav>
      </header>

      {/* ── Mobile / Tablet Drawer ── */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 z-40 lg:hidden bg-black/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-x-3 top-16 z-50 lg:hidden max-h-[calc(100vh-5rem)] overflow-y-auto"
            >
              <div className="rounded-[10px] bg-[#080C16] border border-white/15 overflow-hidden shadow-2xl p-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-xs font-mono text-[#94A3B8]">SYSTEM ACTIVE · {utcTime}</span>
                  </div>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="text-xs font-mono text-[#64748B] hover:text-white"
                  >
                    CLOSE [ESC]
                  </button>
                </div>

                <nav className="space-y-1">
                  {navLinks.map((link, idx) => {
                    const isActive = location.pathname === link.to;
                    return (
                      <Link
                        key={link.to}
                        to={link.to}
                        onClick={() => setIsMenuOpen(false)}
                        className={`
                          flex items-center justify-between px-3 py-2.5 rounded-[6px] text-[13px] font-medium transition-colors
                          ${isActive
                            ? 'text-white bg-white/10 border border-white/10'
                            : 'text-[#94A3B8] hover:text-white hover:bg-white/5'
                          }
                        `}
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="text-[10px] font-mono text-[#47B2E4] w-4">
                            {String(idx + 1).padStart(2, '0')}
                          </span>
                          <span>{link.label}</span>
                          {link.sublabel && (
                            <span className="text-[10px] font-mono text-[#64748B]">({link.sublabel})</span>
                          )}
                        </div>
                        <ChevronRight className="w-3.5 h-3.5 text-white/30" />
                      </Link>
                    );
                  })}
                </nav>

                <div className="pt-3 mt-3 border-t border-white/10 space-y-2">
                  <Link
                    to="/contact?type=demo"
                    onClick={() => setIsMenuOpen(false)}
                    className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold bg-white text-black rounded-[6px] hover:bg-gray-100 transition-colors"
                  >
                    <span>Schedule a Demonstration</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    to="/ground-operations"
                    onClick={() => setIsMenuOpen(false)}
                    className="w-full flex items-center justify-center gap-2 py-2 text-xs font-mono text-[#94A3B8] bg-white/5 hover:bg-white/10 rounded-[6px] border border-white/10 transition-colors"
                  >
                    <span>Explore Ground Station Network</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
