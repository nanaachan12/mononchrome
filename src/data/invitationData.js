import duanImg from '../assets/duan.jpg';
import fotoImg from '../assets/foto.jpg';
import foto1Img from '../assets/foto1.jpg';
import heroImg from '../assets/hero.png';
import lusiImg from '../assets/lusi.png';
import pictureImg from '../assets/picture.png';

export const invitationData = {
  couple: {
    bride: {
      name: "Sang Zhi",
      parents: "Daughter of Mr. Sang and Mrs. Sang",
      image: lusiImg
    },
    groom: {
      name: "Duan Jiaxu",
      parents: "Son of Mr. Duan and Mrs. Duan",
      image: duanImg
    }
  },
  date: {
    full: "18 October 2026",
    short: "18.10.2026",
    timestamp: "2026-10-18T09:00:00+07:00"
  },
  events: [
    {
      title: "WEDDING CEREMONY",
      date: "18 October 2026",
      time: "09:00 WIB",
      venue: "The Grand Monochrome Hall",
      address: "123 Elegance Avenue, Jakarta",
      mapUrl: "#", 
      calendarUrl: "#" 
    },
    {
      title: "RECEPTION",
      date: "18 October 2026",
      time: "11:00 WIB",
      venue: "The Grand Monochrome Hall",
      address: "123 Elegance Avenue, Jakarta",
      mapUrl: "#", 
      calendarUrl: "#" 
    }
  ],
  story: [
    {
      number: "01",
      title: "FIRST MEET",
      description: "A moment that started everything."
    },
    {
      number: "02",
      title: "THE STORY",
      description: "Two people slowly becoming something more."
    },
    {
      number: "03",
      title: "THE PROPOSAL",
      description: "A promise for the future."
    },
    {
      number: "04",
      title: "THE WEDDING",
      description: "And now, forever begins."
    }
  ],
  gallery: [
    { src: fotoImg, alt: "Sang Zhi & Duan Jiaxu 1" },
    { src: foto1Img, alt: "Sang Zhi & Duan Jiaxu 2" }
  ],
  gifts: [
    {
      bank: "BCA",
      accountNumber: "1234567890",
      accountName: "Sang Zhi"
    },
    {
      bank: "Mandiri",
      accountNumber: "0987654321",
      accountName: "Duan Jiaxu"
    }
  ],
  musicPath: "/music/wedding-song.mp3",
  coverImage: pictureImg
};
