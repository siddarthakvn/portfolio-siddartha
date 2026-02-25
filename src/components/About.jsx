import { motion } from 'framer-motion';
import { FiAward, FiBookOpen, FiTrendingUp, FiUsers } from 'react-icons/fi';
import { education, achievements, certifications, responsibilities } from '../data/portfolio';

const About = () => {
  return (
    <section id="about" className="relative py-20 overflow-hidden">
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
            <span className="text-cyber-cyan font-mono text-sm">{'<about>'}</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">Background & Journey</span>
          </h2>
          <p className="text-lg text-gray-400 font-body max-w-2xl mx-auto">
            Building the future of autonomous systems, one circuit at a time
          </p>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <FiBookOpen className="text-3xl text-cyber-blue" />
            <h3 className="text-3xl font-display font-bold text-white">Education</h3>
          </div>
          
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass glass-hover p-6 rounded-xl mb-6"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h4 className="text-2xl font-display font-bold text-white mb-2">
                    {edu.degree}
                  </h4>
                  <p className="text-xl text-cyber-blue font-body font-semibold mb-2">
                    {edu.institution}
                  </p>
                  <p className="text-gray-400 font-body">
                    {edu.location} • {edu.duration}
                  </p>
                </div>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="mt-4 md:mt-0 px-4 py-2 bg-gradient-cyber text-white font-display font-bold text-2xl rounded-lg"
                >
                  {edu.cgpa} CGPA
                </motion.div>
              </div>
              <div className="space-y-2">
                {edu.highlights.map((highlight, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 bg-cyber-cyan rounded-full mt-2" />
                    <p className="text-gray-300 font-body">{highlight}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements & Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <FiAward className="text-3xl text-cyber-green" />
              <h3 className="text-3xl font-display font-bold text-white">Achievements</h3>
            </div>
            <div className="space-y-4">
              {achievements.map((achievement, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="glass glass-hover p-5 rounded-xl"
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-cyber-green/10 border border-cyber-green/30"
                    >
                      <FiAward className="text-cyber-green text-xl" />
                    </motion.div>
                    <div>
                      <h4 className="text-lg font-body font-bold text-white mb-1">
                        {achievement.title}
                      </h4>
                      <p className="text-cyber-cyan font-mono text-sm mb-1">
                        {achievement.organization}
                      </p>
                      <p className="text-gray-400 text-sm font-body">
                        {achievement.project} • {achievement.year}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <FiTrendingUp className="text-3xl text-cyber-purple" />
              <h3 className="text-3xl font-display font-bold text-white">Certifications</h3>
            </div>
            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ x: -10, scale: 1.02 }}
                  className="glass glass-hover p-5 rounded-xl"
                >
                  <h4 className="text-lg font-body font-bold text-white mb-2">
                    {cert.title}
                  </h4>
                  <div className="flex items-center justify-between">
                    <p className="text-cyber-purple font-mono text-sm">
                      {cert.issuer}
                    </p>
                    <span className="text-gray-500 text-sm">{cert.year}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Leadership & Responsibilities */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-8">
            <FiUsers className="text-3xl text-cyber-pink" />
            <h3 className="text-3xl font-display font-bold text-white">Leadership</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {responsibilities.map((resp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass glass-hover p-6 rounded-xl"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-cyber-pink rounded-full" />
                  <h4 className="text-xl font-display font-bold text-white">
                    {resp.role}
                  </h4>
                </div>
                <p className="text-cyber-pink font-body font-semibold mb-3">
                  {resp.event || resp.team}
                </p>
                <p className="text-gray-400 font-body leading-relaxed">
                  {resp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 right-20 w-32 h-32 border border-cyber-blue/20"
      />
    </section>
  );
};

export default About;
