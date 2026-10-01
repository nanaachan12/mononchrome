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
import { BottomNavbar } from './components/BottomNavbar';
import { ScrollToTop } from './components/ScrollToTop';
import { Preloader } from './components/Preloader';
import { CustomCursor } from './components/CustomCursor';
import { Particles } from './components/Particles';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [guestName, setGuestName] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const to = params.get('to');
    if (to) {
      setGuestName(to);
    } else {
      setGuestName('Nama Tamu');
    }
  }, []);

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
      <CustomCursor />
      {isOpen && <Particles />}
      <Preloader onLoadingComplete={() => setIsLoading(false)} />

      <AnimatePresence>
        {!isOpen && (
          <Cover key="cover" data={invitationData} onOpen={handleOpen} guestName={guestName} isLoading={isLoading} />
        )}
      </AnimatePresence>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="max-w-2xl mx-auto bg-white min-h-screen shadow-2xl relative"
        >
          <div id="home"><Opening /></div>
          <div id="couple"><Couple data={invitationData.couple} /></div>
          <div id="events">
            <EventDetails events={invitationData.events} />
            <Countdown targetDate={invitationData.date.timestamp} />
          </div>
          <OurStory story={invitationData.story} />
          <div id="gallery"><Gallery gallery={invitationData.gallery} /></div>
          <div id="rsvp">
            <RSVPAndWishes />
            <Gift gifts={invitationData.gifts} />
            <Closing data={invitationData} />
          </div>
          
          <BottomNavbar />
        </motion.div>
      )}
      {isOpen && <MusicPlayer src={invitationData.musicPath} autoPlay={true} />}
      {isOpen && <ScrollToTop />}
    </div>
  );
}

export default App;
