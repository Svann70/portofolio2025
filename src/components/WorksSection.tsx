import { useState } from 'react';
import { motion } from 'framer-motion';
import WorkCard, { Work } from './WorkCard';
import WorkModal from './WorkModal';

const categories = [
  { id: 'all', label: 'All' },
  { id: 'web', label: 'Web' },
  { id: 'uiux', label: 'UI/UX' },
  { id: 'program', label: 'Program' },
];

const works: Work[] = [
  {
    id: '1',
    title: 'University Student Portal System',
    category: 'program',
    description: 'A console-based Student Academic Portal developed in Python to handle student records, course registration, and grade management. The system implements structured data handling, modular functions, and basic validation to simulate a real academic information system.',
    image: '/portal.png',
    tags: ['Python'],
    featured: true,
    sourceUrl: 'https://github.com/username/student-portal', // Change this to your actual repository
  },
  {
    id: '2',
    title: 'PenDuduk App UI',
    category: 'uiux',
    description: 'Comprehensive UI/UX design for a mobile banking application, focusing on intuitive navigation and secure user experience.',
    image: '/Penduduk.png',
    tags: ['Figma', 'Prototyping', 'User Research'],
    projectUrl: 'https://www.figma.com/proto/ZoePSnuT2KB25jErA829Wo/PenDuduk?node-id=623-3142&p=f&t=z4Yz2fimmUOGEbg7-1&scaling=scale-down&content-scaling=fixed&page-id=12%3A4&starting-point-node-id=1007%3A6978', // Add your design link here
  },
  {
    id: '3',
    title: 'Library Book Borrowing System',
    category: 'program',
    description: 'A web-based library management system built with PHP and MySQL to manage book inventory, borrowing transactions, and return records in a structured database-driven application.',
    image: '/peminjam.jpg',
    tags: ['PHP', 'MySQL', 'HTML', 'CSS'],
  },
  {
    id: '4',
    title: 'Ecolingo App UI/UX Prototype',
    category: 'uiux',
    description: 'A UI/UX prototype of an educational application focused on environmental awareness and gamification, designed in Figma to explore user flow, interaction, and visual hierarchy.',
    image: '/Ecolingo.png',
    tags: ['Figma', 'UI Design', 'Interaction', 'Education App'],
    featured: true,
    projectUrl: 'https://www.figma.com/proto/GG3dOCwVhJSzDxKDT9XpuQ/Ecolingo?node-id=38-2612&p=f&t=373076ujDscyI31x-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=12%3A75', // Add your prototype link here
  },
  {
    id: '5',
    title: 'Toiletku App UI/UX Prototype',
    category: 'uiux',
    description: 'A UI/UX prototype of a public toilet discovery and maintenance application, focusing on location-based services, usability, and simple user interaction design.',
    image: '/Toiletku.jpg',
    tags: ['Figma', 'UI/UX', 'Mobile Design'],
    projectUrl: 'https://www.figma.com/proto/dQ94LreZEXP6IoJIjlQFjQ/Untitled?node-id=14-3&t=qyp0O4xq0OdXSgEB-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=7%3A2', // Add your prototype link here
  },
  {
    id: '6',
    title: 'Path App UI/UX Prototype',
    category: 'uiux',
    description: 'A UI/UX prototype of an AI-powered educational application designed to personalize learning paths for elementary to high school students, focusing on accessibility and adaptive learning flow.',
    image: '/Path.png',
    tags: ['Figma', 'Prototyping', 'Education App'],
    projectUrl: 'https://www.figma.com/proto/bNpjBBjmJbx4MOSC5wQMwS/UI-UX-Jual-Beli-Musang?node-id=115-169&p=f&t=GDnA6mn06kAexjb1-1&scaling=min-zoom&content-scaling=fixed&page-id=107%3A242&starting-point-node-id=123%3A27', // Add your prototype link here
  },
  {
    id: '7',
    title: 'Simple Data Input Form',
    category: 'web',
    description: 'A basic HTML form project for collecting user input data with a clean and structured layout. This project demonstrates fundamental form elements and client-side data organization.',
    image: '/form.png',
    tags: ['HTML'],
  },
  {
    id: '8',
    title: 'Village Blood Donor Data System',
    category: 'program',
    description: 'A C++ program designed to manage and record blood donor data at the village level. This system handles basic data input, storage, and retrieval to support simple healthcare administration.',
    image: '/donor.png',
    tags: ['C++'],
  },
  {
    id: '9',
    title: 'Othello Board Game AI',
    category: 'web',
    description: 'A Othello board game using Python, developed with an AI opponent using the Minimax and Fuzzy Logic algorithm. This project focuses on game logic, turn-based mechanics, and basic artificial intelligence decision-making. Implementations to web using React, Vite, and Typescript.',
    image: '/othello.png',
    tags: ['HTML', 'CSS', 'JavaScript', 'React','Vite','Typescript','Python'],
    projectUrl: 'https://othelloaigame.vercel.app',
  },
  {
    id: '10',
    title: 'Interactive Physics Exhibition Website',
    category: 'web',
    description: 'An interactive educational website created to support a high school physics exhibition, presenting concepts such as Einstein’s Postulates and Lorentz Transformation through structured content and visual elements.',
    image: '/fisika.png',
    tags: ['HTML', 'CSS', 'JavaScript', 'React','Vite','Typescript'],
    projectUrl: 'https://fisikapostulat.vercel.app',
  },
];


const WorksSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredWorks = activeCategory === 'all'
    ? works
    : activeCategory === 'web'
      ? works.filter((work) => work.category === 'web')
      : works.filter((work) => work.category === activeCategory);

  const handleWorkClick = (work: Work) => {
    setSelectedWork(work);
    setIsModalOpen(true);
  };

  return (
    <section id="works" className="py-16 sm:py-24 lg:py-32 section-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-16"
        >
          <span className="text-sm font-medium text-primary mb-3 sm:mb-4 block">Portfolio</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-4 sm:mb-6">
            Selected Works
          </h2>
          <p className="text-muted-foreground max-w-xl text-base sm:text-lg">
            A curated collection of projects spanning web development, UI/UX design, and graphic design.
          </p>
        </motion.div>

        {/* Filter Tabs - Scrollable on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 sm:mb-12 -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 sm:flex-wrap scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`filter-tab whitespace-nowrap flex-shrink-0 ${activeCategory === category.id ? 'filter-tab-active' : ''}`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Works Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
        >
          {filteredWorks.map((work, index) => (
            <WorkCard
              key={work.id}
              work={work}
              onClick={() => handleWorkClick(work)}
              index={index}
            />
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <WorkModal
        work={selectedWork}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default WorksSection;