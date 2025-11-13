import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface ProcessItem {
  title: string;
  description: string;
  image: string;
}

interface ProcessGridProps {
  items: ProcessItem[];
}

const ProcessGrid = ({ items }: ProcessGridProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ 
            duration: 0.5, 
            delay: index * 0.08,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="group hover-lift"
        >
          <div className="relative h-[300px] sm:h-[350px] md:h-[380px] rounded-lg overflow-hidden mb-4 md:mb-6 shadow-soft image-zoom">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 gradient-overlay-dark" />
            <h3 className="absolute bottom-4 left-4 md:bottom-6 md:left-6 text-2xl md:text-3xl font-playfair text-background pr-4">
              {item.title}
            </h3>
          </div>
          <p className="text-muted-foreground font-light leading-relaxed text-sm md:text-base px-2 md:px-0">
            {item.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default ProcessGrid;
