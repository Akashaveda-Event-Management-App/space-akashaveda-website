import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="scroll-to-top"
          aria-label="Scroll to top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          initial={{ opacity: 0, scale: 0.7, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 16 }}
          transition={{ type: 'spring', stiffness: 400, damping: 28 }}
          whileHover={{ scale: 1.08, boxShadow: '0 0 20px rgba(124,58,237,0.45)' }}
          whileTap={{ scale: 0.92 }}
          className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full
                     bg-[#08080A] border border-white/20 text-[#A78BFA] hover:border-[#A78BFA]
                     flex items-center justify-center transition-colors shadow-lg"
        >
          {/* Outer pulse ring */}
          <span
            className="absolute inset-[-3px] rounded-full border border-[#A78BFA]/25 animate-ping"
            style={{ animationDuration: '2.4s' }}
          />

          {/* Decorative partial-arc SVG ring */}
          <svg
            className="absolute inset-0 w-full h-full -rotate-90"
            viewBox="0 0 48 48"
            fill="none"
            aria-hidden="true"
          >
            <circle
              cx="24"
              cy="24"
              r="21"
              stroke="rgba(167,139,250,0.5)"
              strokeWidth="1.5"
              strokeDasharray="32 132"
              strokeLinecap="round"
            />
          </svg>

          <ChevronUp className="w-5 h-5 relative z-10" strokeWidth={2.5} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
