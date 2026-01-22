import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export interface Work {
  id: string;
  title: string;
  category: 'web' | 'uiux' | 'graphic' | 'program' | 'design';
  description: string;
  image: string;
  tags: string[];
  featured?: boolean;
  sourceUrl?: string; // Link to source code (GitHub etc)
  projectUrl?: string; // Link to live project or case study
}

interface WorkCardProps {
  work: Work;
  onClick: () => void;
  index: number;
}

const WorkCard = ({ work, onClick, index }: WorkCardProps) => {
  const categoryLabel = work.category === 'web'
    ? 'Web'
    : work.category === 'uiux'
      ? 'UI/UX'
      : work.category === 'program'
        ? 'Program'
        : work.category === 'design'
          ? 'Design'
          : 'Graphic';

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onClick={onClick}
      className={`group cursor-pointer touch-manipulation ${work.featured ? 'sm:col-span-2 lg:col-span-2' : ''}`}
    >
      <div className="glass-card-hover h-full overflow-hidden">
        {/* Image Container */}
        <div className={`relative overflow-hidden ${work.featured ? 'aspect-[16/9] sm:aspect-[16/10]' : 'aspect-[4/3]'}`}>
          <img
            src={work.image}
            alt={work.title}
            className="w-full h-full object-cover transition-transform duration-600 ease-out group-hover:scale-105"
            loading="lazy"
          />

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Arrow Icon */}
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-foreground/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ArrowUpRight size={16} className="text-foreground sm:w-[18px] sm:h-[18px]" />
          </div>

          {/* Category Badge */}
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
            <span className="px-2.5 py-1 sm:px-3 text-xs font-medium bg-background/60 backdrop-blur-sm rounded-full text-foreground/80 border border-white/10">
              {categoryLabel}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6">
          <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
            {work.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-3 sm:mb-4">
            {work.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {work.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs text-muted-foreground bg-muted/50 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default WorkCard;