import { Globe2, Sprout, ShieldCheck, Anchor, ShieldAlert, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const useCases = [
  {
    id: 'earth-observation',
    title: 'Earth Observation',
    icon: Globe2,
    badge: 'REMOTE SENSING',
    desc: 'Orchestrating high-volume payload downlink passes, automated antenna scheduling, and rapid sensor tasking across optical and SAR constellations.',
    highlights: ['High-throughput payload downlink', 'Rapid tasking pass queues', 'Antenna elevation optimization'],
  },
  {
    id: 'agricultural-monitoring',
    title: 'Agricultural Monitoring',
    icon: Sprout,
    badge: 'CIVILIAN & AGRI-TECH',
    desc: 'Maintaining high-cadence revisit schedules, automated multi-spectral housekeeping telemetry decommutation, and multi-satellite pass coordination.',
    highlights: ['High-revisit constellation cadence', 'Multi-band telemetry decommutation', 'Deterministic pass scheduling'],
  },
  {
    id: 'defense-security',
    title: 'Defense & National Security',
    icon: ShieldCheck,
    badge: 'SOVEREIGN OPERATIONS',
    desc: 'Sovereign on-premise or air-gapped hybrid deployments, cryptographic uplink signing, strict dual-operator authorization, and rapid threat mitigation.',
    highlights: ['Air-gapped on-premise capability', 'Dual-operator authorization rules', 'Tamper-evident command auditing'],
  },
  {
    id: 'maritime-intelligence',
    title: 'Maritime Intelligence',
    icon: Anchor,
    badge: 'DOMAIN AWARENESS',
    desc: 'Managing real-time AIS payload data pipelines, coordinated multi-station contact passes, and uninterrupted RF tracking of maritime surveillance assets.',
    highlights: ['Low-latency RF pass tracking', 'Continuous vessel telemetry processing', 'Global station pass handoffs'],
  },
  {
    id: 'space-safety',
    title: 'Space Safety',
    icon: ShieldAlert,
    badge: 'ORBITAL SUSTAINABILITY',
    desc: 'Protecting orbital assets through automated CDM conjunction screening, radial/cross-track proximity alerts, and operator-verified avoidance maneuvers.',
    highlights: ['Automated CDM conjunction alerts', 'Miss-distance calculation', 'Operator-verified avoidance maneuvers'],
  },
];

export default function UseCases() {
  return (
    <section
      id="use-cases"
      className="relative py-20 sm:py-28 bg-[#050811] text-white border-t border-white/10 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-[#0E1626] border border-white/10 text-xs font-mono text-[#47B2E4] mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>MISSION DOMAINS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-5 font-sans">
            Use Cases &amp; Applications
          </h2>
          <p className="text-[16px] sm:text-[18px] text-[#94A3B8] font-normal leading-relaxed">
            Akashaveda ground segment infrastructure is operationalized across diverse mission categories, delivering mission control precision, pass orchestration, and orbital awareness.
          </p>
        </div>

        {/* ── CSS Grid with Feature Cards (Restrained 8px radius) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {useCases.map((uc) => {
            const Icon = uc.icon;
            return (
              <div
                key={uc.id}
                className="p-6 rounded-[8px] bg-[#080C16] border border-white/10 hover:border-white/20 shadow-[0_4px_20px_rgba(0,0,0,0.4)] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-9 h-9 rounded-[6px] bg-[#0E1626] border border-white/10 flex items-center justify-center text-[#47B2E4]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-white/5 text-[#94A3B8] border border-white/5">
                      {uc.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-medium text-white mb-2 font-sans">
                    {uc.title}
                  </h3>

                  <p className="text-sm text-[#94A3B8] leading-relaxed mb-5">
                    {uc.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-2">
                  {uc.highlights.map((hl, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#E2E8F0]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#47B2E4]" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          {/* Direct CTA card to complete the grid */}
          <div className="p-6 rounded-[8px] bg-gradient-to-br from-[#0E1626] to-[#080C16] border border-[#47B2E4]/30 shadow-[0_4px_20px_rgba(71,178,228,0.1)] flex flex-col justify-between">
            <div>
              <div className="text-[10px] font-mono text-[#47B2E4] uppercase tracking-wider font-semibold mb-2">
                MISSION CUSTOMIZATION
              </div>
              <h3 className="text-xl font-medium text-white mb-3">
                Tailored Ground Infrastructure
              </h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
                Discuss custom pass schedules, frequency band requirements, or sovereign deployment architectures with our engineering team.
              </p>
            </div>

            <Link
              to="/contact?type=demo"
              className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-[6px] bg-white text-black text-xs font-semibold hover:bg-gray-100 transition-colors"
            >
              <span>Schedule Mission Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
