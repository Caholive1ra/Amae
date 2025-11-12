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
      <div className="absolute left-8 top-0 bottom-0 w-px bg-border/30 hidden md:block" />
      
      <div className="space-y-12">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.15,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="relative pl-0 md:pl-20"
          >
            <div className="absolute left-0 top-6 w-16 h-16 rounded-full bg-accent/20 text-accent flex items-center justify-center font-playfair text-2xl hidden md:flex">
              {index + 1}
            </div>
            
            <div className="bg-card rounded-lg p-8 shadow-soft hover-lift">
              <h3 className="text-2xl font-playfair text-foreground mb-4">
                {step.title}
              </h3>
              <p className="text-muted-foreground font-light leading-relaxed mb-6">
                {step.description}
              </p>
              
              {step.media && step.media.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {step.media.map((media, mediaIndex) => (
                    <div key={mediaIndex} className="relative h-48 rounded-lg overflow-hidden">
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
