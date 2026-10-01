import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-40 right-6 z-40 w-12 h-12 bg-white/90 backdrop-blur-md rounded-full border border-light/50 shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center justify-center hover:bg-offwhite transition-colors"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} className="text-dark" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
