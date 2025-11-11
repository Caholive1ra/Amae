import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={cn(
        'fixed inset-0 z-[100] bg-background flex items-center justify-center',
        'animate-fade-out'
      )}
    >
      <div className="text-4xl md:text-6xl font-light tracking-widest text-foreground animate-fade-in">
        AMAÉ
      </div>
    </div>
  );
};

export default Preloader;
