import { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';

function TiltCard({ image, spanClass, index, onClick }) {
  const ref = useRef(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = (mouseX / width) - 0.5;
    const yPct = (mouseY / height) - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden cursor-pointer group bg-light/20 ${spanClass} h-40 sm:h-56 md:h-80`}
      style={{ perspective: 1200 }}
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="w-full h-full pointer-events-none"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      >
        <img 
          src={image.src} 
          alt={image.alt}
          loading="lazy"
          className="w-full h-full object-cover grayscale transition-all duration-1000 ease-out scale-110 group-hover:scale-125 group-hover:grayscale-0"
          style={{ transform: "translateZ(20px)" }}
        />
        <div 
          className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" 
          style={{ transform: "translateZ(30px)" }} 
        />
      </motion.div>
    </motion.div>
  );
}

export function Gallery({ gallery }) {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="py-32 px-6 bg-offwhite">
      <div className="max-w-5xl mx-auto">
        <motion.h3 
          className="font-serif text-4xl md:text-5xl text-center mb-20 tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          GALLERY
        </motion.h3>

        <div className="grid grid-cols-3 gap-2 md:gap-4">
          {gallery.map((image, index) => {
            const spans = ['col-span-2', 'col-span-1', 'col-span-1', 'col-span-2', 'col-span-2', 'col-span-1'];
            const spanClass = spans[index % spans.length];
            
            return (
              <TiltCard 
                key={index}
                image={image}
                index={index}
                spanClass={spanClass}
                onClick={() => setSelectedImage(image)}
              />
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-white/98 backdrop-blur-md p-4 md:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain filter grayscale-0 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <button 
              className="absolute top-8 right-8 font-mono text-xs tracking-[0.3em] uppercase hover:text-gray transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              Close
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
