import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Work } from './WorkCard';
import WorkModal from './WorkModal';

const categories = [
  { id: 'web', label: 'Web' },
  { id: 'uiux', label: 'UI/UX' },
  { id: 'program', label: 'Program' },
  { id: 'design', label: 'Design' }
];

const works: Work[] = [
  {
    id: '1', title: 'University Student Portal System', category: 'program',
    description: 'A console-based Student Academic Portal developed in Python to handle student records, course registration, and grade management.',
    image: '/portal.png', tags: ['Python'], featured: true,
    sourceUrl: 'https://github.com/username/student-portal',
  },
  {
    id: '2', title: 'PenDuduk App UI', category: 'uiux',
    description: 'Comprehensive UI/UX design for a mobile banking application, focusing on intuitive navigation and secure user experience.',
    image: '/Penduduk.png', tags: ['Figma', 'Prototyping', 'User Research'],
    projectUrl: 'https://www.figma.com/proto/ZoePSnuT2KB25jErA829Wo/PenDuduk?node-id=623-3142&p=f&t=z4Yz2fimmUOGEbg7-1&scaling=scale-down&content-scaling=fixed&page-id=12%3A4&starting-point-node-id=1007%3A6978',
  },
  {
    id: '3', title: 'Library Book Borrowing System', category: 'program',
    description: 'A web-based library management system built with PHP and MySQL to manage book inventory, borrowing transactions, and return records.',
    image: '/peminjam.jpg', tags: ['PHP', 'MySQL', 'HTML', 'CSS'],
  },
  {
    id: '4', title: 'Ecolingo App UI/UX Prototype', category: 'uiux',
    description: 'A UI/UX prototype of an educational application focused on environmental awareness and gamification.',
    image: '/Ecolingo.png', tags: ['Figma', 'UI Design', 'Interaction', 'Education App'],
    featured: true,
    projectUrl: 'https://www.figma.com/proto/GG3dOCwVhJSzDxKDT9XpuQ/Ecolingo?node-id=38-2612&p=f&t=373076ujDscyI31x-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=12%3A75',
  },
  {
    id: '5', title: 'Toiletku App UI/UX Prototype', category: 'uiux',
    description: 'A UI/UX prototype of a public toilet discovery and maintenance application.',
    image: '/Toiletku.jpg', tags: ['Figma', 'UI/UX', 'Mobile Design'],
    projectUrl: 'https://www.figma.com/proto/dQ94LreZEXP6IoJIjlQFjQ/Untitled?node-id=14-3&t=qyp0O4xq0OdXSgEB-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=7%3A2',
  },
  {
    id: '6', title: 'Path App UI/UX Prototype', category: 'uiux',
    description: 'AI-powered educational app designed to personalize learning paths for students.',
    image: '/Path.png', tags: ['Figma', 'Prototyping', 'Education App'],
    projectUrl: 'https://www.figma.com/proto/bNpjBBjmJbx4MOSC5wQMwS/UI-UX-Jual-Beli-Musang?node-id=115-169&p=f&t=GDnA6mn06kAexjb1-1&scaling=min-zoom&content-scaling=fixed&page-id=107%3A242&starting-point-node-id=123%3A27',
  },
  {
    id: '7', title: 'Simple Data Input Form', category: 'web',
    description: 'A basic HTML form project for collecting user input data with a clean and structured layout.',
    image: '/form.png', tags: ['HTML'],
  },
  {
    id: '8', title: 'Village Blood Donor Data System', category: 'program',
    description: 'A C++ program designed to manage and record blood donor data at the village level.',
    image: '/donor.png', tags: ['C++'],
  },
  {
    id: '9', title: 'Othello Board Game AI', category: 'web',
    description: 'Othello board game with AI opponent using Minimax and Fuzzy Logic.',
    image: '/othello.png', tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Vite', 'Typescript', 'Python'],
    projectUrl: 'https://othelloaigame.vercel.app',
  },
  {
    id: '10', title: 'Interactive Physics Exhibition Website', category: 'web',
    description: "Interactive educational website for a physics exhibition.",
    image: '/fisika.png', tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Vite', 'Typescript'],
    projectUrl: 'https://fisikapostulat.vercel.app',
  },
  {
    id: '11', title: 'Sport Poster MU vs City', category: 'design',
    description: 'Poster design for Manchester United vs Manchester City.',
    image: '/belajar1.png', tags: ['Adobe Photoshop'],
    projectUrl: 'https://www.instagram.com/p/DTxpwmQk2o7/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  },
  {
    id: '12', title: 'Sport Poster Lamine Yamal', category: 'design',
    description: 'Poster design for Lamine Yamal.',
    image: '/LamineYamalBelajar.png', tags: ['Adobe Photoshop'],
    projectUrl: 'https://www.instagram.com/p/DTzU6N0E2HK/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  }
];


const WorksSection = () => {
  const [activeCategory, setActiveCategory] = useState('web');
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredWorks = activeCategory === ''
    ? works
    : works.filter((work) => work.category === activeCategory);

  const handleCategoryClick = (id: string) => {
    setActiveCategory(prev => prev === id ? '' : id);
  };

  const handleWorkClick = (work: Work) => {
    setSelectedWork(work);
    setIsModalOpen(true);
  };

  return (
    <section id="works" className="py-20 sm:py-32 relative" style={{ background: 'var(--paper)' }}>
      <div className="px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 sm:mb-24"
        >
          <div className="flex items-start justify-between flex-col sm:flex-row gap-6">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="rule-accent" />
              </div>
              <h2
                className="font-serif italic tracking-[-0.02em]"
                style={{
                  fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                  color: 'var(--ink)',
                  lineHeight: 1,
                }}
              >
                Selected<br />
                <span className="font-sans font-light not-italic">Works</span>
              </h2>
            </div>

            {/* Filter */}
            <div className="flex items-center gap-1.5 self-start sm:self-start mt-4 sm:mt-8 overflow-x-auto pb-2 -mx-1 px-1 scrollbar-hide">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat.id)}
                  className={`filter-btn flex-shrink-0 ${activeCategory === cat.id ? 'active' : ''}`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Projects — horizontal list with alternating layout */}
        <motion.div layout className="space-y-1">
          <AnimatePresence mode="popLayout">
            {filteredWorks.map((work, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={work.id}
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => handleWorkClick(work)}
                  className="project-card group"
                >
                  {/* Top border */}
                  <div className="h-px w-full" style={{ background: 'var(--gray-5)' }} />

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 lg:gap-8 py-5 sm:py-8 items-center">
                    {/* Image — with rounded corners */}
                    <div className={`${isEven ? 'lg:col-span-4 lg:order-1' : 'lg:col-span-4 lg:order-3'} overflow-hidden`}>
                      <div className="relative aspect-[16/10] overflow-hidden rounded-xl" style={{ background: 'var(--paper-warm)' }}>
                        <img
                          src={work.image}
                          alt={work.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`${isEven ? 'lg:col-span-6 lg:order-2' : 'lg:col-span-6 lg:order-2'} flex flex-col justify-center`}>
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className="inline-block w-1.5 h-1.5 rounded-full"
                          style={{ background: 'var(--accent)' }}
                        />
                        <span className="font-mono text-[0.6rem] uppercase tracking-[0.12em]" style={{ color: 'var(--gray-3)' }}>
                          {work.category === 'uiux' ? 'UI/UX' : work.category}
                        </span>
                      </div>

                      <h3
                        className="text-lg sm:text-xl lg:text-2xl font-medium mb-2 group-hover:translate-x-2 transition-transform duration-500"
                        style={{ color: 'var(--ink)', letterSpacing: '-0.02em' }}
                      >
                        {work.title}
                      </h3>

                      <p className="text-sm line-clamp-2 mb-4" style={{ color: 'var(--gray-3)' }}>
                        {work.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {work.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="tag-pill">{tag}</span>
                        ))}
                        {work.tags.length > 3 && (
                          <span className="font-mono text-[0.6rem]" style={{ color: 'var(--gray-4)', padding: '3px 6px' }}>
                            +{work.tags.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className={`lg:col-span-2 ${isEven ? 'lg:order-3' : 'lg:order-1'} hidden lg:flex items-center ${isEven ? 'justify-end' : 'justify-start'}`}>
                      <div
                        className="w-10 h-10 flex items-center justify-center rounded-full border opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                        style={{ borderColor: 'var(--gray-5)', color: 'var(--gray-3)' }}
                      >
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M1 13L13 1M13 1H4M13 1V10" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
          {/* Final border */}
          <div className="h-px w-full" style={{ background: 'var(--gray-5)' }} />
        </motion.div>
      </div>

      <WorkModal work={selectedWork} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default WorksSection;
