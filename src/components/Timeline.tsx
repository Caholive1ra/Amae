import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ProcessStep } from '@/types';

interface TimelineProps {
  steps: ProcessStep[];
}

const Timeline = ({ steps }: TimelineProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="relative">
      <div className="absolute left-8 top-0 bottom-0 w-px bg-border/30 hidden lg:block" />
      
      <div className="space-y-8 md:space-y-12">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -12 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.1,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="relative pl-0 lg:pl-20"
          >
            <div className="absolute left-0 top-6 w-12 h-12 md:w-16 md:h-16 rounded-full bg-accent/20 text-accent flex items-center justify-center font-playfair text-xl md:text-2xl hidden lg:flex">
              {index + 1}
            </div>
            
            <div className="bg-card rounded-lg p-6 md:p-8 shadow-soft hover-lift">
              <div className="flex items-center gap-3 mb-4 lg:hidden">
                <div className="w-10 h-10 rounded-full bg-accent/20 text-accent flex items-center justify-center font-playfair text-lg">
                  {index + 1}
                </div>
                <h3 className="text-xl md:text-2xl font-playfair text-foreground">
                  {step.title}
                </h3>
              </div>
              <h3 className="text-xl md:text-2xl font-playfair text-foreground mb-4 hidden lg:block">
                {step.title}
              </h3>
              <p className="text-muted-foreground font-light leading-relaxed mb-6 text-sm md:text-base">
                {step.description}
              </p>
              
              {step.media && step.media.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  {step.media.map((media, mediaIndex) => (
                    <div key={mediaIndex} className="relative h-40 md:h-48 rounded-lg overflow-hidden">
                      {media.type === 'image' ? (
                        <img
                          src={media.src}
                          alt={media.alt || step.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      ) : (
                        <video
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="w-full h-full object-cover"
                          aria-label={media.alt || step.title}
                        >
                          <source src={media.src} type="video/mp4" />
                        </video>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
