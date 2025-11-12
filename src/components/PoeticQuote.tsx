import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface PoeticQuoteProps {
  text: string;
  author?: string;
  alignment?: 'left' | 'center' | 'right';
  size?: 'small' | 'medium' | 'large';
}

const PoeticQuote = ({ 
  text, 
  author, 
  alignment = 'center',
  size = 'medium' 
}: PoeticQuoteProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  const sizeClasses = {
    small: 'text-2xl md:text-3xl',
    medium: 'text-3xl md:text-5xl',
    large: 'text-4xl md:text-6xl lg:text-7xl'
  };

  return (
    <motion.blockquote
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`font-playfair text-foreground ${alignmentClasses[alignment]} ${sizeClasses[size]} leading-relaxed`}
    >
      <p className="mb-6">{text}</p>
      {author && (
        <footer className="text-lg md:text-xl text-muted-foreground font-light font-sans">
          — {author}
        </footer>
      )}
    </motion.blockquote>
  );
};

export default PoeticQuote;
