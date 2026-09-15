import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, ChevronDown, Compass } from 'lucide-react';

interface OrbitPhase {
  id: string;
  name: string;
  label: string;
  alt: string;
  badge: string;
}

const ORBIT_PHASES: OrbitPhase[] = [
  { id: 'hero', name: 'LEO Injection', label: '01 · HERO', alt: '540 KM', badge: 'APOGEE' },
  { id: 'about', name: 'Telemetry & Specs', label: '02 · ABOUT', alt: '480 KM', badge: 'TRACKED' },
  { id: 'services', name: 'Constellation Ops', label: '03 · SERVICES', alt: '380 KM', badge: 'ACTIVE' },
  { id: 'platform', name: 'AI Autonomy (VYUH)', label: '04 · PLATFORM', alt: '260 KM', badge: 'ONLINE' },
  { id: 'contact', name: 'Ground Station Link', label: '05 · CONTACT', alt: '0 KM', badge: 'TERMINAL' },
];

export default function OrbitalPageScroller() {
  const [activePhase, setActivePhase] = useState<string>('hero');
  const [scrollPercent, setScrollPercent] = useState<number>(0);
  const [hoveredPhase, setHoveredPhase] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = Math.min(100, Math.max(0, docHeight > 0 ? (scrollY / docHeight) * 100 : 0));
      setScrollPercent(Math.round(pct));

      // Calculate active phase based on section positions
      let current = 'hero';
      for (const phase of ORBIT_PHASES) {
        const el = document.getElementById(phase.id);
        if (el) {
          const top = el.getBoundingClientRect().top + scrollY - 200;
          if (scrollY >= top) {
            current = phase.id;
          }
        }
      }
      setActivePhase(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToPhase = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const activeIndex = ORBIT_PHASES.findIndex((p) => p.id === activePhase);
  const activeAlt = ORBIT_PHASES[activeIndex]?.alt || '540 KM';

  return (
    <aside
      aria-label="Orbital Flight Track Scroller"
      className="hidden lg:flex fixed right-5 top-1/2 -translate-y-1/2 z-40 flex-col items-end pointer-events-auto select-none"
    >
      <div className="flex flex-col items-center bg-[#08080A]/85 backdrop-blur-xl border border-white/10 rounded-full py-4 px-2 shadow-[0_8px_30px_rgba(0,0,0,0.8)] transition-all duration-300">
        {/* Toggle Expand/Collapse */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          title={isExpanded ? 'Minimize Scroller' : 'Expand Scroller'}
          className="w-7 h-7 rounded-full bg-[#121216] border border-white/10 flex items-center justify-center text-[#A3A3AE] hover:text-[#A78BFA] hover:border-[#A78BFA]/40 transition-colors mb-3"
        >
          <Compass className={`w-3.5 h-3.5 transition-transform duration-300 ${isExpanded ? 'rotate-0' : 'rotate-180'}`} />
        </button>

        {isExpanded && (
          <>
            {/* Scroll Up Button */}
            <button
              onClick={() => {
                const prevIdx = Math.max(0, activeIndex - 1);
                scrollToPhase(ORBIT_PHASES[prevIdx].id);
              }}
              title="Previous Orbit Phase"
              className="w-6 h-6 rounded-full flex items-center justify-center text-[#A3A3AE] hover:text-white transition-colors mb-2"
            >
              <ChevronUp className="w-3.5 h-3.5" />
            </button>

            {/* Orbital Flight Rail & Phase Nodes */}
            <div className="relative py-2 flex flex-col items-center gap-6">
              {/* Vertical Track Line */}
              <div className="absolute top-0 bottom-0 w-[2px] bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="w-full bg-gradient-to-b from-[#7C3AED] via-[#A78BFA] to-[#C4B5FD] rounded-full"
                  style={{ height: `${scrollPercent}%` }}
                  transition={{ ease: 'easeOut', duration: 0.15 }}
                />
              </div>

              {/* Waypoint Nodes */}
              {ORBIT_PHASES.map((phase) => {
                const isActive = activePhase === phase.id;
                const isHovered = hoveredPhase === phase.id;

                return (
                  <div
                    key={phase.id}
                    className="relative flex items-center justify-center group"
                    onMouseEnter={() => setHoveredPhase(phase.id)}
                    onMouseLeave={() => setHoveredPhase(null)}
                  >
                    {/* Node Dot / Pip */}
                    <button
                      onClick={() => scrollToPhase(phase.id)}
                      aria-label={`Jump to ${phase.name}`}
                      className={`relative z-10 w-3 h-3 rounded-full transition-all duration-300 flex items-center justify-center ${
                        isActive
                          ? 'bg-[#A78BFA] scale-125 shadow-[0_0_12px_#7C3AED] border-2 border-black'
                          : 'bg-[#121216] border border-white/30 hover:border-[#A78BFA] hover:scale-110'
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="orbitalPipRing"
                          className="absolute -inset-1 rounded-full border border-[#A78BFA] animate-ping opacity-60 pointer-events-none"
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />
                      )}
                    </button>

                    {/* Left Popout Tooltip */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0, x: 10, scale: 0.95 }}
                          animate={{ opacity: 1, x: 0, scale: 1 }}
                          exit={{ opacity: 0, x: 6, scale: 0.95 }}
                          transition={{ duration: 0.18 }}
                          className="absolute right-7 py-1.5 px-3 rounded-md bg-[#08080A]/95 border border-white/15 backdrop-blur-xl shadow-2xl flex items-center gap-2.5 whitespace-nowrap z-50 pointer-events-none"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]" />
                          <div className="flex flex-col text-left">
                            <div className="flex items-center gap-1.5">
                              <span className="text-[10px] font-mono font-bold text-white tracking-wider">
                                {phase.label}
                              </span>
                              <span className="text-[8px] font-mono text-[#A78BFA] bg-[#A78BFA]/10 border border-[#A78BFA]/20 px-1 rounded">
                                {phase.badge}
                              </span>
                            </div>
                            <span className="text-[9px] font-mono text-[#A3A3AE]">
                              {phase.name} · <span className="text-white/80">{phase.alt}</span>
                            </span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Scroll Down Button */}
            <button
              onClick={() => {
                const nextIdx = Math.min(ORBIT_PHASES.length - 1, activeIndex + 1);
                scrollToPhase(ORBIT_PHASES[nextIdx].id);
              }}
              title="Next Orbit Phase"
              className="w-6 h-6 rounded-full flex items-center justify-center text-[#A3A3AE] hover:text-white transition-colors mt-2"
            >
              <ChevronDown className="w-3.5 h-3.5" />
            </button>

            {/* Bottom Telemetry Gauge Readout */}
            <div className="mt-3 pt-2 border-t border-white/10 flex flex-col items-center gap-1">
              <span className="text-[8px] font-mono uppercase tracking-widest text-[#71717A]">
                ALT
              </span>
              <span className="text-[10px] font-mono font-bold text-[#A78BFA]">
                {activeAlt.replace(' KM', '')}
                <span className="text-[7px] text-[#71717A] ml-0.5">K</span>
              </span>
              <div className="text-[8px] font-mono text-white/50 bg-white/5 px-1 py-0.5 rounded mt-0.5">
                {scrollPercent}%
              </div>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}
