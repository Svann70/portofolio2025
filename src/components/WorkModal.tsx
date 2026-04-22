import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Work } from './WorkCard';

interface WorkModalProps {
  work: Work | null;
  isOpen: boolean;
  onClose: () => void;
}

const WorkModal = ({ work, isOpen, onClose }: WorkModalProps) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!work) return null;

  const catLabel = work.category === 'web' ? 'Web' : work.category === 'uiux' ? 'UI/UX' : work.category === 'program' ? 'Program' : 'Design';

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50"
            style={{ background: 'rgba(26, 26, 26, 0.8)', backdropFilter: 'blur(12px)' }}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.98 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-4 sm:inset-8 md:inset-12 lg:inset-y-12 lg:inset-x-24 z-50 overflow-hidden flex flex-col rounded-2xl"
            style={{ background: 'var(--paper)' }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 sm:px-8 py-4 border-b" style={{ borderColor: 'var(--gray-5)' }}>
              <div className="flex items-center gap-3">
                <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.15em]" style={{ color: 'var(--gray-3)' }}>
                  {catLabel}
                </span>
              </div>
              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-8 h-8 flex items-center justify-center rounded-full text-sm"
                style={{ color: 'var(--gray-3)', background: 'var(--paper-warm)' }}
              >
                ✕
              </motion.button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Image */}
                <div className="overflow-hidden rounded-xl" style={{ background: 'var(--paper-warm)' }}>
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Details */}
                <div className="flex flex-col justify-center space-y-8">
                  <div>
                    <h2
                      className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-4"
                      style={{ color: 'var(--ink)', letterSpacing: '-0.02em', lineHeight: 1.15 }}
                    >
                      {work.title}
                    </h2>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--gray-2)' }}>
                      {work.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-mono text-[0.65rem] uppercase tracking-[0.15em] mb-3" style={{ color: 'var(--gray-3)' }}>
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {work.tags.map((tag) => (
                        <span key={tag} className="tag-pill rounded-full">{tag}</span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    {work.projectUrl && (
                      <a
                        href={work.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm rounded-full transition-all duration-300 hover:translate-y-[-2px]"
                        style={{
                          background: 'var(--ink)',
                          color: 'var(--paper)',
                        }}
                      >
                        View Project
                        <svg width="12" height="12" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M1 13L13 1M13 1H4M13 1V10" />
                        </svg>
                      </a>
                    )}
                    {work.sourceUrl && (
                      <a
                        href={work.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm border rounded-full transition-all duration-300 hover:translate-y-[-2px]"
                        style={{
                          borderColor: 'var(--gray-5)',
                          color: 'var(--ink)',
                        }}
                      >
                        Source Code
                        <svg width="12" height="12" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M1 13L13 1M13 1H4M13 1V10" />
                        </svg>
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
