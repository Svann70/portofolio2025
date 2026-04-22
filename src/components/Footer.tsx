import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative safe-area-inset-bottom" style={{ background: 'var(--ink)' }}>
      <div className="px-6 sm:px-8 lg:px-12 xl:px-16 py-16 sm:py-20">
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-serif italic text-3xl sm:text-4xl lg:text-5xl leading-tight" style={{ color: 'var(--paper)', letterSpacing: '-0.02em' }}>
            Let's create something<br />
            <span className="font-sans font-light not-italic" style={{ color: 'var(--gray-3)' }}>
              meaningful together<span style={{ color: 'var(--accent)' }}>.</span>
            </span>
          </p>
          <motion.a
            href="mailto:ivanderdaniel79@gmail.com"
            className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full text-sm font-mono transition-all duration-300"
            style={{
              background: 'rgba(246, 243, 238, 0.08)',
              color: 'var(--paper)',
              border: '1px solid rgba(246, 243, 238, 0.12)',
            }}
            whileHover={{ y: -2, background: 'rgba(246, 243, 238, 0.14)' }}
          >
            ivanderdaniel79@gmail.com
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M1 13L13 1M13 1H4M13 1V10" />
            </svg>
          </motion.a>
        </motion.div>

        {/* Bottom */}
        <div className="pt-8 border-t" style={{ borderColor: 'rgba(246, 243, 238, 0.08)' }}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="font-mono text-[0.6rem] tracking-[0.1em]" style={{ color: 'rgba(246, 243, 238, 0.25)' }}>
              © {currentYear} Ivander Daniel Napitupulu
            </p>

            <motion.a
              href="#"
              className="font-mono text-xs flex items-center gap-1"
              style={{ color: 'rgba(246, 243, 238, 0.3)' }}
              whileHover={{ y: -1, color: 'rgba(246, 243, 238, 0.6)' }}
            >
              Back to top ↑
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;