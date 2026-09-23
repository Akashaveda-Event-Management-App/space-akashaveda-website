import SEO from '../components/SEO';
import { ShieldCheck, MapPin, Building, Target, Compass, Award } from 'lucide-react';
import FooterCTA from '../components/FooterCTA';

export default function About() {
  const principles = [
    {
      icon: ShieldCheck,
      title: 'Aerospace Engineering Credibility',
      desc: 'We design software with the rigor of spaceflight engineering. Grounded in deterministic mathematics, orbital mechanics, and strict safety envelopes rather than generic tech hype.',
    },
    {
      icon: Compass,
      title: 'Hardware & Network Independence',
      desc: 'Zero proprietary lock-in. Our software interfaces with commercial ground stations, private dish arrays, and any standard spacecraft avionics bus via open telemetry standards.',
    },
    {
      icon: Target,
      title: 'Bounded Guided Autonomy',
      desc: 'We believe autonomy must enhance operator focus rather than create black-box risks. All routine passes run deterministically, while all flight-critical commands require dual authorization.',
    },
    {
      icon: Building,
      title: 'Sovereign & Commercial Scalability',
      desc: 'Designed for 500 space assets and tested simultaneously on 12 nodes. Deployable on air-gapped sovereign server racks, private clouds, or hybrid mission operations centers.',
    },
  ];

  return (
    <>
      <SEO
        title="About Akashaveda | Aerospace Ground Segment Infrastructure"
        description="Learn about Akashaveda: delivering unified ground segment infrastructure for satellite operators from the FSID Innovation Centre at the Indian Institute of Science (IISc), Bengaluru."
        canonical="/about"
      />

      <div className="pt-24 pb-16 bg-[#030610] text-white min-h-screen">
        
        {/* ── 01. Hero ── */}
        <section className="relative py-16 sm:py-24 border-b border-white/10 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-[#0E1626] border border-white/10 text-xs font-mono text-[#47B2E4] mb-4">
                <Building className="w-3.5 h-3.5" />
                <span>COMPANY &amp; AEROSPACE PEDIGREE</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-6 font-sans">
                About Akashaveda
              </h1>

              <p className="text-[17px] sm:text-[19px] text-[#94A3B8] font-normal leading-relaxed mb-8">
                Akashaveda delivers integrated ground segment infrastructure for satellite operators, combining ground communications, mission operations, and space situational awareness into a unified system.
              </p>

              <div className="p-4 rounded-[8px] bg-[#080C16] border border-white/15 max-w-xl text-xs font-mono text-[#94A3B8] flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#47B2E4] flex-shrink-0 mt-0.5" />
                <div className="leading-relaxed">
                  <span className="text-white font-medium">Headquartered at IISc Bengaluru:</span><br />
                  FSID, Innovation Centre, Indian Institute of Science (IISc),<br />
                  near Maramma Circle, Malleshwaram, Bengaluru, Karnataka 560012, India
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 02. Engineering Mission ── */}
        <section className="relative py-20 sm:py-24 border-b border-white/10 bg-[#050811]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-6">
                <div className="text-xs font-mono text-[#47B2E4] uppercase tracking-wider mb-2 font-semibold">
                  OUR MISSION
                </div>
                <h2 className="text-3xl sm:text-4xl font-medium text-white tracking-tight mb-5 font-sans">
                  Solving Ground Segment Fragmentation
                </h2>
                <p className="text-[15px] text-[#94A3B8] leading-relaxed mb-4">
                  As satellite constellations expand from single prototypes to multi-plane orbital networks, traditional ground systems become an operational bottleneck. Ground station scheduling, telemetry decommutation, and conjunction screening are historically executed across disjointed tools.
                </p>
                <p className="text-[15px] text-[#94A3B8] leading-relaxed">
                  Akashaveda was founded to solve this fragmentation. By integrating Space Situational Awareness (Chakra) with Mission Control (Vyuh) inside Chakravyuh, operators command and safeguard their constellations from a unified, deterministic environment.
                </p>
              </div>

              <div className="lg:col-span-6">
                <div className="rounded-[8px] overflow-hidden border border-white/15 shadow-2xl bg-[#080C16]">
                  <img
                    src="/images/satellite_in_orbit_clean.jpg"
                    alt="Satellite in Earth Orbit"
                    className="w-full h-80 object-cover"
                    loading="lazy"
                  />
                  <div className="p-4 bg-[#080C16] border-t border-white/10 text-xs font-mono text-[#94A3B8] flex justify-between">
                    <span className="text-white">CONSTELLATION OPERATIONAL INTEGRITY</span>
                    <span className="text-[#47B2E4]">ORBITAL PRECISION</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── 03. Core Principles Grid ── */}
        <section className="relative py-20 sm:py-24 bg-[#030610]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mb-12">
              <div className="text-xs font-mono text-[#47B2E4] uppercase tracking-wider mb-2 font-semibold">
                SYSTEM PHILOSOPHY
              </div>
              <h2 className="text-3xl sm:text-4xl font-medium text-white tracking-tight mb-4 font-sans">
                Our Core Principles
              </h2>
              <p className="text-base text-[#94A3B8] leading-relaxed">
                Guided by rigorous aerospace standards and verified operational practices.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {principles.map((pr, i) => {
                const Icon = pr.icon;
                return (
                  <div
                    key={i}
                    className="p-6 rounded-[8px] bg-[#080C16] border border-white/10 shadow-md flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-[6px] bg-[#0E1626] border border-white/10 flex items-center justify-center text-[#47B2E4] mb-4">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl font-medium text-white mb-2 font-sans">
                        {pr.title}
                      </h3>
                      <p className="text-sm text-[#94A3B8] leading-relaxed">
                        {pr.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* ── Footer CTA ── */}
        <FooterCTA />

      </div>
    </>
  );
}
