import { useState } from 'react';
import { Cpu, Terminal, ArrowRight, ShieldCheck, Check, Activity, Radio, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const pipelineStages = [
  { id: 'raw', label: 'Raw Data', desc: 'Demodulated frames & bitstreams' },
  { id: 'decode', label: 'Decode', desc: 'Frame sync & error correction' },
  { id: 'parameters', label: 'Parameters', desc: 'XTCE schema decommutation' },
  { id: 'telemetry', label: 'Telemetry', desc: 'Calibrated physical engineering values' },
  { id: 'operations', label: 'Operations', desc: 'Flight console & dual-auth dispatch' },
];

export default function VyuhSection() {
  const [activeTab, setActiveTab] = useState<'power' | 'thermal' | 'adcs'>('power');

  return (
    <section
      id="vyuh-section"
      className="relative py-20 sm:py-28 bg-[#050811] text-white border-t border-white/10 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-[#0E1626] border border-white/10 text-xs font-mono text-emerald-400 mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>MISSION OPERATIONS CORE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-5 font-sans">
            Vyuh: Mission Control System
          </h2>
          <p className="text-[16px] sm:text-[18px] text-[#94A3B8] font-normal leading-relaxed">
            Vyuh delivers modern satellite operations software, integrating real-time telemetry processing, secure command execution, and fleet planning into a single, high-reliability console.
          </p>
        </div>

        {/* ── Visual Graphic: "Mission Pipeline" ── */}
        <div className="p-5 sm:p-6 rounded-[8px] bg-[#080C16] border border-white/15 mb-10 shadow-lg">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10 text-xs font-mono text-[#64748B]">
            <span className="text-white font-medium">MISSION PIPELINE</span>
            <span>DATA TRANSFORMATION FLOW</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {pipelineStages.map((st, i) => (
              <div
                key={st.id}
                className="p-3.5 rounded-[6px] bg-[#0B1220] border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="text-[10px] font-mono text-emerald-400 mb-1">0{i + 1}</div>
                  <div className="text-sm font-medium text-white mb-1">{st.label}</div>
                  <p className="text-[11px] text-[#94A3B8] leading-tight">{st.desc}</p>
                </div>
                {i < pipelineStages.length - 1 && (
                  <div className="hidden sm:block text-[11px] font-mono text-[#64748B] pt-2">
                    → Next Stage
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── Dashboard Mockup / Realistic UI Preview ── */}
        <div className="rounded-[8px] bg-[#080C16] border border-white/15 shadow-[0_16px_50px_rgba(0,0,0,0.8)] overflow-hidden">
          
          {/* Mock Console Top Toolbar */}
          <div className="px-5 py-3.5 bg-[#0B1220] border-b border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-white font-medium">VYUH MCS // ACTIVE PASS CONSOLE</span>
              </div>
              <span className="text-[#64748B]">|</span>
              <span className="text-[#94A3B8]">SPACECRAFT: SAT-01</span>
              <span className="text-[#64748B]">|</span>
              <span className="text-[#7CCCED]">PASS ELEV: 68°</span>
            </div>

            <div className="flex items-center gap-4 text-[11px]">
              <div className="flex items-center gap-1.5 text-emerald-400">
                <Radio className="w-3.5 h-3.5" />
                <span>CARRIER LOCKED</span>
              </div>
              <div className="flex items-center gap-1.5 text-amber-400">
                <Lock className="w-3.5 h-3.5" />
                <span>DUAL-AUTH ENGAGED</span>
              </div>
            </div>
          </div>

          {/* Console Body Grid */}
          <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Subsystem Telemetry Readouts (8 Cols) */}
            <div className="lg:col-span-8 space-y-4">
              
              {/* Telemetry Tab Selector */}
              <div className="flex items-center gap-2 border-b border-white/10 pb-3">
                <button
                  onClick={() => setActiveTab('power')}
                  className={`px-3 py-1 rounded-[4px] text-xs font-mono transition-colors ${activeTab === 'power' ? 'bg-white/10 text-white font-semibold' : 'text-[#94A3B8] hover:text-white'}`}
                >
                  EPS / POWER
                </button>
                <button
                  onClick={() => setActiveTab('thermal')}
                  className={`px-3 py-1 rounded-[4px] text-xs font-mono transition-colors ${activeTab === 'thermal' ? 'bg-white/10 text-white font-semibold' : 'text-[#94A3B8] hover:text-white'}`}
                >
                  TCS / THERMAL
                </button>
                <button
                  onClick={() => setActiveTab('adcs')}
                  className={`px-3 py-1 rounded-[4px] text-xs font-mono transition-colors ${activeTab === 'adcs' ? 'bg-white/10 text-white font-semibold' : 'text-[#94A3B8] hover:text-white'}`}
                >
                  ADCS / ATTITUDE
                </button>
              </div>

              {/* Dynamic Subsystem Channels */}
              {activeTab === 'power' && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-4 rounded-[6px] bg-[#0B1220] border border-white/10">
                    <div className="text-[10px] font-mono text-[#64748B] mb-1">BUS VOLTAGE</div>
                    <div className="text-xl font-mono font-medium text-white">28.42 V</div>
                    <div className="text-[10px] text-emerald-400 font-mono mt-1">Nominal (26-30V)</div>
                  </div>
                  <div className="p-4 rounded-[6px] bg-[#0B1220] border border-white/10">
                    <div className="text-[10px] font-mono text-[#64748B] mb-1">SOLAR ARRAY GEN</div>
                    <div className="text-xl font-mono font-medium text-white">384.6 W</div>
                    <div className="text-[10px] text-emerald-400 font-mono mt-1">Illuminated (Sun-Track)</div>
                  </div>
                  <div className="p-4 rounded-[6px] bg-[#0B1220] border border-white/10">
                    <div className="text-[10px] font-mono text-[#64748B] mb-1">BATTERY SOC</div>
                    <div className="text-xl font-mono font-medium text-white">96.8 %</div>
                    <div className="text-[10px] text-emerald-400 font-mono mt-1">State of Charge Nominal</div>
                  </div>
                </div>
              )}

              {activeTab === 'thermal' && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-4 rounded-[6px] bg-[#0B1220] border border-white/10">
                    <div className="text-[10px] font-mono text-[#64748B] mb-1">OBC AVIONICS TEMP</div>
                    <div className="text-xl font-mono font-medium text-white">+21.8 °C</div>
                    <div className="text-[10px] text-emerald-400 font-mono mt-1">Thermal Range -10..+50°C</div>
                  </div>
                  <div className="p-4 rounded-[6px] bg-[#0B1220] border border-white/10">
                    <div className="text-[10px] font-mono text-[#64748B] mb-1">BATTERY PACK TEMP</div>
                    <div className="text-xl font-mono font-medium text-white">+18.4 °C</div>
                    <div className="text-[10px] text-emerald-400 font-mono mt-1">Cell Uniformity &lt;0.5°C</div>
                  </div>
                  <div className="p-4 rounded-[6px] bg-[#0B1220] border border-white/10">
                    <div className="text-[10px] font-mono text-[#64748B] mb-1">PAYLOAD SENSOR</div>
                    <div className="text-xl font-mono font-medium text-white">+14.2 °C</div>
                    <div className="text-[10px] text-emerald-400 font-mono mt-1">Cryocooler Active</div>
                  </div>
                </div>
              )}

              {activeTab === 'adcs' && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-4 rounded-[6px] bg-[#0B1220] border border-white/10">
                    <div className="text-[10px] font-mono text-[#64748B] mb-1">NADIR POINTING ERROR</div>
                    <div className="text-xl font-mono font-medium text-white">0.038 °</div>
                    <div className="text-[10px] text-emerald-400 font-mono mt-1">Fine Pointing Mode</div>
                  </div>
                  <div className="p-4 rounded-[6px] bg-[#0B1220] border border-white/10">
                    <div className="text-[10px] font-mono text-[#64748B] mb-1">REACTION WHEELS</div>
                    <div className="text-xl font-mono font-medium text-white">3,120 RPM</div>
                    <div className="text-[10px] text-emerald-400 font-mono mt-1">4-Wheel Pyramid Balanced</div>
                  </div>
                  <div className="p-4 rounded-[6px] bg-[#0B1220] border border-white/10">
                    <div className="text-[10px] font-mono text-[#64748B] mb-1">STAR TRACKER</div>
                    <div className="text-xl font-mono font-medium text-white">DUAL LOCK</div>
                    <div className="text-[10px] text-emerald-400 font-mono mt-1">18 Stars Identified</div>
                  </div>
                </div>
              )}

              {/* Streaming Log Snippet */}
              <div className="p-3 rounded-[6px] bg-[#030610] border border-white/10 font-mono text-xs text-[#94A3B8] space-y-1">
                <div className="text-[#64748B] text-[10px] uppercase">REAL-TIME INGESTION STREAM</div>
                <div className="text-emerald-400 text-[11px]">[OK] Frame 49102 synced (CCSDS 102.0-B-5) // 0 parity errors</div>
                <div className="text-white text-[11px]">[INFO] Parameter EPS_V_BATT calibrated: 28.42V</div>
                <div className="text-[#7CCCED] text-[11px]">[TELEMETRY] Pass horizon check: LOS scheduled in 08:34 min</div>
              </div>
            </div>

            {/* Command Execution Panel with Dual Auth Gate (4 Cols) */}
            <div className="lg:col-span-4 p-4 rounded-[6px] bg-[#0B1220] border border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-2 mb-3 border-b border-white/10">
                  <span className="text-xs font-mono text-white font-medium">COMMAND STACK</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    DUAL-AUTH
                  </span>
                </div>

                <div className="space-y-2.5 mb-4">
                  <div className="p-2.5 rounded-[4px] bg-[#080C16] border border-white/10 text-xs font-mono">
                    <div className="text-[#64748B] text-[10px]">QUEUED TELECOMMAND</div>
                    <div className="text-white font-medium mt-0.5">CMD_PAYLOAD_IMAGE_START</div>
                    <div className="text-[10px] text-[#94A3B8] mt-1">Target: Area Grid 24A</div>
                  </div>

                  <div className="p-2.5 rounded-[4px] bg-[#080C16] border border-emerald-500/20 text-xs font-mono">
                    <div className="flex items-center gap-1.5 text-emerald-400 text-[10px]">
                      <Check className="w-3 h-3" />
                      <span>PRIMARY OPERATOR SIGNED</span>
                    </div>
                    <div className="text-[#64748B] text-[10px] mt-1">Awaiting Flight Director Authorization</div>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10">
                <div className="text-[10px] font-mono text-[#64748B] mb-2">
                  HUMAN APPROVAL BOUNDARY: COMMAND WILL NOT DISPATCH UNTIL SECOND AUTHORIZATION IS ENTERED.
                </div>
                <Link
                  to="/vyuh"
                  className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-[6px] bg-white/10 hover:bg-white/15 border border-white/15 text-xs font-medium text-white transition-colors"
                >
                  <span>Explore Vyuh MCS Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
