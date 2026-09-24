import { useState } from 'react';
import SEO from '../components/SEO';
import { Layers, Orbit, Radio, Eye, Cpu, ShieldCheck, Users, ArrowRight, Lock, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import FooterCTA from '../components/FooterCTA';

export default function Chakravyuh() {
  const [activeTier, setActiveTier] = useState<number>(2);

  const horizontalArchitecture = [
    {
      step: '01',
      title: 'Space Assets',
      icon: Orbit,
      tag: 'ORBITAL SEGMENT',
      desc: 'LEO, SSO, and MEO spacecraft generating housekeeping telemetry, ADCS attitude vectors, and science payload bitstreams.',
      details: 'Compatible with standard avionics buses, CubeSats, and large constellation architectures.',
    },
    {
      step: '02',
      title: 'Ground Assets',
      icon: Radio,
      tag: 'RF RECEPTION',
      desc: 'Distributed ground station dishes performing antenna pointing, tracking sweeps, downconversion, and baseband demodulation.',
      details: 'Supports proprietary dishes and global antenna networks with no vendor lock-in.',
    },
    {
      step: '03',
      title: 'Chakra (SSA)',
      icon: Eye,
      tag: 'ORBITAL SURVEILLANCE',
      desc: 'Space Situational Awareness layer continuously tracking space objects, screening conjunction vectors, and evaluating proximity risk.',
      details: 'Automated Conjunction Data Message (CDM) screening and miss-distance determination.',
    },
    {
      step: '04',
      title: 'Vyuh (MCS)',
      icon: Cpu,
      tag: 'MISSION CONTROL',
      desc: 'Mission Control System decommutating packets into engineering units, monitoring limits, and queuing verified commands.',
      details: 'XTCE and SEDS schema parsing with closed-loop telemetry confirmation.',
    },
    {
      step: '05',
      title: 'Autonomous Layer',
      icon: ShieldCheck,
      tag: 'GUIDED AUTONOMY',
      desc: 'Deterministic operational engine optimizing pass conflicts, computing avoidance maneuvers, and executing routine health procedures.',
      details: 'Operates within strictly defined operator safety envelopes with deterministic state logic.',
    },
    {
      step: '06',
      title: 'Users & Operators',
      icon: Users,
      tag: 'FLIGHT DIRECTORS',
      desc: 'Flight operations personnel, payload scientists, and system administrators executing dual-operator command authorizations.',
      details: 'Multi-role access control, cryptographic signing keys, and immutable audit logs.',
    },
  ];

  const verticalDataFlow = [
    {
      stage: 'STAGE 01',
      title: 'Space Data',
      badge: 'RAW GENERATION',
      desc: 'Spacecraft avionics generate telemetry packets (CCSDS frames). During scheduled contact windows, RF downlink streams data to ground tracking antennas.',
      metrics: 'Orbital bitstream packetization & error correction',
    },
    {
      stage: 'STAGE 02',
      title: 'Awareness',
      badge: 'CHAKRA SSA',
      desc: 'Chakra continuously correlates tracking observations and parses external orbital data. Conjunction risks, proximity threats, and orbital decay parameters are evaluated before pass execution.',
      metrics: 'Object catalog correlation & CDM screening',
    },
    {
      stage: 'STAGE 03',
      title: 'Mission Control',
      badge: 'VYUH MCS',
      desc: 'Vyuh ingests the demodulated telemetry stream, decommutates raw binary into calibrated physical engineering parameters, updates spacecraft subsystem states, and triggers limit checks.',
      metrics: 'Real-time telemetry decommutation & limit checks',
    },
    {
      stage: 'STAGE 04',
      title: 'Autonomy',
      badge: 'RULE EVALUATION',
      desc: 'The autonomous optimization engine resolves pass contention across antennas, plans payload tasking, and formulates command scripts based on verified flight playbooks.',
      metrics: 'Automated playbook synthesis & pass window optimization',
    },
    {
      stage: 'STAGE 05',
      title: 'Action',
      badge: 'DUAL-AUTH UPLINK',
      desc: 'Flight commands are formatted and dispatched to the ground antenna transmitter strictly upon dual-operator cryptographic validation. The action is executed and verified on the next packet frame.',
      metrics: 'Human-in-the-loop authorization & RF uplink dispatch',
    },
  ];

  return (
    <>
      <SEO
        title="Chakravyuh Platform Architecture | Akashaveda"
        description="Explore the Chakravyuh architecture: connecting Space Assets, Ground Assets, Chakra SSA, Vyuh MCS, and Autonomous Operations under strict operator validation."
        canonical="/chakravyuh"
      />

      <div className="pt-24 pb-16 bg-[#030610] text-white min-h-screen">
        
        {/* ── 01. Hero: Introduce Complete Architecture ── */}
        <section className="relative py-16 sm:py-24 border-b border-white/10 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-[#0E1626] border border-white/10 text-xs font-mono text-[#47B2E4] mb-4">
                <Layers className="w-3.5 h-3.5" />
                <span>COMPLETE ARCHITECTURE</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-6 font-sans">
                Chakravyuh Platform Architecture
              </h1>

              <p className="text-[17px] sm:text-[19px] text-[#94A3B8] font-normal leading-relaxed mb-8">
                Chakravyuh represents Akashaveda’s unified architecture for satellite operations. It integrates orbital tracking, space situational awareness, and mission control into a single deterministic software platform—designed to scale from single satellites to constellations of 500 space assets tested simultaneously across 12 nodes.
              </p>

              <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
                <span className="px-3 py-1.5 rounded-[6px] bg-[#080C16] border border-white/15 text-white">
                  SCALE: 500 ASSETS
                </span>
                <span className="px-3 py-1.5 rounded-[6px] bg-[#080C16] border border-white/15 text-[#7CCCED]">
                  TESTED ON 12 NODES
                </span>
                <span className="px-3 py-1.5 rounded-[6px] bg-[#080C16] border border-white/15 text-emerald-400">
                  CLOUD / ON-PREMISE / HYBRID
                </span>
                <span className="px-3 py-1.5 rounded-[6px] bg-[#080C16] border border-white/15 text-amber-400 flex items-center gap-1">
                  <Lock className="w-3 h-3" />
                  <span>DUAL-OPERATOR BOUNDED</span>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ── 02. System Architecture Graphic: Detailed Horizontal Map ── */}
        <section className="relative py-20 sm:py-24 border-b border-white/10 bg-[#050811]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mb-12">
              <div className="text-xs font-mono text-[#47B2E4] uppercase tracking-wider mb-2 font-semibold">
                SYSTEM TOPOLOGY
              </div>
              <h2 className="text-3xl sm:text-4xl font-medium text-white tracking-tight mb-4 font-sans">
                End-to-End Architectural Map
              </h2>
              <p className="text-base text-[#94A3B8] leading-relaxed">
                Horizontal data and command dispatch map: from orbiting space assets through ground infrastructure, core intelligence layers, autonomous supervision, and mission operators.
              </p>
            </div>

            {/* Horizontal Map Grid (6 Tiers) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-3 mb-6">
              {horizontalArchitecture.map((tier, idx) => {
                const Icon = tier.icon;
                const isSelected = activeTier === idx;
                return (
                  <button
                    key={tier.step}
                    onClick={() => setActiveTier(idx)}
                    className={`
                      p-4 rounded-[8px] border text-left transition-all duration-150 flex flex-col justify-between
                      ${isSelected
                        ? 'bg-[#0E1626] border-[#47B2E4] shadow-[0_4px_20px_rgba(71,178,228,0.2)]'
                        : 'bg-[#080C16] border-white/10 hover:border-white/20'
                      }
                    `}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-mono text-[#64748B]">{tier.step}</span>
                        <Icon className={`w-4 h-4 ${isSelected ? 'text-[#47B2E4]' : 'text-[#64748B]'}`} />
                      </div>
                      <div className="text-[14px] font-medium text-white mb-1">
                        {tier.title}
                      </div>
                      <div className="text-[9px] font-mono text-[#47B2E4] uppercase tracking-wider">
                        {tier.tag}
                      </div>
                    </div>

                    <div className="mt-4 pt-2 border-t border-white/5 text-[10px] font-mono text-[#64748B]">
                      {idx < 5 ? '→ Downstream' : 'Operator Hub'}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Tier Detail Card */}
            <div className="p-6 rounded-[8px] bg-[#080C16] border border-white/15 shadow-md">
              <div className="flex items-center gap-2 text-xs font-mono text-[#47B2E4] mb-2">
                <span>TIER {horizontalArchitecture[activeTier].step} SPECIFICATION</span>
                <span>//</span>
                <span className="text-white font-medium">{horizontalArchitecture[activeTier].title}</span>
              </div>
              <p className="text-[15px] text-[#94A3B8] leading-relaxed mb-3">
                {horizontalArchitecture[activeTier].desc}
              </p>
              <div className="text-xs font-mono text-[#64748B]">
                Implementation Note: <span className="text-white">{horizontalArchitecture[activeTier].details}</span>
              </div>
            </div>

          </div>
        </section>

        {/* ── 03. Data Flow Component: Vertical Timeline ── */}
        <section className="relative py-20 sm:py-24 bg-[#030610]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-2xl mb-14">
              <div className="text-xs font-mono text-[#47B2E4] uppercase tracking-wider mb-2 font-semibold">
                EXECUTION PIPELINE
              </div>
              <h2 className="text-3xl sm:text-4xl font-medium text-white tracking-tight mb-4 font-sans">
                Data Flow: From Space Data to Action
              </h2>
              <p className="text-base text-[#94A3B8] leading-relaxed">
                Step-by-step lifecycle of telemetry transformation and verified command uplink.
              </p>
            </div>

            {/* Vertical Timeline */}
            <div className="relative pl-6 sm:pl-8 border-l-2 border-white/10 space-y-10">
              {verticalDataFlow.map((flow, i) => (
                <div key={flow.stage} className="relative group">
                  
                  {/* Timeline Node Marker */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#080C16] border-2 border-[#47B2E4] flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#47B2E4]" />
                  </div>

                  <div className="p-6 rounded-[8px] bg-[#080C16] border border-white/10 hover:border-white/20 transition-all shadow-sm">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-[#47B2E4] font-semibold">{flow.stage}</span>
                        <span className="text-base sm:text-lg font-medium text-white">{flow.title}</span>
                      </div>
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/5 text-[#94A3B8] border border-white/5">
                        {flow.badge}
                      </span>
                    </div>

                    <p className="text-sm text-[#94A3B8] leading-relaxed mb-4">
                      {flow.desc}
                    </p>

                    <div className="pt-3 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-[#64748B]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span>{flow.metrics}</span>
                    </div>
                  </div>

                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── Footer CTA ── */}
        <FooterCTA />

      </div>
    </>
  );
}
