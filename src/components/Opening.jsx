import { motion } from 'framer-motion';

export function Opening() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-24 relative overflow-hidden">
      <div className="absolute top-0 w-px h-32 bg-gradient-to-b from-transparent to-light" />
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="max-w-xl mx-auto"
      >
        <h2 className="text-3xl md:text-5xl font-serif italic text-dark mb-12 leading-relaxed tracking-wide">
          "Two souls,<br />one beautiful journey."
        </h2>
        
        <div className="flex items-center justify-center gap-6">
          <div className="w-12 h-px bg-light" />
          <p className="font-sans text-gray uppercase tracking-[0.4em] text-xs">
            Sang Zhi & Duan Jiaxu
          </p>
          <div className="w-12 h-px bg-light" />
        </div>
      </motion.div>
    </section>
  );
}
