import { motion } from 'framer-motion';

export function Cover({ data, onOpen }) {
  const coverImageSrc = data.coverImage;

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: "-100vh", opacity: 0 }}
      transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black overflow-hidden"
    >
      <div className="absolute inset-0 w-full h-full group">
        <img 
          src={coverImageSrc} 
          alt="Sang Zhi & Duan Jiaxu" 
          className="w-full h-full object-cover grayscale opacity-60 transition-all duration-1000 ease-out group-hover:grayscale-0 group-hover:opacity-80 group-hover:scale-105 active:grayscale-0 active:opacity-80 active:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40 pointer-events-none transition-opacity duration-1000 group-hover:opacity-50" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-white text-center px-6 w-full h-full justify-between py-24 pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1.5, ease: "easeOut" }}
          className="pointer-events-auto"
        >
          <p className="text-xs md:text-sm tracking-[0.4em] font-sans uppercase mb-8 text-white/80">The Wedding Of</p>
          <h1 className="text-6xl md:text-8xl font-serif mb-4 font-light tracking-wide">
            {data.couple.bride.name.toUpperCase()}
          </h1>
          <h1 className="text-5xl md:text-7xl font-serif font-light italic mb-4 text-white/70">&</h1>
          <h1 className="text-6xl md:text-8xl font-serif font-light tracking-wide">
            {data.couple.groom.name.toUpperCase()}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1.5 }}
          className="flex flex-col items-center gap-12 pointer-events-auto"
        >
          <p className="font-sans text-lg md:text-xl tracking-[0.3em] font-light">{data.date.short}</p>
          
          <button 
            onClick={onOpen}
            className="font-mono text-xs md:text-sm uppercase tracking-[0.3em] px-10 py-4 border border-white/50 hover:border-white hover:bg-white hover:text-black transition-all duration-700 ease-out bg-black/20 backdrop-blur-sm"
          >
            Open Invitation
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}
