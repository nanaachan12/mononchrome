import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function RSVPAndWishes() {
  const [status, setStatus] = useState('');
  const [wishes, setWishes] = useState([
    {
      id: 1,
      name: "Family",
      message: "Wishing you a lifetime of love and happiness.",
      date: "18.10.2026"
    },
    {
      id: 2,
      name: "Friends",
      message: "So happy for both of you! Congratulations on this beautiful journey together.",
      date: "18.10.2026"
    }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const message = formData.get('message');
    
    if (message.trim()) {
      const newWish = {
        id: Date.now(),
        name: name,
        message: message,
        date: new Date().toLocaleDateString('en-GB').replace(/\//g, '.')
      };
      setWishes([newWish, ...wishes]);
    }
    
    alert("Thank you for your response and wishes.");
    e.target.reset();
    setStatus('');
  };

  return (
    <section className="py-32 px-6 bg-white border-t border-light">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h3 className="font-serif text-4xl md:text-5xl tracking-wide mb-6">RSVP & WISHES</h3>
          <p className="font-sans text-gray text-sm tracking-widest uppercase">We look forward to celebrating with you.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h4 className="font-serif text-2xl mb-10 pb-4 border-b border-light">Confirm Attendance</h4>
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-sans text-xs tracking-[0.2em] uppercase text-dark">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  required
                  className="border-b border-light pb-2 bg-transparent focus:outline-none focus:border-black font-serif text-xl transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-sans text-xs tracking-[0.2em] uppercase text-dark">Attendance</label>
                <div className="flex gap-8 mt-4">
                  <label className="flex items-center gap-4 cursor-pointer group">
                    <div className={`w-5 h-5 border flex items-center justify-center transition-colors ${status === 'attending' ? 'border-black' : 'border-light group-hover:border-gray'}`}>
                      {status === 'attending' && <div className="w-2.5 h-2.5 bg-black" />}
                    </div>
                    <input 
                      type="radio" 
                      name="attendance" 
                      value="attending" 
                      className="hidden" 
                      onChange={(e) => setStatus(e.target.value)} 
                      required 
                    />
                    <span className="font-sans text-sm tracking-wide">Attending</span>
                  </label>

                  <label className="flex items-center gap-4 cursor-pointer group">
                    <div className={`w-5 h-5 border flex items-center justify-center transition-colors ${status === 'not-attending' ? 'border-black' : 'border-light group-hover:border-gray'}`}>
                      {status === 'not-attending' && <div className="w-2.5 h-2.5 bg-black" />}
                    </div>
                    <input 
                      type="radio" 
                      name="attendance" 
                      value="not-attending" 
                      className="hidden" 
                      onChange={(e) => setStatus(e.target.value)} 
                    />
                    <span className="font-sans text-sm tracking-wide">Unable to Attend</span>
                  </label>
                </div>
              </div>

              <AnimatePresence>
                {status === 'attending' && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="flex flex-col gap-2 overflow-hidden"
                  >
                    <label htmlFor="guests" className="font-sans text-xs tracking-[0.2em] uppercase text-dark">Number of Guests</label>
                    <select 
                      id="guests" 
                      name="guests"
                      className="border-b border-light pb-2 bg-transparent focus:outline-none focus:border-black font-sans text-sm transition-colors cursor-pointer"
                    >
                      <option value="1">1 Person</option>
                      <option value="2">2 People</option>
                    </select>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex flex-col gap-2 mt-4">
                <label htmlFor="message" className="font-sans text-xs tracking-[0.2em] uppercase text-dark">Leave a Wish</label>
                <textarea 
                  id="message" 
                  name="message"
                  rows="4"
                  placeholder="Share your wishes for the couple..."
                  className="border-b border-light pb-2 mt-2 bg-transparent focus:outline-none focus:border-black font-serif italic text-xl transition-colors resize-none placeholder-gray/50"
                />
              </div>

              <button 
                type="submit"
                className="mt-8 font-mono text-sm tracking-[0.3em] uppercase w-full py-5 bg-black text-white hover:bg-dark transition-all duration-500 hover:tracking-[0.4em]"
              >
                Send & Confirm
              </button>
            </form>
          </motion.div>

          {/* Wishes Display Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="bg-offwhite p-8 md:p-12"
          >
            <h4 className="font-serif text-2xl mb-10 pb-4 border-b border-light">Guestbook</h4>
            <div className="space-y-10 h-[500px] overflow-y-auto no-scrollbar pr-6">
              {wishes.map((wish, index) => (
                <motion.div 
                  key={wish.id}
                  className="pb-8 border-b border-light/50 last:border-0 relative"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="absolute -left-4 top-0 text-6xl text-light/30 font-serif leading-none">"</div>
                  <p className="font-serif text-xl md:text-2xl leading-relaxed text-dark italic mb-6 relative z-10 pl-4">
                    {wish.message}
                  </p>
                  <div className="flex items-center justify-between pl-4">
                    <h5 className="font-sans font-semibold text-sm tracking-widest uppercase">{wish.name}</h5>
                    <span className="font-sans text-xs text-gray">{wish.date}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
