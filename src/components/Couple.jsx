import { useState } from 'react';
import { motion } from 'framer-motion';

export function Couple({ data }) {
  const [activeImage, setActiveImage] = useState(null);

  const toggleImage = (id) => {
    setActiveImage(activeImage === id ? null : id);
  };

  return (
    <section className="py-32 px-6 bg-offwhite">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-16 md:gap-24 text-center">
        
        {/* Bride Section */}
        <motion.div 
          className="flex flex-col items-center w-full max-w-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div 
            className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden mb-10 border border-light p-2 cursor-pointer group"
            onClick={() => toggleImage('bride')}
          >
            <div className="w-full h-full rounded-full overflow-hidden relative">
              <img 
                src={data.bride.image} 
                alt={data.bride.name} 
                className={`w-full h-full object-cover transition-all duration-700 ease-out 
                  ${activeImage === 'bride' ? 'grayscale-0 scale-110' : 'grayscale group-hover:scale-105'}`}
              />
              <div className={`absolute inset-0 bg-black/10 transition-opacity duration-700 ${activeImage === 'bride' ? 'opacity-0' : 'opacity-100 group-hover:opacity-0'}`} />
            </div>
          </div>
          
          <span className="font-sans text-xs tracking-[0.4em] uppercase text-gray mb-6">Bride</span>
          <h3 className="font-serif text-4xl mb-4 tracking-wide">{data.bride.name}</h3>
          <p className="font-sans text-sm text-gray max-w-[200px] leading-relaxed">
            {data.bride.parents}
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div 
          className="hidden md:block w-px h-64 bg-light"
          initial={{ opacity: 0, height: 0 }}
          whileInView={{ opacity: 1, height: 256 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
        <motion.div 
          className="md:hidden w-32 h-px bg-light my-8"
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: 128 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />

        {/* Groom Section */}
        <motion.div 
          className="flex flex-col items-center w-full max-w-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div 
            className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden mb-10 border border-light p-2 cursor-pointer group"
            onClick={() => toggleImage('groom')}
          >
            <div className="w-full h-full rounded-full overflow-hidden relative">
              <img 
                src={data.groom.image} 
                alt={data.groom.name} 
                className={`w-full h-full object-cover transition-all duration-700 ease-out 
                  ${activeImage === 'groom' ? 'grayscale-0 scale-110' : 'grayscale group-hover:scale-105'}`}
              />
              <div className={`absolute inset-0 bg-black/10 transition-opacity duration-700 ${activeImage === 'groom' ? 'opacity-0' : 'opacity-100 group-hover:opacity-0'}`} />
            </div>
          </div>

          <span className="font-sans text-xs tracking-[0.4em] uppercase text-gray mb-6">Groom</span>
          <h3 className="font-serif text-4xl mb-4 tracking-wide">{data.groom.name}</h3>
          <p className="font-sans text-sm text-gray max-w-[200px] leading-relaxed">
            {data.groom.parents}
          </p>
        </motion.div>

      </div>
    </section>
  );
}
