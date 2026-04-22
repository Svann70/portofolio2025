import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { useRef, useEffect } from 'react';
import LiquidEther from './LiquidEther';

const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  // Mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring physics for each layer (different stiffness = different parallax speed)
  const springConfig = { damping: 40, stiffness: 90 };
  const springConfigSlow = { damping: 50, stiffness: 60 };
  const springConfigFast = { damping: 30, stiffness: 120 };

  const x1 = useSpring(useTransform(mouseX, [0, 1], [-25, 25]), springConfig);
  const y1Mouse = useSpring(useTransform(mouseY, [0, 1], [-20, 20]), springConfig);
  const x2 = useSpring(useTransform(mouseX, [0, 1], [30, -30]), springConfigSlow);
  const y2 = useSpring(useTransform(mouseY, [0, 1], [25, -25]), springConfigSlow);
  const x3 = useSpring(useTransform(mouseX, [0, 1], [-15, 15]), springConfigFast);
  const y3 = useSpring(useTransform(mouseY, [0, 1], [-12, 12]), springConfigFast);
  const x4 = useSpring(useTransform(mouseX, [0, 1], [18, -18]), springConfig);
  const y4 = useSpring(useTransform(mouseY, [0, 1], [15, -15]), springConfig);
  const x5 = useSpring(useTransform(mouseX, [0, 1], [-10, 10]), springConfigSlow);
  const y5 = useSpring(useTransform(mouseY, [0, 1], [-8, 8]), springConfigSlow);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set(clientX / innerWidth);
      mouseY.set(clientY / innerHeight);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100dvh] flex items-end overflow-hidden"
      style={{ background: 'var(--paper)' }}
    >
      {/* ==========================================
          LIQUID ETHER BACKGROUND
          ========================================== */}
      <div className="absolute inset-0 z-0 opacity-30">
        <LiquidEther
          colors={['#c85a3a', '#e8c4a0', '#d4a574']}
          mouseForce={15}
          cursorSize={120}
          resolution={0.4}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.3}
          autoIntensity={1.8}
          takeoverDuration={0.3}
          autoResumeDelay={2000}
          autoRampDuration={0.8}
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* ==========================================
          ROMAN DECORATIVE LINES — mouse-reactive
          ========================================== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-[1]">

        {/* Roman I — serifed vertical stroke, upper right */}
        <motion.div
          style={{ x: x1, y: y1Mouse }}
          className="absolute top-[10%] right-[14%]"
        >
          <motion.svg
            viewBox="0 0 20 80"
            className="w-[14px] h-[56px] sm:w-[18px] sm:h-[72px]"
            animate={{ opacity: [0.2, 0.45, 0.2] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <line x1="4" y1="0" x2="16" y2="0" stroke="var(--gray-4)" strokeWidth="1.5" />
            <line x1="10" y1="0" x2="10" y2="80" stroke="var(--gray-4)" strokeWidth="1.2" />
            <line x1="4" y1="80" x2="16" y2="80" stroke="var(--gray-4)" strokeWidth="1.5" />
          </motion.svg>
        </motion.div>

        {/* Roman V — open chevron, mid right */}
        <motion.div
          style={{ x: x2, y: y2 }}
          className="absolute top-[35%] right-[7%]"
        >
          <motion.svg
            viewBox="0 0 40 36"
            className="w-[32px] h-[28px] sm:w-[40px] sm:h-[36px]"
            fill="none"
            stroke="var(--gray-4)"
            strokeWidth="1.2"
            animate={{ y: [0, -6, 0], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          >
            {/* Serifs at top */}
            <line x1="0" y1="0" x2="6" y2="0" />
            <line x1="34" y1="0" x2="40" y2="0" />
            {/* V shape */}
            <line x1="3" y1="0" x2="20" y2="36" />
            <line x1="37" y1="0" x2="20" y2="36" />
          </motion.svg>
        </motion.div>

        {/* Roman X — crossed strokes, top center-right */}
        <motion.div
          style={{ x: x3, y: y3 }}
          className="absolute top-[18%] right-[32%]"
        >
          <motion.svg
            viewBox="0 0 36 44"
            className="w-[26px] h-[32px] sm:w-[32px] sm:h-[40px]"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="1"
            strokeOpacity="0.35"
            animate={{ rotate: [0, 5, 0, -5, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          >
            {/* Top serifs */}
            <line x1="0" y1="0" x2="8" y2="0" />
            <line x1="28" y1="0" x2="36" y2="0" />
            {/* Bottom serifs */}
            <line x1="0" y1="44" x2="8" y2="44" />
            <line x1="28" y1="44" x2="36" y2="44" />
            {/* X strokes */}
            <line x1="4" y1="0" x2="32" y2="44" />
            <line x1="32" y1="0" x2="4" y2="44" />
          </motion.svg>
        </motion.div>

        {/* Long serifed horizontal rule — upper area */}
        <motion.div
          style={{ x: x4, y: y4 }}
          className="absolute top-[28%] right-[18%] origin-center"
        >
          <motion.svg
            viewBox="0 0 200 12"
            className="w-[140px] h-[8px] sm:w-[200px] sm:h-[12px]"
            fill="none"
            stroke="var(--gray-5)"
            strokeWidth="1"
            animate={{ rotate: [20, 25, 20], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          >
            {/* Left serif */}
            <line x1="0" y1="2" x2="0" y2="10" />
            {/* Horizontal stroke */}
            <line x1="0" y1="6" x2="200" y2="6" />
            {/* Right serif */}
            <line x1="200" y1="2" x2="200" y2="10" />
          </motion.svg>
        </motion.div>

        {/* Roman II — double column, mid area */}
        <motion.div
          style={{ x: x5, y: y3 }}
          className="absolute top-[48%] right-[28%]"
        >
          <motion.svg
            viewBox="0 0 28 60"
            className="w-[20px] h-[42px] sm:w-[26px] sm:h-[56px]"
            fill="none"
            stroke="var(--gray-4)"
            strokeWidth="1"
            animate={{ opacity: [0.15, 0.4, 0.15] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          >
            {/* Top serifs */}
            <line x1="1" y1="0" x2="12" y2="0" />
            <line x1="16" y1="0" x2="27" y2="0" />
            {/* Two columns */}
            <line x1="7" y1="0" x2="7" y2="60" />
            <line x1="21" y1="0" x2="21" y2="60" />
            {/* Bottom serifs */}
            <line x1="1" y1="60" x2="12" y2="60" />
            <line x1="16" y1="60" x2="27" y2="60" />
          </motion.svg>
        </motion.div>

        {/* Laurel dot arc — upper mid */}
        <motion.div
          style={{ x: x1, y: y2 }}
          className="absolute top-[14%] right-[24%]"
        >
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <motion.div
              key={i}
              className="absolute w-[3px] h-[3px] rounded-full"
              style={{
                background: 'var(--gray-4)',
                left: `${Math.cos((i * Math.PI) / 6 - Math.PI / 3) * 32}px`,
                top: `${Math.sin((i * Math.PI) / 6 - Math.PI / 3) * 32 + 32}px`,
              }}
              animate={{ opacity: [0.1, 0.45, 0.1] }}
              transition={{ duration: 4, repeat: Infinity, delay: i * 0.25, ease: 'easeInOut' }}
            />
          ))}
        </motion.div>

        {/* Half-arc column — right side */}
        <motion.div
          style={{ x: x2, y: y4 }}
          className="absolute top-[55%] right-[4%] w-[140px] h-[140px] sm:w-[200px] sm:h-[200px]"
        >
          <motion.div
            className="w-full h-full rounded-full"
            style={{
              border: '1px solid var(--gray-5)',
              borderColor: 'transparent transparent var(--gray-5) transparent',
            }}
            animate={{ rotate: [0, -20, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>

        {/* Accent dot — sentinel */}
        <motion.div
          style={{ x: x3, y: y4 }}
          className="absolute top-[42%] right-[12%]"
        >
          <motion.div
            className="w-2 h-2 rounded-full"
            style={{ background: 'var(--accent)' }}
            animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>

        {/* Short serifed vertical — lower right */}
        <motion.div
          style={{ x: x5, y: y5 }}
          className="absolute bottom-[25%] right-[18%]"
        >
          <motion.svg
            viewBox="0 0 16 40"
            className="w-[12px] h-[30px] sm:w-[14px] sm:h-[36px]"
            fill="none"
            stroke="var(--gray-5)"
            strokeWidth="1"
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          >
            <line x1="2" y1="0" x2="14" y2="0" />
            <line x1="8" y1="0" x2="8" y2="40" />
            <line x1="2" y1="40" x2="14" y2="40" />
          </motion.svg>
        </motion.div>

        {/* Accent dash — bottom */}
        <motion.div
          style={{ x: x4, y: y3 }}
          className="absolute bottom-[32%] right-[6%]"
        >
          <motion.svg
            viewBox="0 0 40 8"
            className="w-[30px] h-[6px] sm:w-[36px] sm:h-[7px]"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="1.5"
            strokeOpacity="0.35"
            animate={{ scaleX: [0.5, 1, 0.5] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          >
            <line x1="0" y1="4" x2="40" y2="4" />
            <line x1="0" y1="1" x2="0" y2="7" />
            <line x1="40" y1="1" x2="40" y2="7" />
          </motion.svg>
        </motion.div>
      </div>

      {/* ==========================================
          MAIN TEXT CONTENT
          ========================================== */}
      <motion.div
        className="w-full px-6 sm:px-8 lg:px-12 xl:px-16 pb-12 sm:pb-20 lg:pb-28 relative z-20"
        style={{ opacity }}
      >
        <div className="pt-24 sm:pt-32 lg:pt-36 mb-12 sm:mb-20" />

        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-4 flex items-center gap-3"
          >
            <span className="inline-block w-2 h-2 rounded-full" style={{ background: 'var(--accent)' }} />
            <span className="text-sm" style={{ color: 'var(--gray-3)' }}>
              Software Engineer & UI/UX Designer
            </span>
          </motion.div>

          <motion.div style={{ y: y1 }}>
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="font-serif italic leading-[0.88] tracking-[-0.03em]"
              style={{ fontSize: 'clamp(3rem, 10vw, 8rem)', color: 'var(--ink)' }}
            >
              Ivander
            </motion.h1>
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
              className="leading-[0.88] tracking-[-0.04em] font-light"
              style={{ fontSize: 'clamp(3rem, 10vw, 8rem)', color: 'var(--ink)' }}
            >
              Daniel<span style={{ color: 'var(--accent)' }}>.</span>
            </motion.h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-8 text-sm sm:text-base leading-relaxed max-w-md"
            style={{ color: 'var(--gray-2)' }}
          >
            Crafting intuitive interfaces through thoughtful design
            and clean code — passionate about building digital 
            experiences that feel natural and considered.
          </motion.p>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="mt-14 sm:mt-20"
        >
          <a href="#works" className="flex items-center gap-3 group">
            <span className="text-sm" style={{ color: 'var(--gray-3)' }}>
              Scroll to explore
            </span>
            <motion.span
              className="text-lg"
              style={{ color: 'var(--accent)' }}
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              ↓
            </motion.span>
          </a>
        </motion.div>
      </motion.div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'var(--gray-5)' }} />
    </section>
  );
};

export default Hero;

