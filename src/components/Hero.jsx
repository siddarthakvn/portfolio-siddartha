import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiTerminal } from 'react-icons/fi';
import { personalInfo } from '../data/portfolio';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = `> INITIALIZING SYSTEM...\n> LOADING PORTFOLIO v2.5.0\n> ENGINEER: ${personalInfo.name.toUpperCase()}\n> STATUS: ONLINE\n> READY_`;

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 30);

    const cursorBlink = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(timer);
      clearInterval(cursorBlink);
    };
  }, []);

  const ascii = `
    ███████╗███╗   ██╗ ██████╗ ██╗███╗   ██╗███████╗███████╗██████╗ 
    ██╔════╝████╗  ██║██╔════╝ ██║████╗  ██║██╔════╝██╔════╝██╔══██╗
    █████╗  ██╔██╗ ██║██║  ███╗██║██╔██╗ ██║█████╗  █████╗  ██████╔╝
    ██╔══╝  ██║╚██╗██║██║   ██║██║██║╚██╗██║██╔══╝  ██╔══╝  ██╔══██╗
    ███████╗██║ ╚████║╚██████╔╝██║██║ ╚████║███████╗███████╗██║  ██║
    ╚══════╝╚═╝  ╚═══╝ ╚═════╝ ╚═╝╚═╝  ╚═══╝╚══════╝╚══════╝╚═╝  ╚═╝
  `;

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-black">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        
        {/* Terminal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="border-4 border-terminal-green bg-black shadow-2xl"
          style={{ boxShadow: '0 0 50px rgba(0, 255, 65, 0.3)' }}
        >
          {/* Terminal Header */}
          <div className="bg-terminal-green px-4 py-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FiTerminal className="text-black" />
              <span className="font-terminal text-black font-bold">PORTFOLIO.SYS</span>
            </div>
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-black border border-black"></div>
              <div className="w-3 h-3 bg-black border border-black"></div>
              <div className="w-3 h-3 bg-black border border-black"></div>
            </div>
          </div>

          {/* Terminal Content */}
          <div className="p-8 font-mono text-terminal-green">
            {/* ASCII Art */}
            <motion.pre
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-[8px] sm:text-xs leading-none mb-8 text-neon-orange overflow-x-auto"
            >
              {ascii}
            </motion.pre>

            {/* Boot Sequence */}
            <div className="space-y-2 mb-8 text-sm sm:text-base">
              <pre className="whitespace-pre-wrap">{displayText}</pre>
            </div>

            {/* Info Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 }}
              className="grid md:grid-cols-2 gap-6 border-t-2 border-terminal-green pt-6"
            >
              {/* Left Column */}
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-neon-orange">[ROLE]</span>
                  <span className="flex-1">EMBEDDED_SYSTEMS_ENGINEER</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-neon-orange">[SPEC]</span>
                  <span className="flex-1">ROBOTICS | IoT | AUTONOMOUS_SYS</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-neon-orange">[STAT]</span>
                  <span className="flex-1">10+ PROJECTS | 3 WINS | 15+ PCBs</span>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-electric-purple">[MAIL]</span>
                  <a href={`mailto:${personalInfo.email}`} className="flex-1 hover:underline">
                    {personalInfo.email}
                  </a>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-electric-purple">[CELL]</span>
                  <a href={`tel:${personalInfo.phone}`} className="flex-1 hover:underline">
                    {personalInfo.phone}
                  </a>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-electric-purple">[LOCN]</span>
                  <span className="flex-1">HYDERABAD, TELANGANA, IN</span>
                </div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5 }}
              className="flex flex-wrap gap-4 mt-8 pt-6 border-t-2 border-terminal-green"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-terminal-green text-black font-bold border-2 border-terminal-green hover:bg-black hover:text-terminal-green transition-all"
              >
                [VIEW_PROJECTS]
              </motion.a>
              
              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border-2 border-terminal-green text-terminal-green hover:bg-terminal-green hover:text-black transition-all flex items-center gap-2"
              >
                <FiGithub /> [GITHUB]
              </motion.a>

              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border-2 border-neon-orange text-neon-orange hover:bg-neon-orange hover:text-black transition-all flex items-center gap-2"
              >
                <FiLinkedin /> [LINKEDIN]
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border-2 border-electric-purple text-electric-purple hover:bg-electric-purple hover:text-black transition-all flex items-center gap-2"
              >
                <FiMail /> [CONTACT]
              </motion.a>
            </motion.div>

            {/* Command Prompt */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3 }}
              className="mt-8 pt-6 border-t-2 border-terminal-green"
            >
              <div className="flex items-center gap-2 text-sm">
                <span className="text-neon-orange">siddartha@portfolio:~$</span>
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="inline-block w-2 h-4 bg-terminal-green"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Floating Stats - Terminal Style */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.5 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: 'PROJECTS', value: '10+', color: 'terminal-green' },
            { label: 'PCBs', value: '15+', color: 'neon-orange' },
            { label: 'CODE_LINES', value: '50K+', color: 'electric-purple' },
            { label: 'WINS', value: '3', color: 'cyber-pink' }
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 3.5 + idx * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`border-2 border-${stat.color} p-4 bg-black text-center`}
            >
              <div className={`text-2xl md:text-3xl font-bold text-${stat.color} font-mono mb-1`}>
                {stat.value}
              </div>
              <div className="text-xs text-gray-400 font-mono uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scanlines Effect */}
      <div className="fixed inset-0 pointer-events-none z-50" 
           style={{
             background: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.15) 0px, rgba(0,0,0,0.15) 1px, transparent 1px, transparent 2px)',
             opacity: 0.3
           }}
      />
    </section>
  );
};

export default Hero;
