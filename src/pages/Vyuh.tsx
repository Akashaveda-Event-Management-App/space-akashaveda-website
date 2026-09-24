import { useState } from 'react';
import SEO from '../components/SEO';
import { Cpu, Radio, ShieldCheck, Terminal, Play, CheckCircle2, Lock, ArrowRight, Zap, RefreshCw } from 'lucide-react';
import FooterCTA from '../components/FooterCTA';

export default function Vyuh() {
  const [activeFeature, setActiveFeature] = useState<number>(1);

  const capabilities = [
    {
      id: 'telemetry',
      title: 'Real-Time Telemetry Processing',
      tag: 'STREAMING DECOMMUTATION',
      desc: 'High-throughput parsing of CCSDS telemetry transfer frames. Decodes XTCE and SEDS schemas into calibrated physical engineering parameters with instant limit violation alerts.',
      specs: [
        'Multi-channel packet decommutation and time-series archiving',
        'Dynamic parameter threshold and limit checking',
        'Historical telemetry query and anomaly trend analysis',
      ],
    },
    {
      id: 'uplink',
      title: 'Secure Bi-Directional Uplink Dispatch',
      tag: 'DUAL AUTHORIZATION PROTOCOLS',
      desc: 'Cryptographic command packaging and uplink dispatch. Enforces strict dual-operator authorization rules—ensuring no flight command transmits without independent verification.',
      specs: [
        'Hardware Security Module (HSM) digital command signing',
        'Mandatory dual-operator verification before ground transmitter release',
        'Closed-loop telecommand verification on subsequent packet frame',
      ],
    },
    {
      id: 'playbooks',
      title: 'Automated Playbooks',
      tag: 'DETERMINISTIC FLIGHT PROCEDURES',
      desc: 'Configurable automated procedure engines that orchestrate routine pass executions, safe-mode recoveries, and payload downlinks without operator fatigue.',
      specs: [
        'State-machine driven pass sequence execution',
        'Deterministic branch logic with pre-verified flight rules',
        'Automatic procedure pausing upon unexpected subsystem response',
      ],
    },
    {
      id: 'simulation',
      title: 'Integrated Space Vehicle Simulation',
      tag: 'SIL & HIL VERIFICATION',
      desc: 'High-fidelity vehicle simulation environments connecting directly to flight software builds. Validates maneuvers, payload sequences, and ground passes prior to orbital dispatch.',
      specs: [
        'Software-in-the-loop (SIL) orbital dynamics emulation',
        'Pre-pass dry run verification against live orbital parameters',
        'Operator training and flight contingency rehearsal mode',
      ],
    },
  ];

  return (
    <>
      <SEO
        title="Vyuh - Mission Control System (MCS) | Akashaveda"
        description="Vyuh delivers mission control software: real-time telemetry processing, secure bi-directional uplink dispatch with dual authorization, automated playbooks, and vehicle simulation."
        canonical="/vyuh"
      />

      <div className="pt-24 pb-16 bg-[#030610] text-white min-h-screen">
        
        {/* ── 01. Hero: Define MCS Layer ── */}
        <section className="relative py-16 sm:py-24 border-b border-white/10 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-[#0E1626] border border-white/10 text-xs font-mono text-emerald-400 mb-4">
                <Cpu className="w-3.5 h-3.5" />
                <span>MISSION CONTROL SYSTEM LAYER</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-6 font-sans">
                Vyuh: Mission Control System
              </h1>

              <p className="text-[17px] sm:text-[19px] text-[#94A3B8] font-normal leading-relaxed mb-8">
                Vyuh defines the Mission Control System layer of Akashaveda. It equips satellite operators with real-time telemetry processing, secure bi-directional uplink dispatch with dual-operator authorization, automated operational playbooks, and integrated vehicle simulation.
              </p>

              <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
                <span className="px-3 py-1.5 rounded-[6px] bg-[#080C16] border border-white/15 text-white">
                  REAL-TIME TELEMETRY
                </span>
                <span className="px-3 py-1.5 rounded-[6px] bg-[#080C16] border border-white/15 text-emerald-400">
                  DUAL-AUTH UPLINK
                </span>
                <span className="px-3 py-1.5 rounded-[6px] bg-[#080C16] border border-white/15 text-[#7CCCED]">
                  AUTOMATED PLAYBOOKS
                </span>
                <span className="px-3 py-1.5 rounded-[6px] bg-[#080C16] border border-white/15 text-amber-400">
                  VEHICLE SIMULATION
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ── 02. Feature List / Grid Component: 4 Key Capabilities ── */}
        <section className="relative py-20 sm:py-24 border-b border-white/10 bg-[#050811]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mb-12">
              <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2 font-semibold">
                CORE CAPABILITIES
              </div>
              <h2 className="text-3xl sm:text-4xl font-medium text-white tracking-tight mb-4 font-sans">
                Architectural Capabilities
              </h2>
              <p className="text-base text-[#94A3B8] leading-relaxed">
                Engineered for deterministic precision, dual-operator security boundaries, and multi-satellite constellation scaling.
              </p>
            </div>

            {/* Grid of 4 Cards (Restrained 8px radius) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
              {capabilities.map((cap, i) => (
                <div
                  key={cap.id}
                  className="p-6 rounded-[8px] bg-[#080C16] border border-white/10 hover:border-white/20 transition-all shadow-md flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono text-emerald-400 font-semibold">
                        CAPABILITY 0{i + 1}
                      </span>
                      <span className="text-[9px] font-mono uppercase px-2 py-0.5 rounded bg-white/5 text-[#94A3B8] border border-white/5">
                        {cap.tag}
                      </span>
                    </div>

                    <h3 className="text-xl font-medium text-white mb-2 font-sans">
                      {cap.title}
                    </h3>

                    <p className="text-sm text-[#94A3B8] leading-relaxed mb-4">
                      {cap.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/10 space-y-1.5">
                    {cap.specs.map((sp, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#E2E8F0]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                        <span>{sp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── 03. Dashboard UI Component: High-Fidelity Visual ── */}
        <section className="relative py-20 sm:py-24 bg-[#030610]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mb-12">
              <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2 font-semibold">
                OPERATIONS CONSOLE UI
              </div>
              <h2 className="text-3xl sm:text-4xl font-medium text-white tracking-tight mb-4 font-sans">
                Mission Operations Dashboard
              </h2>
              <p className="text-base text-[#94A3B8] leading-relaxed">
                High-fidelity preview of Vyuh’s telemetry monitoring, automated playbook tracker, and dual-operator command verification prompt.
              </p>
            </div>

            {/* High Fidelity Visual (Restrained 8px Card) */}
            <div className="rounded-[8px] bg-[#080C16] border border-white/15 shadow-[0_16px_50px_rgba(0,0,0,0.8)] overflow-hidden">
              
              {/* Header */}
              <div className="px-5 py-3.5 bg-[#0B1220] border-b border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-white font-medium">VYUH // FLIGHT DIRECTOR CONSOLE</span>
                  </div>
                  <span className="text-[#64748B]">|</span>
                  <span className="text-[#94A3B8]">MISSION: SAT-01 POLAR PASS</span>
                </div>
                <div className="flex items-center gap-4 text-[11px]">
                  <span className="text-emerald-400">TELEMETRY LOCK: +11.8 dB</span>
                  <span className="text-amber-400 flex items-center gap-1">
                    <Lock className="w-3 h-3" />
                    <span>DUAL-AUTH GATE ACTIVE</span>
                  </span>
                </div>
              </div>

              {/* Console Dashboard Grid */}
              <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* Real-time Subsystem Matrix (8 cols) */}
                <div className="lg:col-span-8 space-y-4">

                  {/* ── SVG Telemetry Decommutation Pipeline Infographic ── */}
                  <div className="p-3 sm:p-4 rounded-[6px] bg-[#030610] border border-white/10 overflow-hidden">
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/5 text-[10px] font-mono text-[#64748B]">
                      <span className="text-emerald-400 font-medium">XTCE / SEDS REAL-TIME DECOMMUTATION PIPELINE</span>
                      <span>CCSDS 131.0-B-3 // PACKET SYNC LOCKED</span>
                    </div>

                    <div className="overflow-x-auto pb-1 scrollbar-thin scrollbar-thumb-white/10">
                      <div className="min-w-[560px] sm:min-w-0 w-full aspect-[22/5] min-h-[85px]">
                        <svg className="w-full h-full font-sans" viewBox="0 0 760 110" preserveAspectRatio="xMidYMid meet">
                        {/* Connecting Waveguide */}
                        <line x1="40" y1="55" x2="720" y2="55" stroke="rgba(52,211,153,0.3)" strokeWidth="1.5" strokeDasharray="4 2" />

                        {/* Stage 1: RF Demod & Bitstream */}
                        <g transform="translate(15, 20)">
                          <rect x="0" y="0" width="130" height="70" rx="4" fill="#081420" stroke="rgba(71,178,228,0.4)" strokeWidth="1" />
                          <text x="14" y="24" fill="#7CCCED" fontSize="10" fontWeight="600">01 RF Stream</text>
                          <text x="14" y="42" fill="#FFFFFF" fontSize="11" fontWeight="500">Demodulated Bits</text>
                          <text x="14" y="56" fill="#34D399" fontSize="9">Carrier Locked</text>
                        </g>

                        {/* Stage 2: CCSDS Transfer Frame & FEC */}
                        <g transform="translate(195, 20)">
                          <rect x="0" y="0" width="150" height="70" rx="4" fill="#081420" stroke="rgba(52,211,153,0.4)" strokeWidth="1" />
                          <text x="14" y="24" fill="#34D399" fontSize="10" fontWeight="600">02 Frame Decoder</text>
                          <text x="14" y="42" fill="#FFFFFF" fontSize="11" fontWeight="500">CCSDS Frames</text>
                          <text x="14" y="56" fill="#94A3B8" fontSize="9">RS / LDPC Clean</text>
                        </g>

                        {/* Stage 3: XTCE Schema Decommutation */}
                        <g transform="translate(395, 20)">
                          <rect x="0" y="0" width="155" height="70" rx="4" fill="#081420" stroke="rgba(71,178,228,0.4)" strokeWidth="1" />
                          <text x="14" y="24" fill="#7CCCED" fontSize="10" fontWeight="600">03 XTCE Decomm</text>
                          <text x="14" y="42" fill="#FFFFFF" fontSize="11" fontWeight="500">Schema Engine</text>
                          <text x="14" y="56" fill="#94A3B8" fontSize="9">SEDS Calibration</text>
                        </g>

                        {/* Stage 4: Verified Engineering Parameters */}
                        <g transform="translate(600, 20)">
                          <rect x="0" y="0" width="145" height="70" rx="4" fill="#0E241E" stroke="#34D399" strokeWidth="1.5" />
                          <text x="14" y="24" fill="#34D399" fontSize="10" fontWeight="600">04 Engineering TM</text>
                          <text x="14" y="42" fill="#FFFFFF" fontSize="11" fontWeight="500">Calibrated Values</text>
                          <text x="14" y="56" fill="#34D399" fontSize="9">Limits Nominal</text>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="p-3.5 rounded-[6px] bg-[#0B1220] border border-white/10">
                      <div className="text-[10px] font-mono text-[#64748B] mb-1">POWER BUS VOLTAGE</div>
                      <div className="text-lg font-mono font-medium text-white">28.38 V</div>
                      <div className="text-[10px] text-emerald-400 font-mono mt-1">Within Limits (26-30V)</div>
                    </div>

                    <div className="p-3.5 rounded-[6px] bg-[#0B1220] border border-white/10">
                      <div className="text-[10px] font-mono text-[#64748B] mb-1">BATTERY PACK TEMP</div>
                      <div className="text-lg font-mono font-medium text-white">+18.2 °C</div>
                      <div className="text-[10px] text-emerald-400 font-mono mt-1">Nominal Range</div>
                    </div>

                    <div className="p-3.5 rounded-[6px] bg-[#0B1220] border border-white/10">
                      <div className="text-[10px] font-mono text-[#64748B] mb-1">NADIR POINTING</div>
                      <div className="text-lg font-mono font-medium text-white">0.034 °</div>
                      <div className="text-[10px] text-emerald-400 font-mono mt-1">Fine Attitude Lock</div>
                    </div>
                  </div>

                  {/* Playbook Sequence Execution Tracker */}
                  <div className="p-4 rounded-[6px] bg-[#030610] border border-white/10">
                    <div className="flex items-center justify-between text-xs font-mono text-[#64748B] mb-3">
                      <span>AUTOMATED PLAYBOOK: PASS_PROCEDURE_POLAR_08</span>
                      <span className="text-emerald-400">STATE: STEP 3 OF 4</span>
                    </div>

                    <div className="space-y-2 text-xs font-mono">
                      <div className="flex items-center justify-between p-2 rounded bg-white/[0.02]">
                        <span className="text-[#94A3B8]">1. Antenna Acquisition of Signal (AOS) Lock</span>
                        <span className="text-emerald-400">COMPLETED</span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded bg-white/[0.02]">
                        <span className="text-[#94A3B8]">2. Housekeeping Telemetry Frame Verification</span>
                        <span className="text-emerald-400">COMPLETED</span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded bg-[#0E1626] border border-[#47B2E4]/40">
                        <span className="text-white font-medium">3. Payload Data Recorder Dump Initiation</span>
                        <span className="text-[#47B2E4] animate-pulse">IN PROGRESS (74%)</span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded bg-white/[0.02] opacity-60">
                        <span className="text-[#94A3B8]">4. Pass Horizon Loss of Signal (LOS) Safe-down</span>
                        <span className="text-[#64748B]">QUEUED</span>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Dual-Operator Command Approval Gate Dialog (4 cols) */}
                <div className="lg:col-span-4 p-4 rounded-[6px] bg-[#0B1220] border border-white/10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-2 mb-3 border-b border-white/10">
                      <span className="text-xs font-mono text-white font-medium">DUAL-AUTHORIZATION GATE</span>
                      <Lock className="w-3.5 h-3.5 text-amber-400" />
                    </div>

                    <div className="space-y-2.5 text-xs font-mono mb-4">
                      <div className="p-2.5 rounded-[4px] bg-[#080C16] border border-white/10">
                        <div className="text-[10px] text-[#64748B]">QUEUED TELECOMMAND</div>
                        <div className="text-white font-medium mt-0.5">CMD_ADCS_ORBIT_TRIM</div>
                        <div className="text-[10px] text-[#94A3B8] mt-1">Delta-V: +0.12 m/s | Burn: 4.2s</div>
                      </div>

                      <div className="p-2.5 rounded-[4px] bg-[#080C16] border border-emerald-500/30">
                        <div className="text-[10px] text-emerald-400 flex items-center gap-1 font-semibold">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>AUTH 1: MISSION PLANNER (CONFIRMED)</span>
                        </div>
                        <div className="text-[10px] text-[#64748B] mt-0.5">Signed via Hardware Token</div>
                      </div>

                      <div className="p-2.5 rounded-[4px] bg-[#080C16] border border-amber-500/40">
                        <div className="text-[10px] text-amber-400 font-semibold">
                          AUTH 2: FLIGHT DIRECTOR (AWAITING)
                        </div>
                        <div className="text-[10px] text-[#94A3B8] mt-0.5">Secondary sign-off required to release transmitter</div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/10 text-[10px] font-mono text-[#64748B]">
                    ENFORCING OPERATOR SAFETY BOUNDARY: NO UNVERIFIED COMMAND WILL DISPATCH.
                  </div>
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
