import { motion } from 'framer-motion';

export function Closing({ data }) {
  return (
    <section className="py-32 px-6 bg-offwhite text-center flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <p className="font-serif italic text-2xl md:text-3xl text-dark mb-16 max-w-md mx-auto leading-relaxed">
          "Thank you for being part of<br />our special day."
        </p>

        <h2 className="font-serif text-4xl md:text-5xl mb-4">
          {data.couple.bride.name.toUpperCase()} & {data.couple.groom.name.toUpperCase()}
        </h2>
        
        <p className="font-sans text-sm tracking-[0.3em] text-gray mb-32">
          {data.date.short}
        </p>

        <p className="font-sans text-xs tracking-widest text-gray">
          Made with love.
        </p>
      </motion.div>
    </section>
  );
}
