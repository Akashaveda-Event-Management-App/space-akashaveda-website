import { useState } from 'react';
import SEO from '../components/SEO';
import { Cpu, ShieldCheck, Server, Radio, Lock, CheckCircle2, Orbit, Layers, HardDrive } from 'lucide-react';
import FooterCTA from '../components/FooterCTA';

export default function Technology() {
  const [selectedClusterView, setSelectedClusterView] = useState<'all' | 'cloud' | 'onprem' | 'hybrid'>('all');
  const pillars = [
    {
      icon: Cpu,
      title: 'Deterministic State Engines & Guided Autonomy',
      tag: 'FAILSAFE LOGIC',
      desc: 'Autonomous operations run inside pre-verified state machine boundaries. Pass scheduling, telemetry limit monitoring, and contingency triggers execute deterministically while flight-critical maneuvers require operator sign-off.',
      specs: [
        'Deterministic transition validation on all telemetry states',
        'Human-in-the-loop approval boundaries on all flight commands',
        'Zero unbounded autonomous actions on spacecraft bus systems',
      ],
    },
    {
      icon: Server,
      title: 'Tested for 500 Space Assets Across 12 Nodes',
      tag: 'CONSTELLATION SCALE',
      desc: 'The platform architecture is designed to manage 500 space assets and has been tested simultaneously on 12 operational nodes, supporting high-density constellation operations with zero telemetry contention.',
      specs: [
        'Concurrent multi-satellite telemetry stream processing',
        'Multi-node operational synchronization and pass scheduling',
        'Flexible deployment across cloud, on-premise, or hybrid clusters',
      ],
    },
    {
      icon: Radio,
      title: 'Telemetry Decommutation & Industry Standards',
      tag: 'TELEMETRY EXTRACTION',
      desc: 'Standardized packet parsing engines compliant with international space standards. Ingests raw telemetry bitstreams and decommutates them into calibrated engineering parameters in real time.',
      specs: [
        'Native support for XTCE and SEDS telemetry definition schemas',
        'Standard CCSDS frame synchronization and packet decommutation',
        'Real-time limit checking and subsystem state propagation',
      ],
    },
    {
      icon: Lock,
      title: 'Cryptographic Command Security & Dual Authorization',
      tag: 'COMMAND INTEGRITY',
      desc: 'End-to-end command security infrastructure preventing unauthorized dispatch. Incorporates hardware-backed digital signing and dual-operator authorization workflows before ground transmitter release.',
      specs: [
        'Dual-operator authorization rules for flight-critical commands',
        'Hardware-backed cryptographic signing and command verification',
        'Immutable, audit-grade command logs with post-pass confirmation',
      ],
    },
  ];

  return (
    <>
      <SEO
        title="Technology & Aerospace Architecture | Akashaveda"
        description="Akashaveda technology: deterministic state engines, tested for 500 space assets across 12 nodes, cloud/on-premise/hybrid deployments, and dual-operator command security."
        canonical="/technology"
      />

      <div className="pt-24 pb-16 bg-[#030610] text-white min-h-screen">
        
        {/* ── 01. Hero ── */}
        <section className="relative py-16 sm:py-24 border-b border-white/10 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-[#0E1626] border border-white/10 text-xs font-mono text-[#47B2E4] mb-4">
                <Cpu className="w-3.5 h-3.5" />
                <span>AEROSPACE SOFTWARE ARCHITECTURE</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-6 font-sans">
                Technology &amp; Engineering Architecture
              </h1>

              <p className="text-[17px] sm:text-[19px] text-[#94A3B8] font-normal leading-relaxed mb-8">
                Designed for 500 space assets and tested simultaneously on 12 nodes. Akashaveda builds deterministic ground segment infrastructure combining telemetry decommutation, guided autonomy, and dual-operator command security.
              </p>

              <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
                <span className="px-3 py-1.5 rounded-[6px] bg-[#080C16] border border-white/15 text-white">
                  DETERMINISTIC LOGIC
                </span>
                <span className="px-3 py-1.5 rounded-[6px] bg-[#080C16] border border-white/15 text-[#47B2E4]">
                  500 ASSET CAPACITY
                </span>
                <span className="px-3 py-1.5 rounded-[6px] bg-[#080C16] border border-white/15 text-emerald-400">
                  CLOUD / ON-PREMISE / HYBRID
                </span>
                <span className="px-3 py-1.5 rounded-[6px] bg-[#080C16] border border-white/15 text-amber-400">
                  DUAL-OPERATOR BOUNDED
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ── 02. Core Technology Pillars Grid ── */}
        <section className="relative py-20 sm:py-24 border-b border-white/10 bg-[#050811]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mb-12">
              <div className="text-xs font-mono text-[#47B2E4] uppercase tracking-wider mb-2 font-semibold">
                SYSTEM PRINCIPLES
              </div>
              <h2 className="text-3xl sm:text-4xl font-medium text-white tracking-tight mb-4 font-sans">
                Architectural Foundations
              </h2>
              <p className="text-base text-[#94A3B8] leading-relaxed">
                Aerospace-grade principles ensuring high credibility, deterministic execution, and continuous orbital safety.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pillars.map((pil, idx) => {
                const Icon = pil.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-[8px] bg-[#080C16] border border-white/10 hover:border-white/20 transition-all shadow-md flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-[6px] bg-[#0E1626] border border-white/10 flex items-center justify-center text-[#47B2E4]">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-[9px] font-mono uppercase px-2 py-0.5 rounded bg-white/5 text-[#94A3B8] border border-white/5">
                          {pil.tag}
                        </span>
                      </div>

                      <h3 className="text-xl font-medium text-white mb-2 font-sans">
                        {pil.title}
                      </h3>

                      <p className="text-sm text-[#94A3B8] leading-relaxed mb-5">
                        {pil.desc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/10 space-y-1.5">
                      {pil.specs.map((sp, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-[#E2E8F0]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#47B2E4] flex-shrink-0" />
                          <span>{sp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* ── 03. Distributed 12-Node Topology & Concurrency Infographic ── */}
        <section className="relative py-20 sm:py-24 border-b border-white/10 bg-[#030610]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-[#0E1626] border border-white/10 text-xs font-mono text-[#47B2E4] mb-4">
                <Server className="w-3.5 h-3.5" />
                <span>DISTRIBUTED INFRASTRUCTURE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-medium text-white tracking-tight mb-4 font-sans">
                Tested for 500 Space Assets Across 12 Nodes
              </h2>
              <p className="text-base text-[#94A3B8] leading-relaxed">
                Deterministic concurrency, multi-orbital state synchronization, and zero-telemetry-loss pass scheduling across cloud, on-premise, and hybrid environments.
              </p>
            </div>

            {/* Infographic Container */}
            <div className="rounded-[8px] bg-[#080C16] border border-white/15 shadow-[0_16px_50px_rgba(0,0,0,0.8)] overflow-hidden p-6 sm:p-8">
              
              {/* Header Toolbar */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b border-white/10 text-xs font-mono">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-white font-medium">12-NODE DISTRIBUTED CLUSTER</span>
                  </div>
                  <span className="text-[#64748B]">|</span>
                  <span className="text-[#47B2E4]">CONCURRENT REPLICATION: 100% NOMINAL</span>
                </div>

                {/* Filter Pills */}
                <div className="flex flex-wrap items-center gap-1.5 bg-[#050912] p-1 rounded-[4px] border border-white/10">
                  <button
                    onClick={() => setSelectedClusterView('all')}
                    className={`px-2.5 py-1 rounded text-[10px] transition-colors ${selectedClusterView === 'all' ? 'bg-[#47B2E4] text-black font-semibold' : 'text-[#94A3B8] hover:text-white'}`}
                  >
                    ALL 12 NODES
                  </button>
                  <button
                    onClick={() => setSelectedClusterView('cloud')}
                    className={`px-2.5 py-1 rounded text-[10px] transition-colors ${selectedClusterView === 'cloud' ? 'bg-[#7CCCED] text-black font-semibold' : 'text-[#94A3B8] hover:text-white'}`}
                  >
                    CLOUD (N1-N4)
                  </button>
                  <button
                    onClick={() => setSelectedClusterView('onprem')}
                    className={`px-2.5 py-1 rounded text-[10px] transition-colors ${selectedClusterView === 'onprem' ? 'bg-[#47B2E4] text-black font-semibold' : 'text-[#94A3B8] hover:text-white'}`}
                  >
                    ON-PREMISE (N5-N8)
                  </button>
                  <button
                    onClick={() => setSelectedClusterView('hybrid')}
                    className={`px-2.5 py-1 rounded text-[10px] transition-colors ${selectedClusterView === 'hybrid' ? 'bg-[#34D399] text-black font-semibold' : 'text-[#94A3B8] hover:text-white'}`}
                  >
                    HYBRID (N9-N12)
                  </button>
                </div>
              </div>

              {/* Mobile swipe helper indicator */}
              <div className="sm:hidden flex items-center justify-center gap-1.5 pb-2 text-[10px] font-mono text-[#64748B]">
                <span>← Swipe cluster schematic horizontally →</span>
              </div>

              {/* Topology SVG with horizontal scroll wrapper */}
              <div className="overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-white/10 mb-6">
                <div className="min-w-[760px] sm:min-w-0 w-full aspect-[22/8] min-h-[200px]">
                  <svg className="w-full h-full font-sans" viewBox="0 0 1100 240" preserveAspectRatio="xMidYMid meet">
                  <defs>
                    <linearGradient id="cloudGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#7CCCED" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#081426" stopOpacity="0.9" />
                    </linearGradient>
                    <linearGradient id="onpremGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#47B2E4" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#08182E" stopOpacity="0.9" />
                    </linearGradient>
                    <linearGradient id="hybridGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#34D399" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#08221E" stopOpacity="0.9" />
                    </linearGradient>
                  </defs>

                  {/* Central Bus Backbone */}
                  <line x1="50" y1="120" x2="1050" y2="120" stroke="rgba(255,255,255,0.12)" strokeWidth="2" strokeDasharray="6 3" />
                  <circle cx="550" cy="120" r="16" fill="#0E1626" stroke="#47B2E4" strokeWidth="1.5" />
                  <text x="550" y="124" fill="#FFFFFF" fontSize="9" fontWeight="600" textAnchor="middle">BUS</text>

                  {/* ── ZONE 1: SOVEREIGN CLOUD INSTANCES (N1 - N4) ── */}
                  <g
                    onClick={() => setSelectedClusterView('cloud')}
                    className="cursor-pointer"
                    opacity={selectedClusterView === 'all' || selectedClusterView === 'cloud' ? 1 : 0.3}
                  >
                    <rect x="50" y="25" width="290" height="190" rx="6" fill="url(#cloudGrad)" stroke="#7CCCED" strokeWidth={selectedClusterView === 'cloud' ? '2' : '1'} />
                    <text x="70" y="50" fill="#7CCCED" fontSize="11" fontWeight="600">ZONE 01: ENTERPRISE CLOUD</text>
                    <text x="70" y="66" fill="#FFFFFF" fontSize="12" fontWeight="500">Sovereign Cloud Deployment</text>
                    
                    {/* 4 Nodes Grid */}
                    {[...Array(4)].map((_, i) => (
                      <g key={i} transform={`translate(${70 + (i % 2) * 125}, ${82 + Math.floor(i / 2) * 55})`}>
                        <rect x="0" y="0" width="110" height="42" rx="3" fill="#0A1828" stroke="rgba(124,204,237,0.3)" strokeWidth="1" />
                        <circle cx="16" cy="21" r="3" fill="#7CCCED" />
                        <text x="26" y="25" fill="#FFFFFF" fontSize="10" fontWeight="500">NODE 0{i + 1}</text>
                      </g>
                    ))}
                  </g>

                  {/* ── ZONE 2: AIR-GAPPED ON-PREMISE (N5 - N8) ── */}
                  <g
                    onClick={() => setSelectedClusterView('onprem')}
                    className="cursor-pointer"
                    opacity={selectedClusterView === 'all' || selectedClusterView === 'onprem' ? 1 : 0.3}
                  >
                    <rect x="405" y="25" width="290" height="190" rx="6" fill="url(#onpremGrad)" stroke="#47B2E4" strokeWidth={selectedClusterView === 'onprem' ? '2' : '1'} />
                    <text x="425" y="50" fill="#47B2E4" fontSize="11" fontWeight="600">ZONE 02: ON-PREMISE</text>
                    <text x="425" y="66" fill="#FFFFFF" fontSize="12" fontWeight="500">Air-Gapped Sovereign Facility</text>
                    
                    {/* 4 Nodes Grid */}
                    {[...Array(4)].map((_, i) => (
                      <g key={i} transform={`translate(${425 + (i % 2) * 125}, ${82 + Math.floor(i / 2) * 55})`}>
                        <rect x="0" y="0" width="110" height="42" rx="3" fill="#0A1C30" stroke="rgba(71,178,228,0.3)" strokeWidth="1" />
                        <circle cx="16" cy="21" r="3" fill="#47B2E4" />
                        <text x="26" y="25" fill="#FFFFFF" fontSize="10" fontWeight="500">NODE 0{i + 5}</text>
                      </g>
                    ))}
                  </g>

                  {/* ── ZONE 3: HYBRID EDGE GATEWAYS (N9 - N12) ── */}
                  <g
                    onClick={() => setSelectedClusterView('hybrid')}
                    className="cursor-pointer"
                    opacity={selectedClusterView === 'all' || selectedClusterView === 'hybrid' ? 1 : 0.3}
                  >
                    <rect x="760" y="25" width="290" height="190" rx="6" fill="url(#hybridGrad)" stroke="#34D399" strokeWidth={selectedClusterView === 'hybrid' ? '2' : '1'} />
                    <text x="780" y="50" fill="#34D399" fontSize="11" fontWeight="600">ZONE 03: HYBRID GATEWAYS</text>
                    <text x="780" y="66" fill="#FFFFFF" fontSize="12" fontWeight="500">Edge Station Interface</text>
                    
                    {/* 4 Nodes Grid */}
                    {[...Array(4)].map((_, i) => (
                      <g key={i} transform={`translate(${780 + (i % 2) * 125}, ${82 + Math.floor(i / 2) * 55})`}>
                        <rect x="0" y="0" width="110" height="42" rx="3" fill="#082218" stroke="rgba(52,211,153,0.3)" strokeWidth="1" />
                        <circle cx="16" cy="21" r="3" fill="#34D399" />
                        <text x="26" y="25" fill="#FFFFFF" fontSize="10" fontWeight="500">NODE {i + 9 < 10 ? `0${i + 9}` : i + 9}</text>
                      </g>
                    ))}
                  </g>
                </svg>
              </div>
            </div>

              {/* Status Readouts Matrix */}
              <div className="pt-4 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
                <div className="p-3 rounded-[6px] bg-[#050811] border border-white/10">
                  <div className="text-[#64748B] text-[10px] uppercase mb-1">CONSTELLATION FLEET CAPACITY</div>
                  <div className="text-white font-medium text-sm">500 Space Assets</div>
                  <div className="text-[#7CCCED] text-[10px] mt-0.5">Tested with concurrent streaming</div>
                </div>

                <div className="p-3 rounded-[6px] bg-[#050811] border border-white/10">
                  <div className="text-[#64748B] text-[10px] uppercase mb-1">CLUSTER SYNCHRONIZATION</div>
                  <div className="text-emerald-400 font-medium text-sm">12 Distributed Nodes</div>
                  <div className="text-[#94A3B8] text-[10px] mt-0.5">Tested simultaneously in parallel</div>
                </div>

                <div className="p-3 rounded-[6px] bg-[#050811] border border-white/10">
                  <div className="text-[#64748B] text-[10px] uppercase mb-1">OPERATIONAL BOUNDARY</div>
                  <div className="text-[#F59E0B] font-medium text-sm">Dual-Operator Verified</div>
                  <div className="text-[#94A3B8] text-[10px] mt-0.5">Cryptographic signing on all uplinks</div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ── 04. Hardware & Real Photography Showcase ── */}
        <section className="relative py-20 sm:py-24 bg-[#030610]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              
              <div className="rounded-[8px] overflow-hidden border border-white/15 shadow-xl bg-[#080C16]">
                <img
                  src="/images/cubesat_avionics_hardware.jpg"
                  alt="Avionics Hardware and Flight Systems"
                  className="w-full h-80 object-cover"
                  loading="lazy"
                />
                <div className="p-4 text-xs font-mono text-[#94A3B8] border-t border-white/10 flex justify-between items-center">
                  <span className="text-white font-medium">AVIONICS BUS COMPATIBILITY</span>
                  <span className="text-[#47B2E4]">HARDWARE AGNOSTIC</span>
                </div>
              </div>

              <div className="rounded-[8px] overflow-hidden border border-white/15 shadow-xl bg-[#080C16]">
                <img
                  src="/images/mission_control_cockpit.jpg"
                  alt="Mission Control Room Cockpit"
                  className="w-full h-80 object-cover"
                  loading="lazy"
                />
                <div className="p-4 text-xs font-mono text-[#94A3B8] border-t border-white/10 flex justify-between items-center">
                  <span className="text-white font-medium">MISSION OPERATIONS CONSOLE</span>
                  <span className="text-emerald-400">DUAL AUTHORIZATION GATED</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── Footer CTA ── */}
        <FooterCTA />

      </div>
    </>
  );
}
