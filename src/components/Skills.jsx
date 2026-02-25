import { motion } from 'framer-motion';
import { skills } from '../data/portfolio';

const Skills = () => {
  const categories = Object.keys(skills);
  const colors = ['terminal-green', 'neon-orange', 'electric-purple', 'cyber-pink', 'terminal-green'];

  return (
    <section id="skills" className="relative py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="border-4 border-neon-orange bg-black p-8">
            <h2 className="text-5xl md:text-6xl font-bold font-mono text-neon-orange mb-4">
              [TECH_STACK]
            </h2>
            <p className="text-gray-400 font-mono text-sm">
              // PROFICIENCY_LEVELS | SKILL_MATRIX
            </p>
          </div>
        </motion.div>

        {/* Skills Categories */}
        <div className="space-y-12">
          {categories.map((category, categoryIdx) => {
            const color = colors[categoryIdx % colors.length];
            const skillList = skills[category];

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIdx * 0.1 }}
                className={`border-2 border-${color} bg-black p-6`}
              >
                {/* Category Header */}
                <div className={`bg-${color} text-black px-4 py-2 mb-6 flex items-center justify-between`}>
                  <h3 className="text-xl font-bold font-mono">
                    [{category.toUpperCase().replace(/ /g, '_')}]
                  </h3>
                  <span className="font-mono text-sm">
                    {skillList.length} SKILLS
                  </span>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {skillList.map((skill, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + idx * 0.05 }}
                      className="group"
                    >
                      {/* Skill Name & Level */}
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-terminal-green font-mono font-bold text-sm">
                          {skill.name.toUpperCase()}
                        </span>
                        <span className={`text-${color} font-mono text-sm font-bold`}>
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress Bar - Brutalist Style */}
                      <div className="relative h-6 border-2 border-gray-700 bg-black">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                            delay: 0.3 + idx * 0.05,
                            ease: "easeOut"
                          }}
                          className={`absolute top-0 left-0 h-full bg-${color} border-r-2 border-black`}
                        />
                        
                        {/* Grid Lines on Bar */}
                        <div className="absolute inset-0 flex">
                          {[...Array(10)].map((_, i) => (
                            <div
                              key={i}
                              className="flex-1 border-r border-gray-800"
                              style={{ opacity: 0.3 }}
                            />
                          ))}
                        </div>

                        {/* Percentage Text on Bar */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 1 + idx * 0.05 }}
                            className="font-mono text-xs font-bold mix-blend-difference text-white"
                          >
                            {'█'.repeat(Math.floor(skill.level / 10))}
                          </motion.span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 border-4 border-terminal-green bg-black p-8"
        >
          <h3 className="text-2xl font-bold font-mono text-terminal-green mb-6">
            [FULL_STACK_HARDWARE_ENGINEER]
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-sm font-mono">
            <div>
              <span className="text-neon-orange font-bold">[DESIGN]</span>
              <p className="text-gray-400 mt-2">
                SCHEMATIC → PCB_LAYOUT → PROTOTYPING
              </p>
            </div>
            <div>
              <span className="text-electric-purple font-bold">[FIRMWARE]</span>
              <p className="text-gray-400 mt-2">
                C/C++ → EMBEDDED_SYSTEMS → REAL_TIME_OS
              </p>
            </div>
            <div>
              <span className="text-cyber-pink font-bold">[INTEGRATION]</span>
              <p className="text-gray-400 mt-2">
                IoT_CLOUD → SENSOR_FUSION → ML_EDGE
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scanlines */}
      <div className="fixed inset-0 pointer-events-none z-40" 
           style={{
             background: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.15) 0px, rgba(0,0,0,0.15) 1px, transparent 1px, transparent 2px)',
             opacity: 0.2
           }}
      />
    </section>
  );
};

export default Skills;
