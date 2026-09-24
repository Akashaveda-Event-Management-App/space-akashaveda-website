import { useState } from 'react';
import SEO from '../components/SEO';
import { Radio, Disc, Sliders, Network, ArrowRight, CheckCircle2, Orbit } from 'lucide-react';
import FooterCTA from '../components/FooterCTA';

export default function GroundOperations() {
  const capabilities = [
    {
      id: 'own',
      mode: 'OWN',
      title: 'Proprietary Hardware Deployment',
      desc: 'Turnkey deployment of dedicated ground station hardware and high-precision tracking dishes customized to operator orbit inclinations and frequency bands.',
      features: [
        'Dedicated tracking antenna installations',
        'Custom RF front-ends & high-power amplifiers',
        'Direct site calibration and RF alignment',
      ],
    },
    {
      id: 'operate',
      mode: 'OPERATE',
      title: 'Direct Management of Client Passes',
      desc: 'Full operational pass management executed by Akashaveda flight controllers: handling antenna slew schedules, link margin acquisition, demodulation, and data routing.',
      features: [
        'Full-lifecycle contact pass execution',
        'Autonomous pass pointing and Doppler tracking',
        'Post-pass data validation and decommutation',
      ],
    },
    {
      id: 'provide',
      mode: 'PROVIDE',
      title: 'On-Demand Network Availability',
      desc: 'On-demand pass capacity and contact scheduling across coordinated ground antenna nodes, enabling rapid pass reservations during critical flight phases.',
      features: [
        'Dynamic pass booking for launch and early orbit phases (LEOP)',
        'Contingency pass provisioning during orbital anomalies',
        'Coordinated multi-station visibility coverage',
      ],
    },
    {
      id: 'integrate',
      mode: 'INTEGRATE',
      title: 'Third-Party Antenna Integration',
      desc: 'Complete hardware-agnostic integration with third-party antenna infrastructure. Operators connect existing dishes and commercial networks without proprietary hardware lock-in.',
      features: [
        'Zero vendor lock-in open interface architecture',
        'Unified API bridging proprietary and third-party dishes',
        'Heterogeneous demodulator and baseband support',
      ],
    },
  ];

  return (
    <>
      <SEO
        title="Ground Operations & Ground Segment Infrastructure | Akashaveda"
        description="Integrated ground segment infrastructure: own proprietary hardware, direct pass operations, on-demand network availability, and third-party antenna integration with no hardware lock-in."
        canonical="/ground-operations"
      />

      <div className="pt-24 pb-16 bg-[#030610] text-white min-h-screen">
        
        {/* ── 01. Hero: Integrated Ground Segment Infrastructure ── */}
        <section className="relative py-16 sm:py-24 border-b border-white/10 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-[#0E1626] border border-white/10 text-xs font-mono text-[#47B2E4] mb-4">
                <Radio className="w-3.5 h-3.5" />
                <span>INTEGRATED GROUND SEGMENT INFRASTRUCTURE</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-6 font-sans">
                Ground Operations &amp; Infrastructure
              </h1>

              <p className="text-[17px] sm:text-[19px] text-[#94A3B8] font-normal leading-relaxed mb-8">
                Akashaveda provides end-to-end ground segment operations for satellite operators. Whether deploying dedicated proprietary hardware, managing daily contact passes, or integrating existing antenna infrastructure, our software unifies ground communications with zero hardware lock-in.
              </p>

              <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
                <span className="px-3 py-1.5 rounded-[6px] bg-[#080C16] border border-white/15 text-white">
                  OWN
                </span>
                <span className="px-3 py-1.5 rounded-[6px] bg-[#080C16] border border-white/15 text-[#47B2E4]">
                  OPERATE
                </span>
                <span className="px-3 py-1.5 rounded-[6px] bg-[#080C16] border border-white/15 text-[#7CCCED]">
                  PROVIDE
                </span>
                <span className="px-3 py-1.5 rounded-[6px] bg-[#080C16] border border-white/15 text-emerald-400">
                  INTEGRATE
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ── 02. Capabilities Grid: Own, Operate, Provide, Integrate ── */}
        <section className="relative py-20 sm:py-24 border-b border-white/10 bg-[#050811]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mb-12">
              <div className="text-xs font-mono text-[#47B2E4] uppercase tracking-wider mb-2 font-semibold">
                OPERATIONAL ENGAGEMENT MODELS
              </div>
              <h2 className="text-3xl sm:text-4xl font-medium text-white tracking-tight mb-4 font-sans">
                Ground Capabilities Grid
              </h2>
              <p className="text-base text-[#94A3B8] leading-relaxed">
                Flexible engagement options tailored to sovereign mission agencies, commercial operators, and constellation builders.
              </p>
            </div>

            {/* Grid of 4 Restrained Cards (8px radius) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
              {capabilities.map((cap) => (
                <div
                  key={cap.id}
                  className="p-6 rounded-[8px] bg-[#080C16] border border-white/10 hover:border-white/20 transition-all shadow-md flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#47B2E4]/10 text-[#47B2E4] border border-[#47B2E4]/20 font-bold">
                        {cap.mode}
                      </span>
                      <span className="text-[10px] font-mono text-[#64748B]">OPERATIONAL MODEL</span>
                    </div>

                    <h3 className="text-xl font-medium text-white mb-2 font-sans">
                      {cap.title}
                    </h3>

                    <p className="text-sm text-[#94A3B8] leading-relaxed mb-4">
                      {cap.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/10 space-y-1.5">
                    {cap.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#E2E8F0]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#47B2E4] flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── 03. Infographic: Ground Station Visibility Visual ── */}
        <section className="relative py-20 sm:py-24 bg-[#030610]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mb-12">
              <div className="text-xs font-mono text-[#47B2E4] uppercase tracking-wider mb-2 font-semibold">
                LINE-OF-SIGHT &amp; PASS GEOMETRY
              </div>
              <h2 className="text-3xl sm:text-4xl font-medium text-white tracking-tight mb-4 font-sans">
                Ground Station Visibility &amp; Pass Tracking
              </h2>
              <p className="text-base text-[#94A3B8] leading-relaxed">
                Mapping orbital passes from acquisition of signal (AOS) across maximum elevation to loss of signal (LOS).
              </p>
            </div>

            {/* Visual Container */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Approved Real Ground-Station Photography */}
              <div className="lg:col-span-6">
                <div className="relative rounded-[8px] overflow-hidden border border-white/15 shadow-2xl bg-[#080C16]">
                  <img
                    src="/images/ground_station_antenna.jpg"
                    alt="Approved Real Ground Station Tracking Antenna"
                    className="w-full h-80 sm:h-96 object-cover object-center"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080C16] via-transparent to-transparent pointer-events-none" />

                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-1 rounded-[4px] bg-black/70 backdrop-blur-md border border-white/15 text-[10px] font-mono text-[#47B2E4]">
                      APPROVED REAL GROUND-STATION DISH
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-[6px] bg-[#080C16]/90 backdrop-blur-md border border-white/10 text-xs">
                    <div className="text-white font-medium mb-1">High-Precision Motorized Pedestal</div>
                    <div className="text-[#94A3B8]">
                      Supports multi-band tracking passes with automated Doppler compensation and rapid horizon-to-horizon acquisition.
                    </div>
                  </div>
                </div>
              </div>

              {/* Line-of-Sight Geometry Infographic */}
              <div className="lg:col-span-6 p-6 rounded-[8px] bg-[#080C16] border border-white/15 shadow-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10 text-xs font-mono text-[#64748B]">
                    <span className="text-white font-medium">PASS GEOMETRY INFOGRAPHIC</span>
                    <span>AZIMUTH &amp; ELEVATION CONE</span>
                  </div>

                  {/* SVG Elevation Cone Graphic */}
                  <div className="relative w-full h-44 flex items-center justify-center my-2">
                    <svg className="w-full h-full" viewBox="0 0 400 160">
                      {/* Ground Horizon Line */}
                      <line x1="20" y1="140" x2="380" y2="140" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                      <text x="20" y="155" fill="#64748B" fontSize="9" fontFamily="monospace">HORIZON (0°)</text>
                      <text x="310" y="155" fill="#64748B" fontSize="9" fontFamily="monospace">HORIZON (0°)</text>

                      {/* Elevation Mask 5° */}
                      <line x1="20" y1="130" x2="380" y2="130" stroke="rgba(248,113,113,0.3)" strokeDasharray="3 3" strokeWidth="1" />
                      <text x="28" y="125" fill="#F87171" fontSize="8" fontFamily="monospace">5° MASK</text>

                      {/* Antenna Origin */}
                      <circle cx="200" cy="140" r="4" fill="#47B2E4" />
                      <circle cx="200" cy="140" r="10" fill="none" stroke="#47B2E4" strokeWidth="1" opacity="0.4" />

                      {/* Parabolic Orbital Pass Arc */}
                      <path d="M 50 130 Q 200 20 350 130" fill="none" stroke="#7CCCED" strokeWidth="2" />

                      {/* Key Points */}
                      <circle cx="50" cy="130" r="3" fill="#34D399" />
                      <text x="35" y="115" fill="#34D399" fontSize="9" fontFamily="monospace">AOS (5°)</text>

                      <circle cx="200" cy="20" r="4" fill="#47B2E4" />
                      <text x="180" y="12" fill="#47B2E4" fontSize="10" fontFamily="monospace" fontWeight="bold">TCA (78°)</text>

                      <circle cx="350" cy="130" r="3" fill="#F87171" />
                      <text x="335" y="115" fill="#F87171" fontSize="9" fontFamily="monospace">LOS (5°)</text>
                    </svg>
                  </div>

                  {/* Pass Parameters Readout */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs font-mono mt-4 pt-4 border-t border-white/10">
                    <div className="p-2 rounded bg-[#0B1220] border border-white/5">
                      <div className="text-[10px] text-[#64748B]">ACQUISITION (AOS)</div>
                      <div className="text-white font-medium mt-0.5">Azimuth: 14.2°</div>
                    </div>
                    <div className="p-2 rounded bg-[#0B1220] border border-white/5">
                      <div className="text-[10px] text-[#64748B]">PEAK ELEVATION</div>
                      <div className="text-white font-medium mt-0.5">Elev: 78.4°</div>
                    </div>
                    <div className="p-2 rounded bg-[#0B1220] border border-white/5">
                      <div className="text-[10px] text-[#64748B]">LOSS OF SIGNAL (LOS)</div>
                      <div className="text-white font-medium mt-0.5">Azimuth: 172.8°</div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 text-xs font-mono text-[#64748B]">
                  LINE-OF-SIGHT GEOMETRY COMPUTED CONTINUOUSLY
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
