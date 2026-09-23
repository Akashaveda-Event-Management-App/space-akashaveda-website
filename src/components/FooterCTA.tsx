import { ArrowRight, Radio, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FooterCTA() {
  return (
    <section className="relative py-16 sm:py-20 bg-[#030610] text-white border-t border-white/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-[8px] bg-[#080C16] border border-white/15 shadow-[0_12px_40px_rgba(0,0,0,0.6)] flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#47B2E4] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#47B2E4]" />
              <span>COMMENCE INTEGRATION</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-medium text-white tracking-tight mb-3 font-sans">
              Deploy Unified Ground Segment Infrastructure
            </h2>
            <p className="text-sm text-[#94A3B8] leading-relaxed">
              Schedule a demonstration of the Chakravyuh platform or connect with our flight operations engineers to explore ground station network access.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto flex-shrink-0">
            <Link
              to="/contact?type=demo"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-[6px] bg-white text-black text-xs font-semibold hover:bg-gray-100 transition-colors shadow-sm"
            >
              <span>Schedule a demonstration</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              to="/ground-operations"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-[6px] bg-[#0E1626] text-white border border-white/15 text-xs font-medium hover:bg-white/10 transition-colors"
            >
              <span>Ground station access</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
