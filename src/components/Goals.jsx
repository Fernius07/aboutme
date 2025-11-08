import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useApp } from '../AppContext';
import './Goals.css';

const Goals = () => {
  const { t } = useApp();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="goals" className="goals" ref={ref}>
      <div className="goals-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {t.goals.title}
        </motion.h2>

        <div className="timeline">
          {t.goals.timeline.map((item, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.3 }}
            >
              <div className="timeline-content">
                <motion.div
                  className="timeline-year"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {item.year}
                </motion.div>
                <div className="timeline-details">
                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="timeline-description">{item.description}</p>
                </div>
              </div>
              <div className="timeline-dot"></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="looking-ahead"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.div
            className="looking-ahead-text"
            animate={{
              textShadow: [
                '0 0 10px rgba(0, 255, 255, 0.5)',
                '0 0 20px rgba(0, 255, 255, 0.8)',
                '0 0 10px rgba(0, 255, 255, 0.5)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {t.goals.lookingAhead}
          </motion.div>
          <motion.div
            className="arrow-down"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ↓
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Goals;
