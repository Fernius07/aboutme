import { motion } from 'framer-motion';
import { useApp } from '../AppContext';
import './Hero.css';

const Hero = () => {
  const { t } = useApp();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="particles"></div>
        <div className="code-lines">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="code-line"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 0.3, x: 0 }}
              transition={{ delay: i * 0.1, duration: 1 }}
            >
              {'</>'.repeat(50)}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="hero-content">
        <motion.div
          className="hero-title-wrapper"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-name">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Iñigo Fernández García
            </motion.span>
          </h1>

          <motion.h2
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {t.hero.title}
          </motion.h2>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            {t.hero.subtitle}
          </motion.p>
        </motion.div>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <motion.button
            className="hero-button primary"
            whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(0, 255, 255, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('about')}
          >
            {t.hero.aboutBtn}
          </motion.button>

          <motion.button
            className="hero-button secondary"
            whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(100, 100, 255, 0.5)' }}
            whileTap={{ scale: 0.95 }}
          >
            {t.hero.cvBtn}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
