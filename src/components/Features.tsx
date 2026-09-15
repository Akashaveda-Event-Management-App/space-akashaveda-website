import { useState, useEffect } from 'react';
import { Activity, Cpu, Cloud, Layers, Zap, ArrowRight, ArrowUpRight, Check, Terminal, Radio, Network, Server, ShieldCheck, Rocket } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeUp, staggerContainer, staggerItem, viewport } from '../lib/motion';
import { MotionCard } from './MotionPrimitives';
import { Parallax3DCard } from './Space3DElements';

/* ── Data ─────────────────────────────────────────── */
const services = [
  {
    step: '01',
    icon: Activity,
    label: 'Telemetry Stream',
    subtitle: '<10ms Stream Ingestion',
    title: 'Continuous Telemetry & Anomaly Analytics',
    description:
      'High-throughput time-series telemetry engine that streams, decodes, and analyzes multi-channel satellite housekeeping data. Predictive regression models detect power, thermal, and subsystem drift before hardware limits are reached.',
    features: ['Sub-10ms stream parsing', 'Predictive subsystem drift detection', 'Automated health scoring'],
    stat: { value: '<10ms', label: 'Ingestion' },
  },
  {
    step: '02',
    icon: Cpu,
    label: 'Pass Scheduling',
    subtitle: 'Zero Conflict Contact Optimizer',
    title: 'Automated Pass & Contact Scheduling',
    description:
      'Autonomous orbital pass generation and contact plan optimizer. Resolves antenna pointing windows, link budgets, and downlinking priorities across distributed ground station networks with zero manual conflict.',
    features: ['Multi-ground station scheduling', 'Automated link margin budgeting', 'Dynamic re-planning on LOS'],
    stat: { value: '100%', label: 'Hands-off' },
  },
  {
    step: '03',
    icon: Layers,
    label: 'Unified C2',
    subtitle: 'Single-Pane Mission Control',
    title: 'Integrated Command & Control Platform',
    description:
      'A unified cloud mission control center that replaces fragmented tools. Manage flight software procedures, real-time uplinks, telemetry dashboards, and payload tasking from a single secure web workspace.',
    features: ['Single-pane mission dashboard', 'Multi-satellite constellation view', 'Role-based command auditing'],
    stat: { value: '1 Workspace', label: 'All Operations' },
  },
  {
    step: '04',
    icon: Zap,
    label: 'Autonomy Engine',
    subtitle: 'Deterministic Failsafe Logic',
    title: 'On-Board & Cloud Autonomy Engine',
    description:
      'Human operators cannot manually triage hundreds of telemetry streams during brief 10-minute ground passes. Akashaveda executes routine health verification, flight procedures, and safe-mode recovery deterministically.',
    features: ['Procedure automation engine', 'Zero human pass latency', 'Deterministic failsafe rulesets'],
    stat: { value: '24/7', label: 'Autonomous' },
  },
  {
    step: '05',
    icon: Cloud,
    label: 'Infrastructure',
    subtitle: 'Hyperscale Multi-Region Grid',
    title: 'Cloud-Native Distributed Infrastructure',
    description:
      'Built natively on modern hyperscale cloud architecture with multi-region high availability, end-to-end AES-256 encryption, and low-latency websocket connections for real-time constellation telemetry.',
    features: ['Global multi-region availability', 'Scalable from 1 to 1000+ sats', 'AES-256 encrypted down/uplink'],
    stat: { value: '99.99%', label: 'SLA' },
  },
];

const integrations = [
  {
    icon: Radio,
    category: 'Ground Stations & Networks',
    title: 'GSaaS & Dedicated Antennas',
    description: 'Plug-and-play compatibility with AWS Ground Station, KSAT, Leaf Space, and custom proprietary UHF/S/X/Ka-band ground terminals via standard REST/gRPC APIs.',
    tags: ['AWS GS', 'KSAT Lite', 'Leaf Space', 'Custom UHF/S/X/Ka'],
  },
  {
    icon: Server,
    category: 'Flight Hardware & Buses',
    title: 'Bus Agnostic Architecture',
    description: 'Hardware-agnostic integration supporting CubeSat, SmallSat, and ESPA-class buses. Pre-configured telemetry decoders for major commercial OBCs and ADCS subsystems.',
    tags: ['CubeSat / SmallSat', 'Commercial OBCs', 'COTS ADCS', 'CCSDS Telemetry'],
  },
  {
    icon: Network,
    category: 'Protocols & APIs',
    title: 'Standards-Compliant Stack',
    description: 'Native support for CCSDS standards, XTCE telemetry databases, RESTful endpoints, and real-time Kafka/WebSocket streaming for external analytics pipelines.',
    tags: ['CCSDS', 'XTCE Compatible', 'Kafka Streams', 'Open REST / gRPC'],
  },
  {
    icon: ShieldCheck,
    category: 'Enterprise & Security',
    title: 'Zero-Trust Security & Compliance',
    description: 'Military-grade encryption for all uplink commands, strict role-based access control (RBAC), multi-factor authorization for critical passes, and immutable audit logs.',
    tags: ['AES-256 Encryption', 'RBAC & 2FA', 'Immutable Logs', 'Audit Ready'],
  },
];

