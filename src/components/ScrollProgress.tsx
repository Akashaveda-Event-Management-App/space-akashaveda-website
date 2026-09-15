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
                 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500
                 shadow-[0_0_8px_rgba(56,189,248,0.7)]"
    />
  );
}
