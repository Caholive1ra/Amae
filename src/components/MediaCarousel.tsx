import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { MediaItem } from '@/types';
import { Button } from './ui/button';

interface MediaCarouselProps {
  items: MediaItem[];
  autoPlay?: boolean;
  interval?: number;
}

const MediaCarousel = ({ items, autoPlay = false, interval = 5000 }: MediaCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % items.length);
  const previous = () => setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);

  return (
    <div className="relative w-full h-full group">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
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
              aria-label={items[currentIndex].alt || `Vídeo ${currentIndex + 1}`}
            >
              <source src={items[currentIndex].src} type="video/mp4" />
            </video>
          )}
        </motion.div>
      </AnimatePresence>

      {items.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="icon"
            onClick={previous}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Imagem anterior"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Próxima imagem"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-background w-8' : 'bg-background/50'
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}

      {items[currentIndex].caption && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-16 left-4 right-4 text-background text-sm font-light"
        >
          {items[currentIndex].caption}
        </motion.div>
      )}
    </div>
  );
};

export default MediaCarousel;
