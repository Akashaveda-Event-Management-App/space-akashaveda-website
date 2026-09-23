import { ArrowRight, Radio, Shield, Activity, ChevronRight, Wifi } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import HeroSpaceEffects from './HeroSpaceEffects';

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Akashaveda Ground Segment Infrastructure"
      className="relative min-h-[92vh] sm:min-h-screen w-full overflow-hidden bg-[#030712] text-white flex items-center pt-24 pb-16 sm:pt-28 sm:pb-20"
    >
      {/* ── Background Video & Subtle Geometry ── */}
      <HeroSpaceEffects />

      {/* ── Precision Vector Grid Overlay ── */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* ── Hero Content Container ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* ── Left Column: Mission Statement & Dual CTAs ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left z-20"
          >
            {/* Mission Operational Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-[6px] border border-[#47B2E4]/30 bg-[#0E1626]/90 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(71,178,228,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#47B2E4] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#47B2E4]"></span>
              </span>
              <span className="text-[11px] font-mono text-[#7CCCED] tracking-[0.14em] uppercase font-semibold">
                INTEGRATED GROUND SEGMENT INFRASTRUCTURE
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-semibold leading-[1.08] tracking-tight text-white font-sans mb-6">
              Ground Communications,
              <span className="block text-white">Mission Operations,</span>
              <span className="block bg-gradient-to-r from-[#47B2E4] via-[#7CCCED] to-white bg-clip-text text-transparent">
                &amp; Space Situational Awareness.
              </span>
            </h1>

            {/* Direct Content Requirement */}
            <p className="text-[16px] sm:text-[18px] text-[#94A3B8] font-normal leading-relaxed max-w-xl mb-8">
              Akashaveda delivers integrated ground segment infrastructure for satellite operators, combining ground communications, mission operations, and space situational awareness into a unified system.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-10">
              <Link
                to="/contact?type=demo"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[8px] bg-white text-black text-[14px] font-semibold hover:bg-[#F1F5F9] active:scale-[0.98] transition-all shadow-[0_0_24px_rgba(71,178,228,0.3)] group"
              >
                <span>Schedule a demonstration</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/ground-operations"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[8px] bg-[#0E1626]/90 text-white border border-white/15 text-[14px] font-medium hover:bg-white/10 hover:border-white/30 active:scale-[0.98] transition-all"
              >
                <span>Explore ground station network access</span>
              </Link>
            </div>

            {/* Architecture Highlights Strip */}
            <div className="pt-6 border-t border-white/10 w-full max-w-xl grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              <Link to="/chakravyuh" className="group flex flex-col hover:opacity-90 transition-opacity">
                <span className="text-[10px] font-mono uppercase text-[#64748B] tracking-wider">PLATFORM</span>
                <span className="text-[13px] font-medium text-white flex items-center gap-1.5 mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#47B2E4]" /> Chakravyuh
                </span>
              </Link>
              <Link to="/chakra" className="group flex flex-col hover:opacity-90 transition-opacity">
                <span className="text-[10px] font-mono uppercase text-[#64748B] tracking-wider">AWARENESS</span>
                <span className="text-[13px] font-medium text-white flex items-center gap-1.5 mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7CCCED]" /> Chakra (SSA)
                </span>
              </Link>
              <Link to="/vyuh" className="group flex flex-col hover:opacity-90 transition-opacity">
                <span className="text-[10px] font-mono uppercase text-[#64748B] tracking-wider">MISSION CONTROL</span>
                <span className="text-[13px] font-medium text-white flex items-center gap-1.5 mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Vyuh (MCS)
                </span>
              </Link>
            </div>
          </motion.div>

          {/* ── Right Column: Aerospace Tactical Mission Operations HUD ── */}
          {/* Floats seamlessly over the glowing Earth video without any heavy card borders */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col items-center lg:items-end w-full space-y-3.5"
          >
            {/* Orbital Pass Reticle Header Badge */}
            <div className="w-full max-w-md flex items-center justify-between px-3.5 py-2 rounded-[6px] bg-[#080C16]/85 border border-white/15 backdrop-blur-md shadow-2xl">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] font-mono font-semibold text-white tracking-wide">
                  ACTIVE FLIGHT SEGMENT // LEO PASS
                </span>
              </div>
              <div className="flex items-center gap-1 text-[10px] font-mono text-[#47B2E4]">
                <Wifi className="w-3 h-3 text-[#47B2E4] animate-pulse" />
                <span>LINK LOCKED</span>
              </div>
            </div>

            {/* Interactive Ground Station Network Access Card */}
            <div className="w-full max-w-md p-4 rounded-[10px] bg-[#080C16]/90 border border-white/15 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.8)] relative overflow-hidden group">
              {/* Subtle top cyan glow accent */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#47B2E4]/80 to-transparent" />

              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-[6px] bg-[#47B2E4]/10 border border-[#47B2E4]/30 flex items-center justify-center">
                    <Radio className="w-3.5 h-3.5 text-[#47B2E4]" />
                  </div>
                  <div>
                    <div className="text-[12px] font-semibold text-white tracking-wide">
                      Ground Station Uplink
                    </div>
                    <div className="text-[9px] font-mono text-[#64748B]">
                      PRIMARY TELEPORT · X/S-BAND
                    </div>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-[4px] bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono font-semibold">
                  +12.8 dB SNR
                </span>
              </div>

              {/* Dynamic Telemetry Matrix */}
              <div className="grid grid-cols-3 gap-2 py-2.5 px-3 rounded-[6px] bg-white/[0.03] border border-white/10 text-[10px] font-mono mb-3">
                <div>
                  <span className="text-[#64748B] block text-[8px] uppercase">ELEVATION</span>
                  <span className="text-white font-medium">68.4° AOS</span>
                </div>
                <div>
                  <span className="text-[#64748B] block text-[8px] uppercase">AZIMUTH</span>
                  <span className="text-white font-medium">142.1° TRK</span>
                </div>
                <div>
                  <span className="text-[#64748B] block text-[8px] uppercase">POLARIZATION</span>
                  <span className="text-[#7CCCED] font-medium">RHCP/LHCP</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono text-[#94A3B8]">
                <span>Station: BLR-GS-01</span>
                <Link
                  to="/ground-operations"
                  className="text-[#47B2E4] hover:text-white inline-flex items-center gap-1 transition-colors"
                >
                  <span>Network Map</span>
                  <ChevronRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Chakra Space Situational Awareness HUD Pill */}
            <div className="w-full max-w-md p-3 rounded-[8px] bg-[#080C16]/80 border border-white/15 backdrop-blur-md shadow-xl flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-[4px] bg-[#7CCCED]/10 border border-[#7CCCED]/30 flex items-center justify-center">
                  <Shield className="w-3.5 h-3.5 text-[#7CCCED]" />
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-white">
                    Chakra SSA Conjunction Safety
                  </div>
                  <div className="text-[9px] font-mono text-[#94A3B8]">
                    Miss Distance: &gt; 24.8 km · Radial Risk Nominal
                  </div>
                </div>
              </div>
              <Link
                to="/chakra"
                className="text-[#7CCCED] hover:text-white text-[10px] font-mono inline-flex items-center gap-0.5"
              >
                <span>SSA</span>
                <ChevronRight className="w-3 h-3" />
              </Link>
            </div>

            {/* Vyuh Mission Operations Telecommand Indicator */}
            <div className="w-full max-w-md p-3 rounded-[8px] bg-[#080C16]/80 border border-white/15 backdrop-blur-md shadow-xl flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-[4px] bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                  <Activity className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-white">
                    Vyuh Mission Operations
                  </div>
                  <div className="text-[9px] font-mono text-[#94A3B8]">
                    Telecommand Execution Queue: 12 Active · 0 Faults
                  </div>
                </div>
              </div>
              <Link
                to="/vyuh"
                className="text-emerald-400 hover:text-white text-[10px] font-mono inline-flex items-center gap-0.5"
              >
                <span>MCS</span>
                <ChevronRight className="w-3 h-3" />
              </Link>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}