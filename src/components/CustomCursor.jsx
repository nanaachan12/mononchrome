import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const isClickable = e.target.tagName.toLowerCase() === 'a' || 
                          e.target.tagName.toLowerCase() === 'button' || 
                          e.target.closest('a') || 
                          e.target.closest('button');
      setIsHovering(isClickable);
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // Hide on mobile (no mousemove)
  if (mousePosition.x === 0 && mousePosition.y === 0) return null;

  return (
    <div className="custom-cursor pointer-events-none fixed inset-0 z-[9999]">
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-black rounded-full mix-blend-difference"
        style={{ backgroundColor: "white" }}
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovering ? 0 : 1
        }}
        transition={{ type: "tween", ease: "linear", duration: 0 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full mix-blend-difference"
        style={{ border: "1px solid white" }}
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? "rgba(255,255,255,1)" : "rgba(255,255,255,0)"
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.5 }}
      />
    </div>
  );
}
