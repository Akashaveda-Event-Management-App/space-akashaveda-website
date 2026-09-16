import { useState, useEffect, useRef } from 'react';
import { 
  Activity, 
  Cpu, 
  Cloud, 
  Layers, 
  Zap, 
  ArrowRight, 
  Check, 
  Radio, 
  Network, 
  Server, 
  ShieldCheck, 
  Rocket, 

  LayoutGrid, 

  Terminal as TerminalIcon,
  Maximize2,
  Minus,
  X
} from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { fadeUp, staggerContainer, staggerItem, viewport } from '../lib/motion';
import Card3D from './Card3D';

/* ── Data ─────────────────────────────────────────── */
const services = [
  {
    step: '01',
    icon: Activity,
    label: 'Telemetry Stream',
    subtitle: '<10ms Stream Ingestion',
    title: 'Continuous Telemetry & Anomaly Analytics',
    description: 'High-throughput time-series telemetry engine that streams, decodes, and analyzes multi-channel satellite housekeeping data. Predictive regression models detect subsystem drift.',
    features: ['Sub-10ms stream parsing', 'Predictive drift detection', 'Automated health scoring'],
    stat: { value: '<10ms', label: 'Ingestion' },
  },
  {
    step: '02',
    icon: Cpu,
    label: 'Pass Scheduling',
    subtitle: 'Zero Conflict Contact Optimizer',
    title: 'Automated Pass & Contact Scheduling',
    description: 'Autonomous orbital pass generation and contact plan optimizer. Resolves antenna pointing windows and priorities across distributed ground station networks.',
    features: ['Multi-ground station scheduling', 'Automated link margin budgets', 'Dynamic re-planning on LOS'],
    stat: { value: '100%', label: 'Hands-off' },
  },
  {
    step: '03',
    icon: Layers,
    label: 'Unified C2',
    subtitle: 'Single-Pane Mission Control',
    title: 'Integrated Command & Control Platform',
    description: 'A unified cloud mission control center that replaces fragmented tools. Manage flight software procedures, uplinks, and payload tasking from a single secure workspace.',
    features: ['Single-pane mission dashboard', 'Constellation overview', 'Role-based command auditing'],
    stat: { value: '1 Workspace', label: 'All Operations' },
  },
  {
    step: '04',
    icon: Zap,
    label: 'Autonomy Engine',
    subtitle: 'Deterministic Failsafe Logic',
    title: 'On-Board & Cloud Autonomy Engine',
    description: 'Akashaveda executes routine health verification, flight procedures, and safe-mode recovery deterministically, eliminating the need for manual pass triaging.',
    features: ['Procedure automation engine', 'Zero human pass latency', 'Deterministic failsafes'],
    stat: { value: '24/7', label: 'Autonomous' },
  },
  {
    step: '05',
    icon: Cloud,
    label: 'Infrastructure',
    subtitle: 'Hyperscale Multi-Region Grid',
    title: 'Cloud-Native Distributed Infrastructure',
    description: 'Built natively on modern hyperscale cloud architecture with multi-region high availability, end-to-end AES-256 encryption, and low-latency websocket connections.',
    features: ['Global multi-region availability', 'Scalable from 1 to 1000+ sats', 'AES-256 encrypted links'],
    stat: { value: '99.99%', label: 'SLA' },
  },
];

