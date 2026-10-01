import { motion } from 'framer-motion';

export function Closing({ data }) {
  return (
    <section className="py-32 px-6 bg-offwhite text-center flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, filter: "blur(15px)" }}
        whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.5, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        <p className="font-serif italic text-2xl md:text-3xl text-dark mb-16 max-w-md mx-auto leading-relaxed">
          "Thank you for being part of<br />our special day."
        </p>

        <h2 className="font-signature text-5xl md:text-7xl mb-4 font-normal capitalize">
          {data.couple.bride.name} & {data.couple.groom.name}
        </h2>
        
        <p className="font-sans text-sm tracking-[0.3em] text-gray mb-32">
          {data.date.short}
        </p>

        <p className="font-sans text-xs tracking-widest text-gray">
          Made with love by Momenvibe.
        </p>
      </motion.div>
    </section>
  );
}
