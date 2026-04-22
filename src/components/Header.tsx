import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Work', href: '#works' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 safe-area-inset-top"
      style={{
        background: isScrolled ? 'rgba(246, 243, 238, 0.92)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        transition: 'all 0.5s ease',
      }}
    >
      <div className="px-6 sm:px-8 lg:px-12 xl:px-16">
        <nav className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#" className="relative group">
            <span
              className="font-serif text-2xl sm:text-3xl italic"
              style={{ color: 'var(--ink)', letterSpacing: '-0.02em' }}
            >
              Portofolio
            </span>
            <span
              className="absolute -top-1 -right-3 w-1.5 h-1.5 rounded-full"
              style={{ background: 'var(--accent)' }}
            />
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-10">
            {navItems.map((item, i) => (
              <motion.li
                key={item.label}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <a
                  href={item.href}
                  className="link-underline text-sm"
                  style={{ color: 'var(--gray-2)' }}
                >
                  {item.label}
                </a>
              </motion.li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <button
            className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            <motion.span
              className="block w-5 h-[1.5px]"
              style={{ background: 'var(--ink)' }}
              animate={isMobileMenuOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block w-5 h-[1.5px]"
              style={{ background: 'var(--ink)' }}
              animate={isMobileMenuOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 flex flex-col items-start justify-center px-10"
            style={{ background: 'var(--paper)' }}
          >
            <div className="space-y-6">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -30, opacity: 0 }}
                  transition={{ delay: 0.08 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  className="block"
                >
                  <span className="font-serif italic text-4xl" style={{ color: 'var(--ink)' }}>
                    {item.label}
                  </span>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute bottom-10 left-10 flex items-center gap-5"
            >
              <a href="mailto:ivanderdaniel79@gmail.com"
                className="font-mono text-xs" style={{ color: 'var(--gray-4)' }}>Email</a>
              <a href="https://github.com/Svann70" target="_blank" rel="noopener noreferrer"
                className="font-mono text-xs" style={{ color: 'var(--gray-4)' }}>Github</a>
              <a href="https://www.linkedin.com/in/ivander-daniel-napitupulu-04a465275/" target="_blank" rel="noopener noreferrer"
                className="font-mono text-xs" style={{ color: 'var(--gray-4)' }}>LinkedIn</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;