import { motion } from 'framer-motion';

export function EventDetails({ events }) {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-2xl mx-auto flex flex-col gap-24">
        {events.map((event, index) => (
          <motion.div 
            key={index}
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h3 className="font-serif text-3xl md:text-4xl tracking-wide mb-8">{event.title}</h3>
            
            <div className="font-sans text-dark space-y-2 mb-10">
              <p className="tracking-widest">{event.date}</p>
              <p>{event.time}</p>
            </div>

            <div className="font-sans text-dark space-y-2 mb-10">
              <p className="font-semibold">{event.venue}</p>
              <p className="text-sm text-gray">{event.address}</p>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <a 
                href={event.calendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs tracking-[0.2em] uppercase px-8 py-3 border border-black hover:bg-black hover:text-white transition-colors duration-300"
              >
                Calendar
              </a>
              <a 
                href={event.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs tracking-[0.2em] uppercase px-8 py-3 border border-black hover:bg-black hover:text-white transition-colors duration-300"
              >
                Google Maps
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
