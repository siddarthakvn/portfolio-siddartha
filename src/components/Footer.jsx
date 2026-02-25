import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiHeart, FiArrowUp } from 'react-icons/fi';
import { personalInfo } from '../data/portfolio';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: FiGithub, url: personalInfo.github, label: 'GitHub' },
    { icon: FiLinkedin, url: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: FiMail, url: `mailto:${personalInfo.email}`, label: 'Email' }
  ];

  return (
    <footer className="relative py-12 border-t border-cyber-blue/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back to Top Button */}
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
          className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 flex items-center justify-center bg-gradient-cyber rounded-full shadow-lg"
        >
          <FiArrowUp className="text-white text-xl" />
        </motion.button>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-display font-bold mb-4">
              <span className="gradient-text">KVN Sai Siddartha</span>
            </h3>
            <p className="text-gray-400 font-body text-sm leading-relaxed">
              Embedded Systems & Robotics Engineer passionate about building autonomous systems 
              that make a real-world impact.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg font-display font-bold text-white mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'].map((link, idx) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  whileHover={{ x: 5 }}
                  className="text-gray-400 hover:text-cyber-cyan font-body text-sm transition-colors"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-display font-bold text-white mb-4">Connect</h4>
            <div className="flex gap-4 mb-4">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 flex items-center justify-center rounded-lg glass glass-hover text-cyber-blue"
                  aria-label={social.label}
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
            <p className="text-gray-400 font-body text-sm">
              {personalInfo.email}
            </p>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-px bg-gradient-cyber mb-8"
        />

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500 font-body"
        >
          <p className="flex items-center gap-2">
            © 2025 KVN Sai Siddartha. Built with
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="text-cyber-pink"
            >
              <FiHeart />
            </motion.span>
            using React & Framer Motion
          </p>
          <p className="font-mono text-xs text-cyber-cyan">
            {'</>'}  with passion for innovation
          </p>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-cyber opacity-50" />
    </footer>
  );
};

export default Footer;
