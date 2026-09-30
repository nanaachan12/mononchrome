import { useState } from 'react';
import { motion } from 'framer-motion';

export function Gift({ gifts }) {
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section className="py-24 px-6 bg-white border-t border-light">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h3 className="font-serif text-3xl md:text-4xl tracking-wide mb-6">WEDDING GIFT</h3>
          <p className="font-sans text-gray text-sm mb-16 leading-relaxed max-w-md mx-auto">
            Your presence at our wedding is the greatest gift of all. However, should you wish to help us celebrate with a gift, a wishing well will be available on the day.
          </p>
        </motion.div>

        <div className="flex flex-col gap-8 items-center">
          {gifts.map((gift, index) => (
            <motion.div 
              key={index}
              className="w-full max-w-sm border border-light p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
            >
              <h5 className="font-serif text-xl mb-4">{gift.bank}</h5>
              <p className="font-sans text-sm tracking-widest mb-1">{gift.accountNumber}</p>
              <p className="font-sans text-xs text-gray uppercase tracking-widest mb-8">{gift.accountName}</p>
              
              <button 
                onClick={() => handleCopy(gift.accountNumber, index)}
                className="font-mono text-xs tracking-[0.2em] uppercase px-8 py-3 border border-black hover:bg-black hover:text-white transition-colors duration-300 w-full"
              >
                {copiedId === index ? "Copied" : "Copy Account Number"}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
