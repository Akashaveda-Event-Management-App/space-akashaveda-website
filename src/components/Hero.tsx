import { useEffect, useState } from 'react';
import { ArrowRight, ArrowUpRight, ShieldCheck, Globe, Cpu, Zap, Satellite, Sparkles, ShieldAlert, Layers, Activity } from 'lucide-react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { MotionButton, MotionFloatingOrbs } from './MotionPrimitives';
import {
  TelemetryGauge,
  MotionTelemetryWaveform,
  AutonomyTimeline,
  AnalyticsGrid,
  MotionTrajectoryGraphic,
} from './HeroMotionGraphics';

export default function Hero() {
  const [activeTab, setActiveTab] = useState<'telemetry' | 'autonomy' | 'analytics'>('telemetry');
  const [pulse, setPulse] = useState(99.84);

  // Live signal pulse simulation
  useEffect(() => {
    const iv = setInterval(() => {
      setPulse((p) => +Math.min(100, Math.max(95, p + (Math.random() * 0.3 - 0.15))).toFixed(2));
    }, 2200);
    return () => clearInterval(iv);
  }, []);

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

  const tabBtn = (id: typeof activeTab, label: string) => {
    const isActive = activeTab === id;
    return (
      <button
        key={id}
        onClick={() => setActiveTab(id)}
        className={`relative z-10 flex-1 py-2 text-[11px] font-semibold uppercase tracking-widest rounded-lg transition-colors duration-200 ${
          isActive ? 'text-white' : 'text-[#8A95A3] hover:text-white'
        }`}
      >
        {isActive && (
          <motion.span
            layoutId="heroTabIndicator"
            className="absolute inset-0 bg-blue-600 rounded-lg -z-10 shadow-[0_0_15px_rgba(37,99,235,0.6)]"
            transition={{ type: 'spring', stiffness: 500, damping: 35 }}
          />
        )}
        {label}
      </button>
    );
  };

  return (
    <section
      id="hero"
      aria-label="Hero — AI-Powered Satellite Operations"
      className="relative min-h-screen w-full overflow-hidden bg-[#070C1A] text-white flex flex-col justify-between"
    >
      {/* ── Ambient Motion Graphics Background ── */}
      <MotionFloatingOrbs />
      <MotionTrajectoryGraphic />

      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        {/* Earth video background */}
        <div className="absolute inset-0 flex items-center justify-end overflow-hidden">
          <video
            src="/bg2.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="w-[320px] h-[320px] sm:w-[480px] sm:h-[480px] md:w-[620px] md:h-[620px] lg:w-[800px] lg:h-[800px] xl:w-[940px] xl:h-[940px] object-cover opacity-60 brightness-90 contrast-110 translate-x-[15%]"
          />
        </div>

        {/* Dynamic Twinkling Stars */}
        <div className="absolute inset-0 opacity-50">
          {Array.from({ length: 28 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white rounded-full"
              style={{
                width: `${(i % 3) * 0.8 + 1}px`,
                height: `${(i % 3) * 0.8 + 1}px`,
                top: `${(i * 13.7) % 100}%`,
                left: `${(i * 19.3) % 100}%`,
              }}
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{
                duration: 2 + (i % 3),
                repeat: Infinity,
                delay: i * 0.15,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>

        {/* Gradient masks */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070C1A] via-[#070C1A]/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070C1A] via-[#070C1A]/30 to-[#070C1A]/5" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070C1A] via-transparent to-transparent" />
      </div>

      {/* ── Main Hero Content ── */}
      <div className="relative z-10 flex-1 flex items-center pt-24 sm:pt-28 lg:pt-32">
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
                whileHover={{ scale: 1.03 }}
                className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-md mb-5 sm:mb-7 max-w-full"
              >
                <span className="relative flex h-2 w-2 flex-shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
                </span>
                <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.12em] sm:tracking-[0.18em] text-blue-300 truncate">
                  Cloud-Native Mission Control & Constellation Autonomy
                </span>
                <Sparkles className="w-3.5 h-3.5 text-cyan-400 ml-0.5 flex-shrink-0" />
              </motion.div>

              {/* Headline */}
              <h1 className="text-[2.2rem] xs:text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[4.2rem] font-extrabold leading-[1.08] sm:leading-[1.05] uppercase tracking-tight mb-5 sm:mb-6">
                Autonomous Mission<br />
                Control for{' '}
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                  Modern Constellations.
                </span>
              </h1>

              {/* Sub-copy */}
              <p className="text-[14px] sm:text-[15px] md:text-base text-[#C7CEDA] max-w-lg mb-9 sm:mb-12 leading-[1.75]">
                Replace fragmented legacy ground software with a unified, cloud-native platform. Automate pass scheduling, streamline contact orchestration, and predict subsystem telemetry anomalies in real time.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-auto mb-8 sm:mb-12">
                <MotionButton
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group flex items-center justify-center gap-2.5 px-6 py-3.5 bg-blue-500 hover:bg-blue-400 text-white text-sm font-semibold rounded-xl shadow-lg shadow-blue-500/25 w-full sm:w-auto"
                >
                  Schedule Demo
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </MotionButton>
                <MotionButton
                  onClick={() => document.getElementById('platform')?.scrollIntoView({ behavior: 'smooth' })}
                  className="flex items-center justify-center gap-2 px-6 py-3.5 bg-white/[0.05] hover:bg-white/10 border border-white/10 hover:border-white/20 text-white text-sm font-medium rounded-xl backdrop-blur-sm w-full sm:w-auto transition-colors"
                >
                  Explore Platform
                </MotionButton>
              </div>

            </motion.div>

            {/* ── Right Column: Upgraded HUD Terminal Card ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="w-full lg:col-span-6 order-1 lg:order-2 flex justify-center lg:justify-end relative"
              style={{ perspective: '1200px' }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {/* Main HUD Card with smooth spring tilt */}
              <motion.div
                style={{
                  rotateX,
                  rotateY,
                  transformStyle: 'preserve-3d',
                }}
                className="w-full max-w-[460px] bg-[#090d18]/95 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(56,130,246,0.18),0_4px_24px_rgba(0,0,0,0.6)]"
              >
                {/* 1. Terminal Header Bar */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-[#0E192C]">
                  <div className="flex items-center gap-2.5">
                    <div className="flex gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <div className="w-px h-4 bg-white/10" />
                    <div className="flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5 text-blue-400" />
                      <span className="text-[11px] font-mono text-[#C7CEDA]">Akashaveda HUD v2.4</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] font-mono text-emerald-400 font-semibold tracking-widest">LIVE STREAM</span>
                  </div>
                </div>

                {/* 2. Satellite Metadata & Encrypted Status Row */}
                <div className="px-4 py-2.5 border-b border-white/5 flex items-center justify-between bg-black/30">
                  <div className="flex items-center gap-2 text-[10px] font-mono text-[#C7CEDA] uppercase tracking-widest">
                    <Satellite className="w-3.5 h-3.5 text-blue-400" />
                    <span>LEO-SAT-A104</span>
                    <span className="text-[#8A95A3]">·</span>
                    <span className="text-cyan-400">ORBIT #4,821</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                    <ShieldCheck className="w-3 h-3 text-emerald-400" /> AES-256
                  </span>
                </div>

                {/* 3. Navigation Tab Bar */}
                <div className="flex items-center gap-1.5 p-2 bg-[#0A1324] border-b border-white/5">
                  {tabBtn('telemetry', 'Telemetry')}
                  {tabBtn('autonomy', 'Autonomy')}
                  {tabBtn('analytics', 'Analytics')}
                </div>

                {/* 4. Tab Content Area */}
                <div className="p-4 min-h-[260px]">
                  <AnimatePresence mode="wait">
                    {/* ── Telemetry Tab ── */}
                    {activeTab === 'telemetry' && (
                      <motion.div
                        key="telemetry"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.22 }}
                        className="space-y-3"
                      >
                        {/* Circular Telemetry Gauges */}
                        <div className="grid grid-cols-2 gap-2.5">
                          <TelemetryGauge value={pulse} label="Signal Strength" unit="%" />
                          <div className="bg-[#0d1527]/90 border border-white/10 rounded-xl p-3 backdrop-blur-md flex flex-col justify-center hover:border-blue-500/30 transition-colors">
                            <div className="text-[9px] font-mono text-gray-400 uppercase tracking-wider mb-1">Orbit Speed</div>
                            <div className="text-sm font-bold font-mono text-blue-400 flex items-center gap-1.5">
                              <Globe className="w-4 h-4 text-blue-500" />
                              7.66 km/s
                            </div>
                            <div className="text-[9px] font-mono text-[#8A95A3] mt-1">540 KM LEO Orbit</div>
                          </div>
                        </div>

                        {/* Real-time Spectrum Waveform */}
                        <MotionTelemetryWaveform />

                        {/* AI Risk Index Bar */}
                        <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#080e1c] border border-white/10 rounded-xl text-[11px] font-mono">
                          <span className="text-[#C7CEDA] flex items-center gap-1.5">
                            <ShieldAlert className="w-3.5 h-3.5 text-emerald-400" />
                            Subsystem Drift Status
                          </span>
                          <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            NOMINAL — ZERO ANOMALY
                          </span>
                        </div>
                      </motion.div>
                    )}

                    {/* ── Autonomy Tab ── */}
                    {activeTab === 'autonomy' && (
                      <motion.div
                        key="autonomy"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.22 }}
                        className="space-y-3"
                      >
                        <div className="bg-[#0d1527]/90 border border-white/10 rounded-xl p-3 space-y-2">
                          <div className="flex justify-between text-[10px] font-mono uppercase tracking-widest">
                            <span className="text-[#C7CEDA] flex items-center gap-1">
                              <Zap className="w-3 h-3 text-emerald-400" /> Pass Automation
                            </span>
                            <span className="text-emerald-400 font-bold">100% EXECUTED</span>
                          </div>
                          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: '0%' }}
                              animate={{ width: '100%' }}
                              transition={{ duration: 0.8, ease: 'easeOut' }}
                              className="h-full bg-gradient-to-r from-emerald-500 via-cyan-400 to-blue-500 rounded-full shadow-[0_0_10px_rgba(52,211,153,0.5)]"
                            />
                          </div>
                        </div>

                        {/* Timeline Stepper */}
                        <AutonomyTimeline />
                      </motion.div>
                    )}

                    {/* ── Analytics Tab ── */}
                    {activeTab === 'analytics' && (
                      <motion.div
                        key="analytics"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.22 }}
                      >
                        <AnalyticsGrid />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
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
              color: 'from-blue-500/20 to-cyan-500/20 text-blue-400',
            },
            {
              icon: Zap,
              tag: 'AUTONOMOUS OPERATIONS',
              badge: 'ZERO LATENCY',
              title: 'Self-Executing Passes',
              desc: 'Automate pass planning, telemetry decoding, and payload commanding with zero manual delay.',
              scroll: 'platform',
              color: 'from-cyan-500/20 to-emerald-500/20 text-cyan-400',
            },
            {
              icon: Activity,
              tag: 'TELEMETRY INTELLIGENCE',
              badge: '<10MS DETECTION',
              title: 'Real-Time Anomaly AI',
              desc: 'Detect subtle thermal, power, and thruster deviations before hardware degradation occurs.',
              scroll: 'platform',
              color: 'from-emerald-500/20 to-blue-500/20 text-emerald-400',
            },
          ].map(({ icon: Icon, tag, badge, title, desc, scroll, color }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              onClick={() => document.getElementById(scroll)?.scrollIntoView({ behavior: 'smooth' })}
              className="group cursor-pointer p-5 sm:p-6 rounded-2xl bg-gradient-to-b from-white/[0.06] via-[#090e1c]/80 to-[#060a14]/90 border border-white/10 hover:border-blue-500/40 backdrop-blur-xl shadow-lg hover:shadow-[0_8px_30px_rgba(59,130,246,0.15)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Card Top Row: Tag + Badge */}
                <div className="flex items-center justify-between gap-2 mb-3.5">
                  <div className="text-[10px] text-blue-300 font-mono font-semibold uppercase tracking-widest flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#22d3ee]" />
                    {tag}
                  </div>
                  <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded-full bg-white/[0.05] border border-white/10 text-gray-300 group-hover:border-blue-500/30 group-hover:text-cyan-300 transition-colors">
                    {badge}
                  </span>
                </div>

                {/* Card Title & Icon */}
                <div className="flex items-center gap-3 mb-2.5">
                  <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${color} border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <h2 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {title}
                  </h2>
                </div>

                {/* Card Description */}
                <p className="text-xs sm:text-[13px] text-[#C7CEDA] leading-relaxed">
                  {desc}
                </p>
              </div>

              {/* Card Footer Link */}
              <div className="pt-3.5 mt-3.5 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-gray-400 group-hover:text-blue-400 transition-colors">
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