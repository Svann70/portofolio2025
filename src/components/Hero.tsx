import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden hero-gradient-bg safe-area-inset-top">
      {/* Ambient light effect - reduced on mobile for performance */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] rounded-full bg-primary/5 blur-[80px] sm:blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[200px] sm:w-[400px] h-[200px] sm:h-[400px] rounded-full bg-blue-500/3 blur-[60px] sm:blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Content */}
          <motion.div
            className="lg:col-span-7 space-y-6 sm:space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 text-xs font-medium text-primary bg-primary/10 rounded-full border border-primary/20">
                <Sparkles size={12} />
                Available for opportunities
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-semibold leading-[1.1] tracking-tight"
            >
              <span className="text-gradient-subtle">Ivander Daniel</span>
              <br />
              <span className="text-foreground">Napitupulu</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
            >
              Software Engineer{' '}
              <span className="text-foreground/60">|</span>{' '}
              <span className="text-foreground/80">UI/UX Designer</span>{' '}
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base text-muted-foreground max-w-lg"
            >
              Building thoughtful digital experiences at the intersection of engineering precision and design craft.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
              <a href="#works" className="btn-primary w-full sm:w-auto justify-center">
                View My Work
                <ArrowDown size={18} />
              </a>
              <a href="#contact" className="btn-secondary w-full sm:w-auto justify-center">
                Get in Touch
              </a>
            </motion.div>
          </motion.div>

          {/* Right Visual - Hidden on mobile and tablet */}
          <motion.div
            className="lg:col-span-5 hidden lg:block"
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative aspect-square">
              {/* Abstract geometric composition */}
              <div className="absolute inset-0">
                <motion.div
                  className="absolute top-0 right-0 w-3/4 h-3/4 rounded-3xl glass-card flex items-center justify-center overflow-hidden"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                >
                  {/* Person with Laptop Icon - Top Right */}
                  <svg viewBox="0 0 24 24" className="w-1/2 h-1/2 text-foreground/20 fill-current opacity-30">
                    <path d="M20 18v-1c0-2.21-3.58-4-8-4s-8 1.79-8 4v1h16zm-8-6c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm9 8l1 2H2l1-2h18z" />
                  </svg>
                </motion.div>

                <motion.div
                  className="absolute bottom-0 left-0 w-2/3 h-2/3 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center overflow-hidden"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                >
                  {/* Python Icon - Bottom Left */}
                  <svg viewBox="0 0 128 128" className="w-1/2 h-1/2 text-primary/40 fill-current opacity-40">
                    <path d="M63.6 15.6C44.3 15.6 37 24.3 37 36.3V44h26.5v3.4H24.8C12 47.4 5.7 54.3 5.7 66.8v16.7c0 12.3 5.7 18 19 18h9.8v-3.7c0-12 5.5-17.7 17.7-17.7h18.2c6.4 0 9.2-2.7 9.2-9.2V50.6c0-6.4-2.8-9.2-9.2-9.2h-18v-3c0-6 2.8-8.8 8.8-8.8h19.8c6 0 8.8 2.8 8.8 8.8v2.8h15V36.3c0-11.8-6.1-20.7-27.1-20.7zM45.5 28.1c2.4 0 4.3 2 4.3 4.3s-2 4.3-4.3 4.3c-2.4 0-4.3-2-4.3-4.3s2-4.3 4.3-4.3zm20.8 35.8H48.1c-6.4 0-9.2 2.7-9.2 9.2V93c0 6.4 2.8 9.2 9.2 9.2h18v3c0 6-2.8 8.8-8.8 8.8H37.5c-6 0-8.8-2.8-8.8-8.8v-2.8H13.7v4c0 11.8 6.1 20.7 27.2 20.7 19.3 0 26.5-8.8 26.5-20.7V99.7H40.8v-3.4h38.7c12.7 0 19-6.9 19-19.5V60.2c0-12.3-5.7-18-19-18H66.3v3.7c0 12-5.5 17.8-17.8 17.8h-.1zM84.4 91.3c2.4 0 4.3 2 4.3 4.3s-2 4.3-4.3 4.3c-2.4 0-4.3-2-4.3-4.3s1.9-4.3 4.3-4.3z" />
                  </svg>
                </motion.div>

                <motion.div
                  className="absolute top-1/4 left-1/4 w-1/2 h-1/2 rounded-2xl bg-gradient-to-br from-secondary to-muted border border-white/10 flex items-center justify-center overflow-hidden"
                  animate={{ rotate: [0, 5, 0, -5, 0] }}
                  transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                >
                  {/* Figma Icon - Center */}
                  <svg viewBox="0 0 24 24" className="w-1/2 h-1/2 text-foreground fill-current opacity-20">
                    <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z M12 2h3.5A3.5 3.5 0 0 1 19 5.5 3.5 3.5 0 0 1 15.5 9H12V2z M12 9h3.5a3.5 3.5 0 1 1 0 7H12V9z M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
                  </svg>
                </motion.div>
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute top-10 right-10 w-4 h-4 rounded-full bg-primary"
                animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-20 right-20 w-2 h-2 rounded-full bg-foreground/50"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - Hidden on mobile */}
      <motion.div
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ height: ['20%', '40%', '20%'] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-0.5 bg-muted-foreground/50 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;