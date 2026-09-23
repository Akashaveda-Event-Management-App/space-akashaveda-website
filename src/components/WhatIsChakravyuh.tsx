import { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, ShieldAlert, Cpu, Radio, ShieldCheck, ArrowRight, Layers, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WhatIsChakravyuh() {
  const [selectedSubsystem, setSelectedSubsystem] = useState<'chakra' | 'vyuh' | 'autonomy'>('autonomy');

  return (
    <section
      id="chakravyuh-overview"
      className="relative py-20 sm:py-28 bg-[#050811] text-white border-t border-white/10 overflow-hidden"
    >
      {/* Background vector grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-[#0E1626] border border-white/10 text-xs font-mono text-[#47B2E4] mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>SYSTEM OVERVIEW</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-5 font-sans">
            What is Chakravyuh?
          </h2>
          <p className="text-[16px] sm:text-[18px] text-[#94A3B8] font-normal leading-relaxed">
            Chakravyuh is the unified system bringing together Chakra and Vyuh. By bridging Space Situational Awareness with Mission Control under an outer boundary of Autonomous Operations, satellite operators achieve coherent, synchronized mission execution with zero operational silos.
          </p>
        </div>

        {/* Split Pane: Left Interactive Diagram / Right Explanatory Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* ── Left Diagram: Chakravyuh Overview Infographic ── */}
          <div className="lg:col-span-7">
            <div className="relative p-6 sm:p-8 rounded-[8px] bg-[#080C16] border border-white/15 shadow-[0_12px_40px_rgba(0,0,0,0.6)]">
              
              {/* Outer Boundary Header */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#47B2E4] animate-pulse" />
                  <span className="text-white font-medium">CHAKRAVYUH PLATFORM ARCHITECTURE</span>
                </div>
                <span className="text-[#64748B]">INTEGRATED OPERATIONAL BOUNDARY</span>
              </div>

              {/* ── Visual Infographic: Chakravyuh Overview Architecture ── */}
              <div className="relative w-full mb-6 p-4 rounded-[6px] bg-[#050811] border border-white/10 overflow-hidden">
                <div className="flex items-center justify-between pb-2 mb-3 border-b border-white/5 text-[10px] font-mono text-[#64748B]">
                  <span>CONCENTRIC SYSTEM MAP</span>
                  <span>AUTONOMOUS BOUNDARY &amp; DUAL CORES</span>
                </div>

                <div className="relative w-full aspect-[21/9] min-h-[180px] sm:min-h-[220px]">
                  <svg className="w-full h-full" viewBox="0 0 600 240" preserveAspectRatio="xMidYMid meet">
                    <defs>
                      <linearGradient id="chakraGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#7CCCED" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#0B1528" stopOpacity="0.8" />
                      </linearGradient>
                      <linearGradient id="vyuhGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#34D399" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#081C1B" stopOpacity="0.8" />
                      </linearGradient>
                      <linearGradient id="busGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#7CCCED" />
                        <stop offset="50%" stopColor="#47B2E4" />
                        <stop offset="100%" stopColor="#34D399" />
                      </linearGradient>
                    </defs>

                    {/* Outer Boundary: Autonomous Operations */}
                    <rect
                      x="10"
                      y="10"
                      width="580"
                      height="220"
                      rx="12"
                      fill={selectedSubsystem === 'autonomy' ? 'rgba(71,178,228,0.06)' : 'rgba(255,255,255,0.01)'}
                      stroke={selectedSubsystem === 'autonomy' ? '#47B2E4' : 'rgba(255,255,255,0.18)'}
                      strokeWidth={selectedSubsystem === 'autonomy' ? '2' : '1'}
                      strokeDasharray="6 4"
                      className="transition-all duration-300"
                    />

                    {/* Outer Boundary Title */}
                    <text x="24" y="32" fill="#47B2E4" fontSize="10" fontFamily="monospace" fontWeight="600" letterSpacing="0.08em">
                      OUTER BOUNDARY: AUTONOMOUS OPERATIONS (GOVERNED STATE MACHINE)
                    </text>
                    <text x="576" y="32" fill="#64748B" fontSize="9" fontFamily="monospace" textAnchor="end">
                      PRE-VERIFIED FLIGHT RULES
                    </text>

                    {/* Synchronized Data Bus Bar Connecting Chakra & Vyuh */}
                    <path d="M 230 130 L 370 130" stroke="url(#busGrad)" strokeWidth="3" strokeDasharray="4 2" className="animate-pulse" />
                    <circle cx="300" cy="130" r="14" fill="#0E1626" stroke="#47B2E4" strokeWidth="1.5" />
                    <text x="300" y="134" fill="#FFFFFF" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">SYNC</text>

                    {/* Left Subsystem Node: Chakra (SSA) */}
                    <g
                      onClick={(e) => { e.stopPropagation(); setSelectedSubsystem('chakra'); }}
                      className="cursor-pointer group"
                    >
                      {/* Radar sweep arcs */}
                      <circle cx="140" cy="130" r="66" fill="url(#chakraGrad)" stroke={selectedSubsystem === 'chakra' ? '#7CCCED' : 'rgba(124,204,237,0.3)'} strokeWidth={selectedSubsystem === 'chakra' ? '2' : '1'} />
                      <circle cx="140" cy="130" r="44" fill="none" stroke="rgba(124,204,237,0.25)" strokeDasharray="3 3" />
                      <circle cx="140" cy="130" r="24" fill="none" stroke="rgba(124,204,237,0.4)" />
                      <circle cx="140" cy="130" r="4" fill="#7CCCED" />

                      {/* Sweeping radar radial line */}
                      <line x1="140" y1="130" x2="185" y2="90" stroke="#7CCCED" strokeWidth="1.5" strokeOpacity="0.8" />

                      {/* Node Labels */}
                      <text x="140" y="124" fill="#FFFFFF" fontSize="13" fontFamily="sans-serif" fontWeight="600" textAnchor="middle">CHAKRA</text>
                      <text x="140" y="140" fill="#7CCCED" fontSize="8" fontFamily="monospace" textAnchor="middle">SSA / AWARENESS</text>
                      <text x="140" y="210" fill="#94A3B8" fontSize="8" fontFamily="monospace" textAnchor="middle">TRACKING · COLLISION · PROXIMITY</text>
                    </g>

                    {/* Right Subsystem Node: Vyuh (MCS) */}
                    <g
                      onClick={(e) => { e.stopPropagation(); setSelectedSubsystem('vyuh'); }}
                      className="cursor-pointer group"
                    >
                      {/* Core Circle */}
                      <circle cx="460" cy="130" r="66" fill="url(#vyuhGrad)" stroke={selectedSubsystem === 'vyuh' ? '#34D399' : 'rgba(52,211,153,0.3)'} strokeWidth={selectedSubsystem === 'vyuh' ? '2' : '1'} />
                      <circle cx="460" cy="130" r="44" fill="none" stroke="rgba(52,211,153,0.25)" strokeDasharray="3 3" />
                      <circle cx="460" cy="130" r="24" fill="none" stroke="rgba(52,211,153,0.4)" />
                      <circle cx="460" cy="130" r="4" fill="#34D399" />

                      {/* Telemetry Wave tick lines */}
                      <line x1="435" y1="130" x2="485" y2="130" stroke="#34D399" strokeWidth="1" strokeOpacity="0.7" />
                      <line x1="460" y1="105" x2="460" y2="155" stroke="#34D399" strokeWidth="1" strokeOpacity="0.7" />

                      {/* Node Labels */}
                      <text x="460" y="124" fill="#FFFFFF" fontSize="13" fontFamily="sans-serif" fontWeight="600" textAnchor="middle">VYUH</text>
                      <text x="460" y="140" fill="#34D399" fontSize="8" fontFamily="monospace" textAnchor="middle">MCS / CONTROL</text>
                      <text x="460" y="210" fill="#94A3B8" fontSize="8" fontFamily="monospace" textAnchor="middle">TELEMETRY · COMMAND · FLEET</text>
                    </g>

                    {/* Data Flow Indicator Callouts */}
                    <text x="300" y="105" fill="#7CCCED" fontSize="8" fontFamily="monospace" textAnchor="middle">CONJUNCTION EPHEMERIS →</text>
                    <text x="300" y="160" fill="#34D399" fontSize="8" fontFamily="monospace" textAnchor="middle">← PLANNED MANEUVER VECTORS</text>
                  </svg>
                </div>
              </div>

              {/* ── Outer Boundary: Autonomous Operations ── */}
              <div
                onClick={() => setSelectedSubsystem('autonomy')}
                className={`
                  relative p-6 rounded-[8px] border-2 border-dashed transition-all cursor-pointer
                  ${selectedSubsystem === 'autonomy'
                    ? 'border-[#47B2E4] bg-[#47B2E4]/[0.04]'
                    : 'border-white/20 hover:border-white/40 bg-white/[0.01]'
                  }
                `}
              >
                {/* Boundary Tag */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2 px-2.5 py-1 rounded-[4px] bg-[#0E1626] border border-white/15 text-[11px] font-mono text-[#47B2E4]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#47B2E4]" />
                    <span className="font-semibold uppercase tracking-wider">Outer Boundary: Autonomous Operations</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#64748B]">OPERATOR SAFETY ENVELOPE</span>
                </div>

                {/* Inner Dual Engines: Chakra & Vyuh */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Subsystem 1: Chakra (SSA / Awareness) */}
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedSubsystem('chakra');
                    }}
                    className={`
                      p-5 rounded-[6px] border transition-all cursor-pointer flex flex-col justify-between
                      ${selectedSubsystem === 'chakra'
                        ? 'bg-[#0B1528] border-[#7CCCED] shadow-[0_0_20px_rgba(124,204,237,0.15)]'
                        : 'bg-[#080E1B] border-white/10 hover:border-white/25'
                      }
                    `}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-8 h-8 rounded-[4px] bg-[#7CCCED]/10 border border-[#7CCCED]/30 flex items-center justify-center">
                          <Eye className="w-4 h-4 text-[#7CCCED]" />
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-[#7CCCED]">
                          SSA LAYER
                        </span>
                      </div>
                      <h3 className="text-lg font-medium text-white mb-1">Chakra</h3>
                      <p className="text-xs font-mono text-[#7CCCED] mb-3 uppercase tracking-wider">
                        Space Situational Awareness
                      </p>
                      <ul className="space-y-1.5 text-xs text-[#94A3B8]">
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#7CCCED]" />
                          <span>Object Tracking</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#7CCCED]" />
                          <span>Collision Warning</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#7CCCED]" />
                          <span>Proximity Alerts</span>
                        </li>
                      </ul>
                    </div>
                    <div className="mt-4 pt-3 border-t border-white/10 text-[10px] font-mono text-[#64748B]">
                      Feeds Orbital Telemetry Traces →
                    </div>
                  </div>

                  {/* Subsystem 2: Vyuh (MCS / Control) */}
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedSubsystem('vyuh');
                    }}
                    className={`
                      p-5 rounded-[6px] border transition-all cursor-pointer flex flex-col justify-between
                      ${selectedSubsystem === 'vyuh'
                        ? 'bg-[#0B191B] border-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.15)]'
                        : 'bg-[#080E1B] border-white/10 hover:border-white/25'
                      }
                    `}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-8 h-8 rounded-[4px] bg-emerald-400/10 border border-emerald-400/30 flex items-center justify-center">
                          <Cpu className="w-4 h-4 text-emerald-400" />
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-emerald-400">
                          MCS LAYER
                        </span>
                      </div>
                      <h3 className="text-lg font-medium text-white mb-1">Vyuh</h3>
                      <p className="text-xs font-mono text-emerald-400 mb-3 uppercase tracking-wider">
                        Mission Control System
                      </p>
                      <ul className="space-y-1.5 text-xs text-[#94A3B8]">
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          <span>Real-Time Telemetry Processing</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          <span>Command Execution</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          <span>Fleet Planning &amp; Scheduling</span>
                        </li>
                      </ul>
                    </div>
                    <div className="mt-4 pt-3 border-t border-white/10 text-[10px] font-mono text-[#64748B]">
                      Executes Ground &amp; Pass Control ←
                    </div>
                  </div>

                </div>

                {/* Central Bi-Directional Synchronization Bus */}
                <div className="mt-4 p-3 rounded-[6px] bg-[#0E1626] border border-white/10 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2 text-[#94A3B8]">
                    <Lock className="w-3.5 h-3.5 text-[#47B2E4]" />
                    <span>HUMAN-IN-THE-LOOP APPROVAL BOUNDARY</span>
                  </div>
                  <span className="text-emerald-400 text-[11px]">DUAL AUTHORIZATION GATED</span>
                </div>

              </div>

            </div>
          </div>

          {/* ── Right Column: Explanatory Context Cards ── */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="p-6 rounded-[8px] bg-[#080C16] border border-white/10 shadow-md">
              <span className="text-[10px] font-mono text-[#47B2E4] uppercase tracking-wider font-semibold">
                THE UNIFIED PLATFORM
              </span>
              <h3 className="text-xl font-medium text-white mt-1 mb-2">
                Confronting Operational Fragmentation
              </h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                Traditional space missions separate orbital surveillance tools from ground command dispatch software. Chakravyuh bridges this gap: Chakra provides the continuous orbital awareness, while Vyuh executes the operational pass routines.
              </p>
            </div>

            <div className="p-6 rounded-[8px] bg-[#080C16] border border-white/10 shadow-md">
              <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider font-semibold">
                GOVERNED AUTONOMY
              </span>
              <h3 className="text-xl font-medium text-white mt-1 mb-2">
                Bounded by Operator Authorization
              </h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                Autonomous operations within Chakravyuh run inside strictly enforced safety envelopes. Pass optimization and orbital collision warnings are computed in real time, but critical flight commands require cryptographic dual-operator authorization before uplink dispatch.
              </p>
            </div>

            <div className="pt-2">
              <Link
                to="/chakravyuh"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#47B2E4] hover:text-white transition-colors group"
              >
                <span>Explore the full Chakravyuh platform architecture</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
