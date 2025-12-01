import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  intensity?: number;
}

const ParallaxImage = ({ src, alt, className = '', intensity = 50 }: ParallaxImageProps) => {
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Reduce intensity on mobile or disable completely
  const adjustedIntensity = isMobile ? intensity * 0.3 : intensity;
  const y = useTransform(scrollYProgress, [0, 1], [-adjustedIntensity, adjustedIntensity]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.img
        style={{ y: isMobile ? 0 : y }}
        src={src}
        alt={alt}
        className="w-full h-full object-cover scale-110"
        loading="lazy"
      />
    </div>
  );
};

export default ParallaxImage;
