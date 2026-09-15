import { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Stats from './components/Stats';
import ServicesSection from './components/ServicesSection';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SEO from './components/SEO';
import { SpaceBackground } from './components/SpaceBackground';
import ScrollProgress from './components/ScrollProgress';
import ScrollToTopButton from './components/ScrollToTop';

// Lazy loaded pages for optimal bundle splitting
const NotFound = lazy(() => import('./pages/NotFound'));

// Automatic scroll-to-top handler on route changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  return null;
}

// Loading spinner component
function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#070C1A]">
      <div className="relative">
        <div className="w-16 h-16 sm:w-20 sm:h-20 border-4 border-blue-500/20 rounded-full"></div>
        <div className="absolute top-0 left-0 w-16 h-16 sm:w-20 sm:h-20 border-4 border-transparent border-t-blue-500 rounded-full animate-spin"></div>
      </div>
    </div>
  );
}

function HomePage() {
  return (
    <>
      <SEO
        title="AI-Powered Satellite Mission Operations & Space Technology"
        canonical="/"
      />
      <main>
        <Hero />
        <Stats />
        <ServicesSection />
        <Features />
        <Contact />
      </main>
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ScrollProgress />
      <ScrollToTopButton />
      <div className="relative bg-[#070C1A] min-h-screen text-white antialiased">
        {/* Interactive Space Starfield & Constellation Grid */}
        <SpaceBackground className="fixed inset-0 z-0 opacity-80 pointer-events-none" particleCount={90} enableGrid={true} />

        <div className="relative z-10">
          <Navigation />
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
