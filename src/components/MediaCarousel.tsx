import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { PanInfo } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import type { MediaItem } from '@/types';
import { Button } from './ui/button';

interface MediaCarouselProps {
  items: MediaItem[];
  autoPlay?: boolean;
  interval?: number;
}

const MediaCarousel = ({ items, autoPlay = false, interval = 5000 }: MediaCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const totalItems = items.length;

  const next = () => setCurrentIndex((prev) => (prev + 1) % totalItems);
  const previous = () => setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);

  useEffect(() => {
    if (!autoPlay || totalItems <= 1) {
      return;
    }

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalItems);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, totalItems]);

  const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x > 100) {
      previous();
    } else if (info.offset.x < -100) {
      next();
    }
  };

  if (totalItems === 0) {
    return null;
  }

  return (
    <div ref={containerRef} className="relative w-full h-full group touch-pan-y">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={handleDragEnd}
          className="w-full h-full"
        >
          {items[currentIndex].type === 'image' ? (
            <img
              src={items[currentIndex].src}
              alt={items[currentIndex].alt || `Slide ${currentIndex + 1}`}
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
              aria-label={items[currentIndex].alt || `Video ${currentIndex + 1}`}
            >
              <source src={items[currentIndex].src} type="video/mp4" />
            </video>
          )}
        </motion.div>
      </AnimatePresence>

      {totalItems > 1 && (
        <>
          <Button
            variant="ghost"
            size="icon"
            onClick={previous}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background opacity-0 md:group-hover:opacity-100 transition-opacity min-h-[44px] min-w-[44px]"
            aria-label="Imagem anterior"
          >
            <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={next}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background opacity-0 md:group-hover:opacity-100 transition-opacity min-h-[44px] min-w-[44px]"
            aria-label="Proxima imagem"
          >
            <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
          </Button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 md:gap-3">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all min-w-[44px] md:min-w-0 md:w-2 ${
                  index === currentIndex ? 'bg-background w-10 md:w-8' : 'bg-background/50 w-2'
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}

      {items[currentIndex].caption && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-16 md:bottom-20 left-4 right-4 text-background text-xs md:text-sm font-light text-center md:text-left px-2"
        >
          {items[currentIndex].caption}
        </motion.div>
      )}
    </div>
  );
};

export default MediaCarousel;
