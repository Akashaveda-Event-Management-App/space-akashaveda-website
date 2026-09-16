import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Activity, Clock, CheckCircle2 } from 'lucide-react';

/* ── 1. Circular Telemetry Gauge Graphic ────────────────────────── */
export const TelemetryGauge: React.FC<{ value: number; label: string; unit: string }> = ({
  value,
  label,
  unit,
}) => {
  const radius = 24;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <div className="flex items-center gap-3 bg-[#121216] border border-white/10 rounded-[8px] p-3 backdrop-blur-md hover:border-[#47B2E4]/30 transition-colors">
      <div className="relative w-14 h-14 flex items-center justify-center flex-shrink-0">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 60 60">
          <circle
            cx="30"
            cy="30"
            r={radius}
            stroke="currentColor"
            strokeWidth="4.5"
            className="text-white/10"
            fill="transparent"
          />
          <motion.circle
            cx="30"
            cy="30"
            r={radius}
            stroke="url(#gauge-grad)"
            strokeWidth="4.5"
            fill="transparent"
            strokeDasharray={circumference}
            animate={{ strokeDashoffset }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="gauge-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7CCCED" />
              <stop offset="100%" stopColor="#47B2E4" />
            </linearGradient>
          </defs>
        </svg>
        <span className="absolute text-[11px] font-bold font-mono text-white tracking-tight">{value}%</span>
      </div>
      <div className="min-w-0">
        <div className="text-[9px] font-mono text-[#71717A] uppercase tracking-wider truncate mb-0.5">{label}</div>
        <div className="text-xs font-bold font-mono text-[#47B2E4] flex items-center gap-1.5">
          <span>{value} {unit}</span>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#47B2E4] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#47B2E4]" />
          </span>
        </div>
      </div>
    </div>
  );
};

/* ── 2. Upgraded Motion Telemetry Waveform ─────────────────────── */
export const MotionTelemetryWaveform: React.FC = () => {
  const [bars, setBars] = useState<number[]>(() =>
    Array.from({ length: 28 }, (_, i) => Math.sin(i * 0.4) * 25 + 50 + Math.random() * 15)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setBars((prev) =>
        prev.map((val) => {
          const delta = (Math.random() - 0.48) * 25;
          return Math.min(100, Math.max(18, val + delta));
        })
      );
    }, 380);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#121216] border border-white/10 rounded-[8px] p-3.5 backdrop-blur-md">
      <div className="flex items-center justify-between text-[10px] font-mono mb-2">
        <div className="flex items-center gap-1.5 text-[#47B2E4]">
          <Activity className="w-3.5 h-3.5 animate-pulse text-[#47B2E4]" />
          <span className="font-semibold uppercase tracking-wider">Live Spectrum Demodulator</span>
        </div>
        <div className="flex items-center gap-2 text-[#71717A]">
          <span>8.42 GHz</span>
          <span className="text-emerald-400 font-semibold px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
            SNR 28.4 dB
          </span>
        </div>
      </div>

      {/* Spectrum Wave Bars */}
      <div className="h-16 flex items-end gap-[3px] py-1 bg-black/30 rounded-[6px] px-2 border border-white/5">
        {bars.map((height, i) => (
          <motion.div
            key={i}
            animate={{ height: `${height}%` }}
            transition={{ type: 'spring', stiffness: 350, damping: 20 }}
            className={`flex-1 rounded-t-sm ${
              i % 4 === 0
                ? 'bg-gradient-to-t from-[#2381AE] via-[#47B2E4] to-white shadow-[0_0_8px_rgba(71,178,228,0.5)]'
                : i % 2 === 0
                ? 'bg-gradient-to-t from-[#274472] via-[#2381AE] to-[#47B2E4]'
                : 'bg-gradient-to-t from-[#1A2D4C]/80 via-[#274472]/80 to-[#7CCCED]/80'
            }`}
          />
        ))}
      </div>

      <div className="flex justify-between items-center text-[9px] font-mono text-[#71717A] pt-2 mt-1 border-t border-white/5">
        <span>BW: 150 MHz · CCSDS TM</span>
        <span className="text-[#47B2E4] font-medium">100% LOCK</span>
      </div>
    </div>
  );
};

