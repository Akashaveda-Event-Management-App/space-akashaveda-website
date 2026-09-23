import { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { SpaceBackground } from './components/SpaceBackground';
import ScrollProgress from './components/ScrollProgress';
import ScrollToTopButton from './components/ScrollToTop';

// Lazy-loaded pages for optimal performance and chunk splitting
const Home = lazy(() => import('./pages/Home'));
const Chakravyuh = lazy(() => import('./pages/Chakravyuh'));
const Chakra = lazy(() => import('./pages/Chakra'));
const Vyuh = lazy(() => import('./pages/Vyuh'));
const GroundOperations = lazy(() => import('./pages/GroundOperations'));
const Technology = lazy(() => import('./pages/Technology'));
const About = lazy(() => import('./pages/About'));
const Resources = lazy(() => import('./pages/Resources'));
const Contact = lazy(() => import('./pages/Contact'));
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

// Clean aerospace loading spinner
function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-[60vh] bg-[#030610]">
      <div className="relative">
        <div className="w-12 h-12 border-2 border-[#47B2E4]/20 rounded-full" />
        <div className="absolute top-0 left-0 w-12 h-12 border-2 border-transparent border-t-[#47B2E4] rounded-full animate-spin" />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <ScrollProgress />
      <ScrollToTopButton />
      <div className="relative bg-[#030610] min-h-screen text-white antialiased font-sans">
        {/* Subtle space starfield & grid */}
        <SpaceBackground
          className="fixed inset-0 z-0 opacity-50 pointer-events-none"
          particleCount={60}
          enableGrid={true}
        />

        <div className="relative z-10 flex flex-col min-h-screen">
          <Navigation />
          
          <div className="flex-1">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                {/* 01. Homepage */}
                <Route path="/" element={<Home />} />

                {/* 02. Chakravyuh (Platform) */}
                <Route path="/chakravyuh" element={<Chakravyuh />} />
                <Route path="/platform" element={<Navigate to="/chakravyuh" replace />} />

                {/* 03. Chakra (SSA) */}
                <Route path="/chakra" element={<Chakra />} />
                <Route path="/ssa" element={<Navigate to="/chakra" replace />} />

                {/* 04. Vyuh (MCS) */}
                <Route path="/vyuh" element={<Vyuh />} />
                <Route path="/mcs" element={<Navigate to="/vyuh" replace />} />

                {/* 05. Ground Operations */}
                <Route path="/ground-operations" element={<GroundOperations />} />

                {/* 06. Technology */}
                <Route path="/technology" element={<Technology />} />

                {/* 07. About */}
                <Route path="/about" element={<About />} />

                {/* 08. Resources */}
                <Route path="/resources" element={<Resources />} />

                {/* 09. Contact */}
                <Route path="/contact" element={<Contact />} />

                {/* 404 Fallback */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </div>

          <Footer />
        </div>
      </div>
    </Router>
  );
}
