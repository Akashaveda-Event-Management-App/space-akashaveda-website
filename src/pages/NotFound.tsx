import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';
import { MotionFadeIn, MotionButton } from '../components/MotionPrimitives';
import { Parallax3DCard } from '../components/Space3DElements';
import { EarthOrbitCanvas } from '../components/EarthOrbitCanvas';

export default function NotFound() {
  return (
    <>
      <SEO
        title="404 - Lost in Orbit"
        description="The requested orbital coordinates could not be located. Return to Akashaveda mission control."
        noindex={true}
      />
      <section className="min-h-screen bg-[#070C1A] text-white flex flex-col justify-center items-center px-4 py-28 relative overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,rgba(15,23,42,0.6),transparent)] pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto text-center w-full">
          <MotionFadeIn>
            <Parallax3DCard className="mb-6">
              <div className="p-6 sm:p-8 rounded-3xl bg-[#080d1a]/95 border border-white/10 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.6)] flex flex-col items-center">
                <EarthOrbitCanvas height="280px" className="rounded-2xl mb-4" />
                <span className="text-5xl sm:text-6xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-2">
                  404
                </span>
                <h1 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white mb-2">
                  Lost in Orbital Space
                </h1>
                <p className="text-[#8A95A3] text-xs sm:text-sm leading-relaxed mb-6 max-w-md">
                  The mission coordinates you are attempting to access could not be acquired by our telemetry tracking stations.
                </p>
                <Link to="/">
                  <MotionButton className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-xl shadow-lg shadow-blue-500/25 transition-all">
                    <ArrowLeft className="w-4 h-4" /> Return to Mission Control
                  </MotionButton>
                </Link>
              </div>
            </Parallax3DCard>
          </MotionFadeIn>
        </div>
      </section>
    </>
  );
}
