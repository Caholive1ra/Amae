import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import heroHomeImage from '@/assets/foto-inicio.jpg';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          style={{
            backgroundImage: `url(${heroHomeImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center"
        >
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;