const plans = [
  {
    tier: 'TIER 01',
    icon: Rocket,
    name: 'Pioneer / Single Mission',
    badge: null,
    target: '1–3 Satellites (LEO / CubeSat)',
    description: 'Complete cloud mission control for tech demo CubeSats and single satellite payloads.',
    features: [
      'Full telemetry stream decoding (XTCE / SEDS)',
      'Automated pass scheduling & contact prediction',
      'Unified C2 web mission dashboard',
      'Standard ground station network connector',
      'Standard 99.9% uptime SLA',
    ],
    cta: 'Deploy Pioneer Mission',
    popular: false,
  },
  {
    tier: 'TIER 02',
    icon: Layers,
    name: 'Constellation Scale',
    badge: 'Recommended for Fleets',
    target: '4–50+ Satellites (Active Fleets)',
    description: 'Autonomous pass execution, predictive anomaly triage, and automated multi-satellite fleet management.',
    features: [
      'Predictive ML anomaly & drift detection',
      'Multi-satellite concurrent automated passes',
      'Automated GS network routing & failover',
      'High-throughput time-series telemetry DB',
      'Priority 24/7 technical flight support',
    ],
    cta: 'Scale Fleet Operations',
    popular: true,
  },
  {
    tier: 'TIER 03',
    icon: ShieldCheck,
    name: 'Enterprise / Sovereign',
    badge: 'Custom Architecture',
    target: 'Dedicated Fleets & Sovereign Ops',
    description: 'Dedicated cloud VPC or hybrid on-premise infrastructure for commercial fleets and defense operators.',
    features: [
      'Custom hardware bus decoders & ADCS rigs',
      'Dedicated VPC / Air-gapped on-premise setup',
      'Custom 99.99% mission SLA guarantees',
      'Hardware Security Module (HSM) key signing',
      'Dedicated mission operations solutions engineer',
    ],
    cta: 'Consult Flight Engineers',
    popular: false,
  },
];

/* ── High-Tech Aerospace Interactive Graphics ── */

