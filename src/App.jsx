import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { invitationData } from './data/invitationData';
import { Cover } from './components/Cover';
import { Opening } from './components/Opening';
import { Couple } from './components/Couple';
import { EventDetails } from './components/EventDetails';
import { Countdown } from './components/Countdown';
import { OurStory } from './components/OurStory';
import { Gallery } from './components/Gallery';
import { RSVPAndWishes } from './components/RSVPAndWishes';
import { Gift } from './components/Gift';
import { Closing } from './components/Closing';
import { MusicPlayer } from './components/MusicPlayer';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
      // Scroll to top on load
      window.scrollTo(0, 0);
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <div className="bg-offwhite min-h-screen text-black relative">
      <AnimatePresence>
        {!isOpen && (
          <Cover key="cover" data={invitationData} onOpen={handleOpen} />
        )}
      </AnimatePresence>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="max-w-2xl mx-auto bg-white min-h-screen shadow-2xl relative"
        >
          <Opening />
          <Couple data={invitationData.couple} />
          <EventDetails events={invitationData.events} />
          <Countdown targetDate={invitationData.date.timestamp} />
          <OurStory story={invitationData.story} />
          <Gallery gallery={invitationData.gallery} />
          <RSVPAndWishes />
          <Gift gifts={invitationData.gifts} />
          <Closing data={invitationData} />
          
          <MusicPlayer src={invitationData.musicPath} autoPlay={true} />
        </motion.div>
      )}
    </div>
  );
}

export default App;
