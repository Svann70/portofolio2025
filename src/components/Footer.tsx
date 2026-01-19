import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 sm:py-12 border-t border-white/[0.06] safe-area-inset-bottom">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6"
        >
          {/* Logo */}
          <a href="#" className="text-lg font-semibold tracking-tight text-foreground">
            ID<span className="text-primary">.</span>
          </a>

          {/* Copyright */}
          <p className="text-xs sm:text-sm text-muted-foreground text-center order-3 sm:order-2">
            © {currentYear} Ivander Daniel Napitupulu
          </p>

          {/* Back to top */}
          <a
            href="#"
            className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors order-2 sm:order-3 touch-manipulation py-2"
          >
            Back to top ↑
          </a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;