// 1. Oscilloscope Telemetry Waveform
function TelemetryOscilloscope() {
  const [sineOffset, setSineOffset] = useState(0);
  useEffect(() => {
    const iv = setInterval(() => setSineOffset((prev) => (prev + 0.15) % (Math.PI * 2)), 40);
    return () => clearInterval(iv);
  }, []);

  const points = Array.from({ length: 40 })
    .map((_, i) => {
      const x = (i / 39) * 320;
      const y = 30 + Math.sin(i * 0.4 + sineOffset) * 18 + Math.cos(i * 0.2 - sineOffset) * 8;
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(' ');

  return (
    <div className="p-4 sm:p-5 bg-[#050811]/90 border border-white/[0.06] rounded-2xl backdrop-blur-md">
      <div className="flex justify-between items-center text-[10px] font-mono text-[#8A95A3] uppercase tracking-wider mb-3">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          OSCILLOSCOPE SIGNAL FEED // FREQ: 437.450 MHz
        </span>
        <span className="text-blue-400 font-bold">SNR: 34.2 dB</span>
      </div>

      <div className="relative h-20 w-full overflow-hidden bg-blue-950/20 rounded-xl border border-blue-500/20 p-2 flex items-center justify-center">
        {/* Grid lines */}
        <div className="absolute inset-0 grid grid-cols-8 grid-rows-4 opacity-15 pointer-events-none">
          {Array.from({ length: 32 }).map((_, i) => (
            <div key={i} className="border-b border-r border-blue-400" />
          ))}
        </div>

        {/* SVG Oscilloscope Wave */}
        <svg viewBox="0 0 320 60" className="w-full h-full text-blue-400 overflow-visible">
          <polyline
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            points={points}
          />
        </svg>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-3 text-[10px] font-mono text-[#C7CEDA] border-t border-white/[0.05] pt-2.5">
        <div>LATENCY: <span className="text-white font-bold">3.8 ms</span></div>
        <div>PACKETS: <span className="text-emerald-400 font-bold">100% PASS</span></div>
        <div>BITRATE: <span className="text-white font-bold">1.2 GB/s</span></div>
        <div>DOPPLER: <span className="text-blue-400 font-bold">+1.4 kHz</span></div>
      </div>
    </div>
  );
}

// 2. Interactive Orbital Pass Timeline
function CommandPlanningHUD() {
  const steps = [
    { code: 'AOS', label: 'Acquire Signal', status: 'COMPLETE', color: 'text-emerald-400', time: 'T-00:00' },
    { code: 'UPLINK', label: 'Command Sequence', status: 'ACTIVE', color: 'text-blue-400', time: 'T+02:15' },
    { code: 'PAYLOAD', label: 'Execute Task', status: 'QUEUED', color: 'text-[#C7CEDA]', time: 'T+05:30' },
    { code: 'LOS', label: 'Downlink & Store', status: 'PENDING', color: 'text-[#8A95A3]', time: 'T+09:42' },
  ];

  return (
    <div className="p-4 sm:p-5 bg-[#050811]/90 border border-white/[0.06] rounded-2xl backdrop-blur-md">
      <div className="flex justify-between items-center text-[10px] font-mono text-[#8A95A3] uppercase tracking-wider mb-3">
        <span>ORBITAL PASS TIMELINE // SAT-ID: 48923</span>
        <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          PASS WINDOW: 09:42 MIN
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        {steps.map((s, i) => (
          <div key={i} className="p-3 rounded-xl bg-[#080d1a]/95 border border-white/[0.05] flex flex-col justify-between">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-mono text-blue-400 font-bold">{s.code}</span>
              <span className="text-[9px] font-mono text-[#8A95A3]">{s.time}</span>
            </div>
            <div className="text-xs font-semibold text-white mb-2 leading-snug">{s.label}</div>
            <div className={`text-[9px] font-mono uppercase font-medium ${s.color}`}>{s.status}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// 3. Constellation Network Topology Map
function MissionControlTopology() {
  return (
    <div className="p-4 sm:p-5 bg-[#050811]/90 border border-white/[0.06] rounded-2xl backdrop-blur-md">
      <div className="flex justify-between items-center text-[10px] font-mono text-[#8A95A3] uppercase tracking-wider mb-3">
        <span>CONSTELLATION NETWORK TOPOLOGY // LEO 550KM</span>
        <span className="text-blue-400 font-semibold">12 NODES ONLINE</span>
      </div>

      <div className="relative h-20 w-full bg-gradient-to-r from-blue-950/20 via-blue-900/10 to-blue-950/20 rounded-xl border border-white/[0.06] flex items-center justify-around px-4">
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-400/60 flex items-center justify-center text-[10px] font-mono text-emerald-300 font-bold shadow-[0_0_10px_rgba(52,211,153,0.25)]">GS-1</div>
          <span className="text-[9px] font-mono text-[#8A95A3] mt-1">BANGALORE</span>
        </div>

        <div className="h-[2px] flex-1 bg-gradient-to-r from-emerald-400/40 via-blue-400/60 to-cyan-400/40 relative overflow-hidden mx-2">
          <motion.div
            animate={{ x: ['0%', '100%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
            className="w-8 h-full bg-white shadow-[0_0_8px_#fff]"
          />
        </div>

        <div className="flex flex-col items-center">
          <div className="w-9 h-9 rounded-full bg-blue-500/20 border border-blue-400 flex items-center justify-center text-[10px] font-mono text-blue-300 font-bold shadow-[0_0_12px_rgba(59,130,246,0.35)]">SAT-4</div>
          <span className="text-[9px] font-mono text-blue-400 mt-1">LEO NODE</span>
        </div>

        <div className="h-[2px] flex-1 bg-gradient-to-r from-blue-400/40 via-cyan-400/60 to-emerald-400/40 relative overflow-hidden mx-2">
          <motion.div
            animate={{ x: ['0%', '100%'] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'linear', delay: 0.3 }}
            className="w-8 h-full bg-white shadow-[0_0_8px_#fff]"
          />
        </div>

        <div className="flex flex-col items-center">
          <div className="w-8 h-8 rounded-full bg-blue-500/20 border border-blue-400/60 flex items-center justify-center text-[10px] font-mono text-blue-300 font-bold shadow-[0_0_10px_rgba(59,130,246,0.25)]">GS-2</div>
          <span className="text-[9px] font-mono text-[#8A95A3] mt-1">SVALBARD</span>
        </div>
      </div>
    </div>
  );
}

// 4. Neural Network Inference Pipeline
function DualModeAIHUD() {
  return (
    <div className="p-4 sm:p-5 bg-[#050811]/90 border border-white/[0.06] rounded-2xl backdrop-blur-md">
      <div className="flex justify-between items-center text-[10px] font-mono text-[#8A95A3] uppercase tracking-wider mb-3">
        <span>TELEMETRY TIME-SERIES INFERENCE // ANOMALY ENGINE</span>
        <span className="text-emerald-400 font-semibold">LATENCY: 0.8ms</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
        <div className="p-3 rounded-xl bg-[#080d1a]/95 border border-white/[0.05] text-center">
          <div className="text-[10px] font-mono text-[#8A95A3]">INGESTION STREAM</div>
          <div className="text-xs font-bold text-white mt-1">2,400 Channels / Sat</div>
        </div>
        <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-center">
          <div className="text-[10px] font-mono text-blue-300 font-semibold">ANOMALY DETECTOR</div>
          <div className="text-xs font-bold text-blue-200 mt-1">Subsystem Drift Model</div>
        </div>
        <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center">
          <div className="text-[10px] font-mono text-emerald-300 font-semibold">PASS EXECUTION</div>
          <div className="text-xs font-bold text-emerald-200 mt-1">Autonomous Safe Procedures</div>
        </div>
      </div>
    </div>
  );
}

// 5. Scalable Cloud Node Matrix
function InfrastructureHUD() {
  return (
    <div className="p-4 sm:p-5 bg-[#050811]/90 border border-white/[0.06] rounded-2xl backdrop-blur-md">
      <div className="flex justify-between items-center text-[10px] font-mono text-[#8A95A3] uppercase tracking-wider mb-3">
        <span>MULTI-REGION CLOUD NODE MATRIX // ENCRYPTION: AES-256</span>
        <span className="text-emerald-400 font-semibold">SLA: 99.99%</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs font-mono">
        <div className="p-3 rounded-xl bg-[#080d1a]/95 border border-white/[0.05] flex items-center justify-between">
          <span className="text-[#C7CEDA]">AP-SOUTH (MUMBAI)</span>
          <span className="text-emerald-400 font-bold">ONLINE</span>
        </div>
        <div className="p-3 rounded-xl bg-[#080d1a]/95 border border-white/[0.05] flex items-center justify-between">
          <span className="text-[#C7CEDA]">EU-CENTRAL (FRANKFURT)</span>
          <span className="text-emerald-400 font-bold">ONLINE</span>
        </div>
        <div className="p-3 rounded-xl bg-[#080d1a]/95 border border-white/[0.05] flex items-center justify-between">
          <span className="text-[#C7CEDA]">US-EAST (VIRGINIA)</span>
          <span className="text-emerald-400 font-bold">ONLINE</span>
        </div>
      </div>
    </div>
  );
}

/* ── Main Component ─────────────────────────────── */
export default function Services() {
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState<'up' | 'down'>('down');
  const [animating, setAnimating] = useState(false);

  const svc = services[active];
  const Icon = svc.icon;

  const huds = [TelemetryOscilloscope, CommandPlanningHUD, MissionControlTopology, DualModeAIHUD, InfrastructureHUD];
  const ActiveHud = huds[active] ?? TelemetryOscilloscope;

  const selectService = (i: number) => {
    if (i === active || animating) return;
    setDir(i > active ? 'down' : 'up');
    setAnimating(true);
    setActive(i);
    setTimeout(() => setAnimating(false), 320);
  };

  const scrollToContact = () =>
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="platform"
      aria-labelledby="services-heading"
      className="relative py-16 sm:py-20 bg-[#070C1A] overflow-hidden scroll-mt-24 sm:scroll-mt-28"
    >
      {/* Cyber Grid Lines Background Overlay */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] [background-size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-25" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_40%_at_50%_0%,rgba(15,23,42,0.5),transparent)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <motion.div initial="hidden" whileInView="visible" viewport={viewport} variants={fadeUp} className="mb-8 sm:mb-12">
          <p className="text-xs font-mono uppercase tracking-[0.22em] text-blue-400 mb-4">Platform</p>
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-20 items-end">
            <h2
              id="services-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight"
            >
              CLOUD-SCALE{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                FLIGHT<br className="hidden sm:block" /> OPERATIONS
              </span>
            </h2>
            <p className="text-[#C7CEDA] text-base sm:text-lg leading-[1.85]">
              Designed from the ground up for modern satellite programs — eliminating fragile legacy scripts in favor of deterministic, cloud-native constellation orchestration.
            </p>
          </div>
        </motion.div>

        {/* ── Interactive Service Showcase (Aerospace HUD UI) ── */}
        <motion.div initial="hidden" whileInView="visible" viewport={viewport} variants={fadeUp} className="rounded-2xl bg-[#080d1a]/95 border border-white/[0.06] backdrop-blur-xl overflow-hidden mb-14 sm:mb-16 shadow-[0_12px_40px_rgba(0,0,0,0.7)]">
          
          {/* Top Aerospace Terminal Bar */}
          <div className="px-4 sm:px-6 py-3 sm:py-3.5 bg-[#0a101d]/90 border-b border-white/[0.05] flex items-center justify-between text-xs font-mono text-[#C7CEDA]">
            <div className="flex items-center gap-2 sm:gap-3 truncate">
              <Terminal className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
              <span className="text-white font-semibold truncate text-[11px] sm:text-xs">AKASHAVEDA // CONSTELLATION CONTROL</span>
              <span className="hidden sm:inline-flex items-center gap-1.5 text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2.5 py-0.5 rounded-full font-bold flex-shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                TELEMETRY NOMINAL
              </span>
            </div>
            <div className="flex items-center gap-3 sm:gap-4 text-[11px] text-[#8A95A3] flex-shrink-0">
              <span className="hidden md:inline">PASS ORCHESTRATION: <span className="text-blue-400 font-semibold">ACTIVE</span></span>
              <span>PING: <span className="text-emerald-400 font-semibold">3.8ms</span></span>
            </div>
          </div>

          <div className="grid lg:grid-cols-[2fr_3fr]">

            {/* Left: Numbered Tab list (Horizontally scrollable on mobile, vertical on desktop) */}
            <div className="border-b lg:border-b-0 lg:border-r border-white/[0.05] bg-black/20 overflow-x-auto lg:overflow-x-visible no-scrollbar flex lg:flex-col">
              {services.map((s, i) => {
                const SvcIcon = s.icon;
                const isActive = i === active;
                return (
                  <button
                    key={i}
                    onClick={() => selectService(i)}
                    className={`
                      relative flex-shrink-0 lg:flex-shrink w-auto lg:w-full text-left px-4 sm:px-6 py-4 sm:py-5 flex items-center gap-3 sm:gap-4
                      transition-all duration-200 group
                      ${i < services.length - 1 ? 'border-r lg:border-r-0 lg:border-b border-white/[0.04]' : ''}
                      ${isActive ? 'bg-[#0e172a]/90' : 'hover:bg-white/[0.02]'}
                    `}
                  >
                    {/* Active left bar with layout motion on desktop, bottom indicator on mobile */}
                    {isActive && (
                      <>
                        <motion.span
                          layoutId="activeTabIndicator"
                          className="hidden lg:block absolute left-0 top-0 bottom-0 w-[3px] bg-blue-500 rounded-full shadow-[0_0_12px_rgba(59,130,246,0.6)]"
                          transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                        />
                        <motion.span
                          layoutId="activeTabIndicatorMobile"
                          className="lg:hidden absolute bottom-0 left-0 right-0 h-[2px] bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.6)]"
                          transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                        />
                      </>
                    )}

                    {/* Step Number */}
                    <span className={`font-mono text-xs font-bold transition-colors ${isActive ? 'text-blue-400' : 'text-[#8A95A3] group-hover:text-[#C7CEDA]'}`}>
                      {s.step}
                    </span>

                    {/* Icon */}
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        isActive
                          ? 'bg-blue-500/15 border border-blue-500/30'
                          : 'bg-white/[0.02] border border-white/[0.05] group-hover:bg-white/[0.06]'
                      }`}
                    >
                      <SvcIcon
                        className={`w-4 h-4 transition-colors duration-300 ${
                          isActive ? 'text-blue-400' : 'text-white/40 group-hover:text-white/70'
                        }`}
                      />
                    </div>

                    {/* Label + Subtitle */}
                    <div className="flex-1 min-w-0">
                      <div
                        className={`text-xs sm:text-sm font-semibold leading-tight whitespace-nowrap lg:whitespace-normal transition-colors duration-200 ${
                          isActive ? 'text-white' : 'text-[#C7CEDA] group-hover:text-white'
                        }`}
                      >
                        {s.label}
                      </div>
                      <div className={`text-[10px] font-mono mt-0.5 tracking-wide flex items-center gap-1.5 whitespace-nowrap transition-colors duration-200 ${
                        isActive ? 'text-blue-400' : 'text-[#8A95A3] group-hover:text-[#A0AEC0]'
                      }`}>
                        {isActive && <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />}
                        {s.subtitle}
                      </div>
                    </div>

                    <ArrowRight
                      className={`hidden lg:block w-4 h-4 flex-shrink-0 transition-all duration-300 ${
                        isActive ? 'text-blue-400 translate-x-0' : 'text-transparent -translate-x-1'
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Right: Detail panel with AnimatePresence */}
            <div className="overflow-hidden bg-gradient-to-br from-white/[0.015] to-transparent p-5 sm:p-8 lg:p-10 flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: dir === 'down' ? 14 : -14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: dir === 'down' ? -14 : 14 }}
                  transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className="flex flex-col h-full justify-between space-y-6"
                >
                  <div>
                    {/* Header bar inside right panel */}
                    <div className="flex items-center gap-3 mb-5 sm:mb-6">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4.5 h-4.5 text-blue-400" />
                      </div>
                      <div className="h-px flex-1 bg-white/[0.06]" />
                      <span className="text-[10px] font-mono text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full uppercase tracking-widest font-semibold">
                        STATUS: {svc.stat.value} {svc.stat.label}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold uppercase tracking-tight text-white leading-tight mb-3">
                      {svc.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[#C7CEDA] text-xs sm:text-sm md:text-base leading-[1.8] mb-5 sm:mb-6">
                      {svc.description}
                    </p>

                    {/* Checklist Badges */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 mb-6">
                      {svc.features.map((f, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2.5 px-3.5 py-2.5 bg-white/[0.02] border border-white/[0.05] hover:border-blue-500/20 rounded-xl text-xs text-[#C7CEDA] font-medium transition-colors"
                        >
                          <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                          <span className="truncate">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Dynamic Aerospace Interactive Visual for Selected Tab */}
                  <div className="mt-auto pt-2">
                    <ActiveHud />
                  </div>

                  {/* Request Demo Link */}
                  <div className="pt-3 sm:pt-4 border-t border-white/[0.05] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                    <button
                      onClick={scrollToContact}
                      className="group flex items-center gap-2 text-xs font-bold text-blue-400 hover:text-blue-300 uppercase tracking-widest font-mono transition-colors duration-200"
                    >
                      REQUEST TECHNICAL DEMONSTRATION
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                    </button>
                    <span className="text-[10px] font-mono text-[#8A95A3]">CLOUD-C2 // ARCHITECTURE</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* ── Products Section: VYUH-MCS & CHAKRA-SSA ── */}
        <div id="products" className="scroll-mt-24 sm:scroll-mt-28 mb-14 sm:mb-16">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-20 mb-8 sm:mb-10 items-end">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.22em] text-blue-400 mb-4">Products</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight">
                MISSION-CRITICAL{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  FLIGHT &<br className="hidden sm:block" /> SAFETY SOFTWARE
                </span>
              </h2>
            </div>
            <p className="text-[#C7CEDA] text-sm sm:text-base leading-relaxed">
              Engineered to replace fragmented legacy tools. Our software products provide real-time constellation telemetry processing, automated pass execution, and orbital conjunction safety.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {/* Product 1: VYUH-MCS */}
            <Parallax3DCard>
              <MotionCard
                hoverY={-6}
                glow
                className="relative p-7 sm:p-9 rounded-2xl bg-[#080d1a]/95 backdrop-blur-xl h-full flex flex-col justify-between shadow-2xl border border-white/[0.06] hover:border-blue-500/30 transition-all duration-300 group overflow-hidden"
              >
                {/* Top Accent Glide Line */}
                <div className="absolute top-0 left-0 w-10 h-[2px] bg-gradient-to-r from-blue-500 via-cyan-400 to-transparent group-hover:w-full transition-all duration-500" />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 border border-blue-500/25 px-3 py-1 rounded-full flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                      FLAGSHIP MCS
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                      <Cpu className="w-4.5 h-4.5" />
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white mb-1 group-hover:text-blue-300 transition-colors">
                    VYUH-MCS
                  </h3>
                  <div className="text-xs font-mono text-blue-400/90 mb-4">
                    Next-Generation Mission Control System
                  </div>

                  <p className="text-[#C7CEDA] text-xs sm:text-sm leading-relaxed mb-6">
                    A cloud-native satellite Command & Control (C2) suite designed for high-rate telemetry parsing, automated contact pass execution, command verification interlocks, and XTCE database compliance.
                  </p>

                  <div className="space-y-2.5 mb-8">
                    {[
                      'Sub-10ms packet decommutation and time-series telemetry archiving',
                      'Automated multi-satellite contact pass execution with zero operator lag',
                      'Cryptographic command authorization & role-based access control',
                      'Turnkey integration with AWS Ground Station, KSAT, and custom RF'
                    ].map((feat, fi) => (
                      <div key={fi} className="flex items-center gap-2.5 text-xs text-[#C7CEDA]">
                        <Check className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.05] flex items-center justify-between">
                  <span className="text-[10px] font-mono text-[#8A95A3]">STATUS: PRODUCTION READY</span>
                  <button
                    onClick={scrollToContact}
                    className="text-xs font-bold font-mono text-blue-400 hover:text-blue-300 flex items-center gap-1.5 group/btn"
                  >
                    REQUEST DEMO <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </MotionCard>
            </Parallax3DCard>

            {/* Product 2: CHAKRA-SSA */}
            <Parallax3DCard>
              <MotionCard
                hoverY={-6}
                glow
                className="relative p-7 sm:p-9 rounded-2xl bg-[#080d1a]/95 backdrop-blur-xl h-full flex flex-col justify-between shadow-2xl border border-white/[0.06] hover:border-indigo-500/30 transition-all duration-300 group overflow-hidden"
              >
                {/* Top Accent Glide Line */}
                <div className="absolute top-0 left-0 w-10 h-[2px] bg-gradient-to-r from-indigo-500 via-purple-400 to-transparent group-hover:w-full transition-all duration-500" />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-indigo-300 bg-indigo-500/10 border border-indigo-500/25 px-3 py-1 rounded-full flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                      SPACE SITUATIONAL AWARENESS
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-105 transition-transform">
                      <Radio className="w-4.5 h-4.5" />
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white mb-1 group-hover:text-indigo-300 transition-colors">
                    CHAKRA-SSA
                  </h3>
                  <div className="text-xs font-mono text-indigo-300/90 mb-4">
                    Orbital Safety & Conjunction Assessment Platform
                  </div>

                  <p className="text-[#C7CEDA] text-xs sm:text-sm leading-relaxed mb-6">
                    Autonomous orbital risk triaging system. Ingests Conjunction Data Messages (CDMs) and high-accuracy ephemerides to compute collision probabilities and synthesize fuel-optimized avoidance trajectories.
                  </p>

                  <div className="space-y-2.5 mb-8">
                    {[
                      '24/7 automated Conjunction Data Message (CDM) screening',
                      'Covariance-based probability of collision (Pc) calculations',
                      'Fuel-efficient Collision Avoidance Maneuver (CAM) trajectory planning',
                      'Orbital lifetime modeling & space debris mitigation compliance'
                    ].map((feat, fi) => (
                      <div key={fi} className="flex items-center gap-2.5 text-xs text-[#C7CEDA]">
                        <Check className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.05] flex items-center justify-between">
                  <span className="text-[10px] font-mono text-[#8A95A3]">STATUS: ACTIVE FLIGHT DEPLOYMENT</span>
                  <button
                    onClick={scrollToContact}
                    className="text-xs font-bold font-mono text-indigo-300 hover:text-indigo-200 flex items-center gap-1.5 group/btn"
                  >
                    EXPLORE SSA <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </MotionCard>
            </Parallax3DCard>
          </div>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent mb-14 sm:mb-16" />

        {/* ── Integrations Section (Ecosystem & Compatibility) ── */}
        <div id="integrations" className="scroll-mt-24 sm:scroll-mt-28">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-20 mb-8 sm:mb-10 items-end">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.22em] text-blue-400 mb-4">Integrations</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight">
                SEAMLESS INTEGRATIONS{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  ACROSS THE<br className="hidden sm:block" /> SPACE STACK
                </span>
              </h2>
            </div>
            <p className="text-[#C7CEDA] text-sm sm:text-base leading-relaxed">
              We are payload and mission-agnostic. Akashaveda connects effortlessly with your existing ground antenna networks, satellite bus telemetry protocols, and flight software tooling.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={staggerContainer(0.1)}
            className="grid md:grid-cols-2 gap-6 mb-14 sm:mb-16"
          >
            {integrations.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.category}
                  variants={staggerItem}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="group relative flex flex-col bg-[#080d1a]/95 border border-white/[0.06] rounded-2xl p-6 sm:p-8 hover:border-blue-500/30 hover:bg-[#0c1426] transition-all duration-300 shadow-lg hover:shadow-[0_8px_30px_rgba(59,130,246,0.15)] overflow-hidden"
                >
                  {/* Top Accent Glide Line */}
                  <div className="absolute top-0 left-0 w-8 h-[2px] bg-gradient-to-r from-blue-500/50 via-cyan-400/40 to-transparent group-hover:w-full transition-all duration-500" />

                  <div className="flex items-start justify-between mb-6">
                    <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:scale-105 group-hover:bg-blue-500/20 transition-all duration-300">
                      <Icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-blue-400 border border-blue-500/20 bg-blue-500/5 px-2.5 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-extrabold text-white uppercase tracking-tight mb-3 group-hover:text-blue-300 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-[13px] sm:text-sm text-[#C7CEDA] leading-relaxed flex-1 mb-6">
                    {item.description}
                  </p>
                  <div className="border-t border-white/[0.05] pt-4">
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span key={tag} className="text-[10px] font-mono text-[#8A95A3] border border-white/[0.06] bg-white/[0.02] group-hover:border-blue-500/20 group-hover:text-[#C7CEDA] px-2.5 py-1 rounded-full transition-colors">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-14 sm:mb-16" />

        {/* ── Pricing & Deployment Tiers ── */}
        <div id="pricing" className="scroll-mt-24 sm:scroll-mt-28">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-20 mb-8 sm:mb-12 items-end">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.22em] text-blue-400 mb-4">Deployment Models</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight">
                FLEXIBLE DEPLOYMENT{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  FOR EVERY<br className="hidden sm:block" /> FLEET SIZE
                </span>
              </h2>
            </div>
            <p className="text-[#C7CEDA] text-sm sm:text-base leading-relaxed">
              From early in-orbit demonstrations to large commercial constellations, choose the deployment model that best aligns with your mission security, compliance, and telemetry throughput needs.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={staggerContainer(0.1)}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-14 sm:mb-16"
          >
            {plans.map((plan, i) => {
              const TierIcon = plan.icon;
              return (
                <motion.div
                  key={i}
                  variants={staggerItem}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className={`
                    relative flex flex-col rounded-2xl p-7 sm:p-8 justify-between group overflow-hidden transition-all duration-300
                    backdrop-blur-xl
                    ${
                      plan.popular
                        ? 'bg-gradient-to-b from-[#0b1426] to-[#070b16] border border-blue-500/30 shadow-[0_8px_36px_rgba(0,0,0,0.8)]'
                        : 'bg-[#080d1a]/95 border border-white/[0.06] hover:border-blue-400/25 hover:bg-[#0c1426] shadow-[0_8px_32px_rgba(0,0,0,0.6)]'
                    }
                  `}
                >
                  {/* Top Glowing Accent Line */}
                  <div
                    className={`absolute top-0 left-0 h-[2px] transition-all duration-500 ${
                      plan.popular
                        ? 'w-full bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500'
                        : 'w-10 group-hover:w-full bg-gradient-to-r from-blue-500/50 via-cyan-400/40 to-transparent'
                    }`}
                  />

                  <div>
                    {/* Header: Icon Pod + Tier & Badge */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                            plan.popular
                              ? 'bg-blue-500/15 border border-blue-500/30 text-blue-400'
                              : 'bg-white/[0.02] border border-white/[0.06] text-blue-400 group-hover:bg-blue-500/10 group-hover:border-blue-500/20'
                          }`}
                        >
                          <TierIcon className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-blue-400/90 block font-semibold">
                            {plan.tier}
                          </span>
                          <span className="text-[10px] font-mono text-[#8A95A3] uppercase tracking-wider">
                            MISSION TIER
                          </span>
                        </div>
                      </div>

                      {plan.badge ? (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-300 text-[10px] font-mono uppercase font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                          {plan.badge}
                        </span>
                      ) : (
                        <span className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-white/[0.02] border border-white/[0.06] text-white/50">
                          #{String(i + 1).padStart(2, '0')}
                        </span>
                      )}
                    </div>

                    {/* Plan Name */}
                    <h3 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-white leading-tight mb-2">
                      {plan.name}
                    </h3>

                    {/* Target Scale Pill */}
                    <div className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#A0AEC0] bg-white/[0.02] border border-white/[0.05] px-2.5 py-1 rounded-lg mb-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/80" />
                      {plan.target}
                    </div>

                    {/* Description */}
                    <p className="text-[#8A95A3] text-xs sm:text-sm leading-relaxed pb-5 mb-5 border-b border-white/[0.05]">
                      {plan.description}
                    </p>

                    {/* Feature Label */}
                    <p className="text-[10px] font-mono text-blue-400 tracking-[0.2em] uppercase mb-3 font-semibold">
                      Deployment Specs & Capabilities
                    </p>

                    {/* Feature List */}
                    <div className="space-y-2.5 mb-8">
                      {plan.features.map((feat, fi) => (
                        <div
                          key={fi}
                          className="flex items-start gap-2.5 text-xs text-[#C7CEDA] leading-snug"
                        >
                          <Check className="w-3.5 h-3.5 text-blue-400 flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={scrollToContact}
                    className={`
                      w-full py-3.5 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-200 flex items-center justify-center gap-2
                      ${
                        plan.popular
                          ? 'bg-blue-500 hover:bg-blue-400 text-white shadow-lg shadow-blue-500/25'
                          : 'border border-white/[0.08] hover:border-blue-500/40 bg-white/[0.03] hover:bg-blue-500/[0.1] text-[#C7CEDA] hover:text-white'
                      }
                    `}
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* ── Call to Action ── */}
        <motion.div initial="hidden" whileInView="visible" viewport={viewport} variants={fadeUp} className="relative rounded-2xl overflow-hidden p-8 sm:p-12 lg:p-16 bg-gradient-to-r from-[#0d1527] via-[#090d18] to-[#0d1527] text-center border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
          <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.06]" />
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <p className="text-xs font-mono uppercase tracking-[0.22em] text-blue-400">Get Started</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight">
              READY TO UPGRADE YOUR{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                MISSION OPERATIONS?
              </span>
            </h2>
            <p className="text-[#C7CEDA] text-sm sm:text-base lg:text-lg leading-relaxed">
              Connect with our satellite operations engineers to discuss your constellation architecture, ground network integration, and telemetry pipelines.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={scrollToContact}
                className="w-full sm:w-auto bg-blue-500 hover:bg-blue-400 text-white font-semibold text-sm sm:text-base px-8 py-4 rounded-xl shadow-lg shadow-blue-500/25 transition-all duration-200 flex items-center justify-center gap-2"
              >
                Schedule Technical Demo
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}