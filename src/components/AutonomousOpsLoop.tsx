import { useState } from 'react';
import { Eye, Brain, Scale, Send, CheckCircle2, ShieldCheck } from 'lucide-react';

const steps = [
  {
    id: 'observe',
    num: '01',
    label: 'Observe',
    icon: Eye,
    subtitle: 'Telemetry Ingestion',
    description: 'Housekeeping telemetry frames and sensor tracking data stream continuously into the operational buffer.',
    safeguard: 'Zero-loss packet buffering across ground passes',
  },
  {
    id: 'understand',
    num: '02',
    label: 'Understand',
    icon: Brain,
    subtitle: 'Decommutation & Analysis',
    description: 'Raw packet streams are calibrated into physical units with automated trend and conjunction screening.',
    safeguard: 'Automated thermal, power, and trajectory trend checks',
  },
  {
    id: 'decide',
    num: '03',
    label: 'Decide',
    icon: Scale,
    subtitle: 'Pass Formulation',
    description: 'Autonomous engines formulate contact schedules, pass allocation windows, and maneuver recommendations.',
    safeguard: 'Pre-flight rule validation against flight constraints',
  },
  {
    id: 'act',
    num: '04',
    label: 'Act',
    icon: Send,
    subtitle: 'Dual-Operator Authorization',
    description: 'Ground systems queue verified commands for uplink strictly after human operator cryptographic approval.',
    safeguard: 'Mandatory dual-operator authorization before uplink execution',
    highlight: true,
  },
  {
    id: 'monitor',
    num: '05',
    label: 'Monitor',
    icon: CheckCircle2,
    subtitle: 'Closed-Loop Verification',
    description: 'Post-uplink telemetry confirms spacecraft command execution, acknowledges state changes, and updates tracking.',
    safeguard: 'Closed-loop telecommand verification on subsequent frame',
  },
];

