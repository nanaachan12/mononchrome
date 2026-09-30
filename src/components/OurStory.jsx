import { motion } from 'framer-motion';

export function OurStory({ story }) {
  return (
    <section className="py-32 px-6 bg-white relative">
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h3 className="font-serif text-4xl md:text-5xl tracking-wide mb-6">OUR STORY</h3>
          <p className="font-sans text-gray text-sm tracking-widest uppercase">The chapters of us</p>
        </motion.div>

        <div className="flex flex-col gap-24 relative">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-12 top-0 bottom-0 w-px bg-light/50" />

          {story.map((item, index) => (
            <motion.div 
              key={index}
              className="flex flex-col md:flex-row gap-8 md:gap-16 items-start relative z-10"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: index * 0.15, ease: "easeOut" }}
            >
              <div className="bg-white py-4 pr-6 font-serif text-5xl md:text-6xl text-light w-20 md:w-32 shrink-0">
                {item.number}
              </div>
              <div className="flex-1 pt-6 border-t border-light/30">
                <h4 className="font-sans text-xs tracking-[0.3em] uppercase text-black mb-4">
                  {item.title}
                </h4>
                <p className="font-serif italic text-2xl md:text-3xl text-gray leading-relaxed">
                  "{item.description}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
