import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiMapPin, FiCalendar, FiBriefcase, FiCheckCircle } from 'react-icons/fi';
import { experience } from '../data/portfolio';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section id="experience" className="relative py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 glass rounded-full mb-4"
          >
            <span className="text-cyber-cyan font-mono text-sm">{'<experience>'}</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">Professional Journey</span>
          </h2>
          <p className="text-lg text-gray-400 font-body max-w-2xl mx-auto">
            Building innovative embedded systems and autonomous robots in real-world environments
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Animated Vertical Line */}
          <motion.div
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyber-blue via-cyber-purple to-cyber-pink"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
          />

          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2'
              }`}
            >
              <div className={`flex ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-start`}>
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 0.5 + index * 0.2, type: "spring" }}
                  className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-cyber border-4 border-cyber-dark z-10"
                  whileHover={{ scale: 1.5, rotate: 180 }}
                />

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="ml-16 md:ml-0 md:w-5/12 glass glass-hover p-6 rounded-xl"
                >
                  {/* Company Badge */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center gap-2 px-3 py-1 bg-cyber-blue/10 border border-cyber-blue/30 rounded-full mb-4"
                  >
                    <FiBriefcase className="text-cyber-blue" />
                    <span className="text-sm font-mono text-cyber-cyan">{exp.type}</span>
                  </motion.div>

                  {/* Role & Company */}
                  <h3 className="text-2xl font-display font-bold text-white mb-2">
                    {exp.role}
                  </h3>
                  <div className="text-xl font-body font-semibold text-cyber-blue mb-4">
                    {exp.company}
                  </div>

                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-400 font-body">
                    <div className="flex items-center gap-2">
                      <FiCalendar className="text-cyber-cyan" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiMapPin className="text-cyber-pink" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="space-y-3">
                    {exp.achievements.map((achievement, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: 0.8 + index * 0.2 + idx * 0.1 }}
                        className="flex items-start gap-3 group"
                      >
                        <FiCheckCircle className="text-cyber-green mt-1 flex-shrink-0 group-hover:scale-125 transition-transform" />
                        <p className="text-gray-300 font-body leading-relaxed text-sm">
                          {achievement}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                        transition={{ delay: 1 + index * 0.2 + idx * 0.05 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-3 py-1 text-xs font-mono bg-cyber-dark border border-cyber-blue/30 rounded-full text-cyber-cyan"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}

          {/* Current Status */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ delay: 1.5 }}
            className="relative flex justify-center"
          >
            <motion.div
              animate={{
                boxShadow: [
                  '0 0 10px rgba(0, 217, 255, 0.3)',
                  '0 0 20px rgba(0, 217, 255, 0.6)',
                  '0 0 10px rgba(0, 217, 255, 0.3)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-cyber border-4 border-cyber-dark z-10 flex items-center justify-center"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Fun Fact */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="inline-block glass p-6 rounded-xl">
            <p className="text-gray-400 font-body">
              <span className="text-cyber-cyan font-semibold">Currently:</span> Pushing boundaries in embedded systems,
              building the next generation of autonomous robots and IoT solutions
            </p>
          </div>
        </motion.div>
      </div>

      {/* Floating Decorations */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 right-10 w-40 h-40 border border-cyber-purple/20 rounded-lg"
      />
    </section>
  );
};

export default Experience;