export default function AutonomousOpsLoop() {
  const [activeStep, setActiveStep] = useState(3); // Start with 'Act' (human gate)

  return (
    <section
      id="autonomous-ops-loop"
      className="relative py-20 sm:py-28 bg-[#030610] text-white border-t border-white/10 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-[#0E1626] border border-white/10 text-xs font-mono text-[#47B2E4] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#47B2E4]" />
            <span>OPERATIONAL PROCESS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-4 font-sans">
            Autonomous Operations Loop
          </h2>
          <p className="text-[16px] text-[#94A3B8] font-normal leading-relaxed">
            Continuous guided operational cycle. Routine mission tasks run deterministically while flight-critical maneuvers remain bounded by human verification.
          </p>
        </div>

        {/* ── Closed-Loop Schematic ── */}
        <div className="mb-8 p-4 sm:p-6 rounded-[8px] bg-[#080C16] border border-white/15 shadow-[0_12px_40px_rgba(0,0,0,0.5)] overflow-hidden">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10 text-xs font-mono text-[#64748B]">
            <span className="text-white font-medium">CLOSED-LOOP AUTONOMY FLOW</span>
            <span>PHASE {steps[activeStep].num}: {steps[activeStep].label.toUpperCase()}</span>
          </div>

          <div className="overflow-x-auto pb-1 scrollbar-thin scrollbar-thumb-white/10">
            <div className="min-w-[680px] sm:min-w-0 w-full aspect-[22/5] min-h-[140px]">
              <svg className="w-full h-full font-sans" viewBox="0 0 1000 160" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <linearGradient id="returnLoopGrad" x1="100%" y1="0%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="#10B981" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#47B2E4" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#7CCCED" stopOpacity="0.8" />
                  </linearGradient>
                  <linearGradient id="activeNodeGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#173154" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#0B1626" stopOpacity="0.95" />
                  </linearGradient>
                </defs>

                {/* Connecting Forward Bus */}
                <line x1="100" y1="65" x2="900" y2="65" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="6 4" />
                <line
                  x1="100" y1="65"
                  x2={100 + activeStep * 200}
                  y2="65"
                  stroke="#47B2E4"
                  strokeWidth="2.5"
                  strokeDasharray="4 2"
                  className="transition-all duration-300"
                />

                {/* Return Loop (5 to 1) */}
                <path
                  d="M 900 95 C 900 150, 100 150, 100 95"
                  fill="none"
                  stroke="url(#returnLoopGrad)"
                  strokeWidth="2"
                  strokeDasharray="6 3"
                />
                <text x="500" y="148" fill="#64748B" fontSize="9" textAnchor="middle">
                  Closed-loop verification &amp; state re-ingestion
                </text>

                {/* Node 01: Observe */}
                <g onClick={() => setActiveStep(0)} className="cursor-pointer">
                  <circle
                    cx="100" cy="65" r="34"
                    fill={activeStep === 0 ? 'url(#activeNodeGlow)' : '#080C16'}
                    stroke={activeStep === 0 ? '#47B2E4' : 'rgba(255,255,255,0.18)'}
                    strokeWidth={activeStep === 0 ? '2' : '1'}
                  />
                  <text x="100" y="58" fill={activeStep === 0 ? '#47B2E4' : '#64748B'} fontSize="9" fontWeight="600" textAnchor="middle">01</text>
                  <text x="100" y="74" fill="#FFFFFF" fontSize="11" fontWeight="600" textAnchor="middle">Observe</text>
                </g>

                {/* Node 02: Understand */}
                <g onClick={() => setActiveStep(1)} className="cursor-pointer">
                  <circle
                    cx="300" cy="65" r="34"
                    fill={activeStep === 1 ? 'url(#activeNodeGlow)' : '#080C16'}
                    stroke={activeStep === 1 ? '#47B2E4' : 'rgba(255,255,255,0.18)'}
                    strokeWidth={activeStep === 1 ? '2' : '1'}
                  />
                  <text x="300" y="58" fill={activeStep === 1 ? '#47B2E4' : '#64748B'} fontSize="9" fontWeight="600" textAnchor="middle">02</text>
                  <text x="300" y="74" fill="#FFFFFF" fontSize="11" fontWeight="600" textAnchor="middle">Understand</text>
                </g>

                {/* Node 03: Decide */}
                <g onClick={() => setActiveStep(2)} className="cursor-pointer">
                  <circle
                    cx="500" cy="65" r="34"
                    fill={activeStep === 2 ? 'url(#activeNodeGlow)' : '#080C16'}
                    stroke={activeStep === 2 ? '#47B2E4' : 'rgba(255,255,255,0.18)'}
                    strokeWidth={activeStep === 2 ? '2' : '1'}
                  />
                  <text x="500" y="58" fill={activeStep === 2 ? '#47B2E4' : '#64748B'} fontSize="9" fontWeight="600" textAnchor="middle">03</text>
                  <text x="500" y="74" fill="#FFFFFF" fontSize="11" fontWeight="600" textAnchor="middle">Decide</text>
                </g>

                {/* Node 04: Act (Dual-Auth Gate) */}
                <g onClick={() => setActiveStep(3)} className="cursor-pointer">
                  <circle
                    cx="700" cy="65" r="38"
                    fill={activeStep === 3 ? '#2A1D0B' : '#140E06'}
                    stroke={activeStep === 3 ? '#F59E0B' : '#B45309'}
                    strokeWidth={activeStep === 3 ? '2.5' : '1.5'}
                  />
                  <text x="700" y="56" fill="#F59E0B" fontSize="9" fontWeight="600" textAnchor="middle">04 Gate</text>
                  <text x="700" y="72" fill="#FFFFFF" fontSize="12" fontWeight="700" textAnchor="middle">Act</text>
                  <text x="700" y="84" fill="#FBBF24" fontSize="7.5" fontWeight="600" textAnchor="middle">Dual-Auth</text>
                </g>

                {/* Node 05: Monitor */}
                <g onClick={() => setActiveStep(4)} className="cursor-pointer">
                  <circle
                    cx="900" cy="65" r="34"
                    fill={activeStep === 4 ? '#0A261E' : '#080C16'}
                    stroke={activeStep === 4 ? '#10B981' : 'rgba(255,255,255,0.18)'}
                    strokeWidth={activeStep === 4 ? '2' : '1'}
                  />
                  <text x="900" y="58" fill={activeStep === 4 ? '#10B981' : '#64748B'} fontSize="9" fontWeight="600" textAnchor="middle">05</text>
                  <text x="900" y="74" fill="#FFFFFF" fontSize="11" fontWeight="600" textAnchor="middle">Monitor</text>
                </g>
              </svg>
            </div>
          </div>
        </div>

        {/* ── 5-Step Process Grid (Clean & Unified) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 mb-6">
          {steps.map((st, i) => {
            const Icon = st.icon;
            const isSelected = activeStep === i;
            return (
              <button
                key={st.id}
                onClick={() => setActiveStep(i)}
                className={`
                  p-4 rounded-[8px] border text-left transition-all duration-150 flex flex-col justify-between
                  ${isSelected
                    ? 'bg-[#0E1626] border-[#47B2E4] shadow-[0_4px_20px_rgba(71,178,228,0.15)]'
                    : 'bg-[#080C16] border-white/10 hover:border-white/20 text-[#94A3B8]'
                  }
                `}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-[#64748B]">0{i + 1}</span>
                    <Icon className={`w-4 h-4 ${isSelected ? 'text-[#47B2E4]' : 'text-[#64748B]'}`} />
                  </div>
                  <div className="text-[14px] font-medium text-white mb-1">
                    {st.label}
                  </div>
                  <p className="text-[12px] text-[#94A3B8] leading-relaxed mb-2">
                    {st.description}
                  </p>
                </div>
                {st.highlight ? (
                  <span className="inline-block text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 w-fit">
                    Dual-Auth Required
                  </span>
                ) : (
                  <span className="text-[10px] font-mono text-[#64748B]">
                    {st.subtitle}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Active Stage Safeguard Callout */}
        <div className="p-4 rounded-[8px] bg-[#080C16] border border-white/15 flex items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-4 h-4 text-[#47B2E4] flex-shrink-0" />
            <span className="text-[#94A3B8]">
              <strong className="text-white font-medium">Phase 0{activeStep + 1} Safety Constraint:</strong> {steps[activeStep].safeguard}
            </span>
          </div>
          <span className="hidden sm:inline-block text-[10px] font-mono text-emerald-400 uppercase tracking-wider">
            Deterministic Rule
          </span>
        </div>

      </div>
    </section>
  );
}
