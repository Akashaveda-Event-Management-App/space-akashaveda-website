import { useState } from 'react';
import SEO from '../components/SEO';
import { Eye, ShieldAlert, AlertTriangle, Orbit, Disc, ArrowRight, ShieldCheck, Activity } from 'lucide-react';
import FooterCTA from '../components/FooterCTA';

export default function Chakra() {
  const [selectedWheelSector, setSelectedWheelSector] = useState<'tracking' | 'collision' | 'proximity'>('collision');
  const [conjunctionView, setConjunctionView] = useState<'geometry' | 'covariance' | 'maneuver'>('geometry');

  const capabilities = [
    {
      id: 'tracking',
      title: 'Object Tracking',
      tag: 'EPHEMERIS & ORBIT DETERMINATION',
      desc: 'Continuous tracking of operational satellites and cataloged space objects across low-Earth, sun-synchronous, and medium-Earth orbits.',
      features: [
        'High-precision numerical orbit propagation',
        'State vector correlation from multi-sensor tracking feeds',
        'Automated covariance matrix generation and decay prediction',
      ],
      readout: 'CATALOG STATUS: SYNCHRONIZED',
    },
    {
      id: 'collision',
      title: 'Collision Warnings',
      tag: 'CONJUNCTION RISK SCREENING',
      desc: 'Continuous automated ingestion and screening of Conjunction Data Messages (CDMs), miss-distance geometry calculation, and collision probability modeling.',
      features: [
        'Automated CDM ingestion & timeline reconciliation',
        'Miss-distance 3D coordinate decomposition (Radial, In-track, Cross-track)',
        'Collision probability calculation (Pc) with automated operator thresholds',
      ],
      readout: 'SCREENING ENGINE: CONTINUOUS MONITORING',
    },
    {
      id: 'proximity',
      title: 'Proximity Alerts',
      tag: 'SAFETY ENVELOPE MONITORING',
      desc: 'Real-time safety ellipsoid monitoring around active spacecraft, issuing automated warnings when non-cooperative objects breach defined boundary buffers.',
      features: [
        'Dynamic radial, along-track, and cross-track keep-out spheres',
        'Early-warning notification triggers for flight operations teams',
        'Trajectory clearance verification prior to station-keeping maneuvers',
      ],
      readout: 'SAFETY ENVELOPES: NOMINAL CLEARANCE',
    },
  ];

  return (
    <>
      <SEO
        title="Chakra - Space Situational Awareness (SSA) | Akashaveda"
        description="Chakra delivers space situational awareness: precision object tracking, collision warning screening, and dynamic proximity alerts for satellite constellations."
        canonical="/chakra"
      />

      <div className="pt-24 pb-16 bg-[#030610] text-white min-h-screen">
        
        {/* ── 01. Hero: Define SSA Layer ── */}
        <section className="relative py-16 sm:py-24 border-b border-white/10 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-[#0E1626] border border-white/10 text-xs font-mono text-[#7CCCED] mb-4">
                <Eye className="w-3.5 h-3.5" />
                <span>SPACE SITUATIONAL AWARENESS LAYER</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-6 font-sans">
                Chakra: Space Situational Awareness
              </h1>

              <p className="text-[17px] sm:text-[19px] text-[#94A3B8] font-normal leading-relaxed mb-8">
                Chakra defines the Space Situational Awareness layer of Akashaveda. It provides orbital surveillance, high-cadence object tracking, automated conjunction risk screening, and proximity alerts to preserve orbital safety across every phase of mission life.
              </p>

              <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
                <span className="px-3 py-1.5 rounded-[6px] bg-[#080C16] border border-white/15 text-white">
                  1. OBJECT TRACKING
                </span>
                <span className="px-3 py-1.5 rounded-[6px] bg-[#080C16] border border-white/15 text-[#7CCCED]">
                  2. COLLISION WARNINGS
                </span>
                <span className="px-3 py-1.5 rounded-[6px] bg-[#080C16] border border-white/15 text-emerald-400">
                  3. PROXIMITY ALERTS
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ── 02. Interactive SSA Capability Wheel ── */}
        <section className="relative py-20 sm:py-24 border-b border-white/10 bg-[#050811]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mb-12">
              <div className="text-xs font-mono text-[#7CCCED] uppercase tracking-wider mb-2 font-semibold">
                INTERACTIVE SURVEILLANCE CORE
              </div>
              <h2 className="text-3xl sm:text-4xl font-medium text-white tracking-tight mb-4 font-sans">
                SSA Capability Wheel
              </h2>
              <p className="text-base text-[#94A3B8] leading-relaxed">
                Structured into three distinct orbital safety capabilities: object tracking, collision warning, and proximity alerts.
              </p>
            </div>

            {/* Interactive Capability Wheel Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Wheel Graphic (5 Cols) */}
              <div className="lg:col-span-5">
                <div className="relative p-6 sm:p-8 rounded-[8px] bg-[#080C16] border border-white/15 shadow-md flex items-center justify-center">
                  
                  <div className="relative w-full aspect-square max-w-[340px] flex items-center justify-center">
                    {/* SVG Wheel Geometry */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 300">
                      <circle cx="150" cy="150" r="140" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="3 3" />
                      <circle cx="150" cy="150" r="100" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
                      <circle cx="150" cy="150" r="60" fill="none" stroke="rgba(124,204,237,0.3)" strokeWidth="1.5" />

                      {/* 3 Spokes */}
                      <line x1="150" y1="150" x2="150" y2="10" stroke="rgba(124,204,237,0.4)" strokeWidth="1.5" />
                      <line x1="150" y1="150" x2="270" y2="220" stroke="rgba(124,204,237,0.4)" strokeWidth="1.5" />
                      <line x1="150" y1="150" x2="30" y2="220" stroke="rgba(124,204,237,0.4)" strokeWidth="1.5" />

                      {/* Dynamic Radar Sweep */}
                      <line x1="150" y1="150" x2="230" y2="80" stroke="#7CCCED" strokeWidth="1.5" />
                      <circle cx="230" cy="80" r="3" fill="#7CCCED" />
                    </svg>

                    {/* Central Core Button */}
                    <div className="relative z-10 w-20 h-20 rounded-full bg-[#080C16] border border-[#7CCCED] flex flex-col items-center justify-center text-center">
                      <span className="text-[11px] font-mono text-[#7CCCED] font-bold">CHAKRA</span>
                      <span className="text-[8px] font-mono text-[#94A3B8]">SSA</span>
                    </div>

                    {/* 3 Sector Selectors */}
                    <button
                      onClick={() => setSelectedWheelSector('tracking')}
                      className={`absolute top-2 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-[4px] text-[10px] font-mono transition-colors ${selectedWheelSector === 'tracking' ? 'bg-[#7CCCED] text-black font-semibold' : 'bg-[#0B1528] text-white border border-white/10'}`}
                    >
                      TRACKING
                    </button>

                    <button
                      onClick={() => setSelectedWheelSector('collision')}
                      className={`absolute bottom-4 right-1 px-2.5 py-1 rounded-[4px] text-[10px] font-mono transition-colors ${selectedWheelSector === 'collision' ? 'bg-[#7CCCED] text-black font-semibold' : 'bg-[#0B1528] text-white border border-white/10'}`}
                    >
                      COLLISION
                    </button>

                    <button
                      onClick={() => setSelectedWheelSector('proximity')}
                      className={`absolute bottom-4 left-1 px-2.5 py-1 rounded-[4px] text-[10px] font-mono transition-colors ${selectedWheelSector === 'proximity' ? 'bg-[#7CCCED] text-black font-semibold' : 'bg-[#0B1528] text-white border border-white/10'}`}
                    >
                      PROXIMITY
                    </button>
                  </div>

                </div>
              </div>

              {/* Detailed Breakdown for Selected Sector (7 Cols) */}
              <div className="lg:col-span-7 space-y-3">
                {capabilities.map((cap) => {
                  const isSelected = selectedWheelSector === cap.id;
                  return (
                    <div
                      key={cap.id}
                      onClick={() => setSelectedWheelSector(cap.id as any)}
                      className={`
                        p-5 rounded-[8px] border transition-all cursor-pointer
                        ${isSelected
                          ? 'bg-[#080E1B] border-[#7CCCED] shadow-[0_4px_20px_rgba(124,204,237,0.15)]'
                          : 'bg-[#080C16] border-white/10 hover:border-white/20'
                        }
                      `}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-[#7CCCED]' : 'bg-[#64748B]'}`} />
                          <h3 className="text-lg font-medium text-white">{cap.title}</h3>
                        </div>
                        <span className="text-[10px] font-mono text-[#64748B]">{cap.readout}</span>
                      </div>

                      <div className="text-[11px] font-mono text-[#7CCCED] mb-2">{cap.tag}</div>
                      <p className="text-xs text-[#94A3B8] leading-relaxed mb-3">{cap.desc}</p>

                      <div className="pt-2 border-t border-white/5 space-y-1">
                        {cap.features.map((feat, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-[#E2E8F0]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#7CCCED]" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>

          </div>
        </section>

        {/* ── 03. Data Visualization Component: UI Mockup of "SSA Situation Map" ── */}
        <section className="relative py-20 sm:py-24 bg-[#030610]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mb-12">
              <div className="text-xs font-mono text-[#7CCCED] uppercase tracking-wider mb-2 font-semibold">
                SITUATION MAP UI MOCKUP
              </div>
              <h2 className="text-3xl sm:text-4xl font-medium text-white tracking-tight mb-4 font-sans">
                SSA Situation Map: Conjunction Risk Visualization
              </h2>
              <p className="text-base text-[#94A3B8] leading-relaxed">
                Realistic mock visualization of Chakra’s orbital tracking map and conjunction assessment console.
              </p>
            </div>

            {/* Mockup Container (Restrained 8px Card) */}
            <div className="rounded-[8px] bg-[#080C16] border border-white/15 shadow-[0_16px_50px_rgba(0,0,0,0.8)] overflow-hidden">
              
              {/* Map Header Toolbar */}
              <div className="px-5 py-3.5 bg-[#0B1220] border-b border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-white font-medium">CHAKRA // ORBITAL SITUATION MAP</span>
                  </div>
                  <span className="text-[#64748B]">|</span>
                  <span className="text-[#7CCCED]">COORDINATE FRAME: ECI J2000</span>
                </div>
                <div className="flex items-center gap-4 text-[11px] text-[#94A3B8]">
                  <span>TRACKED ASSETS: 500 SCALE</span>
                  <span className="text-amber-400">1 CONJUNCTION SCREENED</span>
                </div>
              </div>

              {/* Map Body: Split into Visual Map & Conjunction Event Matrix */}
              <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* Left: Interactive Orbital Conjunction & Miss-Distance Radar Infographic (7 Cols) */}
                <div className="lg:col-span-7 p-4 rounded-[6px] bg-[#030610] border border-white/10 flex flex-col justify-between">
                  <div>
                    {/* HUD Toolbar & Mode Selectors */}
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-white/10 text-xs font-mono">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
                        <span className="text-white font-medium">CONJUNCTION RADAR HUD</span>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-1.5 bg-[#080C16] p-1 rounded-[4px] border border-white/10">
                        <button
                          onClick={() => setConjunctionView('geometry')}
                          className={`px-2 py-0.5 rounded text-[10px] transition-colors ${conjunctionView === 'geometry' ? 'bg-[#7CCCED] text-black font-semibold' : 'text-[#94A3B8] hover:text-white'}`}
                        >
                          GEOMETRY
                        </button>
                        <button
                          onClick={() => setConjunctionView('covariance')}
                          className={`px-2 py-0.5 rounded text-[10px] transition-colors ${conjunctionView === 'covariance' ? 'bg-[#7CCCED] text-black font-semibold' : 'text-[#94A3B8] hover:text-white'}`}
                        >
                          COVARIANCE 3σ
                        </button>
                        <button
                          onClick={() => setConjunctionView('maneuver')}
                          className={`px-2 py-0.5 rounded text-[10px] transition-colors ${conjunctionView === 'maneuver' ? 'bg-emerald-400 text-black font-semibold' : 'text-emerald-400/80 hover:text-emerald-300'}`}
                        >
                          AVOIDANCE (+0.12 m/s)
                        </button>
                      </div>
                    </div>

                    {/* SVG Tactical Radar Display with horizontal scroll wrapper for small screens */}
                    <div className="overflow-x-auto pb-1 scrollbar-thin scrollbar-thumb-white/10 rounded-[4px] bg-[#050811] border border-white/5">
                      <div className="min-w-[460px] sm:min-w-0 w-full aspect-[16/10] min-h-[250px] relative overflow-hidden">
                        <svg className="w-full h-full" viewBox="0 0 540 330" preserveAspectRatio="xMidYMid meet">
                        <defs>
                          <radialGradient id="radarGlow" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#7CCCED" stopOpacity="0.08" />
                            <stop offset="100%" stopColor="#050811" stopOpacity="0" />
                          </radialGradient>
                          <linearGradient id="debrisTrail" x1="100%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#EF4444" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="#EF4444" stopOpacity="0.1" />
                          </linearGradient>
                        </defs>

                        {/* Radar Background Glow & Range Rings */}
                        <circle cx="270" cy="165" r="150" fill="url(#radarGlow)" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                        <circle cx="270" cy="165" r="115" fill="none" stroke="rgba(255,255,255,0.09)" strokeWidth="1" strokeDasharray="3 3" />
                        <circle cx="270" cy="165" r="80" fill="none" stroke="rgba(124,204,237,0.18)" strokeWidth="1" />
                        <circle cx="270" cy="165" r="45" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />

                        {/* Azimuth Crosshairs */}
                        <line x1="270" y1="15" x2="270" y2="315" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                        <line x1="120" y1="165" x2="420" y2="165" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />

                        {/* Range Ring Labels */}
                        <text x="274" y="55" fill="#64748B" fontSize="8">620 KM</text>
                        <text x="274" y="90" fill="#7CCCED" fontSize="8">580 KM</text>
                        <text x="274" y="125" fill="#7CCCED" fontSize="8">540 KM ORBIT</text>

                        {/* Azimuth Cardinal Ticks */}
                        <text x="270" y="24" fill="#64748B" fontSize="8" textAnchor="middle">000°</text>
                        <text x="415" y="168" fill="#64748B" fontSize="8">090°</text>
                        <text x="270" y="310" fill="#64748B" fontSize="8" textAnchor="middle">180°</text>
                        <text x="125" y="168" fill="#64748B" fontSize="8">270°</text>

                        {/* ── Primary Asset (SAT-01) Orbit Arc (540 km Shell) ── */}
                        <path d="M 190 165 A 80 80 0 0 1 350 165" fill="none" stroke="#7CCCED" strokeWidth="1.8" />
                        
                        {/* Nominal Spacecraft Vector */}
                        <circle cx="240" cy="115" r="5" fill="#7CCCED" />
                        <circle cx="240" cy="115" r="8" fill="none" stroke="#7CCCED" strokeWidth="1" strokeDasharray="2 2" className="animate-spin" />
                        
                        {/* Spacecraft 3-Sigma Covariance Ellipse */}
                        {(conjunctionView === 'covariance' || conjunctionView === 'geometry') && (
                          <ellipse
                            cx="240"
                            cy="115"
                            rx="22"
                            ry="9"
                            transform="rotate(-28 240 115)"
                            fill="rgba(124,204,237,0.18)"
                            stroke="#7CCCED"
                            strokeWidth="1.2"
                            strokeDasharray={conjunctionView === 'covariance' ? 'none' : '2 2'}
                          />
                        )}
                        <text x="215" y="105" fill="#FFFFFF" fontSize="9" fontWeight="600">SAT-01</text>
                        <text x="215" y="116" fill="#7CCCED" fontSize="8">7.59 km/s</text>

                        {/* ── Crossing Debris Trajectory (NORAD 41920) ── */}
                        <line x1="330" y1="50" x2="190" y2="210" stroke="url(#debrisTrail)" strokeWidth="2" strokeDasharray="4 2" />
                        
                        {/* Debris Position Point */}
                        <circle cx="280" cy="105" r="4.5" fill="#EF4444" />
                        
                        {/* Debris 3-Sigma Covariance Ellipse */}
                        {(conjunctionView === 'covariance' || conjunctionView === 'geometry') && (
                          <ellipse
                            cx="280"
                            cy="105"
                            rx="28"
                            ry="12"
                            transform="rotate(45 280 105)"
                            fill="rgba(239,68,68,0.22)"
                            stroke="#EF4444"
                            strokeWidth="1.2"
                          />
                        )}
                        <text x="292" y="102" fill="#EF4444" fontSize="9" fontWeight="600">DEBRIS 41920</text>
                        <text x="292" y="114" fill="#94A3B8" fontSize="8">14.2 km/s</text>

                        {/* ── Conjunction TCA Close Approach Reticle ── */}
                        <g transform="translate(258, 118)">
                          <circle cx="0" cy="0" r="10" fill="none" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="3 2" className="animate-pulse" />
                          <circle cx="0" cy="0" r="2" fill="#F59E0B" />
                          <line x1="-14" y1="0" x2="14" y2="0" stroke="#F59E0B" strokeWidth="1" />
                          <line x1="0" y1="-14" x2="0" y2="14" stroke="#F59E0B" strokeWidth="1" />
                        </g>

                        {/* TCA Callout Leader & Box */}
                        <line x1="268" y1="126" x2="310" y2="155" stroke="#F59E0B" strokeWidth="1" strokeDasharray="2 2" />
                        <rect x="310" y="142" width="160" height="42" rx="3" fill="#080E1B" stroke="#F59E0B" strokeWidth="1" />
                        <text x="320" y="158" fill="#F59E0B" fontSize="9" fontWeight="600">CLOSE APPROACH: 342m</text>
                        <text x="320" y="174" fill="#EF4444" fontSize="8">Threshold Alert: Avoidance Advised</text>

                        {/* ── Avoidance Maneuver Simulation Overlay (When Active) ── */}
                        {conjunctionView === 'maneuver' && (
                          <g>
                            {/* Burn Vector Arrow */}
                            <line x1="240" y1="115" x2="225" y2="85" stroke="#10B981" strokeWidth="2.5" />
                            <polygon points="225,85 221,93 229,91" fill="#10B981" />
                            <text x="180" y="82" fill="#10B981" fontSize="9" fontWeight="600">Δv: +0.12 m/s</text>

                            {/* Post-Maneuver Shifted Trajectory */}
                            <path d="M 190 165 Q 220 95 350 145" fill="none" stroke="#10B981" strokeWidth="2" strokeDasharray="3 2" />
                            
                            {/* New Safe Clearance Callout */}
                            <rect x="50" y="240" width="190" height="34" rx="3" fill="#061B14" stroke="#10B981" strokeWidth="1" />
                            <text x="60" y="254" fill="#10B981" fontSize="9" fontWeight="600">MANEUVER: SAFE</text>
                            <text x="60" y="266" fill="#A7F3D0" fontSize="8">Miss Distance: 2,410m (Clear)</text>
                          </g>
                        )}
                      </svg>
                    </div>
                  </div>

                    {/* Astrodynamics Coordinates Footer */}
                    <div className="mt-3 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between text-[10px] font-mono text-[#64748B]">
                      <span>FRAME: ECI J2000 // RELATIVE V: 14.2 KM/S</span>
                      <span className="text-[#7CCCED]">CATALOG REF: NORAD 41920</span>
                    </div>
                  </div>

                  <div className="pt-2 text-[10px] font-mono text-[#64748B]">
                    REAL-TIME SITUATIONAL SURVEILLANCE FEED ACTIVE
                  </div>
                </div>

                {/* Right: Detailed CDM Conjunction Assessment Card (5 Cols) */}
                <div className="lg:col-span-5 p-4 rounded-[6px] bg-[#0B1220] border border-white/10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-2 mb-3 border-b border-white/10">
                      <span className="text-xs font-mono text-white font-medium">CONJUNCTION ASSESSMENT</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-red-500/10 text-red-400 border border-red-500/20">
                        ALERT LEVEL 2
                      </span>
                    </div>

                    <div className="space-y-2 text-xs font-mono">
                      <div className="flex justify-between py-1 border-b border-white/5">
                        <span className="text-[#64748B]">EVENT ID</span>
                        <span className="text-white font-medium">CDM-2026-0814</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-white/5">
                        <span className="text-[#64748B]">PRIMARY ASSET</span>
                        <span className="text-white">SAT-01 (LEO 540km)</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-white/5">
                        <span className="text-[#64748B]">SECONDARY OBJECT</span>
                        <span className="text-red-400 font-medium">DEBRIS-CZ4 (NORAD 41920)</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-white/5">
                        <span className="text-[#64748B]">TIME OF CLOSEST APPROACH</span>
                        <span className="text-amber-400 font-medium">TCA IN 06:14:22</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-white/5">
                        <span className="text-[#64748B]">OVERALL MISS DISTANCE</span>
                        <span className="text-white font-medium">342 meters</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="text-[#64748B]">COLLISION PROBABILITY</span>
                        <span className="text-amber-400 font-medium">1.84 × 10⁻⁴</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <div className="p-2.5 rounded-[4px] bg-[#080C16] border border-amber-500/30 text-xs font-mono mb-2">
                      <div className="text-amber-400 font-medium text-[11px] mb-0.5">
                        OPERATIONAL ACTION SYNTHESIS:
                      </div>
                      <div className="text-[#94A3B8] text-[10px]">
                        Avoidance maneuver prepared (+0.12 m/s delta-v). Awaiting operator authorization in Vyuh MCS.
                      </div>
                    </div>
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
