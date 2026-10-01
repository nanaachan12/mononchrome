import { useState, useEffect, useRef } from 'react';
import { Disc } from 'lucide-react';
import { motion } from 'framer-motion';

export function MusicPlayer({ src, autoPlay }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (autoPlay && audioRef.current) {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false)); // Auto-play might be blocked by browser
    }
  }, [autoPlay]);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <audio ref={audioRef} src={src} loop />
      
      <motion.button
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
        onClick={togglePlay}
        className="fixed bottom-24 right-6 z-40 w-12 h-12 bg-white/90 backdrop-blur-md rounded-full border border-light/50 shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center justify-center hover:bg-offwhite transition-colors"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        <motion.div
          animate={{ rotate: isPlaying ? 360 : 0 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        >
          <Disc size={20} className="text-dark" strokeWidth={1} />
        </motion.div>
      </motion.button>
    </>
  );
}
