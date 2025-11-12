import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Button } from './ui/button';

const SoundToggle = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element with nature sounds (placeholder - would need actual audio file)
    audioRef.current = new Audio();
    audioRef.current.loop = true;
    audioRef.current.volume = 0.15;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleSound = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch(() => {
        // Handle autoplay restrictions
        console.log('Autoplay prevented');
      });
      setIsPlaying(true);
    }
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleSound}
      className="fixed bottom-8 right-8 z-50 bg-background/80 backdrop-blur-sm hover:bg-background/90 shadow-soft"
      aria-label={isPlaying ? 'Desativar som ambiente' : 'Ativar som ambiente'}
    >
      {isPlaying ? (
        <>
          <Volume2 className="w-4 h-4 mr-2" />
          Som
        </>
      ) : (
        <>
          <VolumeX className="w-4 h-4 mr-2" />
          Som
        </>
      )}
    </Button>
  );
};

export default SoundToggle;
