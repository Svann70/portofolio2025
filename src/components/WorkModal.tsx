import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github } from 'lucide-react';
import { Work } from './WorkCard';

interface WorkModalProps {
  work: Work | null;
  isOpen: boolean;
  onClose: () => void;
}

const WorkModal = ({ work, isOpen, onClose }: WorkModalProps) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!work) return null;

  const categoryLabel = work.category === 'web' ? 'Web Development' : work.category === 'uiux' ? 'UI/UX Design' : 'Graphic Design';

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-2 sm:inset-4 md:inset-8 lg:inset-16 xl:inset-20 z-50 glass-card overflow-hidden flex flex-col safe-area-inset-bottom"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-3 sm:p-4 md:p-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 sm:px-3 text-xs font-medium bg-primary/10 text-primary rounded-full">
                  {categoryLabel}
                </span>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 sm:w-10 sm:h-10 rounded-full bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors touch-manipulation"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto overscroll-contain p-3 sm:p-4 md:p-6 lg:p-8">
              <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                {/* Image */}
                <div className="rounded-xl sm:rounded-2xl overflow-hidden bg-muted/30">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Details */}
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-semibold text-foreground mb-2 sm:mb-3">
                      {work.title}
                    </h2>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {work.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-2 sm:mb-3">Tags</h4>
                    <div className="flex flex-wrap gap-2">
                      {work.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1.5 sm:px-3 text-xs sm:text-sm bg-muted/50 text-foreground/80 rounded-lg border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-2 sm:pt-4">
                    {work.projectUrl && (
                      <a
                        href={work.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary flex-1 sm:flex-none justify-center inline-flex items-center gap-2"
                      >
                        <ExternalLink size={18} />
                        View Project
                      </a>
                    )}
                    {work.sourceUrl && (
                      <a
                        href={work.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary flex-1 sm:flex-none justify-center inline-flex items-center gap-2"
                      >
                        <Github size={18} />
                        Source Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default WorkModal;