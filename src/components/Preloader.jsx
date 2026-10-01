import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export function Preloader({ onLoadingComplete }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Keep scroll locked while loading
    document.body.style.overflow = 'hidden';
    
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000); // Increased to 3 seconds for the aesthetic animation to play out

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence onExitComplete={onLoadingComplete}>
      {isVisible && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(20px)" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-[#0a0a0a] flex items-center justify-center"
        >
          <div className="flex flex-col items-center justify-center gap-6 overflow-hidden p-10">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.6, y: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="text-white text-[10px] md:text-xs font-sans uppercase font-light tracking-[0.4em] md:tracking-[0.6em]"
            >
              The Wedding Of
            </motion.p>
            
            <div className="flex items-center gap-6 md:gap-10 overflow-hidden pb-4 pt-2">
              <motion.h1 
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="text-7xl md:text-9xl font-signature text-white font-normal leading-none"
              >
                S
              </motion.h1>
              <motion.span
                initial={{ scale: 0, opacity: 0, rotate: -45 }}
                animate={{ scale: 1, opacity: 0.5, rotate: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="text-4xl md:text-6xl font-serif text-white italic leading-none"
              >
                &
              </motion.span>
              <motion.h1 
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="text-7xl md:text-9xl font-signature text-white font-normal leading-none"
              >
                D
              </motion.h1>
            </div>

            <motion.div 
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 0.8, duration: 1.5, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="w-48 md:w-64 h-[1px] bg-white/40 origin-center"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
