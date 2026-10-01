import { motion } from 'framer-motion';

export function Opening() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-24 relative overflow-hidden">
      <div className="absolute top-0 w-px h-32 bg-gradient-to-b from-transparent to-light" />
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          visible: { transition: { staggerChildren: 0.4 } }
        }}
        className="max-w-xl mx-auto"
      >
        <motion.h2 
          variants={{
            hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1.5, ease: [0.21, 0.47, 0.32, 0.98] } }
          }}
          className="text-3xl md:text-5xl font-serif italic text-dark mb-12 leading-relaxed tracking-wide"
        >
          "Two souls,<br />one beautiful journey."
        </motion.h2>
        
        <div className="flex items-center justify-center gap-6">
          <motion.div 
            variants={{
              hidden: { width: 0, opacity: 0 },
              visible: { width: 48, opacity: 1, transition: { duration: 1.5, ease: "easeOut" } }
            }}
            className="h-px bg-light" 
          />
          <motion.p 
            variants={{
              hidden: { opacity: 0, filter: "blur(8px)" },
              visible: { opacity: 1, filter: "blur(0px)", transition: { duration: 1.5, ease: "easeOut" } }
            }}
            className="font-signature text-4xl text-dark capitalize mb-1 mt-1"
          >
            Sang Zhi & Duan Jiaxu
          </motion.p>
          <motion.div 
            variants={{
              hidden: { width: 0, opacity: 0 },
              visible: { width: 48, opacity: 1, transition: { duration: 1.5, ease: "easeOut" } }
            }}
            className="h-px bg-light" 
          />
        </div>
      </motion.div>
    </section>
  );
}
