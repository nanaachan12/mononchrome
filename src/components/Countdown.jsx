import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      let newTimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

      if (difference > 0) {
        newTimeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }
      setTimeLeft(newTimeLeft);
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeBlocks = [
    { label: 'DAYS', value: timeLeft.days },
    { label: 'HOURS', value: timeLeft.hours },
    { label: 'MINUTES', value: timeLeft.minutes },
    { label: 'SECONDS', value: timeLeft.seconds }
  ];

  return (
    <section className="py-24 px-6 bg-offwhite">
      <motion.div 
        className="max-w-3xl mx-auto border border-light py-16 px-4"
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: [0.17, 0.55, 0.55, 1] }}
      >
        <div className="grid grid-cols-4 gap-2 md:gap-4 divide-x divide-light">
          {timeBlocks.map((block, index) => (
            <div key={block.label} className="flex flex-col items-center justify-center text-center px-1 sm:px-2 md:px-4">
              <span className="font-serif text-2xl sm:text-3xl md:text-5xl text-dark mb-2 md:mb-4 tabular-nums">
                {String(block.value).padStart(2, '0')}
              </span>
              <span className="font-sans text-[8px] sm:text-[10px] md:text-xs tracking-wider md:tracking-[0.3em] uppercase text-gray">
                {block.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
