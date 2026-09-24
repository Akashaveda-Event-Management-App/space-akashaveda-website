import { Orbit } from 'lucide-react';

export default function ScaleArchitecture() {
  const verifiedStats = [
    {
      value: '500',
      label: 'Space Assets',
      desc: 'Concurrent multi-satellite constellation management',
    },
    {
      value: '12',
      label: 'Nodes Tested',
      desc: 'Synchronized across distributed operational nodes',
    },
    {
      value: '3 Modes',
      label: 'Deployments',
      desc: 'Cloud, on-premise, and hybrid air-gapped environments',
    },
    {
      value: '100%',
      label: 'Operator Gated',
      desc: 'Cryptographic human authorization on all flight uplinks',
    },
  ];

  const architectureLayers = [
    {
      layer: 'LAYER 04',
      title: 'Flight Operations Consoles',
      desc: 'Multi-role workspaces with cryptographic dual-operator approval for all telecommands.',
    },
    {
      layer: 'LAYER 03',
      title: 'Chakravyuh Core Platform',
      desc: 'Unified orbital tracking, telemetry decommutation, and automated pass scheduling.',
    },
    {
      layer: 'LAYER 02',
      title: 'Distributed Infrastructure Fabric',
      desc: 'Deployable on sovereign air-gapped server racks, enterprise cloud, or hybrid teleports.',
    },
    {
      layer: 'LAYER 01',
      title: 'Orbital & Ground Segment Interface',
      desc: 'Hardware-agnostic integration with commercial ground stations and multi-orbit fleets.',
    },
  ];

  return (
    <section
      id="scale-architecture"
      className="relative py-20 sm:py-28 bg-[#030610] text-white border-t border-white/10 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-[#0E1626] border border-white/10 text-xs font-mono text-[#47B2E4] mb-3">
            <Orbit className="w-3.5 h-3.5" />
            <span>CONSTELLATION SCALABILITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-4 font-sans">
            Scale &amp; Architecture
          </h2>
          <p className="text-[16px] text-[#94A3B8] font-normal leading-relaxed">
            Enterprise ground segment architecture designed for 500 space assets and tested across 12 distributed nodes, with support for cloud, on-premise, or hybrid deployments.
          </p>
        </div>

        {/* ── Verified Stats Grid ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {verifiedStats.map((st, i) => (
            <div
              key={i}
              className="p-5 rounded-[8px] bg-[#080C16] border border-white/15 shadow-[0_4px_20px_rgba(0,0,0,0.3)] flex flex-col justify-between"
            >
              <div className="text-3xl sm:text-4xl font-mono font-medium text-white mb-2 tracking-tight">
                {st.value}
              </div>
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-[#47B2E4] font-medium mb-1">
                  {st.label}
                </div>
                <div className="text-xs text-[#94A3B8] leading-snug">
                  {st.desc}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── 4-Tier Topology Infographic (Clean, Unified Typography) ── */}
        <div className="mb-12 p-4 sm:p-6 rounded-[8px] bg-[#080C16] border border-white/15 shadow-[0_12px_40px_rgba(0,0,0,0.5)] overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-white/10 text-xs font-mono">
            <span className="text-white font-medium">DISTRIBUTED 4-TIER TOPOLOGY</span>
            <span className="text-[#47B2E4]">500 ASSETS · 12 SYNCHRONIZED NODES</span>
          </div>

          <div className="overflow-x-auto pb-1 scrollbar-thin scrollbar-thumb-white/10">
            <div className="min-w-[720px] sm:min-w-0 w-full aspect-[22/6] min-h-[170px]">
              <svg className="w-full h-full font-sans" viewBox="0 0 1080 180" preserveAspectRatio="xMidYMid meet">
                {/* Connecting Bus */}
                <line x1="240" y1="90" x2="280" y2="90" stroke="#47B2E4" strokeWidth="1.5" strokeDasharray="4 2" />
                <line x1="510" y1="90" x2="550" y2="90" stroke="#47B2E4" strokeWidth="1.5" strokeDasharray="4 2" />
                <line x1="790" y1="90" x2="830" y2="90" stroke="#47B2E4" strokeWidth="1.5" strokeDasharray="4 2" />

                {/* Tier 1: Orbital Fleet */}
                <g transform="translate(10, 10)">
                  <rect x="0" y="0" width="230" height="160" rx="6" fill="#050912" stroke="rgba(124,204,237,0.3)" strokeWidth="1" />
                  <text x="16" y="24" fill="#7CCCED" fontSize="10" fontWeight="600">TIER 1</text>
                  <text x="16" y="42" fill="#FFFFFF" fontSize="13" fontWeight="600">500 Orbital Assets</text>
                  
                  {/* Orbit Planes Graphic */}
                  <ellipse cx="115" cy="85" rx="85" ry="20" fill="none" stroke="rgba(124,204,237,0.4)" strokeWidth="1" strokeDasharray="3 2" />
                  <ellipse cx="115" cy="105" rx="80" ry="18" fill="none" stroke="rgba(71,178,228,0.35)" strokeWidth="1" strokeDasharray="3 2" />
                  <circle cx="60" cy="85" r="3" fill="#7CCCED" />
                  <circle cx="115" cy="78" r="3" fill="#47B2E4" />
                  <circle cx="165" cy="88" r="3" fill="#7CCCED" />
                  <circle cx="80" cy="108" r="3" fill="#34D399" />
                  <circle cx="145" cy="105" r="3" fill="#34D399" />
                  <text x="115" y="142" fill="#64748B" fontSize="10" textAnchor="middle">LEO · MEO · GEO Fleet</text>
                </g>

                {/* Tier 2: Ground Gateways */}
                <g transform="translate(280, 10)">
                  <rect x="0" y="0" width="230" height="160" rx="6" fill="#050912" stroke="rgba(71,178,228,0.3)" strokeWidth="1" />
                  <text x="16" y="24" fill="#47B2E4" fontSize="10" fontWeight="600">TIER 2</text>
                  <text x="16" y="42" fill="#FFFFFF" fontSize="13" fontWeight="600">RF Ground Stations</text>

                  {/* Dishes Schematic */}
                  <g transform="translate(45, 68)">
                    <path d="M 0 10 Q 15 24 30 10" fill="none" stroke="#47B2E4" strokeWidth="2" />
                    <line x1="15" y1="17" x2="15" y2="30" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                    <circle cx="15" cy="8" r="2" fill="#7CCCED" />
                    <text x="15" y="42" fill="#94A3B8" fontSize="9" textAnchor="middle">Dish 1</text>
                  </g>
                  <g transform="translate(100, 68)">
                    <path d="M 0 10 Q 15 24 30 10" fill="none" stroke="#47B2E4" strokeWidth="2" />
                    <line x1="15" y1="17" x2="15" y2="30" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                    <circle cx="15" cy="8" r="2" fill="#7CCCED" />
                    <text x="15" y="42" fill="#94A3B8" fontSize="9" textAnchor="middle">Dish 2</text>
                  </g>
                  <g transform="translate(155, 68)">
                    <path d="M 0 10 Q 15 24 30 10" fill="none" stroke="#47B2E4" strokeWidth="2" />
                    <line x1="15" y1="17" x2="15" y2="30" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                    <circle cx="15" cy="8" r="2" fill="#7CCCED" />
                    <text x="15" y="42" fill="#94A3B8" fontSize="9" textAnchor="middle">Dish 3</text>
                  </g>
                  <text x="115" y="142" fill="#64748B" fontSize="10" textAnchor="middle">Concurrent Pass Scheduling</text>
                </g>

                {/* Tier 3: Core Fabric */}
                <g transform="translate(550, 10)">
                  <rect x="0" y="0" width="240" height="160" rx="6" fill="#050912" stroke="rgba(52,211,153,0.3)" strokeWidth="1" />
                  <text x="16" y="24" fill="#34D399" fontSize="10" fontWeight="600">TIER 3</text>
                  <text x="16" y="42" fill="#FFFFFF" fontSize="13" fontWeight="600">12 Distributed Nodes</text>

                  {/* 12 Nodes Grid */}
                  <g transform="translate(24, 60)">
                    {[...Array(12)].map((_, idx) => {
                      const row = Math.floor(idx / 4);
                      const col = idx % 4;
                      return (
                        <rect
                          key={idx}
                          x={col * 48}
                          y={row * 22}
                          width="40"
                          height="18"
                          rx="2"
                          fill="#091824"
                          stroke={idx >= 8 ? '#34D399' : idx >= 4 ? '#47B2E4' : '#7CCCED'}
                          strokeWidth="1"
                        />
                      );
                    })}
                  </g>
                  <text x="120" y="142" fill="#64748B" fontSize="10" textAnchor="middle">Cloud · On-Premise · Hybrid</text>
                </g>

                {/* Tier 4: Flight Ops */}
                <g transform="translate(830, 10)">
                  <rect x="0" y="0" width="240" height="160" rx="6" fill="#050912" stroke="rgba(245,158,11,0.3)" strokeWidth="1" />
                  <text x="16" y="24" fill="#F59E0B" fontSize="10" fontWeight="600">TIER 4</text>
                  <text x="16" y="42" fill="#FFFFFF" fontSize="13" fontWeight="600">Flight Consoles</text>

                  <rect x="30" y="62" width="180" height="34" rx="3" fill="#140E06" stroke="#F59E0B" strokeWidth="1" />
                  <text x="120" y="78" fill="#FBBF24" fontSize="9" fontWeight="600" textAnchor="middle">DUAL-AUTH GATE</text>
                  <text x="120" y="90" fill="#34D399" fontSize="8" fontWeight="600" textAnchor="middle">100% OPERATOR VERIFIED</text>
                  <text x="120" y="142" fill="#64748B" fontSize="10" textAnchor="middle">Cryptographic Uplink Approval</text>
                </g>
              </svg>
            </div>
          </div>
        </div>

        {/* ── Architecture Layers Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {architectureLayers.map((layer, idx) => (
            <div
              key={idx}
              className="p-5 rounded-[8px] bg-[#080C16] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono text-[#47B2E4] font-medium block mb-1">
                  {layer.layer}
                </span>
                <h3 className="text-[15px] font-medium text-white mb-2 font-sans">
                  {layer.title}
                </h3>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  {layer.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
