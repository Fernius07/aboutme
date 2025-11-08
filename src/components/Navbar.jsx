import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useApp } from '../AppContext';
import './Navbar.css';

const Navbar = () => {
  const { t, language, toggleLanguage, theme, toggleTheme } = useApp();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar-container">
        <motion.div
          className="navbar-logo"
          whileHover={{ scale: 1.05 }}
        >
          Iñigo F. García
        </motion.div>

        <div className="navbar-menu">
          {[
            { key: 'home', id: 'hero' },
            { key: 'about', id: 'about' },
            { key: 'projects', id: 'projects' },
            { key: 'skills', id: 'skills' },
            { key: 'goals', id: 'goals' },
            { key: 'contact', id: 'contact' }
          ].map((item) => (
            <motion.button
              key={item.key}
              className="navbar-link"
              onClick={() => scrollToSection(item.id)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {t.nav[item.key]}
            </motion.button>
          ))}
        </div>

        <div className="navbar-controls">
          <motion.button
            className="theme-toggle"
            onClick={toggleTheme}
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
            title={theme === 'dark' ? t.theme.light : t.theme.dark}
          >
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </motion.button>

          <motion.button
            className="language-toggle"
            onClick={toggleLanguage}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {language === 'es' ? 'EN' : 'ES'}
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
