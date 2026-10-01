import { useState, useEffect } from 'react';
import { Home, Heart, MapPin, Image, Mail } from 'lucide-react';

export function BottomNavbar() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'couple', 'events', 'gallery', 'rsvp'];
      let current = 'home';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 3) {
            current = section;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', icon: <Home size={20} />, label: 'Home', href: '#home' },
    { id: 'couple', icon: <Heart size={20} />, label: 'Couple', href: '#couple' },
    { id: 'events', icon: <MapPin size={20} />, label: 'Events', href: '#events' },
    { id: 'gallery', icon: <Image size={20} />, label: 'Gallery', href: '#gallery' },
    { id: 'rsvp', icon: <Mail size={20} />, label: 'RSVP', href: '#rsvp' },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-light/50 rounded-full z-50 px-6 py-3 transition-all duration-300">
      <div className="flex items-center gap-6 md:gap-8">
        {navItems.map((item, index) => {
          const isActive = activeSection === item.id;
          return (
            <a 
              key={index}
              href={item.href} 
              className={`flex flex-col items-center gap-1 transition-colors duration-300 ${isActive ? 'text-black scale-110' : 'text-gray hover:text-black'}`}
            >
              {item.icon}
              <span className={`text-[9px] uppercase tracking-widest font-sans transition-all ${isActive ? 'font-bold' : 'font-medium'}`}>
                {item.label}
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
