import { motion } from 'framer-motion';
import { MediaItem } from '@/types';

interface EditorialHeroProps {
  title: string;
  subtitle?: string;
  media: MediaItem;
  alignment?: 'left' | 'center' | 'right';
  overlay?: boolean;
}

const EditorialHero = ({ 
  title, 
  subtitle, 
  media, 
  alignment = 'center',
  overlay = true 
}: EditorialHeroProps) => {
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end'
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        {media.type === 'image' ? (
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            src={media.src}
            alt={media.alt || title}
            className="w-full h-full object-cover"
            loading="eager"
          />
        ) : (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            aria-label={media.alt || title}
          >
            <source src={media.src} type="video/mp4" />
          </video>
        )}
        {overlay && <div className="absolute inset-0 gradient-overlay-dark" />}
      </div>
      
      <div className={`relative z-10 container mx-auto px-4 flex flex-col ${alignmentClasses[alignment]}`}>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-playfair text-background mb-6 leading-tight max-w-5xl"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl md:text-2xl text-background/90 font-light max-w-3xl"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default EditorialHero;
