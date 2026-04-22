import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IntroAnimationProps {
  onComplete: () => void;
}

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [phase, setPhase] = useState<'mask' | 'text' | 'press-start' | 'done'>('mask');

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase('text'), 1200),
      setTimeout(() => setPhase('press-start'), 2400),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const handleStart = useCallback(() => {
    setPhase('done');
    setTimeout(onComplete, 500);
  }, [onComplete]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (phase === 'press-start' && (e.key === 'Enter' || e.key === ' ')) {
        handleStart();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [phase, handleStart]);

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          key="intro"
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden star-tile-dense"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Scan line */}
          <motion.div
            className="absolute left-0 w-full h-[2px] pointer-events-none z-30"
            style={{ background: 'rgba(246, 214, 73, 0.99)' }}
            animate={{ top: ['-5%', '105%'] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
          />

          {/* Noise texture overlay */}
          <div className="absolute inset-0 pointer-events-none z-20" style={{
            opacity: 0.04,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '200px 200px',
            mixBlendMode: 'overlay',
          }} />

          <AnimatePresence mode="wait">
            {/* Phase 1: Mask eyes peering through torn paper */}
            {phase === 'mask' && (
              <motion.div
                key="mask"
                initial={{ opacity: 0, scale: 1.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="relative z-10"
              >
                {/* Torn strip revealing eyes */}
                <div
                  className="relative overflow-hidden"
                  style={{ width: '600px', maxWidth: '90vw', height: '160px' }}
                >
                  {/* White torn strip */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: '#f5f0e8',
                      clipPath: 'polygon(0% 15%, 3% 5%, 7% 12%, 12% 3%, 17% 10%, 22% 0%, 27% 8%, 33% 2%, 38% 12%, 43% 5%, 48% 10%, 53% 0%, 58% 8%, 63% 3%, 68% 12%, 73% 5%, 78% 10%, 83% 2%, 88% 8%, 93% 3%, 97% 10%, 100% 5%, 100% 85%, 97% 95%, 93% 88%, 88% 97%, 83% 90%, 78% 98%, 73% 92%, 68% 97%, 63% 88%, 58% 95%, 53% 90%, 48% 98%, 43% 92%, 38% 97%, 33% 88%, 27% 95%, 22% 90%, 17% 98%, 12% 92%, 7% 97%, 3% 88%, 0% 95%)',
                    }}
                  />
                  {/* Eyes inside the strip */}
                  <div className="absolute inset-0 flex items-center justify-center gap-16">
                    {/* Left eye */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                    >
                      <svg width="80" height="60" viewBox="0 0 80 60">
                        <ellipse cx="40" cy="30" rx="35" ry="25" fill="#0a0a0a" stroke="#1a1a1a" strokeWidth="1" />
                        <path d="M40 15 L44 26 L55 26 L46 33 L50 44 L40 37 L30 44 L34 33 L25 26 L36 26Z" fill="#c4a82d" stroke="#0a0a0a" strokeWidth="0.5" />
                      </svg>
                    </motion.div>
                    {/* Right eye */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5, duration: 0.4 }}
                    >
                      <svg width="80" height="60" viewBox="0 0 80 60">
                        <ellipse cx="40" cy="30" rx="35" ry="25" fill="#0a0a0a" stroke="#1a1a1a" strokeWidth="1" />
                        <path d="M40 15 L44 26 L55 26 L46 33 L50 44 L40 37 L30 44 L34 33 L25 26 L36 26Z" fill="#c4a82d" stroke="#0a0a0a" strokeWidth="0.5" />
                      </svg>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Phase 2: "TAKE YOUR HEART" text */}
            {phase === 'text' && (
              <motion.div
                key="text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center relative z-10"
              >
                <motion.div
                  initial={{ scale: 4, rotate: 20, opacity: 0 }}
                  animate={{ scale: 1, rotate: -2, opacity: 1 }}
                  transition={{ duration: 0.4, ease: [0.175, 0.885, 0.32, 1.275] }}
                >
                  <h1
                    className="p5-display text-5xl sm:text-7xl md:text-9xl"
                    style={{
                      color: '#c4a82d',
                      textShadow: '4px 4px 0px #0a0a0a, -2px -2px 0px #e23636',
                    }}
                  >
                    TAKE YOUR
                  </h1>
                  <motion.h1
                    initial={{ x: 150, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.15, duration: 0.3 }}
                    className="p5-display text-6xl sm:text-8xl md:text-[10rem]"
                    style={{
                      color: '#e23636',
                      textShadow: '4px 4px 0px #0a0a0a',
                    }}
                  >
                    HEART
                  </motion.h1>
                </motion.div>
              </motion.div>
            )}

            {/* Phase 3: PRESS START */}
            {phase === 'press-start' && (
              <motion.div
                key="press-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center z-10"
              >
                <motion.button
                  onClick={handleStart}
                  className="relative group"
                  whileHover={{ scale: 1.08, rotate: -1 }}
                  whileTap={{ scale: 0.92 }}
                >
                  <div
                    className="p5-display text-3xl sm:text-5xl tracking-[0.3em] px-12 py-6 relative z-10"
                    style={{
                      color: '#0a0a0a',
                      background: '#c4a82d',
                      border: '4px solid #0a0a0a',
                      clipPath: 'polygon(2% 0%, 100% 0%, 98% 100%, 0% 100%)',
                      animation: 'text-flicker 2.5s ease-in-out infinite',
                      textShadow: '2px 2px 0px rgba(0,0,0,0.15)',
                    }}
                  >
                    PRESS START
                  </div>
                  {/* Red shadow */}
                  <div
                    className="absolute inset-0 translate-x-2 translate-y-2 -z-10"
                    style={{
                      background: '#e23636',
                      clipPath: 'polygon(2% 0%, 100% 0%, 98% 100%, 0% 100%)',
                    }}
                  />
                </motion.button>

                <motion.p
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="mt-8 text-sm tracking-[0.3em] uppercase"
                  style={{ color: 'var(--p5-white)' }}
                >
                  — or press ENTER / SPACE —
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Corner stars — pulsing gently */}
          <motion.div className="absolute top-6 left-6 p5-heading text-2xl" style={{ color: '#c4a82d' }} animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 3, repeat: Infinity }}>★</motion.div>
          <motion.div className="absolute top-6 right-6 p5-heading text-2xl" style={{ color: '#e23636' }} animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2.5, repeat: Infinity, delay: 0.3 }}>★</motion.div>
          <motion.div className="absolute bottom-6 left-6 p5-heading text-2xl" style={{ color: '#e23636' }} animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2.5, repeat: Infinity, delay: 0.6 }}>★</motion.div>
          <motion.div className="absolute bottom-6 right-6 p5-heading text-2xl" style={{ color: '#c4a82d' }} animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 3, repeat: Infinity, delay: 0.9 }}>★</motion.div>

          {/* Top/bottom lines — thicker for visual weight */}
          <div className="absolute top-0 left-0 w-full h-1" style={{ background: '#e23636' }} />
          <div className="absolute top-1 left-0 w-full h-[2px]" style={{ background: '#c4a82d', opacity: 0.5 }} />
          <div className="absolute bottom-0 left-0 w-full h-1" style={{ background: '#c4a82d' }} />
          <div className="absolute bottom-1 left-0 w-full h-[2px]" style={{ background: '#e23636', opacity: 0.5 }} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroAnimation;
