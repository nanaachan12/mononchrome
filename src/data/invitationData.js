import duanImg from '../assets/duan.jpg';
import fotoImg from '../assets/foto.jpg';
import foto1Img from '../assets/foto1.jpg';
import foto2Img from '../assets/foto2.jpg';
import foto3Img from '../assets/foto3.jpg';
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
      mapUrl: "https://maps.google.com/?q=The+Grand+Monochrome+Hall",
      calendarUrl: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Wedding+Ceremony+Sang+Zhi+%26+Duan+Jiaxu&dates=20261018T020000Z/20261018T040000Z&details=Wedding+Ceremony&location=The+Grand+Monochrome+Hall"
    },
    {
      title: "RECEPTION",
      date: "18 October 2026",
      time: "11:00 WIB",
      venue: "The Grand Monochrome Hall",
      address: "123 Elegance Avenue, Jakarta",
      mapUrl: "https://maps.google.com/?q=The+Grand+Monochrome+Hall",
      calendarUrl: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Wedding+Reception+Sang+Zhi+%26+Duan+Jiaxu&dates=20261018T040000Z/20261018T060000Z&details=Wedding+Reception&location=The+Grand+Monochrome+Hall"
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
    { src: fotoImg, alt: "Gallery 1" },
    { src: foto1Img, alt: "Gallery 2" },
    { src: foto2Img, alt: "Gallery 3" },
    { src: foto3Img, alt: "Gallery 4" },
    { src: pictureImg, alt: "Gallery 5" },
    { src: lusiImg, alt: "Gallery 6" }
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
  musicPath: "/music/music.mp3",
  coverImage: pictureImg
};