/* ── 3. Autonomous Command Timeline Stepper ─────────────────────── */
export const AutonomyTimeline: React.FC = () => {
  const steps = [
    {
      name: 'Solar Panel Sun-Tracking',
      status: 'AUTO',
      detail: 'Optimal angle 44.2°',
      time: 'Active',
      iconClass: 'text-emerald-400',
      badgeClass: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300',
    },
    {
      name: 'Downlink Pass #412 Sync',
      status: 'COMPLETED',
      detail: '1.4 GB transferred',
      time: '2m ago',
      iconClass: 'text-[#47B2E4]',
      badgeClass: 'bg-[#47B2E4]/15 border-[#47B2E4]/30 text-[#47B2E4]',
    },
    {
      name: 'Orbit Debris Maneuver',
      status: 'VERIFIED',
      detail: 'Probability < 0.0001%',
      time: 'Standby',
      iconClass: 'text-[#7CCCED]',
      badgeClass: 'bg-[#7CCCED]/15 border-[#7CCCED]/30 text-[#7CCCED]',
    },
  ];

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center px-3 py-2 bg-[#121216] border border-white/10 rounded-[8px] text-[10px] font-mono">
        <span className="text-gray-300 flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5 text-[#47B2E4]" /> Next Pass Countdown
        </span>
        <span className="text-[#47B2E4] font-bold tracking-wider">12m 44s (GS-HYD-01)</span>
      </div>

      <div className="space-y-2">
        {steps.map((step, idx) => (
          <motion.div
            key={step.name}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.08, duration: 0.3 }}
            className="flex items-center justify-between p-2.5 bg-[#08080A] border border-white/10 rounded-[8px] text-[11px] font-mono hover:border-[#47B2E4]/40 transition-colors"
          >
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className={`w-4 h-4 ${step.iconClass} flex-shrink-0`} />
              <div>
                <div className="text-gray-200 font-medium">{step.name}</div>
                <div className="text-[9px] text-gray-400">{step.detail}</div>
              </div>
            </div>
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${step.badgeClass} flex-shrink-0`}>
              {step.status}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

/* ── 4. Analytics Health Metrics Grid ─────────────────────────── */
export const AnalyticsGrid: React.FC = () => {
  const metrics = [
    { label: 'Power Efficiency', val: '99.4%', status: 'NOMINAL', color: 'text-white' },
    { label: 'Thermal Balance', val: '+21.4 °C', status: 'OPTIMAL', color: 'text-emerald-400' },
    { label: 'Uptime Reliability', val: '99.98%', status: 'SLO PASSED', color: 'text-[#47B2E4]' },
    { label: 'Downlink Speed', val: '1.2 Gbps', status: 'HIGH SPEED', color: 'text-[#7CCCED]' },
  ];

  return (
    <div className="space-y-2.5">
      <div className="bg-[#121216] border border-white/10 rounded-[8px] p-3 flex items-center justify-between">
        <div>
          <div className="text-[9px] font-mono text-[#71717A] uppercase tracking-widest">Predictive Health Index</div>
          <div className="text-sm font-bold text-white font-mono flex items-center gap-1.5 mt-0.5">
            Zero-Failure Lifecycle: <span className="text-[#47B2E4] font-extrabold">7.4 Years</span>
          </div>
        </div>
        <div className="px-2.5 py-1 rounded-full bg-[#47B2E4]/20 border border-[#47B2E4]/40 text-[#47B2E4] text-[10px] font-mono font-bold">
          HEALTH: 99.8%
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {metrics.map((m) => (
          <div key={m.label} className="bg-[#08080A] border border-white/10 rounded-[8px] p-2.5 hover:border-[#47B2E4]/30 transition-colors">
            <div className="text-[9px] font-mono text-[#71717A] uppercase tracking-widest">{m.label}</div>
            <div className={`text-sm font-bold font-mono ${m.color} mt-0.5`}>{m.val}</div>
            <div className="text-[9px] font-mono text-gray-500 mt-0.5">{m.status}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ── 5. Trajectory Curve Graphic ────────────────────────────────── */
export const MotionTrajectoryGraphic: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      <svg className="w-full h-full opacity-35" viewBox="0 0 1200 700" fill="none" preserveAspectRatio="none">
        {/* Orbital Trajectory 1 */}
        <motion.path
          d="M -100,550 C 300,180 750,480 1300,80"
          stroke="url(#gradient-trajectory-1)"
          strokeWidth="2"
          strokeDasharray="8 8"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.9 }}
          transition={{ duration: 3.5, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
        />
        {/* Orbital Trajectory 2 */}
        <motion.path
          d="M -50,200 C 400,600 800,100 1250,450"
          stroke="url(#gradient-trajectory-2)"
          strokeWidth="1.5"
          strokeDasharray="6 6"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 5, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse', delay: 1 }}
        />
        <defs>
          <linearGradient id="gradient-trajectory-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#334155" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#64748B" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#94A3B8" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="gradient-trajectory-2" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1E293B" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#475569" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#64748B" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
