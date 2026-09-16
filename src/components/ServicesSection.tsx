import { useRef, useState } from 'react';
import {
  Activity,
  Layers,
  Cpu,
  Globe,
  Radio,
  ShieldCheck,
  Server,
  Zap,
  ArrowUpRight,
  Check,
  Pause,
  Play,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MotionFadeIn } from './MotionPrimitives';
import Card3D from './Card3D';

/* ── 10 Deep Mission Capabilities ──────────────────────────────── */
const services = [
  {
    num: '01',
    icon: Activity,
    category: 'TELEMETRY & ANOMALIES',
    title: 'Real-Time Telemetry & Anomaly',
    accent: 'Analytics Engine',
    hook: 'Sub-10ms streaming ingestion with predictive subsystem regression.',
    desc: 'Automated time-series telemetry parsing, multi-channel decommutation, and predictive regression that detects thermal and power drift before hardware trips.',
    deliverables: [
      'XTCE / SEDS Packet Decommutation',
      'Continuous Anomaly Scoring Engine',
      'Time-Series Archival with Hot Replay',
    ],
    techSpecs: [
      { label: 'Throughput', val: '50,000+ packets/sec' },
      { label: 'Stream Latency', val: '< 8.5 milliseconds' },
      { label: 'Schema Formats', val: 'XTCE 1.2, SEDS, CCSDS' },
    ],
  },
  {
    num: '02',
    icon: Cpu,
    category: 'PASS SCHEDULING',
    title: 'Automated Pass & Contact',
    accent: 'Plan Optimizer',
    hook: 'Constraint-based orbital pass scheduler resolving antenna contention.',
    desc: 'Autonomous orbital pass generation and contact plan optimizer. Resolves antenna pointing windows and downlinking priorities with zero operator conflict.',
    deliverables: [
      'Multi-Ground Station Pass Optimizer',
      'Antenna Slew & Keyhole Mitigation',
      'Automated Re-planning on Weather/LOS',
    ],
    techSpecs: [
      { label: 'Solving Engine', val: 'Constraint-Satisfaction ILP' },
      { label: 'Horizon Window', val: 'Up to 30 Days Lookahead' },
      { label: 'Resolution Rate', val: '< 500ms Conflict Resolution' },
    ],
  },
  {
    num: '03',
    icon: Globe,
    category: 'NETWORK FEDERATION',
    title: 'Distributed Ground Station',
    accent: 'Network Orchestration',
    hook: 'Unified API connecting AWS GS, KSAT, Leaf Space, and private dishes.',
    desc: 'Single unified interface to schedule, track, and monitor contacts across commercial GSaaS networks and proprietary ground dishes worldwide.',
    deliverables: [
      'Multi-Provider Scheduling API',
      'Heterogeneous Demodulator Orchestration',
      'Unified RF Signal Health Monitoring',
    ],
    techSpecs: [
      { label: 'Supported Providers', val: 'AWS, KSAT, Leaf, Viasat' },
      { label: 'Antenna Footprint', val: '50+ Global Lat/Long Nodes' },
      { label: 'Switchover Time', val: '< 120ms Network Failover' },
    ],
  },
  {
    num: '04',
    icon: ShieldCheck,
    category: 'COMMAND & CONTROL',
    title: 'Cryptographic Command Authorization',
    accent: '& Verification',
    hook: 'Hardware Security Module (HSM) signing with strict multi-operator gating.',
    desc: 'End-to-end command security framework with hardware-backed digital signing, dual-operator authorization protocols, and automated post-execution telemetry checks.',
    deliverables: [
      'Hardware Security Module (HSM) Signing',
      'Two-Person Authorization Rules (TPA)',
      'Closed-Loop Telemetry Verification',
    ],
    techSpecs: [
      { label: 'Crypto Standard', val: 'AES-256-GCM / Ed25519' },
      { label: 'Hardware Key', val: 'FIPS 140-3 Level 3 HSM' },
      { label: 'Replay Defense', val: 'Monotonic Cryptographic Nonces' },
    ],
  },
  {
    num: '05',
    icon: Layers,
    category: 'FLEET MANAGEMENT',
    title: 'Heterogeneous Constellation',
    accent: 'Fleet Automation',
    hook: 'Simultaneous orchestration of disparate satellite buses and payloads.',
    desc: 'Scalable fleet orchestration layer that abstracts bus-level protocol differences across 1U–16U CubeSats, ESPA-class smallsats, and high-throughput GEO payloads.',
    deliverables: [
      'Universal Bus Abstraction Layer',
      'Automated Constellation Phasing',
      'Multi-Satellite Macro Scripting',
    ],
    techSpecs: [
      { label: 'Supported Classes', val: 'CubeSat, SmallSat, ESPA' },
      { label: 'Fleet Scale', val: '1 to 500+ Active Spacecraft' },
      { label: 'Database Mesh', val: 'Distributed Timescale Cluster' },
    ],
  },
  {
    num: '06',
    icon: Server,
    category: 'PAYLOAD OPS',
    title: 'High-Rate Payload Data Routing',
    accent: '& Processing',
    hook: 'Automated downlinked science data ingestion directly into cloud VPCs.',
    desc: 'Zero-touch pipeline that receives raw payload streams at LOS, validates frame integrity, decrypts payload data, and routes it directly to analytics environments.',
    deliverables: [
      'Automated Downlink Ingestion Pipeline',
      'Raw Stream Frame Assembly & Decryption',
      'Direct S3 / GCS Data Delivery Pipelines',
    ],
    techSpecs: [
      { label: 'Data Ingestion Speed', val: 'Up to 2.4 Gbps Downlink' },
      { label: 'Integrity Check', val: 'CCSDS 131.0-B Reed-Solomon' },
      { label: 'Destination', val: 'AWS S3, GCP Cloud Storage' },
    ],
  },
  {
    num: '07',
    icon: Zap,
    category: 'MISSION LIFECYCLE',
    title: 'LEOP & Commissioning',
    accent: 'Support Services',
    hook: 'Critical Launch and Early Orbit Phase staffing and flight dynamics.',
    desc: 'End-to-end operational readiness support: ground station rehearsal runs, launch tracking passes, tumbling detumble recovery, and solar panel deployment confirmation.',
    deliverables: [
      'Launch Day Countdown Rehearsals',
      'Detumbling & B-Dot Mode Verification',
      'Solar Array & Antenna Deployment Checks',
    ],
    techSpecs: [
      { label: 'Coverage', val: '24/7 Dedicated Flight Directors' },
      { label: 'Readiness Timeline', val: 'T-90 Days to T+30 Days' },
      { label: 'Success Metric', val: '100% Commissioning Pass Rate' },
    ],
  },
  {
    num: '08',
    icon: Activity,
    category: 'ORBIT DETERMINATION',
    title: 'Flight Dynamics System',
    accent: '(FDS) Design & Ops',
    hook: 'Precise Orbit Determination and automated conjunction assessment.',
    desc: 'Precise Orbit Determination (POD), ephemeris generation, station-keeping maneuvers, and automated conjunction assessment with CHAKRA-SSA.',
    deliverables: [
      'Precise Orbit Determination (POD)',
      'Station-Keeping Maneuver Plans',
      'CHAKRA-SSA Conjunction Triage',
    ],
    techSpecs: [
      { label: 'POD Accuracy', val: '< 1.5 meters GNSS Filtered' },
      { label: 'Ephemeris Propagation', val: 'SGP4 / HPOP High-Precision' },
      { label: 'Conjunction CDM', val: 'Automated 7-Day Lookahead' },
    ],
  },
  {
    num: '09',
    icon: ShieldCheck,
    category: 'CYBERSECURITY',
    title: 'Computer Network Design &',
    accent: 'SCC Realisation',
    hook: 'Zero-trust network architecture and HSM command signing.',
    desc: 'Zero-trust network architecture, low-latency SD-WAN antenna bridges, Hardware Security Modules (HSMs) for command signing, and AES-256 archives.',
    deliverables: [
      'Zero-Trust Mission Network',
      'HSM for Uplink Command Signing',
      'Low-Latency SD-WAN GS Bridges',
    ],
    techSpecs: [
      { label: 'Encryption Standard', val: 'AES-256-GCM End-to-End' },
      { label: 'Hardware Security', val: 'FIPS 140-3 Level 3 HSM' },
      { label: 'Auth Protocol', val: 'mTLS + Hardware Passkeys' },
    ],
  },
  {
    num: '10',
    icon: Radio,
    category: 'RF GROUND SEGMENT',
    title: 'TT&C & Payload (PL)',
    accent: 'Ground Stations',
    hook: 'UHF, S, X, and Ka-band ground terminals with SDR basebands.',
    desc: 'Complete RF ground segment engineering for UHF, S, X, and Ka-band dishes with SDR basebands and automated 2+ Gbps high-rate payload downlinks.',
    deliverables: [
      'UHF / S / X / Ka-Band Dish Sizing',
      'Software-Defined Radio Basebands',
      '2+ Gbps High-Rate Downlinks',
    ],
    techSpecs: [
      { label: 'Frequency Range', val: '400 MHz to 32 GHz (Ka-Band)' },
      { label: 'Throughput Speed', val: 'Up to 2.4 Gbps Downlink' },
      { label: 'SDR Architecture', val: 'GNU Radio + FPGA Modems' },
    ],
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isManualPaused, setIsManualPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right'>('left');

  const isPaused = isManualPaused || isHovered;

  const { scrollYProgress } = useScroll({
    target: sectionRef as any,
    offset: ['start end', 'end start'],
  });

  const dotMatrixY = useTransform(scrollYProgress, [0, 1], [-15, 15]);
  const bgGlowY = useTransform(scrollYProgress, [0, 1], [-25, 25]);

  // Duplicate services list for seamless infinite loop
  const duplicatedServices = [...services, ...services];

  const handleManualScroll = (delta: number) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: delta, behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef as any}
      id="services"
      className="relative py-20 sm:py-24 bg-[#000000] border-t border-white/10 text-white scroll-mt-24 sm:scroll-mt-28 overflow-hidden"
    >
      {/* Background Grid Lines Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <motion.div style={{ y: dotMatrixY }} className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_0.8px,transparent_0.8px)] [background-size:32px_32px] opacity-[0.03]" />
        </motion.div>
        <motion.div style={{ y: bgGlowY }} className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(71,178,228,0.08),transparent)]" />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10">
        {/* ── Section Header & Autoplay HUD Controls ── */}
        <MotionFadeIn>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#47B2E4] shadow-[0_0_6px_#47B2E4]" />
            <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#47B2E4] font-semibold">
              Mission Capabilities
            </p>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-tight font-display">
                Full-Lifecycle{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#47B2E4] to-[#7CCCED]">
                  Space Operations
                </span>
              </h2>
              <p className="text-[#94A3B8] text-sm sm:text-base font-light leading-relaxed max-w-2xl mt-2">
                Mission design, ground software development, and 24/7 in-orbit operations for commercial and defense satellite programs.
              </p>
            </div>

            {/* ── Gliding Speed & Pause HUD Controls ── */}
            <div className="flex items-center gap-2.5 flex-shrink-0">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#080C16] border border-white/10 text-xs font-mono shadow-md">
                <span className="flex items-center gap-1.5 text-[11px] text-[#94A3B8]">
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      isPaused ? 'bg-amber-400' : 'bg-emerald-400 animate-pulse'
                    }`}
                  />
                  <span>{isPaused ? 'PAUSED ON HOVER' : 'AUTO-GLIDING'}</span>
                </span>

                <button
                  onClick={() => setIsManualPaused(!isManualPaused)}
                  className="p-1 rounded-md hover:bg-white/10 text-[#47B2E4] transition-colors"
                  title={isManualPaused ? 'Resume auto-gliding' : 'Pause'}
                >
                  {isManualPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Direction Switcher */}
              <div className="flex items-center p-1 rounded-full bg-[#080C16] border border-white/10 shadow-md">
                <button
                  onClick={() => {
                    setDirection('left');
                    handleManualScroll(-320);
                  }}
                  className={`p-1.5 rounded-full transition-colors ${
                    direction === 'left' ? 'bg-[#47B2E4]/20 text-[#47B2E4]' : 'text-[#6B7785] hover:text-white'
                  }`}
                  title="Scroll left"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => {
                    setDirection('right');
                    handleManualScroll(320);
                  }}
                  className={`p-1.5 rounded-full transition-colors ${
                    direction === 'right' ? 'bg-[#47B2E4]/20 text-[#47B2E4]' : 'text-[#6B7785] hover:text-white'
                  }`}
                  title="Scroll right"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </MotionFadeIn>
      </div>

      {/* ── Continuous Gliding Horizontal Marquee Track (Pauses on Hover) ── */}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative w-full overflow-hidden select-none cursor-default py-4"
      >
        {/* Left & Right Soft Edge Fades */}
        <div className="absolute left-0 inset-y-0 w-12 sm:w-24 bg-gradient-to-r from-black via-black/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-12 sm:w-24 bg-gradient-to-l from-black via-black/80 to-transparent z-20 pointer-events-none" />

        <div
          ref={scrollContainerRef}
          style={{
            animationPlayState: isPaused ? 'paused' : 'running',
            ['--marquee-duration' as any]: '52s',
          }}
          // Added items-start here so expanding one card doesn't stretch the others
          className={`flex items-start gap-5 w-max ${
            direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'
          }`}
        >
          {duplicatedServices.map((svc, idx) => {
            const SvcIcon = svc.icon;
            return (
              <div
                key={`${svc.num}-${idx}`}
                // Added group here for localized hover styling on the accent line
                className="w-[300px] sm:w-[330px] flex-shrink-0 group"
              >
                <Card3D
                  maxTilt={5}
                  glareColor="rgba(71, 178, 228, 0.2)"
                  enableHoverExpand={true}
                  expandContent={
                    <div className="space-y-2 pt-2.5 border-t border-white/10">
                      <div className="text-[9px] font-mono uppercase tracking-widest text-[#47B2E4] font-semibold">
                        KEY DELIVERABLES
                      </div>
                      <div className="space-y-1 text-[10px] font-mono text-white/90">
                        {svc.deliverables.map((item, dIdx) => (
                          <div key={dIdx} className="flex items-center gap-1.5">
                            <Check className="w-2.5 h-2.5 text-[#47B2E4] flex-shrink-0" />
                            <span className="truncate">{item}</span>
                          </div>
                        ))}
                      </div>

                      <div className="grid grid-cols-2 gap-1.5 pt-2 border-t border-white/5 text-[9px] font-mono">
                        {svc.techSpecs.slice(0, 2).map((sp, spIdx) => (
                          <div key={spIdx} className="bg-white/[0.03] p-1.5 rounded">
                            <span className="text-[#6B7785] block">{sp.label}</span>
                            <span className="text-white font-medium truncate block">{sp.val}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  }
                  className="rounded-2xl p-5 sm:p-6 bg-[#080C16] border border-white/10 shadow-xl hover:border-[#47B2E4]/50 transition-all duration-300 overflow-hidden h-full flex flex-col justify-between"
                >
                  {/* Top Subtle Accent Line */}
                  <div className="absolute top-0 left-0 w-8 h-[2px] bg-gradient-to-r from-[#47B2E4] to-[#7CCCED] group-hover:w-full transition-all duration-500" />

                  <div>
                    {/* Header Row: Icon + Category + #Num */}
                    <div className="flex items-center justify-between mb-3.5">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#47B2E4]">
                          <SvcIcon className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-mono uppercase tracking-[0.14em] text-[#47B2E4] font-semibold truncate max-w-[170px]">
                          {svc.category}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-white/[0.04] border border-white/10 text-white/70">
                        #{svc.num}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-medium text-white tracking-tight leading-snug mb-1.5 font-display">
                      {svc.title} <span className="text-[#47B2E4]">{svc.accent}</span>
                    </h3>

                    {/* Hook */}
                    <p className="text-xs text-[#94A3B8] font-light leading-relaxed">
                      {svc.hook}
                    </p>
                  </div>

                  {/* Footer Hint */}
                  <div className="pt-3 mt-3 border-t border-white/5 flex items-center justify-between text-[9px] font-mono text-[#6B7785]">
                    <span className="text-[#47B2E4]">Hover to pause &amp; inspect</span>
                    <ArrowUpRight className="w-3 h-3 text-[#6B7785]" />
                  </div>
                </Card3D>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Subtle Bottom Action Link ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-[#94A3B8]">
        <p className="flex items-center gap-2 text-[11px]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#47B2E4]" />
          <span>10 MISSION DOMAINS · CONTINUOUS AUTOPILOT · ZERO OPERATOR CONFLICT</span>
        </p>

        <button
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="text-[#47B2E4] hover:text-white flex items-center gap-1.5 transition-colors font-semibold uppercase tracking-wider"
        >
          CUSTOM MISSION REQUIREMENTS
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </section>
  );
}