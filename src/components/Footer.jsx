import { motion } from 'framer-motion';
import { useApp } from '../AppContext';
import './Footer.css';

const Footer = () => {
  const { t } = useApp();

  return (
    <footer className="footer">
      <motion.div
        className="footer-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="footer-text">{t.footer.text}</p>
        <motion.div
          className="footer-line"
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          transition={{ duration: 1.5, delay: 0.3 }}
          viewport={{ once: true }}
        />
      </motion.div>
    </footer>
  );
};

export default Footer;
