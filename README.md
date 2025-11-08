# Personal Portfolio - Iñigo Fernández García

A modern, professional personal portfolio website for **Iñigo Fernández García**, a Computer Engineering student at the University of Deusto. This portfolio showcases skills, projects, goals, and contact information with a sleek hacker-inspired aesthetic.

## ✨ Features

- 🌐 **Bilingual Support** - Seamlessly switch between Spanish (ES) and English (EN)
- 🌓 **Dark/Light Theme** - Toggle between dark and light modes with smooth transitions
- 🎨 **Modern Design** - Cyberpunk-inspired aesthetic with cyan accents and monospace fonts
- ⚡ **Smooth Animations** - Powered by Framer Motion for fluid page transitions and interactions
- 📱 **Fully Responsive** - Optimized for all devices from mobile to desktop
- 🎯 **Interactive Sections**:
  - Hero section with animated particles background
  - About Me section with professional introduction
  - Skills showcase with hover animations
  - Projects placeholder for future work
  - Timeline of goals and milestones
  - Functional contact form
  - Social media links (GitHub, LinkedIn, Instagram, Discord)

## 🛠️ Technologies Used

- **React 19** - Modern UI library
- **Vite** - Fast build tool and dev server
- **Framer Motion** - Animation library
- **React Icons** - Icon components
- **CSS3** - Custom styling with CSS variables for theming

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Fernius07/aboutme.git
cd aboutme
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 📦 Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

## 🎯 Project Structure

```
aboutme/
├── src/
│   ├── components/         # React components
│   │   ├── Navbar.jsx     # Navigation bar with theme/language toggles
│   │   ├── Hero.jsx       # Hero section with animated background
│   │   ├── About.jsx      # About me section
│   │   ├── Skills.jsx     # Skills showcase
│   │   ├── Projects.jsx   # Projects section (coming soon)
│   │   ├── Goals.jsx      # Timeline of goals
│   │   ├── Contact.jsx    # Contact form and social links
│   │   └── Footer.jsx     # Footer section
│   ├── AppContext.jsx     # Global state for language and theme
│   ├── translations.js    # Bilingual content
│   ├── App.jsx           # Main app component
│   ├── App.css           # App styles
│   ├── index.css         # Global styles and theme variables
│   └── main.jsx          # Entry point
├── public/               # Static assets
└── package.json         # Dependencies and scripts
```

## 🎨 Customization

### Changing Colors

Edit the CSS variables in `src/index.css`:

```css
[data-theme="dark"] {
  --bg-primary: #0a0a14;
  --bg-secondary: #14141e;
  --text-primary: #ffffff;
  --text-secondary: #a0a0b0;
  --accent: #00ffff;
}
```

### Adding New Content

- **Translations**: Edit `src/translations.js` to add or modify bilingual content
- **Skills**: Update the skills array in `src/components/Skills.jsx`
- **Goals**: Modify the timeline in `src/translations.js`

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Iñigo Fernández García**
- Student at University of Deusto
- Computer Engineering (2nd Year)
- Passionate about web development, AI, and cybersecurity

---

© 2025 Iñigo Fernández García — Crafted with ReactBits 💻
