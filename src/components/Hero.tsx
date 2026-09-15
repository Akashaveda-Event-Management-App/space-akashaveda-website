import { useEffect, useState } from 'react';
import { ArrowRight, ArrowUpRight, ShieldCheck, Globe, Cpu, Zap, Layers, Activity, Compass, Radio, Sparkles } from 'lucide-react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { MotionFloatingOrbs } from './MotionPrimitives';
import HeroSpaceEffects, { BgEffectMode } from './HeroSpaceEffects';
import { MotionTrajectoryGraphic } from './HeroMotionGraphics';
import { TacticalHudCard, OrbitSimCard, ChakraSsaCard, HeroCardType } from './HeroCards';

const MODE_MAP: Record<HeroCardType, BgEffectMode> = {
  telemetry: 'orbital',
  orbit: 'hyperspace',
  ssa: 'radar',
};

export default function Hero() {
  const [activeMode, setActiveMode] = useState<HeroCardType>('telemetry');
  const [pulse, setPulse] = useState(99.84);
  const [bgMode, setBgMode] = useState<BgEffectMode>('orbital');
  const [autoCycle, setAutoCycle] = useState(true);

  const handleModeSelect = (mode: HeroCardType) => {
    setActiveMode(mode);
    setBgMode(MODE_MAP[mode]);
    setAutoCycle(false);
  };

  // Live signal pulse simulation
  useEffect(() => {
    const iv = setInterval(() => {
      setPulse((p) => +Math.min(100, Math.max(95, p + (Math.random() * 0.3 - 0.15))).toFixed(2));
    }, 2200);
    return () => clearInterval(iv);
  }, []);

  // Auto-cycle through the 3 space modes in lockstep with background
  useEffect(() => {
    if (!autoCycle) return;
    const modes: HeroCardType[] = ['telemetry', 'orbit', 'ssa'];
    const timer = setInterval(() => {
      setActiveMode((prev) => {
        const nextIdx = (modes.indexOf(prev) + 1) % modes.length;
        const next = modes[nextIdx];
        setBgMode(MODE_MAP[next]);
        return next;
      });
    }, 11000);
    return () => clearInterval(timer);
  }, [autoCycle]);

  // Smooth 3D tilt with Framer Motion springs (Desktop only)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 200 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-7, 7]);
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [7, -7]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (typeof window !== 'undefined' && window.innerWidth < 1024) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="hero"
      aria-label="Hero — AI-Powered Satellite Operations"
      className="relative min-h-screen w-full overflow-hidden bg-[#000000] text-white flex flex-col justify-between"
    >
      {/* ── 3 Dynamic Space & Tech Background Effects (Background Canvas Only) ── */}
      <HeroSpaceEffects currentMode={bgMode} />

      {/* ── Ambient Motion Graphic Accents ── */}
      <MotionFloatingOrbs />
      <MotionTrajectoryGraphic />

      {/* ── Main Hero Content with generous top padding for floating navbar clearance ── */}
      <div className="relative z-10 flex-1 flex items-center pt-24 sm:pt-28 lg:pt-32 pb-6 sm:pb-8">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* ── Left Column: Headline & CTAs ── */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="lg:col-span-6 flex flex-col items-start order-2 lg:order-1"
            >

              {/* Eyebrow badge */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/12 bg-[#08080A]/90 backdrop-blur-md mb-6 max-w-full"
              >
                <span className="w-1.5 h-1.5 bg-[#7C3AED] rotate-45 flex-shrink-0" />
                <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#A78BFA] truncate">
                  Cloud-Native Mission Control & Constellation Autonomy
                </span>
                <Sparkles className="w-3.5 h-3.5 text-[#C4B5FD] ml-0.5 flex-shrink-0" />
              </motion.div>

              {/* Headline with Orbtrix tight tracking and display typography */}
              <h1 className="text-[2.6rem] xs:text-[3.1rem] sm:text-5xl md:text-6xl lg:text-[4.4rem] font-medium leading-[1.0] tracking-[-0.03em] mb-5 sm:mb-6 text-white">
                Autonomous Mission<br />
                Control for{' '}
                <span className="text-[#A78BFA]">
                  Modern Constellations.
                </span>
              </h1>

              {/* Sub-copy */}
              <p className="text-[14px] sm:text-[15px] md:text-base text-[#A3A3AE] font-light max-w-lg mb-8 sm:mb-10 leading-[1.7]">
                Replace fragmented legacy ground software with a unified, cloud-native platform. Automate pass scheduling, streamline contact orchestration, and predict subsystem telemetry anomalies in real time.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-auto mb-8 sm:mb-12">
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="cta cta-primary"
                >
                  <span>Schedule Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => document.getElementById('platform')?.scrollIntoView({ behavior: 'smooth' })}
                  className="cta cta-secondary"
                >
                  Explore Platform
                </button>
              </div>

            </motion.div>

            {/* ── Right Column: Unified Master Aerospace Flight Console ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="w-full lg:col-span-6 order-1 lg:order-2 flex flex-col items-center lg:items-end relative"
            >
              {/* Main Flight Console Card with smooth spring tilt */}
              <motion.div
                style={{
                  rotateX,
                  rotateY,
                  transformStyle: 'preserve-3d',
                }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="w-full max-w-[480px] bg-[#08080A]/95 backdrop-blur-2xl border border-white/12 rounded-[16px] overflow-hidden shadow-[0_24px_70px_rgba(0,0,0,0.95)] relative"
              >
                {/* Top Edge Hairline Highlight */}
                <div className="absolute top-0 inset-x-8 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />

                {/* 1. Terminal Header Bar */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-[#121216]">
                  {/* Left: Window Dots & Satellite Identifier */}
                  <div className="flex items-center gap-2.5">
                    <div className="flex gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <div className="w-px h-3.5 bg-white/10" />
                    <div className="flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5 text-[#A78BFA]" />
                      <span className="text-[11px] font-mono text-white font-medium tracking-tight">AKASHAVEDA OS</span>
                      <span className="text-[9px] font-mono text-[#A3A3AE]">· LEO-A104</span>
                    </div>
                  </div>

                  {/* Right: Auto-cycle Toggle & Encrypted Tag */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setAutoCycle(!autoCycle)}
                      title={autoCycle ? 'Pause auto-cycle' : 'Start auto-cycle'}
                      className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/50 border border-white/10 text-[9px] font-mono text-[#A3A3AE] hover:text-white hover:border-[#A78BFA]/40 transition-colors"
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${autoCycle ? 'bg-emerald-400 animate-pulse' : 'bg-white/30'}`} />
                      <span>{autoCycle ? 'CYCLE: ON' : 'PAUSED'}</span>
                    </button>
                    <span className="text-[10px] font-mono text-[#A78BFA] flex items-center gap-1 bg-[#A78BFA]/10 px-2 py-0.5 rounded-full border border-[#A78BFA]/20">
                      <ShieldCheck className="w-3 h-3 text-[#A78BFA]" /> AES-256
                    </span>
                  </div>
                </div>

                {/* 2. Unified Master Mode Switcher Bar */}
                <div className="grid grid-cols-3 gap-1 p-1.5 bg-[#0B0B0E] border-b border-white/10">
                  {[
                    { id: 'telemetry' as const, label: '01 · TELEMETRY', icon: Globe },
                    { id: 'orbit' as const, label: '02 · 3D ORBIT', icon: Compass },
                    { id: 'ssa' as const, label: '03 · SSA RADAR', icon: Radio },
                  ].map((item) => {
                    const isActive = activeMode === item.id;
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => handleModeSelect(item.id)}
                        className={`relative py-2 px-1 text-center rounded-[8px] text-[10px] sm:text-[11px] font-mono font-medium tracking-wider uppercase transition-all flex items-center justify-center gap-1.5 ${
                          isActive ? 'text-white' : 'text-[#A3A3AE] hover:text-white'
                        }`}
                      >
                        {isActive && (
                          <motion.div
                            layoutId="activeHeroModeSegment"
                            className="absolute inset-0 bg-[#7C3AED] rounded-[8px] -z-10 shadow-[0_0_15px_rgba(124,58,237,0.45)]"
                            transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                          />
                        )}
                        <Icon className="w-3 h-3 flex-shrink-0" />
                        <span className="truncate">{item.label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* 3. Active Mode Screen Component Display */}
                <AnimatePresence mode="wait">
                  {activeMode === 'telemetry' && (
                    <motion.div
                      key="telemetry"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.22 }}
                    >
                      <TacticalHudCard pulse={pulse} />
                    </motion.div>
                  )}

                  {activeMode === 'orbit' && (
                    <motion.div
                      key="orbit"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.22 }}
                    >
                      <OrbitSimCard />
                    </motion.div>
                  )}

                  {activeMode === 'ssa' && (
                    <motion.div
                      key="ssa"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.22 }}
                    >
                      <ChakraSsaCard />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* ── Redesigned Bottom Feature Strip ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-14 lg:pb-16 pt-10 sm:pt-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {[
            {
              icon: Layers,
              tag: 'UNIFIED ARCHITECTURE',
              badge: '99.99% SLA',
              title: 'Cloud Mission Control',
              desc: 'Built for single satellites and scaling constellations with multi-region high availability.',
              scroll: 'about',
            },
            {
              icon: Zap,
              tag: 'AUTONOMOUS OPERATIONS',
              badge: 'ZERO LATENCY',
              title: 'Self-Executing Passes',
              desc: 'Automate pass planning, telemetry decoding, and payload commanding with zero manual delay.',
              scroll: 'platform',
            },
            {
              icon: Activity,
              tag: 'TELEMETRY INTELLIGENCE',
              badge: '<10MS DETECTION',
              title: 'Real-Time Anomaly AI',
              desc: 'Detect subtle thermal, power, and thruster deviations before hardware degradation occurs.',
              scroll: 'platform',
            },
          ].map(({ icon: Icon, tag, badge, title, desc, scroll }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              onClick={() => document.getElementById(scroll)?.scrollIntoView({ behavior: 'smooth' })}
              className="group cursor-pointer p-5 sm:p-6 rounded-[10px] bg-[#08080A] border border-white/10 hover:border-[#A78BFA]/40 shadow-sm transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Card Top Row: Tag + Badge */}
                <div className="flex items-center justify-between gap-2 mb-3.5">
                  <div className="text-[10px] text-[#A78BFA] font-mono font-medium uppercase tracking-[0.14em] flex items-center gap-2">
                    <span className="diamond-tick" />
                    {tag}
                  </div>
                  <span className="text-[9px] font-mono font-medium px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/10 text-[#A3A3AE] group-hover:border-[#A78BFA]/30 group-hover:text-[#C4B5FD] transition-colors">
                    {badge}
                  </span>
                </div>

                {/* Card Title & Icon */}
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="w-8 h-8 rounded-[6px] bg-white/[0.04] border border-white/10 flex items-center justify-center flex-shrink-0 text-[#A78BFA] group-hover:border-[#A78BFA]/40 transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h2 className="text-base font-medium text-white group-hover:text-[#A78BFA] transition-colors">
                    {title}
                  </h2>
                </div>

                {/* Card Description */}
                <p className="text-xs sm:text-[13px] text-[#A3A3AE] font-light leading-relaxed">
                  {desc}
                </p>
              </div>

              {/* Card Footer Link */}
              <div className="pt-3.5 mt-3.5 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#A3A3AE] group-hover:text-[#A78BFA] transition-colors">
                <span>View Architecture</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}