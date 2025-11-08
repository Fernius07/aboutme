import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaPython, FaJava, FaHtml5, FaCss3Alt, FaDatabase } from 'react-icons/fa';
import { SiC } from 'react-icons/si';
import { useApp } from '../AppContext';
import './Skills.css';

const Skills = () => {
  const { t } = useApp();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skills = [
    { name: 'Python', icon: <FaPython />, color: '#3776ab', emoji: '🐍' },
    { name: 'Java', icon: <FaJava />, color: '#007396', emoji: '☕' },
    { name: 'C', icon: <SiC />, color: '#A8B9CC', emoji: '💻' },
    { name: 'HTML', icon: <FaHtml5 />, color: '#e34f26', emoji: '🌐' },
    { name: 'CSS', icon: <FaCss3Alt />, color: '#1572b6', emoji: '🌐' },
    { name: 'SQL', icon: <FaDatabase />, color: '#00758f', emoji: '🌐' }
  ];

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="skills-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {t.skills.title}
        </motion.h2>

        <motion.p
          className="skills-subtitle"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {t.skills.languages}
        </motion.p>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="skill-card"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.1, 
                rotate: [0, -5, 5, 0],
                boxShadow: `0 0 30px ${skill.color}50`
              }}
            >
              <div className="skill-icon" style={{ color: skill.color }}>
                {skill.icon}
              </div>
              <h3 className="skill-name">{skill.name}</h3>
              <span className="skill-emoji">{skill.emoji}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
