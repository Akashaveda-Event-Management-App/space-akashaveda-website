import { useScroll, useSpring, motion } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 40,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[60]
                 bg-gradient-to-r from-[#7C3AED] via-[#A78BFA] to-[#7C3AED]
                 shadow-[0_0_8px_rgba(167,139,250,0.6)]"
    />
  );
}
