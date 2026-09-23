import { Link } from 'react-router-dom';
import { ArrowLeft, Orbit, Radio } from 'lucide-react';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <>
      <SEO
        title="404 - Loss of Signal (LOS)"
        description="The requested orbital coordinates could not be acquired. Return to Akashaveda mission operations."
        noindex={true}
      />
      <section className="min-h-[85vh] bg-[#030610] text-white flex flex-col justify-center items-center px-4 pt-28 pb-16 relative overflow-hidden">
        {/* Subtle coordinate grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

        <div className="relative z-10 max-w-lg mx-auto text-center w-full">
          <div className="p-8 rounded-[8px] bg-[#080C16] border border-white/15 shadow-[0_16px_50px_rgba(0,0,0,0.8)] flex flex-col items-center">
            
            {/* Visual Radar Reticle */}
            <div className="w-20 h-20 rounded-full bg-[#0B1220] border border-white/10 flex items-center justify-center mb-6 relative">
              <span className="absolute inset-0 rounded-full border border-dashed border-[#47B2E4]/30 animate-spin" style={{ animationDuration: '10s' }} />
              <Radio className="w-8 h-8 text-[#47B2E4]" />
            </div>

            <span className="text-4xl sm:text-5xl font-mono font-medium text-white mb-2 tracking-tight">
              404 // LOS
            </span>

            <div className="text-xs font-mono uppercase text-[#47B2E4] tracking-wider mb-3 font-semibold">
              LOSS OF SIGNAL
            </div>

            <p className="text-sm text-[#94A3B8] leading-relaxed mb-6 max-w-sm">
              The orbital route or mission page you requested could not be resolved by our ground telemetry network.
            </p>

            <Link
              to="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[6px] bg-white text-black text-xs font-semibold hover:bg-gray-100 transition-colors shadow-sm"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Return to Mission Control</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
