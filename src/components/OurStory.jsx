import { motion } from 'framer-motion';

export function OurStory({ story }) {
  return (
    <section className="py-32 px-6 bg-white relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h3 className="font-serif text-4xl md:text-5xl tracking-wide mb-6">OUR STORY</h3>
          <p className="font-sans text-gray text-sm tracking-widest uppercase">The chapters of us</p>
        </motion.div>

        <div className="flex flex-col gap-16 md:gap-24 relative w-full">
          {story.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={index}
                className={`flex flex-col w-full md:w-[80%] lg:w-1/2 ${isEven ? 'self-start items-start text-left md:pr-12' : 'self-end items-end text-right md:pl-12'} relative z-10`}
                initial={{ opacity: 0, scale: 0.8, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
              >
                <div className="flex flex-col gap-4 mb-6">
                  <span className="font-serif text-6xl md:text-7xl text-light/40 leading-none">
                    {item.number}
                  </span>
                  <h4 className="font-sans text-xs tracking-[0.3em] uppercase text-black">
                    {item.title}
                  </h4>
                </div>
                <p className="font-serif italic text-2xl md:text-4xl text-gray leading-relaxed">
                  "{item.description}"
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
