import { useState } from 'react';
import { Eye, ShieldAlert, AlertTriangle, ArrowRight, Compass, Orbit, Disc } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ChakraSection() {
  const [selectedCapability, setSelectedCapability] = useState<'tracking' | 'collision' | 'proximity'>('collision');

  const capabilities = [
    {
      id: 'tracking',
      title: 'Object Tracking',
      subtitle: 'Continuous Orbital State Cataloging',
      icon: Orbit,
      desc: 'High-precision orbital ephemeris generation, state vector estimation, and multi-sensor track correlation across dense low-Earth orbits.',
      metric: 'LEO / SSO / MEO Tracking Coverage',
    },
    {
      id: 'collision',
      title: 'Collision Warning',
      subtitle: 'Conjunction Assessment & Risk Scoring',
      icon: ShieldAlert,
      desc: 'Automated ingestion and screening of Conjunction Data Messages (CDMs), miss-distance calculations, and collision probability determination.',
      metric: 'Automated Conjunction Screening',
    },
    {
      id: 'proximity',
      title: 'Proximity Alerts',
      subtitle: 'Safety Envelope & Trajectory Verification',
      icon: AlertTriangle,
      desc: 'Dynamic safety bubble monitoring around active spacecraft with real-time radial, along-track, and cross-track threshold alerts.',
      metric: 'Customizable Safety Ellipsoids',
    },
  ];

  return (
    <section
      id="chakra-section"
      className="relative py-20 sm:py-28 bg-[#030610] text-white border-t border-white/10 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ── Side-by-Side Feature Block ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Content & Capability List */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-[#0E1626] border border-white/10 text-xs font-mono text-[#7CCCED] mb-4">
              <Eye className="w-3.5 h-3.5" />
              <span>ORBITAL SURVEILLANCE SUITE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-5 font-sans">
              Chakra: Space Situational Awareness
            </h2>

            <p className="text-[16px] sm:text-[17px] text-[#94A3B8] font-normal leading-relaxed mb-8">
              Chakra functions as the dedicated orbital surveillance suite within Akashaveda. By tracking on-orbit objects, screening conjunction vectors, and broadcasting actionable proximity alerts, Chakra safeguards constellations in increasingly congested orbital regimes.
            </p>

            {/* 3 Strict Capabilities */}
            <div className="space-y-3 w-full mb-8">
              {capabilities.map((cap) => {
                const Icon = cap.icon;
                const isSelected = selectedCapability === cap.id;
                return (
                  <div
                    key={cap.id}
                    onClick={() => setSelectedCapability(cap.id as any)}
                    className={`
                      p-4 rounded-[8px] border transition-all cursor-pointer
                      ${isSelected
                        ? 'bg-[#080E1B] border-[#7CCCED] shadow-[0_4px_20px_rgba(124,204,237,0.12)]'
                        : 'bg-[#080C16] border-white/10 hover:border-white/20'
                      }
                    `}
                  >
                    <div className="flex items-start gap-3.5">
                      <div className={`p-2 rounded-[6px] border ${isSelected ? 'bg-[#7CCCED]/10 border-[#7CCCED]/40 text-[#7CCCED]' : 'bg-white/5 border-white/10 text-[#64748B]'}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="text-base font-medium text-white">{cap.title}</h3>
                          <span className="text-[10px] font-mono text-[#64748B]">{cap.metric}</span>
                        </div>
                        <p className="text-xs font-mono text-[#7CCCED] mb-1">{cap.subtitle}</p>
                        <p className="text-xs text-[#94A3B8] leading-relaxed">{cap.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <Link
              to="/chakra"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[8px] bg-white/10 text-white hover:bg-white/15 border border-white/15 text-sm font-medium transition-all group"
            >
              <span>Explore Chakra SSA Architecture</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Right Column: "Capability Wheel" Graphic */}
          <div className="lg:col-span-6">
            <div className="relative p-6 sm:p-8 rounded-[8px] bg-[#080C16] border border-white/15 shadow-[0_12px_40px_rgba(0,0,0,0.6)]">
              
              <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono text-[#64748B] mb-6">
                <span className="text-white font-medium">SSA CAPABILITY WHEEL</span>
                <span>RADAR &amp; CONJUNCTION MONITOR</span>
              </div>

              {/* Capability Wheel SVG Infographic */}
              <div className="relative w-full aspect-square max-w-[420px] mx-auto flex items-center justify-center">
                
                {/* Orbital Range Rings */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                  {/* Concentric rings */}
                  <circle cx="200" cy="200" r="180" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="3 3" />
                  <circle cx="200" cy="200" r="135" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                  <circle cx="200" cy="200" r="90" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1" strokeDasharray="4 4" />
                  <circle cx="200" cy="200" r="45" fill="none" stroke="rgba(71,178,228,0.25)" strokeWidth="1" />
                  
                  {/* Coordinate crosshairs */}
                  <line x1="200" y1="10" x2="200" y2="390" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                  <line x1="10" y1="200" x2="390" y2="200" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />

                  {/* 120-degree sector dividers */}
                  <line x1="200" y1="200" x2="200" y2="20" stroke="rgba(124,204,237,0.3)" strokeWidth="1.5" />
                  <line x1="200" y1="200" x2="355" y2="290" stroke="rgba(124,204,237,0.3)" strokeWidth="1.5" />
                  <line x1="200" y1="200" x2="45" y2="290" stroke="rgba(124,204,237,0.3)" strokeWidth="1.5" />

                  {/* Dynamic conjunction threat marker */}
                  <circle cx="265" cy="140" r="6" fill="#F87171" className="animate-ping" opacity="0.6" />
                  <circle cx="265" cy="140" r="4" fill="#F87171" />
                  <line x1="265" y1="140" x2="295" y2="125" stroke="#F87171" strokeWidth="1" />
                  <text x="300" y="128" fill="#F87171" fontSize="9" fontFamily="monospace">CDM-0482</text>

                  {/* Tracked object nodes */}
                  <circle cx="120" cy="150" r="3" fill="#7CCCED" />
                  <circle cx="170" cy="280" r="3" fill="#7CCCED" />
                  <circle cx="310" cy="230" r="3" fill="#7CCCED" />
                </svg>

                {/* Central Hub Core */}
                <div className="relative z-10 w-24 h-24 rounded-full bg-[#080C16] border-2 border-[#7CCCED] flex flex-col items-center justify-center p-2 text-center shadow-[0_0_30px_rgba(124,204,237,0.2)]">
                  <span className="text-[10px] font-mono text-[#7CCCED] uppercase font-bold">CHAKRA</span>
                  <span className="text-[8px] font-mono text-[#94A3B8]">SSA CORE</span>
                </div>

                {/* 3 Sector Labels around the Wheel */}
                <div className="absolute top-3 sm:top-4 left-1/2 -translate-x-1/2 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded bg-[#0B1528] border border-white/10 text-[9px] sm:text-[10px] font-mono text-white whitespace-nowrap">
                  1. OBJECT TRACKING
                </div>

                <div className="absolute bottom-4 sm:bottom-6 right-1 sm:right-2 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded bg-[#0B1528] border border-white/10 text-[9px] sm:text-[10px] font-mono text-white whitespace-nowrap">
                  2. COLLISION WARNING
                </div>

                <div className="absolute bottom-4 sm:bottom-6 left-1 sm:left-2 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded bg-[#0B1528] border border-white/10 text-[9px] sm:text-[10px] font-mono text-white whitespace-nowrap">
                  3. PROXIMITY ALERTS
                </div>

              </div>

              {/* Status footer */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-[#64748B]">SURVEILLANCE STATUS</span>
                <span className="text-emerald-400">NOMINAL TRACKING // ZERO BREACHES</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
