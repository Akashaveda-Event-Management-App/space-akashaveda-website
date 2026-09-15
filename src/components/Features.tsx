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

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-3 text-[10px] font-mono text-[#A3A3AE] border-t border-white/10 pt-2.5">
        <div>LATENCY: <span className="text-white font-medium">3.8 ms</span></div>
        <div>PACKETS: <span className="text-[#A78BFA] font-medium">100% PASS</span></div>
        <div>BITRATE: <span className="text-white font-medium">1.2 GB/s</span></div>
        <div>DOPPLER: <span className="text-[#A78BFA] font-medium">+1.4 kHz</span></div>
      </div>
    </div>
  );
}

// 2. Interactive Orbital Pass Timeline
function CommandPlanningHUD() {
  const steps = [
    { code: 'AOS', label: 'Acquire Signal', status: 'COMPLETE', color: 'text-[#A78BFA]', time: 'T-00:00' },
    { code: 'UPLINK', label: 'Command Sequence', status: 'ACTIVE', color: 'text-[#C4B5FD]', time: 'T+02:15' },
    { code: 'PAYLOAD', label: 'Execute Task', status: 'QUEUED', color: 'text-white/70', time: 'T+05:30' },
    { code: 'LOS', label: 'Downlink & Store', status: 'PENDING', color: 'text-[#A3A3AE]', time: 'T+09:42' },
  ];

  return (
    <div className="p-4 sm:p-5 bg-[#08080A] border border-white/10 rounded-[10px] backdrop-blur-md">
      <div className="flex justify-between items-center text-[10px] font-mono text-[#A3A3AE] uppercase tracking-wider mb-3">
        <span>ORBITAL PASS TIMELINE // SAT-ID: 48923</span>
        <span className="text-[#A78BFA] font-medium flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA] animate-pulse" />
          PASS WINDOW: 09:42 MIN
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        {steps.map((s, i) => (
          <div key={i} className="p-3 rounded-[8px] bg-[#121216] border border-white/10 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-mono text-[#A78BFA] font-medium">{s.code}</span>
              <span className="text-[9px] font-mono text-[#A3A3AE]">{s.time}</span>
            </div>
            <div className="text-xs font-medium text-white mb-2 leading-snug">{s.label}</div>
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
    <div className="p-4 sm:p-5 bg-[#08080A] border border-white/10 rounded-[10px] backdrop-blur-md">
      <div className="flex justify-between items-center text-[10px] font-mono text-[#A3A3AE] uppercase tracking-wider mb-3">
        <span>CONSTELLATION NETWORK TOPOLOGY // LEO 550KM</span>
        <span className="text-[#A78BFA] font-medium">12 NODES ONLINE</span>
      </div>

      <div className="relative h-20 w-full bg-[#121216] rounded-[8px] border border-white/10 flex items-center justify-around px-4">
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 rounded-full bg-[#A78BFA]/20 border border-[#A78BFA]/60 flex items-center justify-center text-[10px] font-mono text-[#A78BFA] font-medium shadow-sm">GS-1</div>
          <span className="text-[9px] font-mono text-[#A3A3AE] mt-1">BANGALORE</span>
        </div>

        <div className="h-[2px] flex-1 bg-gradient-to-r from-[#A78BFA]/40 via-white/40 to-[#A78BFA]/40 relative overflow-hidden mx-2">
          <motion.div
            animate={{ x: ['0%', '100%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
            className="w-8 h-full bg-white shadow-[0_0_8px_#fff]"
          />
        </div>

        <div className="flex flex-col items-center">
          <div className="w-9 h-9 rounded-full bg-[#7C3AED]/20 border border-[#A78BFA] flex items-center justify-center text-[10px] font-mono text-[#C4B5FD] font-medium shadow-sm">SAT-4</div>
          <span className="text-[9px] font-mono text-[#A78BFA] mt-1">LEO NODE</span>
        </div>

        <div className="h-[2px] flex-1 bg-gradient-to-r from-[#A78BFA]/40 via-white/40 to-[#A78BFA]/40 relative overflow-hidden mx-2">
          <motion.div
            animate={{ x: ['0%', '100%'] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'linear', delay: 0.3 }}
            className="w-8 h-full bg-white shadow-[0_0_8px_#fff]"
          />
        </div>

        <div className="flex flex-col items-center">
          <div className="w-8 h-8 rounded-full bg-[#A78BFA]/20 border border-[#A78BFA]/60 flex items-center justify-center text-[10px] font-mono text-[#A78BFA] font-medium shadow-sm">GS-2</div>
          <span className="text-[9px] font-mono text-[#A3A3AE] mt-1">SVALBARD</span>
        </div>
      </div>
    </div>
  );
}

// 4. Neural Network Inference Pipeline
function DualModeAIHUD() {
  return (
    <div className="p-4 sm:p-5 bg-[#08080A] border border-white/10 rounded-[10px] backdrop-blur-md">
      <div className="flex justify-between items-center text-[10px] font-mono text-[#A3A3AE] uppercase tracking-wider mb-3">
        <span>TELEMETRY TIME-SERIES INFERENCE // ANOMALY ENGINE</span>
        <span className="text-[#A78BFA] font-medium">LATENCY: 0.8ms</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
        <div className="p-3 rounded-[8px] bg-[#121216] border border-white/10 text-center">
          <div className="text-[10px] font-mono text-[#A3A3AE]">INGESTION STREAM</div>
          <div className="text-xs font-medium text-white mt-1">2,400 Channels / Sat</div>
        </div>
        <div className="p-3 rounded-[8px] bg-[#7C3AED]/10 border border-[#A78BFA]/30 text-center">
          <div className="text-[10px] font-mono text-[#A78BFA] font-medium">ANOMALY DETECTOR</div>
          <div className="text-xs font-medium text-[#C4B5FD] mt-1">Subsystem Drift Model</div>
        </div>
        <div className="p-3 rounded-[8px] bg-white/[0.04] border border-white/10 text-center">
          <div className="text-[10px] font-mono text-[#A3A3AE] font-medium">PASS EXECUTION</div>
          <div className="text-xs font-medium text-white mt-1">Autonomous Safe Procedures</div>
        </div>
      </div>
    </div>
  );
}

// 5. Scalable Cloud Node Matrix
function InfrastructureHUD() {
  return (
    <div className="p-4 sm:p-5 bg-[#08080A] border border-white/10 rounded-[10px] backdrop-blur-md">
      <div className="flex justify-between items-center text-[10px] font-mono text-[#A3A3AE] uppercase tracking-wider mb-3">
        <span>MULTI-REGION CLOUD NODE MATRIX // ENCRYPTION: AES-256</span>
        <span className="text-[#A78BFA] font-medium">SLA: 99.99%</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs font-mono">
        <div className="p-3 rounded-[8px] bg-[#121216] border border-white/10 flex items-center justify-between">
          <span className="text-[#A3A3AE]">AP-SOUTH (MUMBAI)</span>
          <span className="text-[#A78BFA] font-medium">ONLINE</span>
        </div>
        <div className="p-3 rounded-[8px] bg-[#121216] border border-white/10 flex items-center justify-between">
          <span className="text-[#A3A3AE]">EU-CENTRAL (FRANKFURT)</span>
          <span className="text-[#A78BFA] font-medium">ONLINE</span>
        </div>
        <div className="p-3 rounded-[8px] bg-[#121216] border border-white/10 flex items-center justify-between">
          <span className="text-[#A3A3AE]">US-EAST (VIRGINIA)</span>
          <span className="text-[#A78BFA] font-medium">ONLINE</span>
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
      className="relative py-16 sm:py-24 bg-[#000000] border-t border-white/10 overflow-hidden scroll-mt-24 sm:scroll-mt-28"
    >
      {/* Cyber Grid Lines Background Overlay */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_0.8px,transparent_0.8px)] [background-size:32px_32px] opacity-[0.03]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_40%_at_50%_0%,rgba(124,58,237,0.06),transparent)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <motion.div initial="hidden" whileInView="visible" viewport={viewport} variants={fadeUp} className="mb-8 sm:mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="diamond-tick" />
            <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#A78BFA]">Platform</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-20 items-end">
            <h2
              id="services-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-tight"
            >
              Cloud-Scale{' '}
              <span className="text-[#A78BFA]">
                Flight Operations
              </span>
            </h2>
            <p className="text-[#A3A3AE] text-base sm:text-lg font-light leading-[1.85]">
              Designed from the ground up for modern satellite programs — eliminating fragile legacy scripts in favor of deterministic, cloud-native constellation orchestration.
            </p>
          </div>
        </motion.div>

        {/* ── Interactive Service Showcase (Aerospace HUD UI) ── */}
        <motion.div initial="hidden" whileInView="visible" viewport={viewport} variants={fadeUp} className="rounded-[10px] bg-[#08080A] border border-white/10 backdrop-blur-xl overflow-hidden mb-14 sm:mb-16 shadow-sm">
          
          {/* Top Aerospace Terminal Bar */}
          <div className="px-4 sm:px-6 py-3 sm:py-3.5 bg-[#121216] border-b border-white/10 flex items-center justify-between text-xs font-mono text-[#A3A3AE]">
            <div className="flex items-center gap-2 sm:gap-3 truncate">
              <Terminal className="w-3.5 h-3.5 text-[#A78BFA] flex-shrink-0" />
              <span className="text-white font-medium truncate text-[11px] sm:text-xs">AKASHAVEDA // CONSTELLATION CONTROL</span>
              <span className="hidden sm:inline-flex items-center gap-1.5 text-[10px] bg-[#A78BFA]/10 text-[#A78BFA] border border-[#A78BFA]/20 px-2.5 py-0.5 rounded-full font-medium flex-shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA] animate-pulse" />
                TELEMETRY NOMINAL
              </span>
            </div>
            <div className="flex items-center gap-3 sm:gap-4 text-[11px] text-[#A3A3AE] flex-shrink-0">
              <span className="hidden md:inline">PASS ORCHESTRATION: <span className="text-[#A78BFA] font-medium">ACTIVE</span></span>
              <span>PING: <span className="text-[#A78BFA] font-medium">3.8ms</span></span>
            </div>
          </div>

          <div className="grid lg:grid-cols-[2fr_3fr]">

            {/* Left: Numbered Tab list */}
            <div className="border-b lg:border-b-0 lg:border-r border-white/10 bg-black/40 overflow-x-auto lg:overflow-x-visible no-scrollbar flex lg:flex-col">
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
                      ${i < services.length - 1 ? 'border-r lg:border-r-0 lg:border-b border-white/5' : ''}
                      ${isActive ? 'bg-[#121216]' : 'hover:bg-white/[0.02]'}
                    `}
                  >
                    {/* Active left bar with layout motion on desktop, bottom indicator on mobile */}
                    {isActive && (
                      <>
                        <motion.span
                          layoutId="activeTabIndicator"
                          className="hidden lg:block absolute left-0 top-0 bottom-0 w-[2px] bg-[#7C3AED]"
                          transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                        />
                        <motion.span
                          layoutId="activeTabIndicatorMobile"
                          className="lg:hidden absolute bottom-0 left-0 right-0 h-[2px] bg-[#7C3AED]"
                          transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                        />
                      </>
                    )}

                    {/* Step Number */}
                    <span className={`font-mono text-xs font-medium transition-colors ${isActive ? 'text-[#A78BFA]' : 'text-[#A3A3AE] group-hover:text-white'}`}>
                      {s.step}
                    </span>

                    {/* Icon */}
                    <div
                      className={`w-9 h-9 rounded-[8px] flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        isActive
                          ? 'bg-white/[0.06] border border-[#A78BFA]/40 text-[#A78BFA]'
                          : 'bg-white/[0.02] border border-white/10 group-hover:bg-white/[0.06] text-white/50'
                      }`}
                    >
                      <SvcIcon className="w-4 h-4" />
                    </div>

                    {/* Label + Subtitle */}
                    <div className="flex-1 min-w-0">
                      <div
                        className={`text-xs sm:text-sm font-medium leading-tight whitespace-nowrap lg:whitespace-normal transition-colors duration-200 ${
                          isActive ? 'text-white' : 'text-[#A3A3AE] group-hover:text-white'
                        }`}
                      >
                        {s.label}
                      </div>
                      <div className={`text-[10px] font-mono mt-0.5 tracking-wide flex items-center gap-1.5 whitespace-nowrap transition-colors duration-200 ${
                        isActive ? 'text-[#A78BFA]' : 'text-[#A3A3AE]/70 group-hover:text-[#A3A3AE]'
                      }`}>
                        {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA] animate-pulse" />}
                        {s.subtitle}
                      </div>
                    </div>

                    <ArrowRight
                      className={`hidden lg:block w-4 h-4 flex-shrink-0 transition-all duration-300 ${
                        isActive ? 'text-[#A78BFA] translate-x-0' : 'text-transparent -translate-x-1'
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Right: Detail panel with AnimatePresence */}
            <div className="overflow-hidden bg-[#08080A] p-5 sm:p-8 lg:p-10 flex flex-col justify-between">
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
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-[8px] bg-white/[0.04] border border-white/10 flex items-center justify-center flex-shrink-0 text-[#A78BFA]">
                        <Icon className="w-4.5 h-4.5" />
                      </div>
                      <div className="h-px flex-1 bg-white/10" />
                      <span className="text-[10px] font-mono text-[#A78BFA] bg-[#A78BFA]/10 border border-[#A78BFA]/20 px-3 py-1 rounded-full uppercase tracking-widest font-medium">
                        STATUS: {svc.stat.value} {svc.stat.label}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-medium tracking-tight text-white leading-tight mb-3">
                      {svc.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[#A3A3AE] text-xs sm:text-sm md:text-base font-light leading-[1.8] mb-5 sm:mb-6">
                      {svc.description}
                    </p>

                    {/* Checklist Badges */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 mb-6">
                      {svc.features.map((f, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2.5 px-3.5 py-2.5 bg-white/[0.02] border border-white/8 hover:border-[#A78BFA]/30 rounded-[8px] text-xs text-[#A3A3AE] font-normal transition-colors"
                        >
                          <Check className="w-3.5 h-3.5 text-[#A78BFA] flex-shrink-0" />
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
                  <div className="pt-3 sm:pt-4 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                    <button
                      onClick={scrollToContact}
                      className="group flex items-center gap-2 text-xs font-medium text-[#A78BFA] hover:text-white uppercase tracking-widest font-mono transition-colors duration-200"
                    >
                      REQUEST TECHNICAL DEMONSTRATION
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                    </button>
                    <span className="text-[10px] font-mono text-[#A3A3AE]/70">CLOUD-C2 // ARCHITECTURE</span>
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
              <div className="flex items-center gap-2 mb-4">
                <span className="diamond-tick" />
                <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#A78BFA]">Products</p>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-tight">
                Mission-Critical{' '}
                <span className="text-[#A78BFA]">
                  Flight & Safety Software
                </span>
              </h2>
            </div>
            <p className="text-[#A3A3AE] text-sm sm:text-base font-light leading-relaxed">
              Engineered to replace fragmented legacy tools. Our software products provide real-time constellation telemetry processing, automated pass execution, and orbital conjunction safety.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {/* Product 1: VYUH-MCS */}
            <Parallax3DCard>
              <MotionCard
                hoverY={-4}
                glow
                className="relative p-7 sm:p-9 rounded-[10px] bg-[#08080A] backdrop-blur-xl h-full flex flex-col justify-between shadow-sm border border-white/10 hover:border-[#A78BFA]/40 transition-all duration-300 group overflow-hidden"
              >
                {/* Top Accent Glide Line */}
                <div className="absolute top-0 left-0 w-10 h-[2px] bg-[#A78BFA] group-hover:w-full transition-all duration-500" />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[10px] font-mono font-medium uppercase tracking-widest text-[#A78BFA] bg-[#A78BFA]/10 border border-[#A78BFA]/25 px-3 py-1 rounded-full flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA] animate-pulse" />
                      FLAGSHIP MCS
                    </span>
                    <div className="w-9 h-9 rounded-[8px] bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#A78BFA] group-hover:scale-105 transition-transform">
                      <Cpu className="w-4.5 h-4.5" />
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-white mb-1 group-hover:text-[#A78BFA] transition-colors">
                    VYUH-MCS
                  </h3>
                  <div className="text-xs font-mono text-[#A78BFA]/90 mb-4">
                    Next-Generation Mission Control System
                  </div>

                  <p className="text-[#A3A3AE] text-xs sm:text-sm font-light leading-relaxed mb-6">
                    A cloud-native satellite Command & Control (C2) suite designed for high-rate telemetry parsing, automated contact pass execution, command verification interlocks, and XTCE database compliance.
                  </p>

                  <div className="space-y-2.5 mb-8">
                    {[
                      'Sub-10ms packet decommutation and time-series telemetry archiving',
                      'Automated multi-satellite contact pass execution with zero operator lag',
                      'Cryptographic command authorization & role-based access control',
                      'Turnkey integration with AWS Ground Station, KSAT, and custom RF'
                    ].map((feat, fi) => (
                      <div key={fi} className="flex items-center gap-2.5 text-xs text-[#A3A3AE]">
                        <Check className="w-3.5 h-3.5 text-[#A78BFA] flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-[#A3A3AE]/70">STATUS: PRODUCTION READY</span>
                  <button
                    onClick={scrollToContact}
                    className="text-xs font-medium font-mono text-[#A78BFA] hover:text-white flex items-center gap-1.5 group/btn"
                  >
                    REQUEST DEMO <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </MotionCard>
            </Parallax3DCard>

            {/* Product 2: CHAKRA-SSA */}
            <Parallax3DCard>
              <MotionCard
                hoverY={-4}
                glow
                className="relative p-7 sm:p-9 rounded-[10px] bg-[#08080A] backdrop-blur-xl h-full flex flex-col justify-between shadow-sm border border-white/10 hover:border-[#A78BFA]/40 transition-all duration-300 group overflow-hidden"
              >
                {/* Top Accent Glide Line */}
                <div className="absolute top-0 left-0 w-10 h-[2px] bg-[#A78BFA] group-hover:w-full transition-all duration-500" />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[10px] font-mono font-medium uppercase tracking-widest text-[#A78BFA] bg-[#A78BFA]/10 border border-[#A78BFA]/25 px-3 py-1 rounded-full flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA] animate-pulse" />
                      SPACE SITUATIONAL AWARENESS
                    </span>
                    <div className="w-9 h-9 rounded-[8px] bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#A78BFA] group-hover:scale-105 transition-transform">
                      <Radio className="w-4.5 h-4.5" />
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-white mb-1 group-hover:text-[#A78BFA] transition-colors">
                    CHAKRA-SSA
                  </h3>
                  <div className="text-xs font-mono text-[#A78BFA]/90 mb-4">
                    Orbital Safety & Conjunction Assessment Platform
                  </div>

                  <p className="text-[#A3A3AE] text-xs sm:text-sm font-light leading-relaxed mb-6">
                    Autonomous orbital risk triaging system. Ingests Conjunction Data Messages (CDMs) and high-accuracy ephemerides to compute collision probabilities and synthesize fuel-optimized avoidance trajectories.
                  </p>

                  <div className="space-y-2.5 mb-8">
                    {[
                      '24/7 automated Conjunction Data Message (CDM) screening',
                      'Covariance-based probability of collision (Pc) calculations',
                      'Fuel-efficient Collision Avoidance Maneuver (CAM) trajectory planning',
                      'Orbital lifetime modeling & space debris mitigation compliance'
                    ].map((feat, fi) => (
                      <div key={fi} className="flex items-center gap-2.5 text-xs text-[#A3A3AE]">
                        <Check className="w-3.5 h-3.5 text-[#A78BFA] flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-[#A3A3AE]/70">STATUS: ACTIVE FLIGHT DEPLOYMENT</span>
                  <button
                    onClick={scrollToContact}
                    className="text-xs font-medium font-mono text-[#A78BFA] hover:text-white flex items-center gap-1.5 group/btn"
                  >
                    EXPLORE SSA <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </MotionCard>
            </Parallax3DCard>
          </div>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-14 sm:mb-16" />

        {/* ── Integrations Section (Ecosystem & Compatibility) ── */}
        <div id="integrations" className="scroll-mt-24 sm:scroll-mt-28">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-20 mb-8 sm:mb-10 items-end">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.22em] text-[#A78BFA] mb-4 flex items-center gap-2">
                <span className="diamond-tick">◆</span>
                Integrations
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight">
                SEAMLESS INTEGRATIONS{' '}
                <span className="text-[#A78BFA]">
                  ACROSS THE<br className="hidden sm:block" /> SPACE STACK
                </span>
              </h2>
            </div>
            <p className="text-[#A3A3AE] text-sm sm:text-base leading-relaxed">
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
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="group relative flex flex-col bg-[#08080A] border border-white/10 rounded-[10px] p-6 sm:p-8 hover:border-[#A78BFA]/40 transition-all duration-200 overflow-hidden"
                >
                  {/* Top Accent Glide Line */}
                  <div className="absolute top-0 left-0 w-8 h-[2px] bg-gradient-to-r from-[#7C3AED] via-[#A78BFA] to-transparent group-hover:w-full transition-all duration-500" />

                  <div className="flex items-start justify-between mb-6">
                    <div className="w-10 h-10 rounded-[8px] bg-white/[0.03] border border-white/10 flex items-center justify-center text-[#A78BFA] group-hover:border-[#A78BFA]/40 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#A78BFA] border border-[#A78BFA]/30 bg-[#A78BFA]/5 px-2.5 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-tight mb-3 group-hover:text-[#A78BFA] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-[13px] sm:text-sm text-[#A3A3AE] leading-relaxed flex-1 mb-6">
                    {item.description}
                  </p>
                  <div className="border-t border-white/10 pt-4">
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span key={tag} className="text-[10px] font-mono text-[#71717A] border border-white/10 bg-white/[0.02] px-2.5 py-1 rounded-full transition-colors">
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
              <p className="text-xs font-mono uppercase tracking-[0.22em] text-[#A78BFA] mb-4 flex items-center gap-2">
                <span className="diamond-tick">◆</span>
                Deployment Models
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight">
                FLEXIBLE DEPLOYMENT{' '}
                <span className="text-[#A78BFA]">
                  FOR EVERY<br className="hidden sm:block" /> FLEET SIZE
                </span>
              </h2>
            </div>
            <p className="text-[#A3A3AE] text-sm sm:text-base leading-relaxed">
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
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className={`
                    relative flex flex-col rounded-[10px] p-7 sm:p-8 justify-between group overflow-hidden transition-all duration-300
                    ${
                      plan.popular
                        ? 'bg-[#0D0D12] border-2 border-[#7C3AED] shadow-[0_0_30px_rgba(124,58,237,0.15)]'
                        : 'bg-[#08080A] border border-white/10 hover:border-white/20'
                    }
                  `}
                >
                  {/* Top Glowing Accent Line */}
                  <div
                    className={`absolute top-0 left-0 h-[2px] transition-all duration-500 ${
                      plan.popular
                        ? 'w-full bg-gradient-to-r from-[#7C3AED] via-[#A78BFA] to-[#7C3AED]'
                        : 'w-10 group-hover:w-full bg-gradient-to-r from-[#7C3AED] via-[#A78BFA] to-transparent'
                    }`}
                  />

                  <div>
                    {/* Header: Icon Pod + Tier & Badge */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-[8px] flex items-center justify-center transition-all duration-300 ${
                            plan.popular
                              ? 'bg-[#7C3AED]/20 border border-[#7C3AED]/40 text-[#A78BFA]'
                              : 'bg-white/[0.03] border border-white/10 text-[#A78BFA]'
                          }`}
                        >
                          <TierIcon className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#A78BFA] block font-semibold">
                            {plan.tier}
                          </span>
                          <span className="text-[10px] font-mono text-[#71717A] uppercase tracking-wider">
                            MISSION TIER
                          </span>
                        </div>
                      </div>

                      {plan.badge ? (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#7C3AED]/20 border border-[#7C3AED]/40 text-[#A78BFA] text-[10px] font-mono uppercase font-semibold">
                          <span className="diamond-tick text-[8px]">◆</span>
                          {plan.badge}
                        </span>
                      ) : (
                        <span className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-white/[0.02] border border-white/10 text-white/50">
                          #{String(i + 1).padStart(2, '0')}
                        </span>
                      )}
                    </div>

                    {/* Plan Name */}
                    <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white leading-tight mb-2">
                      {plan.name}
                    </h3>

                    {/* Target Scale Pill */}
                    <div className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#A3A3AE] bg-white/[0.03] border border-white/10 px-2.5 py-1 rounded-[6px] mb-4">
                      <span className="diamond-tick text-[8px]">◆</span>
                      {plan.target}
                    </div>

                    {/* Description */}
                    <p className="text-[#A3A3AE] text-xs sm:text-sm leading-relaxed pb-5 mb-5 border-b border-white/10">
                      {plan.description}
                    </p>

                    {/* Feature Label */}
                    <p className="text-[10px] font-mono text-[#A78BFA] tracking-[0.2em] uppercase mb-3 font-semibold flex items-center gap-1.5">
                      <span className="diamond-tick text-[8px]">◆</span>
                      Deployment Specs & Capabilities
                    </p>

                    {/* Feature List */}
                    <div className="space-y-2.5 mb-8">
                      {plan.features.map((feat, fi) => (
                        <div
                          key={fi}
                          className="flex items-start gap-2.5 text-xs text-[#D4D4D8] leading-snug"
                        >
                          <Check className="w-3.5 h-3.5 text-[#A78BFA] flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={scrollToContact}
                    className={`
                      w-full py-3.5 rounded-full font-medium text-xs sm:text-sm transition-all duration-200 flex items-center justify-center gap-2
                      ${
                        plan.popular
                          ? 'cta cta-primary'
                          : 'cta cta-secondary'
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
        <motion.div initial="hidden" whileInView="visible" viewport={viewport} variants={fadeUp} className="relative rounded-[10px] overflow-hidden p-8 sm:p-12 lg:p-16 bg-[#08080A] text-center border border-white/10">
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <p className="text-xs font-mono uppercase tracking-[0.22em] text-[#A78BFA] flex items-center justify-center gap-2">
              <span className="diamond-tick">◆</span>
              Get Started
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight">
              READY TO UPGRADE YOUR{' '}
              <span className="text-[#A78BFA]">
                MISSION OPERATIONS?
              </span>
            </h2>
            <p className="text-[#A3A3AE] text-sm sm:text-base lg:text-lg leading-relaxed">
              Connect with our satellite operations engineers to discuss your constellation architecture, ground network integration, and telemetry pipelines.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={scrollToContact}
                className="cta cta-primary w-full sm:w-auto text-sm sm:text-base px-8 py-4 rounded-full flex items-center justify-center gap-2"
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