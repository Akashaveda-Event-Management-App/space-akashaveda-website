import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Activity,
  Globe,
  ShieldAlert,
  Zap,
  Clock,
  Flame,
  CheckCircle2,
} from 'lucide-react';
import {
  TelemetryGauge,
  MotionTelemetryWaveform,
} from './HeroMotionGraphics';
import { EarthOrbitCanvas } from './EarthOrbitCanvas';

export type HeroCardType = 'telemetry' | 'orbit' | 'ssa';

interface HeroCardProps {
  pulse: number;
}

/* ══════════════════════════════════════════════════════════════════
   CARD 1: CONSTELLATION FLIGHT TELEMETRY (Clean, spacious, zero clutter)
   ══════════════════════════════════════════════════════════════════ */
export function TacticalHudCard({ pulse }: HeroCardProps) {
  return (
    <div className="p-4 sm:p-5 space-y-3.5">
      {/* 1. Primary Metrics Row */}
      <div className="grid grid-cols-2 gap-3">
        <TelemetryGauge value={pulse} label="Signal Strength" unit="%" />

        <div className="bg-[#121216] border border-white/10 rounded-[10px] p-3.5 backdrop-blur-md flex flex-col justify-center hover:border-[#A78BFA]/30 transition-colors">
          <div className="text-[9px] font-mono text-[#71717A] uppercase tracking-wider mb-1">
            Orbital Velocity
          </div>
          <div className="text-sm font-bold font-mono text-[#A78BFA] flex items-center gap-1.5">
            <Globe className="w-4 h-4 text-[#A78BFA]" />
            7.66 km/s
          </div>
          <div className="text-[10px] font-mono text-[#A3A3AE] mt-1 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            540 KM Circular LEO
          </div>
        </div>
      </div>

      {/* 2. Live Spectrum Demodulator Waveform */}
      <MotionTelemetryWaveform />

      {/* 3. Pass Autonomy Pipeline Progress Bar */}
      <div className="bg-[#121216] border border-white/10 rounded-[10px] p-3 space-y-2">
        <div className="flex items-center justify-between text-[10px] font-mono">
          <span className="text-[#A3A3AE] flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-[#A78BFA]" />
            Pass Autonomy: <strong className="text-white">AOS Sequence</strong>
          </span>
          <span className="text-emerald-400 font-bold flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" /> 100% EXECUTED
          </span>
        </div>
        <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="h-full bg-gradient-to-r from-[#7C3AED] via-[#A78BFA] to-emerald-400 rounded-full shadow-[0_0_10px_rgba(124,58,237,0.5)]"
          />
        </div>
      </div>

      {/* 4. AI Subsystem Risk Status */}
      <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#121216] border border-white/10 rounded-[10px] text-[11px] font-mono">
        <span className="text-[#A3A3AE] flex items-center gap-1.5">
          <ShieldAlert className="w-3.5 h-3.5 text-emerald-400" />
          AI Risk Index: <strong className="text-emerald-400">0.02% (Nominal)</strong>
        </span>
        <span className="text-[#C4B5FD] text-[10px] font-semibold">VYUH Core Active</span>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   CARD 2: 3D ORBITAL TRAJECTORY & GROUND PASS SIMULATOR
   ══════════════════════════════════════════════════════════════════ */
export function OrbitSimCard() {
  const [countdown, setCountdown] = useState(258);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((c) => (c > 0 ? c - 1 : 360));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatCountdown = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `T-${String(m).padStart(2, '0')}m ${String(s).padStart(2, '0')}s`;
  };

  return (
    <div className="p-4 sm:p-5 space-y-3.5">
      {/* 3D Earth Globe Visualizer */}
      <div className="relative h-44 w-full bg-gradient-to-b from-[#0B0B0E] to-[#000000] border border-white/10 rounded-[10px] overflow-hidden flex items-center justify-center">
        <EarthOrbitCanvas height="176px" />
        
        {/* Orbital HUD Overlay tags */}
        <div className="absolute top-2.5 left-3 pointer-events-none">
          <div className="text-[9px] font-mono uppercase text-[#71717A]">Orbit Inclination</div>
          <div className="text-xs font-mono font-bold text-white">51.64° / 142.8° RAAN</div>
        </div>

        <div className="absolute top-2.5 right-3 pointer-events-none text-right">
          <div className="text-[9px] font-mono uppercase text-[#71717A]">Next Zenith Pass</div>
          <div className="text-xs font-mono font-bold text-[#A78BFA]">{formatCountdown(countdown)}</div>
        </div>

        <div className="absolute bottom-2 inset-x-3 pointer-events-none flex items-center justify-between text-[9px] font-mono text-[#A3A3AE] bg-black/70 px-2.5 py-1 rounded backdrop-blur-sm border border-white/10">
          <span>SSP: 12.97°N, 77.59°E</span>
          <span className="text-[#C4B5FD]">ALT: 540.2 KM · EL: 74°</span>
        </div>
      </div>

      {/* Doppler & RF Link Telemetry Rows */}
      <div className="grid grid-cols-2 gap-3">
        <div className="p-3 bg-[#121216] border border-white/10 rounded-[10px]">
          <div className="text-[9px] font-mono uppercase text-[#71717A] mb-1">Doppler Shift (X-Band)</div>
          <div className="text-xs font-mono font-bold text-[#A78BFA] flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5 text-[#A78BFA]" />
            +14.28 kHz
          </div>
          <div className="text-[9px] font-mono text-[#A3A3AE] mt-1">Carrier: 8.420 GHz</div>
        </div>

        <div className="p-3 bg-[#121216] border border-white/10 rounded-[10px]">
          <div className="text-[9px] font-mono uppercase text-[#71717A] mb-1">Pass Duration</div>
          <div className="text-xs font-mono font-bold text-white flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-white/70" />
            09m 44s Window
          </div>
          <div className="text-[9px] font-mono text-emerald-400 mt-1">GS-BLR-PRIMARY</div>
        </div>
      </div>

      <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#121216] border border-white/10 rounded-[10px] text-[10px] font-mono">
        <span className="text-[#A3A3AE]">Antenna Tracking Vector:</span>
        <span className="text-[#C4B5FD] font-semibold">AZ 218.4° / EL 42.1°</span>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   CARD 3: CHAKRA-SSA CONJUNCTION RISK & COLLISION AVOIDANCE
   ══════════════════════════════════════════════════════════════════ */
export function ChakraSsaCard() {
  return (
    <div className="p-4 sm:p-5 space-y-3.5">
      {/* Tactical Radar Display with Proximity Intercept */}
      <div className="relative h-40 bg-[#0B0B0E] rounded-[10px] border border-white/10 p-3 overflow-hidden flex items-center justify-center">
        {/* Concentric proximity circles */}
        <div className="absolute w-32 h-32 rounded-full border border-white/10 pointer-events-none" />
        <div className="absolute w-24 h-24 rounded-full border border-amber-500/20 pointer-events-none" />
        <div className="absolute w-14 h-14 rounded-full border border-rose-500/30 pointer-events-none animate-pulse" />
        
        {/* Crosshairs */}
        <div className="absolute inset-x-4 h-[1px] bg-white/10 pointer-events-none" />
        <div className="absolute inset-y-2 w-[1px] bg-white/10 pointer-events-none" />

        {/* Primary Asset Node */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-3.5 h-3.5 rounded-full bg-[#A78BFA] border-2 border-black shadow-[0_0_10px_#7C3AED]" />
          <span className="text-[8px] font-mono text-[#A78BFA] mt-1 font-bold">VYUH-MCS-01</span>
        </div>

        {/* Incoming Conjunction Target Node */}
        <motion.div
          animate={{ x: [36, 32, 36], y: [-24, -20, -24] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute z-10 flex flex-col items-center"
        >
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.8)] animate-ping" />
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500 -mt-2.5" />
          <span className="text-[8px] font-mono text-rose-400 mt-1 bg-black/80 px-1 rounded border border-rose-500/30">
            COSMOS-1408 DEBRIS
          </span>
        </motion.div>

        <div className="absolute top-2 left-2.5 text-[9px] font-mono text-amber-300 font-semibold bg-amber-500/15 border border-amber-500/30 px-2 py-0.5 rounded">
          MISS DISTANCE: 1.18 KM
        </div>
        <div className="absolute bottom-2 left-2.5 text-[8px] font-mono text-[#71717A]">
          TCA: 18m 42s
        </div>
        <div className="absolute bottom-2 right-2.5 text-[8px] font-mono text-amber-400 font-bold">
          P(c) = 1.42e-05
        </div>
      </div>

      {/* Autonomous Maneuver Planner Details */}
      <div className="bg-[#121216] border border-white/10 rounded-[10px] p-3 space-y-2">
        <div className="flex items-center justify-between text-[10px] font-mono">
          <span className="text-[#A3A3AE] flex items-center gap-1.5">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            Autonomous Avoidance Maneuver (CAM)
          </span>
          <span className="text-emerald-400 font-semibold flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" /> ARMED
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2 text-[10px] font-mono pt-1.5 border-t border-white/5">
          <div>
            <span className="text-[#71717A] text-[9px] block">DELTA-V VECTOR</span>
            <span className="text-white font-bold">+0.42 m/s Prograde</span>
          </div>
          <div>
            <span className="text-[#71717A] text-[9px] block">THRUSTER DURATION</span>
            <span className="text-[#C4B5FD] font-bold">12.0s Cold Gas</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between px-3.5 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-[10px] text-[10px] font-mono text-emerald-300">
        <span>AI Trajectory Safety Factor:</span>
        <span className="font-bold">100% POST-BURN CLEARANCE</span>
      </div>
    </div>
  );
}
