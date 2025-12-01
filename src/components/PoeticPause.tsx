import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface PoeticPauseProps {
  text: string;
  className?: string;
}

const PoeticPause = ({ text, className = '' }: PoeticPauseProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className={`poetic-pause ${className}`}
    >
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="text-2xl md:text-3xl font-playfair text-foreground text-center max-w-3xl"
      >
        {text}
      </motion.p>
    </motion.div>
  );
};

export default PoeticPause;
