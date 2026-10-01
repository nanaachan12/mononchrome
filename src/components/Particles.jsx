import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Particles() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate 40 random subtle particles
    const newParticles = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 3 + 1, // 1 to 4px
      duration: Math.random() * 15 + 15, // 15 to 30s fall time
      delay: Math.random() * -30, // Random start time so they are already falling
      drift: Math.random() * 10 - 5 // Horizontal drift
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-gray/30"
          style={{
            width: p.size,
            height: p.size,
            top: "-5%" // Start slightly above the screen
          }}
          animate={{
            y: ["0vh", "110vh"], // Fall down past the screen
            x: [`${p.x}%`, `${p.x + p.drift}%`] // Drift slightly sideways
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
}
