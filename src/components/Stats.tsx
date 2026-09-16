import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Radio,
  Activity,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Zap,
} from 'lucide-react';
import { MotionCounter } from './MotionPrimitives';
import { fadeUp, staggerContainer, staggerItem, viewport } from '../lib/motion';
import Card3D from './Card3D';

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isDeckHovered, setIsDeckHovered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const bgGlowY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  const stats = [
    { value: 10, prefix: '', suffix: 'x', decimals: 0, label: 'Constellation Scale' },
    { value: 10, prefix: '<', suffix: 'ms', decimals: 0, label: 'Telemetry Latency' },
    { value: 24, prefix: '', suffix: '/7', decimals: 0, label: 'Pass Execution' },
    { value: 99.99, prefix: '', suffix: '%', decimals: 2, label: 'Mission Uptime' },
  ];

  const pillars = [
    {
      icon: Radio,
      tag: 'PASS ORCHESTRATION',
      title: 'Autonomous Scheduling',
      description:
        'Resolves antenna pointing angles, pass contention, and downlinking queues autonomously across commercial and private ground stations.',
      badge: 'ZERO LAG',
      tech: 'AWS GS · KSAT · Leaf Space',
    },
    {
      icon: Activity,
      tag: 'STREAMING TELEMETRY',
      title: 'Anomaly Detection',
      description:
        'High-throughput time-series regression analyzes telemetry in sub-10ms, flagging power, thermal, and propulsion drift instantly.',
      badge: 'SUB-10MS INGEST',
      tech: '50k pkts/s · XTCE 1.2 · SEDS',
    },
    {
      icon: ShieldCheck,
      tag: 'ORBITAL DEFENSE',
      title: 'Collision Shield',
      description:
        'Automated CDM screening calculates Foster-1992 collision probabilities and synthesizes fuel-optimal avoidance trajectories.',
      badge: 'AUTO CAM SYNTHESIS',
      tech: 'Cowell J2-J4 · SGP4 / HPOP',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      aria-labelledby="about-heading"
      className="relative py-24 sm:py-32 bg-[#020408] border-t border-white/5 overflow-hidden scroll-mt-24 sm:scroll-mt-28 text-white"
    >
      {/* ── Deep Volumetric Background Ambience ── */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <motion.div style={{ y: bgGlowY }} className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-4/5 h-2/3 bg-[#47B2E4]/5 rounded-full blur-[140px]" />
          <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-[#7CCCED]/5 rounded-full blur-[100px]" />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
          className="mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-[#47B2E4] mb-8 shadow-inner backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#47B2E4] animate-pulse shadow-[0_0_8px_#47B2E4]" />
            CONSTELLATION AUTONOMY
          </div>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <h2
                id="about-heading"
                className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.1] font-display"
              >
                Modernizing Mission{' '}
                <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-[#47B2E4] via-[#7CCCED] to-white drop-shadow-sm">
                  Control for the Constellation Era.
                </span>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-[#94A3B8] text-base sm:text-lg font-light leading-relaxed">
                As satellite fleets scale, manual operations collapse into a bottleneck. Akashaveda builds cloud-native flight autonomy—orchestrating passes, decoding live telemetry, and shielding constellations with zero operator fatigue.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ── Heroic Centerpiece: Photorealistic Satellite Showcase ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
          className="mb-16 sm:mb-20"
        >
          <Card3D
            maxTilt={4}
            glareColor="rgba(71, 178, 228, 0.2)"
            className="rounded-[2rem] bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] group relative"
          >
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent z-20" />

            <div className="relative">
              <img
                src="/images/satellite_in_orbit_clean.jpg"
                alt="Modern Aerospace Satellite Orbiting Earth"
                className="w-full h-80 sm:h-[500px] object-cover object-center group-hover:scale-[1.03] transition-transform duration-1000 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020408] via-[#020408]/40 to-transparent pointer-events-none" />

              <div className="absolute top-6 left-6 pointer-events-none z-10">
                <span className="px-4 py-2 rounded-xl bg-black/50 backdrop-blur-xl border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] text-[10px] font-mono text-[#7CCCED] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#47B2E4] animate-pulse" />
                  AURORA-7 // 540 KM LEO
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 z-10">
                <div className="p-6 sm:p-8 rounded-2xl bg-black/40 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.05)] flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                  <div className="max-w-xl">
                    <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#47B2E4] mb-3 font-semibold drop-shadow-[0_0_8px_rgba(71,178,228,0.5)]">
                      AUTONOMOUS MISSION CONTROL CORE
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-medium text-white tracking-tight font-display mb-3">
                      Single-Console Autonomy. <br className="hidden sm:block" />
                      Unlimited Spacecraft Scalability.
                    </h3>
                    <p className="text-sm text-[#A3A3AE] font-light leading-relaxed">
                      Replace fragmented legacy terminals with deterministic orchestration built for modern hardware.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-x-10 gap-y-5 text-[11px] font-mono">
                    <div className="flex flex-col gap-1">
                      <span className="text-[#6B7785] tracking-wider">ORBITAL SPEED</span>
                      <span className="text-white font-medium text-sm">7.66 km/s</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-[#6B7785] tracking-wider">ARRAY GEN</span>
                      <span className="text-emerald-400 font-medium text-sm">384.2 Watts</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-[#6B7785] tracking-wider">GROUND ANTENNA</span>
                      <span className="text-[#47B2E4] font-medium text-sm">GS-BLR Elev 78.4°</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-[#6B7785] tracking-wider">LINK MARGIN</span>
                      <span className="text-white font-medium text-sm">+8.2 dB (X-Band)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card3D>
        </motion.div>

        {/* ── High-Impact Metric Strip ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer(0.08)}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-24"
        >
          {stats.map((st, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="flex flex-col items-center justify-center p-8 rounded-3xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_8px_24px_rgba(0,0,0,0.4)] backdrop-blur-sm"
            >
              <MotionCounter
                value={st.value}
                prefix={st.prefix}
                suffix={st.suffix}
                decimals={st.decimals}
                className="text-5xl sm:text-6xl font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 mb-3 font-display"
              />
              <div className="text-[11px] text-[#6B7785] uppercase tracking-widest font-mono text-center">
                {st.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── INTERACTIVE 3D DECK SPILL (Desktop Only) ── */}
        <div 
          className="hidden lg:flex relative w-full h-[520px] items-center justify-center mb-24 cursor-crosshair group perspective-1000"
          onMouseEnter={() => setIsDeckHovered(true)}
          onMouseLeave={() => setIsDeckHovered(false)}
        >
          {/* Central Hover Indicator */}
          <motion.div 
            animate={{ opacity: isDeckHovered ? 0 : 1 }}
            className="absolute -top-4 text-[10px] font-mono tracking-[0.2em] text-[#47B2E4] font-semibold bg-[#47B2E4]/10 border border-[#47B2E4]/20 px-3 py-1 rounded-full z-40 shadow-[0_0_10px_rgba(71,178,228,0.2)]"
          >
            HOVER TO DEPLOY PROTOCOLS
          </motion.div>
          
          {/* Dynamic Background Flare that expands on hover */}
          <motion.div 
            animate={{ 
              scale: isDeckHovered ? 1.5 : 0.8,
              opacity: isDeckHovered ? 0.4 : 0.1
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#47B2E4]/20 rounded-full blur-[100px] pointer-events-none z-0" 
          />

          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            
            // Logic to put the middle card on top of the stack, left on bottom, right in middle
            const zIndexStacked = i === 1 ? 30 : i === 0 ? 10 : 20;
            const zIndexSpread = 20;

            return (
              <motion.div
                key={i}
                custom={i}
                initial="stacked"
                animate={isDeckHovered ? "spread" : "stacked"}
                variants={{
                  stacked: (idx) => ({
                    x: idx === 0 ? -25 : idx === 2 ? 25 : 0,
                    y: idx === 0 ? 10 : idx === 2 ? 20 : 0,
                    rotate: idx === 0 ? -6 : idx === 2 ? 6 : 0,
                    zIndex: zIndexStacked,
                    scale: 0.95,
                  }),
                  spread: (idx) => ({
                    x: idx === 0 ? '-105%' : idx === 2 ? '105%' : '0%',
                    y: 0,
                    rotate: 0,
                    zIndex: zIndexSpread,
                    scale: 1,
                  })
                }}
                transition={{ type: "spring", stiffness: 220, damping: 22, mass: 0.8 }}
                className="absolute w-full max-w-[340px] h-[420px]"
              >
                <Card3D
                  maxTilt={12} 
                  glareColor="rgba(71, 178, 228, 0.2)"
                  className="h-full rounded-[2rem] bg-gradient-to-b from-[#0A0D14] to-black/80 border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_25px_50px_rgba(0,0,0,0.8)] overflow-hidden group/card relative flex flex-col"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#47B2E4]/0 via-transparent to-[#47B2E4]/0 group-hover/card:from-[#47B2E4]/10 transition-colors duration-500 pointer-events-none" />

                  <div className="p-8 sm:p-10 flex-grow relative z-10 flex flex-col">
                    <div className="flex items-start justify-between mb-8">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white/10 to-transparent p-[1px] shadow-lg group-hover/card:shadow-[#47B2E4]/20 transition-shadow duration-500">
                        <div className="w-full h-full rounded-[15px] bg-[#05080E] flex items-center justify-center">
                          <Icon className="w-6 h-6 text-[#47B2E4] group-hover/card:scale-110 transition-transform duration-500 ease-out" />
                        </div>
                      </div>
                      <span className="text-[9px] font-mono font-bold px-3 py-1.5 rounded-full bg-[#47B2E4]/10 border border-[#47B2E4]/20 text-[#47B2E4] shadow-inner tracking-widest uppercase">
                        {pillar.badge}
                      </span>
                    </div>

                    <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#6B7785] mb-3 font-semibold group-hover/card:text-[#7CCCED] transition-colors duration-300">
                      {pillar.tag}
                    </div>

                    <h3 className="text-2xl font-medium text-white mb-4 tracking-tight font-display drop-shadow-sm">
                      {pillar.title}
                    </h3>

                    <p className="text-sm text-[#94A3B8] font-light leading-[1.8] flex-grow">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="relative z-10 px-8 py-5 bg-black/60 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#6B7785] group-hover/card:bg-[#47B2E4]/[0.03] transition-colors duration-500">
                    <span className="truncate tracking-wide">{pillar.tech}</span>
                    <Zap className="w-4 h-4 text-[#47B2E4] flex-shrink-0 opacity-40 group-hover/card:opacity-100 group-hover/card:animate-pulse transition-all duration-300" />
                  </div>
                </Card3D>
              </motion.div>
            );
          })}
        </div>

        {/* ── MOBILE FALLBACK GRID (Hidden on Desktop) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-6 mb-20">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div key={i} variants={staggerItem} className="h-full">
                <Card3D
                  maxTilt={6} 
                  glareColor="rgba(71, 178, 228, 0.15)"
                  className="h-full rounded-3xl bg-[#0A0D14] border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_15px_30px_rgba(0,0,0,0.5)] overflow-hidden group relative flex flex-col"
                >
                  <div className="p-8 flex-grow relative z-10 flex flex-col">
                    <div className="flex items-start justify-between mb-8">
                      <div className="w-12 h-12 rounded-xl bg-white/[0.05] flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[#47B2E4]" />
                      </div>
                      <span className="text-[9px] font-mono font-bold px-3 py-1.5 rounded-full bg-[#47B2E4]/10 border border-[#47B2E4]/20 text-[#47B2E4] uppercase">
                        {pillar.badge}
                      </span>
                    </div>

                    <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#6B7785] mb-2 font-semibold">
                      {pillar.tag}
                    </div>

                    <h3 className="text-xl font-medium text-white mb-3 tracking-tight font-display">
                      {pillar.title}
                    </h3>

                    <p className="text-sm text-[#94A3B8] font-light leading-relaxed flex-grow">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="px-8 py-5 bg-black/40 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#6B7785]">
                    <span className="truncate">{pillar.tech}</span>
                    <Zap className="w-3.5 h-3.5 text-[#47B2E4] opacity-50" />
                  </div>
                </Card3D>
              </motion.div>
            );
          })}
        </div>

        {/* ── Modern Aerospace Vision Quote (Premium Glass Banner) ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
        >
          <div className="rounded-[2.5rem] bg-gradient-to-r from-[#080D1A] via-[#0B1221] to-[#080D1A] p-10 sm:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 border border-[#47B2E4]/20 shadow-[0_0_60px_rgba(71,178,228,0.08),inset_0_1px_1px_rgba(255,255,255,0.05)] relative overflow-hidden">
            
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#47B2E4]/15 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#7CCCED]/10 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="relative z-10 flex flex-col sm:flex-row items-start gap-6 lg:max-w-4xl">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-b from-[#47B2E4]/20 to-transparent border border-[#47B2E4]/30 flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(71,178,228,0.2)]">
                <Sparkles className="w-6 h-6 text-[#47B2E4]" />
              </div>
              <div className="pt-1">
                <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#47B2E4] font-bold mb-3 drop-shadow-[0_0_8px_rgba(71,178,228,0.5)]">
                  THE AKASHAVEDA VISION
                </div>
                <p className="text-white text-lg sm:text-xl font-light leading-[1.8] tracking-tight">
                  Pioneering autonomous mission software to ensure every satellite constellation operates with deterministic precision, zero latency, and absolute orbital safety.
                </p>
              </div>
            </div>

            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="relative z-10 px-8 py-4 rounded-2xl bg-white text-black hover:bg-[#47B2E4] hover:text-white transition-all duration-300 text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-3 flex-shrink-0 lg:self-center shadow-[0_10px_30px_rgba(255,255,255,0.1)] hover:shadow-[0_10px_40px_rgba(71,178,228,0.4)]"
            >
              CONNECT WITH US
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}