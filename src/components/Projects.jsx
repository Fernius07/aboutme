import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useApp } from '../AppContext';
import './Projects.css';

const Projects = () => {
  const { t } = useApp();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="projects-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {t.projects.title}
        </motion.h2>

        <motion.div
          className="projects-coming-soon"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.div
            className="loading-dots"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </motion.div>
          <h3 className="coming-soon-text">{t.projects.comingSoon}</h3>
          <p className="coming-soon-description">{t.projects.description}</p>

          <motion.div
            className="placeholder-cards"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
          >
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="placeholder-card"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="placeholder-header">
                  <div className="placeholder-title-bar"></div>
                  <div className="placeholder-title-bar short"></div>
                </div>
                <div className="placeholder-content">
                  <div className="placeholder-line"></div>
                  <div className="placeholder-line"></div>
                  <div className="placeholder-line short"></div>
                </div>
                <div className="placeholder-footer">
                  <div className="placeholder-tag"></div>
                  <div className="placeholder-tag"></div>
                  <div className="placeholder-tag"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
