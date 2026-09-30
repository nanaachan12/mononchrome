# 🤍 Monochrome Minimalist Wedding Invitation

A highly elegant, interactive, and modern digital wedding invitation built with **React**, **Vite**, **Tailwind CSS v4**, and **Framer Motion**. This project is designed with a premium editorial aesthetic, focusing on beautiful typography, clean whitespace, and smooth romantic animations.

## ✨ Features

- **Monochrome & Editorial Design**: A sleek black, white, and gray color palette inspired by high-end fashion and modern stationery.
- **Interactive Cover**: A full-screen romantic cover with smooth opening transitions.
- **Dynamic Photos**: Images are displayed in elegant grayscale by default, smoothly transitioning to full color when hovered or touched.
- **Integrated RSVP & Guestbook**: A modular section for guests to confirm attendance and leave their heartfelt wishes.
- **Interactive Timeline**: A beautiful storytelling section explaining the couple's journey.
- **Built-in Music Player**: Background music integration with a minimalist rotating control button.
- **Fully Responsive**: Carefully crafted mobile-first design that looks stunning on any device screen size.
- **Centralized Data**: Easily reusable for other couples by simply updating the `src/data/invitationData.js` file.

## 🛠️ Tech Stack

- **[React 19](https://react.dev/)**: For building the UI components.
- **[Vite](https://vitejs.dev/)**: Next-generation lightning-fast frontend tooling.
- **[Tailwind CSS v4](https://tailwindcss.com/)**: For utility-first, highly customizable styling without writing custom CSS.
- **[Framer Motion](https://www.framer.com/motion/)**: For orchestrating the smooth, premium reveal and layout animations.
- **[Lucide React](https://lucide.dev/)**: For beautiful, minimalist SVG icons.

## 🚀 Getting Started

To run this project locally on your machine, follow these steps:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/monochrome-minimalist-invitation.git
   cd monochrome-minimalist-invitation
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173` to see the invitation live!

## ⚙️ Customization

This template is designed to be highly modular. You don't need to dig into complex component logic to change the invitation details.

### 1. Update the Couple's Data
Open `src/data/invitationData.js` and modify the fields (names, dates, story, venue, RSVP data) according to your needs. 

### 2. Change Photos
Add your own photos to the `src/assets/` directory and update the corresponding imports in `invitationData.js`. 

### 3. Add Background Music
Place your desired `.mp3` file in the `public/music/` folder and name it `wedding-song.mp3` (or update the path inside `invitationData.js`).

## 📦 Build for Production

When you're ready to deploy the website, create an optimized production build:

```bash
npm run build
```

This will generate a `dist` folder containing the minified and optimized files ready to be hosted on Vercel, Netlify, GitHub Pages, or any other static hosting service.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---
*Made with love and code.*
