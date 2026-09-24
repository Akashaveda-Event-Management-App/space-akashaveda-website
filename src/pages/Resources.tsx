import SEO from '../components/SEO';
import { FileText, Download, BookOpen, Layers, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import FooterCTA from '../components/FooterCTA';

export default function Resources() {
  const documents = [
    {
      category: 'INTERFACE SPECIFICATIONS',
      title: 'XTCE 1.2 & SEDS Telemetry Decommutation Guide',
      desc: 'Technical specification describing parameter decommutation, engineering unit conversion polynomials, and limit definition schemas within Vyuh MCS.',
      type: 'TECHNICAL SPEC',
    },
    {
      category: 'FLIGHT SAFETY',
      title: 'Dual-Operator Command Authorization Architecture',
      desc: 'Operational security framework detailing cryptographic key management, role-based separation of duty, and hardware authorization tokens.',
      type: 'SECURITY WHITEPAPER',
    },
    {
      category: 'SPACE SITUATIONAL AWARENESS',
      title: 'Automated CDM Ingestion & Conjunction Screening',
      desc: 'Mathematical brief detailing miss-distance vector decomposition, covariance coordinate transformation (ECI to UVW), and collision probability calculation.',
      type: 'ALGORITHM BRIEF',
    },
    {
      category: 'GROUND INFRASTRUCTURE',
      title: 'Hardware-Agnostic Antenna Integration Standards',
      desc: 'Reference guide for interfacing third-party ground dishes, tracking pedestals, and software-defined baseband receivers into the Akashaveda network.',
      type: 'INTEGRATION GUIDE',
    },
    {
      category: 'CONSTELLATION OPERATIONS',
      title: 'Multi-Satellite Pass Optimization & Schedulers',
      desc: 'Constraint-satisfaction modeling for antenna contention resolution across 500 space assets and simultaneous 12-node cluster topologies.',
      type: 'WHITE PAPER',
    },
    {
      category: 'OPERATIONAL PLAYBOOKS',
      title: 'Deterministic State Machine Procedure Design',
      desc: 'Engineering handbook for designing automated pass playbooks, health check scripts, and anomaly recovery procedures with verified failsafes.',
      type: 'HANDBOOK',
    },
  ];

  return (
    <>
      <SEO
        title="Resources & Technical Documentation | Akashaveda"
        description="Access technical briefs, telemetry specifications (XTCE, SEDS, CCSDS), dual-operator security protocols, and ground segment integration guides."
        canonical="/resources"
      />

      <div className="pt-24 pb-16 bg-[#030610] text-white min-h-screen">
        
        {/* ── 01. Hero ── */}
        <section className="relative py-16 sm:py-24 border-b border-white/10 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-[#0E1626] border border-white/10 text-xs font-mono text-[#47B2E4] mb-4">
                <BookOpen className="w-3.5 h-3.5" />
                <span>TECHNICAL DOCUMENTATION &amp; KNOWLEDGE BASE</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-6 font-sans">
                Resources &amp; Technical Documentation
              </h1>

              <p className="text-[17px] sm:text-[19px] text-[#94A3B8] font-normal leading-relaxed mb-8">
                Explore technical specifications, interface control documents, operational playbooks, and flight dynamics briefs for the Akashaveda ground segment ecosystem.
              </p>
            </div>
          </div>
        </section>

        {/* ── 02. Document Catalog Grid ── */}
        <section className="relative py-20 sm:py-24 bg-[#050811]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {documents.map((doc, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-[8px] bg-[#080C16] border border-white/10 hover:border-white/20 transition-all shadow-md flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono text-[#47B2E4] uppercase tracking-wider font-semibold">
                        {doc.category}
                      </span>
                      <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/5 text-[#94A3B8]">
                        {doc.type}
                      </span>
                    </div>

                    <h3 className="text-lg font-medium text-white mb-2 font-sans">
                      {doc.title}
                    </h3>

                    <p className="text-xs text-[#94A3B8] leading-relaxed mb-6">
                      {doc.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/10">
                    <Link
                      to="/contact?type=resources"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-[#47B2E4] hover:text-white transition-colors"
                    >
                      <span>Request Full Document Access</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
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
