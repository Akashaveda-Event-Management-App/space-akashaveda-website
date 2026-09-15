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
    <div className="flex items-center gap-3 bg-[#0d1527]/90 border border-white/10 rounded-xl p-3 backdrop-blur-md hover:border-cyan-500/30 transition-colors">
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
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#34D399" />
            </linearGradient>
          </defs>
        </svg>
        <span className="absolute text-[11px] font-bold font-mono text-white tracking-tight">{value}%</span>
      </div>
      <div className="min-w-0">
        <div className="text-[9px] font-mono text-gray-400 uppercase tracking-wider truncate mb-0.5">{label}</div>
        <div className="text-xs font-bold font-mono text-cyan-300 flex items-center gap-1.5">
          <span>{value} {unit}</span>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
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
    <div className="bg-[#080d19]/95 border border-white/10 rounded-xl p-3.5 backdrop-blur-md">
      <div className="flex items-center justify-between text-[10px] font-mono mb-2">
        <div className="flex items-center gap-1.5 text-cyan-400">
          <Activity className="w-3.5 h-3.5 animate-pulse text-cyan-400" />
          <span className="font-semibold uppercase tracking-wider">Live Spectrum Demodulator</span>
        </div>
        <div className="flex items-center gap-2 text-gray-400">
          <span className="text-gray-400">8.42 GHz</span>
          <span className="text-emerald-400 font-semibold px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
            SNR 28.4 dB
          </span>
        </div>
      </div>

      {/* Spectrum Wave Bars */}
      <div className="h-16 flex items-end gap-[3px] py-1 bg-black/30 rounded-lg px-2 border border-white/5">
        {bars.map((height, i) => (
          <motion.div
            key={i}
            animate={{ height: `${height}%` }}
            transition={{ type: 'spring', stiffness: 350, damping: 20 }}
            className={`flex-1 rounded-t-sm ${
              i % 4 === 0
                ? 'bg-gradient-to-t from-cyan-600 via-cyan-400 to-emerald-300 shadow-[0_0_8px_rgba(6,182,212,0.5)]'
                : i % 2 === 0
                ? 'bg-gradient-to-t from-blue-600 via-blue-400 to-cyan-400'
                : 'bg-gradient-to-t from-blue-700/80 via-blue-500/80 to-cyan-300/80'
            }`}
          />
        ))}
      </div>

      <div className="flex justify-between items-center text-[9px] font-mono text-gray-400 pt-2 mt-1 border-t border-white/5">
        <span>BW: 150 MHz · CCSDS TM</span>
        <span className="text-cyan-400 font-medium">STREAM: 60 FPS REAL-TIME</span>
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
      iconClass: 'text-blue-400',
      badgeClass: 'bg-blue-500/10 border-blue-500/30 text-blue-300',
    },
    {
      name: 'Orbit Debris Maneuver',
      status: 'VERIFIED',
      detail: 'Probability < 0.0001%',
      time: 'Standby',
      iconClass: 'text-cyan-400',
      badgeClass: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-300',
    },
  ];

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center px-3 py-2 bg-[#0d1527]/90 border border-white/10 rounded-xl text-[10px] font-mono">
        <span className="text-gray-300 flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5 text-blue-400" /> Next Pass Countdown
        </span>
        <span className="text-cyan-300 font-bold tracking-wider">12m 44s (GS-HYD-01)</span>
      </div>

      <div className="space-y-2">
        {steps.map((step, idx) => (
          <motion.div
            key={step.name}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.08, duration: 0.3 }}
            className="flex items-center justify-between p-2.5 bg-[#090e1b]/90 border border-white/8 rounded-xl text-[11px] font-mono hover:border-blue-400/40 transition-colors"
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
    { label: 'Uptime Reliability', val: '99.98%', status: 'SLO PASSED', color: 'text-cyan-400' },
    { label: 'Downlink Speed', val: '1.2 Gbps', status: 'HIGH SPEED', color: 'text-blue-400' },
  ];

  return (
    <div className="space-y-2.5">
      <div className="bg-gradient-to-r from-blue-900/40 via-cyan-900/30 to-blue-950/40 border border-blue-500/25 rounded-xl p-3 flex items-center justify-between">
        <div>
          <div className="text-[9px] font-mono text-gray-400 uppercase tracking-widest">Predictive Health Index</div>
          <div className="text-sm font-bold text-white font-mono flex items-center gap-1.5 mt-0.5">
            Zero-Failure Lifecycle: <span className="text-cyan-300 font-extrabold">7.4 Years</span>
          </div>
        </div>
        <div className="px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-[10px] font-mono font-bold">
          HEALTH: 99.8%
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {metrics.map((m) => (
          <div key={m.label} className="bg-[#090e1b]/90 border border-white/8 rounded-xl p-2.5 hover:border-white/20 transition-colors">
            <div className="text-[9px] font-mono text-gray-400 uppercase tracking-widest">{m.label}</div>
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