const integrations = [
  {
    id: 'ground-stations.sh',
    step: '01',
    shortLabel: 'Ground Stations',
    icon: Radio,
    category: 'Ground Stations & Networks',
    title: 'GSaaS & Dedicated Antennas',
    description: 'Plug-and-play compatibility with AWS Ground Station, KSAT, Leaf Space, and custom proprietary UHF/S/X/Ka-band ground terminals via standard REST/gRPC APIs.',
    tags: ['AWS GS', 'KSAT Lite', 'Leaf Space', 'Custom Antenna'],
    src: '/images/ground_station_antenna.jpg',
    alt: 'Parabolic Ground Station Tracking Antenna',
    badge: 'AUTONOMOUS AOS/LOS',
    sub: 'UHF / S / X / Ka',
    telemetryMetrics: [
      { label: 'CARRIER LOCK', value: '2.245 GHz' },
      { label: 'BER', value: '< 10⁻⁷' },
      { label: 'THROUGHPUT', value: '150 Mbps' },
      { label: 'TRACKING', value: 'Az/El Auto' },
    ],
    revealSpecs: [
      { label: 'PROTOCOLS', value: 'CCSDS, REST, gRPC' },
      { label: 'FREQUENCY', value: 'UHF, S, X, Ka-Band' },
      { label: 'SCHEDULING', value: 'Automated dispatch' },
    ],
  },
  {
    id: 'flight-buses.sh',
    step: '02',
    shortLabel: 'Flight Buses',
    icon: Server,
    category: 'Flight Hardware & Buses',
    title: 'Bus Agnostic Architecture',
    description: 'Hardware-agnostic integration supporting CubeSat, SmallSat, and ESPA-class buses. Pre-configured telemetry decoders for major commercial OBCs.',
    tags: ['CubeSat / SmallSat', 'Commercial OBCs', 'COTS ADCS'],
    src: '/images/cubesat_avionics_hardware.jpg',
    alt: 'CubeSat Avionics Bus Stack',
    badge: 'COTS & PROPRIETARY',
    sub: '1U–16U / ESPA',
    telemetryMetrics: [
      { label: 'HERITAGE', value: 'TRL 9' },
      { label: 'FORM FACTORS', value: '1U–16U, ESPA' },
      { label: 'INTERFACE', value: 'SpaceWire/CAN' },
      { label: 'TELEMETRY', value: '50k pts/sec' },
    ],
    revealSpecs: [
      { label: 'COMPATIBILITY', value: 'CubeSat, SmallSat' },
      { label: 'OBC TELEMETRY', value: 'SEDS, XTCE, Binary' },
      { label: 'CAPACITY', value: '50k pts/s per sat' },
    ],
  },
  {
    id: 'ccsds-streams.sh',
    step: '03',
    shortLabel: 'CCSDS & Streams',
    icon: Network,
    category: 'Protocols & APIs',
    title: 'Standards-Compliant Stack',
    description: 'Native support for CCSDS standards, XTCE databases, RESTful endpoints, and real-time Kafka streaming for external analytics.',
    tags: ['CCSDS', 'XTCE', 'Kafka', 'REST / gRPC'],
    src: '/images/satellite_laser_interlink.jpg',
    alt: 'Optical Inter-Satellite Laser Link',
    badge: 'CCSDS & OPTICAL MESH',
    sub: 'KAFKA / gRPC',
    telemetryMetrics: [
      { label: 'STANDARD', value: 'CCSDS/XTCE' },
      { label: 'BROKER', value: 'Kafka 3.4' },
      { label: 'LATENCY', value: '< 8.2ms p99' },
      { label: 'EXPORT', value: 'Parquet, S3' },
    ],
    revealSpecs: [
      { label: 'STANDARDS', value: 'CCSDS 130.0, XTCE' },
      { label: 'API SURFACES', value: 'REST + Async gRPC' },
      { label: 'EXPORT', value: 'Parquet, InfluxDB' },
    ],
  },
  {
    id: 'zero-trust.sh',
    step: '04',
    shortLabel: 'Zero-Trust Cyber',
    icon: ShieldCheck,
    category: 'Enterprise & Security',
    title: 'Zero-Trust Security & Compliance',
    description: 'Military-grade encryption for all uplink commands, strict role-based access control (RBAC), multi-factor authorization, and immutable audit logs.',
    tags: ['AES-256', 'RBAC & 2FA', 'Immutable Logs'],
    src: '/images/spacecraft_ion_propulsion.jpg',
    alt: 'Spacecraft Autonomous Flight Maneuver',
    badge: 'FIPS 140-3 LEVEL 3',
    sub: 'AES-256-GCM',
    telemetryMetrics: [
      { label: 'UPLINK CIPHER', value: 'AES-256-GCM' },
      { label: 'HSM ENCLAVE', value: 'FIPS 140-3' },
      { label: 'AUTH', value: 'Dual Multi-Sig' },
      { label: 'INTEGRITY', value: 'Immutable' },
    ],
    revealSpecs: [
      { label: 'CIPHER', value: 'AES-256-GCM hardware' },
      { label: 'KEY SIGNING', value: 'FIPS 140-2 Level 3' },
      { label: 'AUTHORIZATION', value: '2-operator multi-sig' },
    ],
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
    quickMetrics: ['1–3 Sats', '<48h Setup', '99.9% SLA'],
    features: [
      'Full telemetry stream decoding (XTCE / SEDS)',
      'Automated pass scheduling & contact prediction',
      'Unified C2 web mission dashboard',
      'Standard ground station network connector',
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
    quickMetrics: ['4–50+ Sats', '<200ms Failover', '99.99% SLA'],
    features: [
      'Predictive ML anomaly & drift detection',
      'Multi-satellite concurrent automated passes',
      'Automated GS network routing & failover',
      'High-throughput time-series telemetry DB',
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
    quickMetrics: ['Dedicated Fleets', 'FIPS 140-3 HSM', '99.999% SLA'],
    features: [
      'Custom hardware bus decoders & ADCS rigs',
      'Dedicated VPC / Air-gapped on-premise setup',
      'Custom 99.99% mission SLA guarantees',
      'Hardware Security Module (HSM) key signing',
    ],
    cta: 'Consult Flight Engineers',
    popular: false,
  },
];

/* ── Mini Dashboards for Platform Tabs ── */
function TelemetryOscilloscope() {
  const [sineOffset, setSineOffset] = useState(0);
  useEffect(() => {
    const iv = setInterval(() => setSineOffset((prev) => (prev + 0.15) % (Math.PI * 2)), 40);
    return () => clearInterval(iv);
  }, []);
  const points = Array.from({ length: 40 })
    .map((_, i) => {
      const x = (i / 39) * 320;
      const y = 20 + Math.sin(i * 0.4 + sineOffset) * 12 + Math.cos(i * 0.2 - sineOffset) * 6;
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    }).join(' ');

  return (
    <div className="p-4 bg-black/40 rounded-xl border border-white/5">
      <div className="flex justify-between items-center text-[10px] font-mono text-[#8A95A3] uppercase tracking-wider mb-4">
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#47B2E4] animate-pulse" />
          SIGNAL FEED // 437.450 MHz
        </span>
        <span className="text-[#47B2E4] font-semibold">SNR: 34.2 dB</span>
      </div>
      <div className="relative h-12 w-full flex items-center justify-center">
        <svg viewBox="0 0 320 40" className="w-full h-full text-[#47B2E4] opacity-80">
          <polyline fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" points={points} />
        </svg>
      </div>
    </div>
  );
}

function CommandPlanningHUD() {
  const steps = [
    { code: 'AOS', label: 'Acquire Signal', status: 'COMPLETE', color: 'text-[#47B2E4]' },
    { code: 'UPLINK', label: 'Command Sequence', status: 'ACTIVE', color: 'text-white' },
    { code: 'PAYLOAD', label: 'Execute Task', status: 'QUEUED', color: 'text-white/50' },
    { code: 'LOS', label: 'Downlink & Store', status: 'PENDING', color: 'text-white/30' },
  ];
  return (
    <div className="p-4 bg-black/40 rounded-xl border border-white/5">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {steps.map((s, i) => (
          <div key={i} className="flex flex-col">
            <span className={`text-[10px] font-mono font-medium mb-1 ${s.color}`}>{s.code}</span>
            <span className="text-xs text-white/90 truncate mb-1">{s.label}</span>
            <span className="text-[9px] font-mono text-[#6B7785]">{s.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function InfrastructureHUD() {
  const regions = [
    { name: 'AP-SOUTH', loc: 'MUMBAI', status: 'ONLINE' },
    { name: 'EU-CENTRAL', loc: 'FRANKFURT', status: 'ONLINE' },
    { name: 'US-EAST', loc: 'VIRGINIA', status: 'ONLINE' }
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
      {regions.map((r, i) => (
        <div key={i} className="p-3 rounded-xl bg-black/40 border border-white/5 flex flex-col items-start">
          <span className="text-[10px] font-mono text-[#47B2E4] mb-1">{r.name}</span>
          <span className="text-xs text-white/90">{r.loc}</span>
        </div>
      ))}
    </div>
  );
}

const huds = [TelemetryOscilloscope, CommandPlanningHUD, TelemetryOscilloscope, CommandPlanningHUD, InfrastructureHUD];


/* ── Main Component ─────────────────────────────── */
export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  
  // Platform Tabs
  const [active, setActive] = useState(0);
  
  // Integrations Section View Logic
  const [integrationView, setIntegrationView] = useState<'console' | 'deck' | 'grid'>('console');
  const [activeIntegration, setActiveIntegration] = useState(0);
  const [isDeckHovered, setIsDeckHovered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const bgGlowY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section ref={sectionRef} id="platform" className="relative py-16 sm:py-24 bg-[#000000] border-t border-white/10 overflow-hidden scroll-mt-24">
      {/* Subtle Grid Lines Overlay */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_0.8px,transparent_0.8px)] [background-size:32px_32px] opacity-[0.03]" />
        <motion.div style={{ y: bgGlowY }} className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-4/5 h-1/2 bg-[#47B2E4]/5 rounded-full blur-[140px]" />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <motion.div initial="hidden" whileInView="visible" viewport={viewport} variants={fadeUp} className="mb-8 sm:mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#47B2E4] shadow-[0_0_8px_#47B2E4]" />
            <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#47B2E4]">Platform Ecosystem</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-20 items-end">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-tight font-display">
              Cloud-Scale <br/> <span className="text-[#47B2E4]">Flight Operations</span>
            </h2>
            <p className="text-[#94A3B8] text-base sm:text-lg font-light leading-relaxed">
              Designed from the ground up for modern satellite programs — eliminating fragile legacy scripts in favor of deterministic, cloud-native constellation orchestration.
            </p>
          </div>
        </motion.div>

        {/* ── Platform Stacked Tabs Container ── */}
        <div className="mb-24">
          <div className="flex flex-row items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-6 [perspective:1000px]">
            {services.map((s, idx) => {
              const SvcIcon = s.icon;
              const isSelected = active === idx;
              return (
                <button
                  key={s.step}
                  onClick={() => setActive(idx)}
                  className={`relative px-4 py-2.5 rounded-xl font-mono text-xs transition-colors flex items-center gap-2 flex-shrink-0 cursor-pointer ${
                    isSelected ? 'text-white' : 'text-[#A3A3AE] hover:text-white bg-white/[0.02] border border-white/5'
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activePlatformPill"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                      className="absolute inset-0 bg-[#47B2E4]/10 border border-[#47B2E4]/40 rounded-xl"
                    />
                  )}
                  <span className="font-mono text-[10px] text-[#47B2E4]">{s.step}</span>
                  <SvcIcon className="w-3.5 h-3.5 flex-shrink-0" />
                  <span className="truncate relative z-10">{s.label}</span>
                </button>
              );
            })}
          </div>

          <div className="relative min-h-[480px] sm:min-h-[420px] w-full">
            {services.map((s, idx) => {
              const offset = (idx - active + services.length) % services.length;
              if (offset > 2) return null;
              const isTop = offset === 0;
              const HudComponent = huds[idx];
              const SvcIcon = s.icon;

              return (
                <motion.div
                  key={s.step}
                  layout
                  initial={false}
                  animate={{
                    top: offset * 16,
                    scale: 1 - offset * 0.03,
                    zIndex: 20 - offset,
                    opacity: 1 - offset * 0.3,
                  }}
                  transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                  onClick={() => { if (!isTop) setActive(idx); }}
                  className={`w-full absolute top-0 left-0 transition-transform ${!isTop ? 'cursor-pointer hover:-translate-y-1' : ''}`}
                >
                  <Card3D
                    maxTilt={isTop ? 2 : 0}
                    glareColor="rgba(71, 178, 228, 0.1)"
                    enableHoverExpand={isTop}
                    expandContent={
                      <div className="pt-4 mt-2 border-t border-white/5">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                          {s.features.map((f, fi) => (
                            <div key={fi} className="flex items-center gap-2 px-3 py-2 bg-white/[0.02] rounded-lg text-xs text-white/80 font-mono">
                              <Check className="w-3 h-3 text-[#47B2E4] flex-shrink-0" />
                              <span className="truncate">{f}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    }
                    className="rounded-2xl bg-gradient-to-b from-[#0A0D14] to-black/80 border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_10px_30px_rgba(0,0,0,0.5)] p-6 sm:p-8 overflow-hidden"
                  >
                    <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/5">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#47B2E4]/10 border border-[#47B2E4]/20 flex items-center justify-center text-[#47B2E4] shadow-inner">
                          <SvcIcon className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-[10px] text-[#47B2E4] uppercase tracking-widest block mb-0.5">
                            {s.subtitle}
                          </span>
                          <h3 className="text-lg sm:text-xl font-medium text-white tracking-tight leading-tight">
                            {s.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                    <p className="text-[#A3A3AE] text-sm font-light leading-relaxed mb-6 max-w-3xl">
                      {s.description}
                    </p>
                    <div className="mb-2">
                      <HudComponent />
                    </div>
                  </Card3D>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="w-full h-px bg-white/5 mb-16" />

        {/* ── Integrations Section (Mac Terminal & Deck Spill) ── */}
        <div id="integrations" className="scroll-mt-24 sm:scroll-mt-28 mb-24">
          <div className="grid lg:grid-cols-2 gap-8 mb-8 items-end">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#47B2E4] shadow-[0_0_8px_#47B2E4]" />
                <p className="text-[11px] font-mono uppercase tracking-widest text-[#47B2E4]">Architecture Integrations</p>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-tight font-display">
                Seamless Across the <br className="hidden sm:block" />
                <span className="text-[#47B2E4] drop-shadow-sm">Space Stack</span>
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="text-[#94A3B8] text-sm font-light leading-relaxed max-w-md">
                Payload and mission-agnostic. Connect effortlessly with ground antenna networks, satellite bus protocols, and flight software tooling.
              </p>

              {/* View Switcher */}
              <div className="flex items-center p-1 rounded-full bg-black/40 border border-white/10 shadow-inner flex-shrink-0 self-start sm:self-auto backdrop-blur-md">
                <button
                  onClick={() => setIntegrationView('console')}
                  className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all duration-300 flex items-center gap-1.5 ${
                    integrationView === 'console' ? 'bg-[#47B2E4] text-black font-bold shadow-[0_0_10px_rgba(71,178,228,0.5)]' : 'text-[#6B7785] hover:text-white'
                  }`}
                >
                  <TerminalIcon className="w-3.5 h-3.5" /> Mac Console
                </button>
                <button
                  onClick={() => setIntegrationView('deck')}
                  className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all duration-300 flex items-center gap-1.5 ${
                    integrationView === 'deck' ? 'bg-[#47B2E4] text-black font-bold shadow-[0_0_10px_rgba(71,178,228,0.5)]' : 'text-[#6B7785] hover:text-white'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" /> Deck Spill
                </button>
                <button
                  onClick={() => setIntegrationView('grid')}
                  className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all duration-300 flex items-center gap-1.5 ${
                    integrationView === 'grid' ? 'bg-[#47B2E4] text-black font-bold shadow-[0_0_10px_rgba(71,178,228,0.5)]' : 'text-[#6B7785] hover:text-white'
                  }`}
                >
                  <LayoutGrid className="w-3.5 h-3.5" /> Matrix
                </button>
              </div>
            </div>
          </div>

          {/* 1. Mac Terminal View (Console) */}
          {integrationView === 'console' && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              className="rounded-2xl border border-white/10 bg-[#050810]/95 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.15)] overflow-hidden flex flex-col"
            >
              {/* Mac Window Header */}
              <div className="bg-[#0A0E17] px-4 py-3 flex items-center border-b border-white/5 select-none">
                <div className="flex gap-2 w-24">
                  <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-inner" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-inner" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-inner flex items-center justify-center">
                    <Maximize2 className="w-2 h-2 text-green-900 opacity-0 hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <div className="flex-1 text-center text-[10px] font-mono text-[#6B7785] flex items-center justify-center gap-2">
                  <TerminalIcon className="w-3 h-3" />
                  bash — ~/akashaveda/integrations — 80x24
                </div>
                <div className="w-24 flex justify-end gap-2 text-[#6B7785]">
                  <Minus className="w-3.5 h-3.5" />
                  <X className="w-3.5 h-3.5" />
                </div>
              </div>

              <div className="flex flex-col md:flex-row min-h-[440px]">
                {/* File Tree Sidebar */}
                <div className="w-full md:w-64 bg-[#030508] border-r border-white/5 p-4 flex flex-col gap-1.5">
                  <div className="text-[10px] font-mono text-[#47B2E4] uppercase tracking-widest mb-3 px-2 font-semibold">
                    EXPLORER
                  </div>
                  {integrations.map((item, idx) => {
                    const SvcIcon = item.icon;
                    const isSelected = activeIntegration === idx;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setActiveIntegration(idx)}
                        className={`text-left px-3 py-2 rounded-lg font-mono text-xs transition-colors flex items-center gap-2.5 ${
                          isSelected ? 'bg-[#47B2E4]/10 text-white border border-[#47B2E4]/30' : 'text-[#6B7785] hover:text-white hover:bg-white/5 border border-transparent'
                        }`}
                      >
                        <SvcIcon className={`w-3.5 h-3.5 ${isSelected ? 'text-[#47B2E4]' : ''}`} />
                        <span className="truncate">{item.id}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Content Area */}
                <div className="flex-1 p-6 sm:p-8 relative bg-gradient-to-br from-[#0A0D14] to-black">
                  {(() => {
                    const current = integrations[activeIntegration];
                    return (
                      <motion.div 
                        key={current.id}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                        className="h-full flex flex-col"
                      >
                        <div className="flex items-center gap-2 text-[#47B2E4] font-mono text-xs mb-6">
                          <span>&gt;</span>
                          <span className="typing-effect">./run_integration.sh --target={current.id}</span>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-8">
                          <div className="space-y-6">
                            <h3 className="text-2xl font-medium text-white tracking-tight">{current.title}</h3>
                            <p className="text-sm text-[#94A3B8] font-light leading-relaxed">
                              {current.description}
                            </p>
                            
                            <div className="grid grid-cols-2 gap-3 text-[10px] font-mono">
                              {current.telemetryMetrics.map((met, mi) => (
                                <div key={mi} className="p-3 rounded-lg bg-black/40 border border-white/5 shadow-inner">
                                  <div className="text-[#6B7785] mb-1">{met.label}</div>
                                  <div className="text-white font-medium">{met.value}</div>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="space-y-5 flex flex-col justify-center">
                            <div className="rounded-xl overflow-hidden border border-white/10 shadow-[0_0_20px_rgba(71,178,228,0.15)] relative group">
                              <img src={current.src} alt={current.alt} className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-700" />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                              <div className="absolute bottom-3 left-3">
                                <span className="px-2 py-1 rounded bg-[#47B2E4]/20 border border-[#47B2E4]/40 text-[9px] font-mono text-[#7CCCED] backdrop-blur-md">
                                  {current.badge}
                                </span>
                              </div>
                            </div>

                            <div className="flex flex-wrap gap-2">
                              {current.tags.map(tag => (
                                <span key={tag} className="text-[10px] font-mono text-[#47B2E4] bg-white/[0.03] border border-white/10 px-2.5 py-1 rounded-md">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })()}
                </div>
              </div>
            </motion.div>
          )}

          {/* 2. Interactive 3D Deck Spill (Hover to Fan) */}
          {integrationView === 'deck' && (
            <div 
              className="hidden lg:flex relative w-full h-[540px] items-center justify-center cursor-crosshair perspective-1000"
              onMouseEnter={() => setIsDeckHovered(true)}
              onMouseLeave={() => setIsDeckHovered(false)}
            >
              {/* Central Hover Indicator */}
              <motion.div 
                animate={{ opacity: isDeckHovered ? 0 : 1 }}
                className="absolute -top-4 text-[10px] font-mono tracking-[0.2em] text-[#47B2E4] font-semibold bg-[#47B2E4]/10 border border-[#47B2E4]/20 px-4 py-1.5 rounded-full z-40 shadow-[0_0_15px_rgba(71,178,228,0.2)] flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 bg-[#47B2E4] rounded-full animate-ping" />
                HOVER TO DEPLOY PROTOCOLS
              </motion.div>
              
              {/* Dynamic Background Flare */}
              <motion.div 
                animate={{ 
                  scale: isDeckHovered ? 1.5 : 0.8,
                  opacity: isDeckHovered ? 0.3 : 0.1
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#47B2E4]/30 rounded-full blur-[120px] pointer-events-none z-0" 
              />

              {integrations.map((item, i) => {
                const Icon = item.icon;
                
                // Spill logic for 4 cards into an arc
                const spreadX = (i - 1.5) * 240; // -360, -120, 120, 360
                const spreadY = Math.abs(i - 1.5) * 25; // 37.5, 12.5, 12.5, 37.5
                const spreadRotate = (i - 1.5) * 6; // -9, -3, 3, 9

                return (
                  <motion.div
                    key={i}
                    custom={i}
                    initial="stacked"
                    animate={isDeckHovered ? "spread" : "stacked"}
                    variants={{
                      stacked: (idx) => ({
                        x: idx * 4 - 6,
                        y: idx * 4 - 6,
                        rotate: idx * 2 - 3,
                        zIndex: integrations.length - idx,
                        scale: 0.95,
                      }),
                      spread: () => ({
                        x: spreadX,
                        y: spreadY,
                        rotate: spreadRotate,
                        zIndex: 20,
                        scale: 1,
                      })
                    }}
                    transition={{ type: "spring", stiffness: 220, damping: 25, mass: 0.8 }}
                    onClick={() => {
                      setActiveIntegration(i);
                      setIntegrationView('console');
                    }}
                    className="absolute w-full max-w-[280px] h-[380px]"
                  >
                    <Card3D
                      maxTilt={15} 
                      glareColor="rgba(71, 178, 228, 0.3)"
                      className="h-full rounded-2xl bg-gradient-to-b from-[#0A0D14] to-black/90 border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_25px_50px_rgba(0,0,0,0.8)] overflow-hidden group/card relative flex flex-col cursor-pointer"
                    >
                      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#47B2E4]/50 to-transparent" />
                      
                      <div className="p-6 flex-grow relative z-10 flex flex-col">
                        <div className="flex items-center justify-between mb-6">
                          <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/10 shadow-inner flex items-center justify-center">
                            <Icon className="w-5 h-5 text-[#47B2E4] group-hover/card:scale-110 transition-transform" />
                          </div>
                          <span className="text-[9px] font-mono font-bold px-2.5 py-1 rounded bg-black/50 border border-white/5 text-[#94A3B8]">
                            0{i + 1}
                          </span>
                        </div>

                        <div className="text-[10px] font-mono uppercase tracking-[0.15em] text-[#47B2E4] mb-2 font-semibold">
                          {item.category}
                        </div>

                        <h3 className="text-xl font-medium text-white mb-3 tracking-tight font-display leading-snug">
                          {item.title}
                        </h3>

                        <p className="text-xs text-[#94A3B8] font-light leading-relaxed flex-grow line-clamp-4">
                          {item.description}
                        </p>
                      </div>

                      <div className="px-6 py-4 bg-white/[0.02] border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-[#6B7785] group-hover/card:bg-[#47B2E4]/10 transition-colors duration-500">
                        <span className="text-white/80">Click to Open Terminal</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#47B2E4] opacity-50 group-hover/card:opacity-100 group-hover/card:translate-x-1 transition-all" />
                      </div>
                    </Card3D>
                  </motion.div>
                );
              })}
            </div>
          )}

          {/* 3. Grid View (Fallback & Matrix Mode) */}
          {(integrationView === 'grid' || (integrationView === 'deck' && typeof window !== 'undefined' && window.innerWidth < 1024)) && (
            <motion.div layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid md:grid-cols-2 gap-6 items-start">
              {integrations.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div key={item.category} layout>
                    <Card3D maxTilt={4} glareColor="rgba(71, 178, 228, 0.15)">
                      <div className="p-8 rounded-3xl bg-gradient-to-b from-[#0A0D14] to-[#04060A] border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_15px_30px_rgba(0,0,0,0.5)] hover:border-[#47B2E4]/40 transition-colors">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/10 shadow-inner flex items-center justify-center text-[#47B2E4]">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-[10px] font-mono text-[#47B2E4] uppercase tracking-widest mb-1">{item.category}</div>
                            <h3 className="text-xl font-medium text-white">{item.title}</h3>
                          </div>
                        </div>
                        <p className="text-[#94A3B8] text-sm leading-relaxed mb-6">{item.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {item.tags.map(tag => (
                            <span key={tag} className="text-[10px] font-mono text-[#6B7785] bg-white/[0.02] border border-white/5 px-3 py-1 rounded-md">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Card3D>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </div>

        <div className="w-full h-px bg-white/5 mb-16" />

        {/* ── Pricing & Deployment Tiers (Calendar Fold Aesthetic) ── */}
        <div id="pricing" className="scroll-mt-24 sm:scroll-mt-28 mb-24">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-16 mb-12 items-end">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#47B2E4]" />
                <p className="text-[11px] font-mono uppercase tracking-widest text-[#47B2E4]">Deployment Scenarios</p>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-tight font-display">
                Flexible for <span className="text-[#47B2E4]">Every Fleet</span>
              </h2>
            </div>
            <p className="text-[#94A3B8] text-sm font-light leading-relaxed max-w-md">
              From early in-orbit demonstrations to hyperscale commercial constellations and sovereign defense networks.
            </p>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={viewport} variants={staggerContainer(0.1)} className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {plans.map((plan, i) => {
              const TierIcon = plan.icon;
              const isFeatured = plan.popular;

              return (
                <motion.div key={i} variants={staggerItem} className="h-full">
                  <Card3D maxTilt={2} glareColor="transparent" className="h-full">
                    <div className={`flex flex-col h-full rounded-[2rem] transition-all duration-300 border relative overflow-hidden ${
                      isFeatured ? 'bg-[#0A101C] border-[#47B2E4]/50 shadow-[0_20px_40px_rgba(71,178,228,0.15)]' : 'bg-[#08080A] border-white/10'
                    }`}>
                      
                      {/* Calendar Binding Aesthetic at the top */}
                      <div className="h-6 w-full flex items-center justify-center gap-4 bg-black/40 border-b border-white/5 px-6">
                        {Array.from({ length: 7 }).map((_, holeIdx) => (
                          <div key={holeIdx} className="w-1.5 h-1.5 rounded-full bg-[#020408] shadow-[inset_0_1px_2px_rgba(0,0,0,0.8),0_1px_0_rgba(255,255,255,0.1)]" />
                        ))}
                      </div>

                      <div className="p-8 sm:p-10 flex flex-col flex-grow">
                        <div className="flex items-center gap-4 mb-6">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-inner ${
                            isFeatured ? 'bg-[#47B2E4]/20 text-[#47B2E4] border border-[#47B2E4]/30' : 'bg-white/[0.03] text-white/50 border border-white/5'
                          }`}>
                            <TierIcon className="w-6 h-6" />
                          </div>
                          <div>
                            <span className="text-[10px] font-mono uppercase tracking-widest text-[#47B2E4] block mb-0.5 drop-shadow-sm">{plan.tier}</span>
                            <h3 className="text-xl font-bold text-white tracking-tight">{plan.name}</h3>
                          </div>
                        </div>

                        <div className="text-[10px] font-mono text-[#94A3B8] mb-6 uppercase tracking-wider border-b border-white/10 pb-3">
                          {plan.target}
                        </div>

                        <div className="space-y-4 mb-10 flex-grow">
                          {plan.features.map((feat, fi) => (
                            <div key={fi} className="flex items-start gap-3 text-sm text-[#D4D4D8]">
                              <Check className="w-4 h-4 text-[#47B2E4] flex-shrink-0 mt-0.5" />
                              <span className="leading-snug">{feat}</span>
                            </div>
                          ))}
                        </div>

                        <button onClick={scrollToContact} className={`w-full py-4 rounded-xl font-mono text-xs uppercase tracking-wider font-semibold transition-all shadow-md flex items-center justify-center gap-2 ${
                          isFeatured ? 'bg-[#47B2E4] text-black hover:bg-[#7CCCED] hover:shadow-[0_0_20px_rgba(71,178,228,0.4)]' : 'bg-white/[0.05] text-white hover:bg-white/[0.1]'
                        }`}>
                          {plan.cta} <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </Card3D>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
}