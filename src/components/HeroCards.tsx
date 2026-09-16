import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Globe,
  Zap,
  Clock,
  ChevronDown,
  ShieldCheck,
  Radio,
  Video,
  Compass,
  Cpu,
  Activity,
  Crosshair
} from 'lucide-react';
import { EarthOrbitCanvas } from './EarthOrbitCanvas';

export interface HeroCardProps {
  pulse?: number;
}

/* ══════════════════════════════════════════════════════════════════
   CONCISE HERO MISSION CARD (High-End Aerospace Widget)
   Features live satellite video stream, 3D orbit toggle,
   clean telemetry metrics, and smooth hover subsystem disclosure.
   ══════════════════════════════════════════════════════════════════ */
export function HeroConciseCard({ pulse = 99.8 }: HeroCardProps) {
  const [countdown, setCountdown] = useState(258);
  const [isHovered, setIsHovered] = useState(false);
  const [viewMode, setViewMode] = useState<'video' | 'orbit'>('video');

  // Simulated Pass Countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((c) => (c > 0 ? c - 1 : 360));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatCountdown = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `T-${String(m).padStart(2, '0')}M ${String(s).padStart(2, '0')}S`;
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="p-5 sm:p-6 flex flex-col gap-5 group cursor-default"
    >
      {/* ── 1. Header Bar: Identity & Sleek Mode Toggle ── */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400 shadow-[0_0_8px_#34D399]" />
          </span>
          <div>
            <div className="text-white font-bold tracking-wider text-xs uppercase font-display">
              VYUH C2 CORE
            </div>
            <div className="text-[9px] font-mono text-[#47B2E4] uppercase tracking-widest">
              540 KM LEO
            </div>
          </div>
        </div>

        {/* Glassmorphism Segmented Toggle */}
        <div className="flex items-center p-1 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md shadow-inner">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setViewMode('video');
            }}
            className={`px-3 py-1.5 rounded-full text-[10px] font-mono transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
              viewMode === 'video'
                ? 'bg-gradient-to-r from-[#2381AE] to-[#47B2E4] text-white font-semibold shadow-[0_0_12px_rgba(71,178,228,0.5)]'
                : 'text-[#6B7785] hover:text-white'
            }`}
          >
            <Video className="w-3 h-3" />
            <span className="hidden xs:inline">OPTICAL</span>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setViewMode('orbit');
            }}
            className={`px-3 py-1.5 rounded-full text-[10px] font-mono transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
              viewMode === 'orbit'
                ? 'bg-gradient-to-r from-[#2381AE] to-[#47B2E4] text-white font-semibold shadow-[0_0_12px_rgba(71,178,228,0.5)]'
                : 'text-[#6B7785] hover:text-white'
            }`}
          >
            <Compass className="w-3 h-3" />
            <span className="hidden xs:inline">ORBIT 3D</span>
          </button>
        </div>
      </div>

      {/* ── 2. Visual Centerpiece: Optical Feed or 3D Orbit ── */}
      <div className="relative h-40 sm:h-48 w-full bg-[#030508] border border-white/10 rounded-xl overflow-hidden shadow-[0_0_30px_rgba(71,178,228,0.05)] group/screen">
        {viewMode === 'video' ? (
          <>
            {/* Live Satellite Video */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover scale-105 group-hover/screen:scale-110 transition-transform duration-1000 ease-out opacity-90"
              src="/bg3.mp4"
            />
            {/* Cinematic Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 pointer-events-none" />
            
            {/* Tactical HUD Corner Markers */}
            <Crosshair className="absolute top-2 left-2 w-3 h-3 text-[#47B2E4]/70 pointer-events-none" />
            <Crosshair className="absolute top-2 right-2 w-3 h-3 text-[#47B2E4]/70 pointer-events-none" />
            
            {/* Top HUD Stats */}
            <div className="absolute top-3 left-7 pointer-events-none flex flex-col gap-0.5">
              <div className="text-[9px] font-mono uppercase text-[#47B2E4] font-semibold tracking-widest">
                OPTICAL TRACKING
              </div>
              <div className="text-[10px] font-mono text-white/90">AURORA-7</div>
            </div>

            <div className="absolute top-3 right-7 pointer-events-none text-right flex flex-col gap-0.5">
              <div className="text-[9px] font-mono uppercase text-[#6B7785] tracking-widest">
                NEXT PASS
              </div>
              <div className="text-[10px] font-mono font-bold text-[#7CCCED] flex items-center justify-end gap-1">
                <Clock className="w-3 h-3 text-[#47B2E4]" />
                {formatCountdown(countdown)}
              </div>
            </div>
          </>
        ) : (
          <>
            {/* 3D Earth Orbit Canvas */}
            <div className="absolute inset-0 flex items-center justify-center opacity-90">
              <EarthOrbitCanvas height="100%" />
            </div>
            
            <div className="absolute top-3 left-4 pointer-events-none">
              <div className="text-[9px] font-mono uppercase text-[#6B7785] tracking-widest">INCLINATION</div>
              <div className="text-xs font-mono font-bold text-white">51.64° LEO</div>
            </div>
          </>
        )}

        {/* Universal Bottom Lock Bar */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[9px] font-mono text-[#94A3B8] bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
          <span className="flex items-center gap-1.5">
            <Radio className="w-3 h-3 text-[#47B2E4]" />
            GS-BLR · 82° EL
          </span>
          <span className="text-emerald-400 font-semibold flex items-center gap-1.5 tracking-widest">
            <ShieldCheck className="w-3 h-3" />
            AOS LOCKED
          </span>
        </div>
      </div>

      {/* ── 3. Clean, Borderless Metrics Row ── */}
      <div className="grid grid-cols-3 gap-2">
        <div className="flex flex-col items-center justify-center border-r border-white/10">
          <span className="text-[9px] font-mono text-[#6B7785] uppercase tracking-widest mb-1">Orbital Vel</span>
          <span className="text-sm sm:text-base font-bold font-mono text-white flex items-center gap-1">
            <Globe className="w-3.5 h-3.5 text-[#47B2E4]" />
            7.66<span className="text-[10px] text-[#47B2E4] font-normal">km/s</span>
          </span>
        </div>

        <div className="flex flex-col items-center justify-center border-r border-white/10">
          <span className="text-[9px] font-mono text-[#6B7785] uppercase tracking-widest mb-1">Telemetry</span>
          <span className="text-sm sm:text-base font-bold font-mono text-white flex items-center gap-1">
            <Zap className="w-3.5 h-3.5 text-emerald-400" />
            &lt;10<span className="text-[10px] text-emerald-400 font-normal">ms</span>
          </span>
        </div>

        <div className="flex flex-col items-center justify-center">
          <span className="text-[9px] font-mono text-[#6B7785] uppercase tracking-widest mb-1">Health Idx</span>
          <span className="text-sm sm:text-base font-bold font-mono text-white flex items-center gap-1">
            <Activity className="w-3.5 h-3.5 text-[#7CCCED]" />
            {pulse}<span className="text-[10px] text-[#7CCCED] font-normal">%</span>
          </span>
        </div>
      </div>

      {/* ── 4. Glowing Pass Autonomy Strip ── */}
      <div className="space-y-2 pt-2">
        <div className="flex items-center justify-between text-[9px] font-mono uppercase tracking-widest">
          <span className="text-[#94A3B8]">Pass Autonomy Status</span>
          <span className="text-emerald-400 font-semibold">100% Nominal</span>
        </div>
        <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden relative">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#2381AE] via-[#47B2E4] to-emerald-400 w-full"
            initial={{ scaleX: 0.8, transformOrigin: 'left' }}
            animate={{ scaleX: [0.8, 1, 0.8] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </div>

      {/* ── 5. Seamless Hover-Revealed Drawer ── */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <div className="pt-5 mt-2 border-t border-white/10">
              <div className="flex items-center justify-between mb-3 text-[9px] font-mono uppercase tracking-widest">
                <span className="text-[#7CCCED] font-semibold flex items-center gap-1.5">
                  <Cpu className="w-3 h-3 text-[#47B2E4]" />
                  Subsystem Bus Telemetry
                </span>
                <span className="text-[#6B7785]">XTCE Verified</span>
              </div>
              
              <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-[10px] font-mono">
                <div className="flex justify-between items-center bg-white/[0.02] p-2 rounded">
                  <span className="text-[#94A3B8]">EPS Bus</span>
                  <span className="text-white font-semibold">28.4 V</span>
                </div>
                <div className="flex justify-between items-center bg-white/[0.02] p-2 rounded">
                  <span className="text-[#94A3B8]">Batt Temp</span>
                  <span className="text-emerald-400 font-semibold">+18.2°C</span>
                </div>
                <div className="flex justify-between items-center bg-white/[0.02] p-2 rounded">
                  <span className="text-[#94A3B8]">RW Speed</span>
                  <span className="text-white font-semibold">4,120 RPM</span>
                </div>
                <div className="flex justify-between items-center bg-white/[0.02] p-2 rounded">
                  <span className="text-[#94A3B8]">ADCS Drift</span>
                  <span className="text-emerald-400 font-semibold">&lt;0.002°</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hover Hint */}
      {!isHovered && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-[9px] font-mono text-[#64748B] pt-2 flex items-center justify-center gap-1.5"
        >
          <span>Hover for subsystem diagnostics</span>
          <ChevronDown className="w-3 h-3 text-[#47B2E4] animate-bounce" />
        </motion.div>
      )}
    </div>
  );
}