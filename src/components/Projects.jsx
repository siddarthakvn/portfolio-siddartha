import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiAward, FiGithub, FiExternalLink } from 'react-icons/fi';
import { projects } from '../data/portfolio';

const ProjectCard = ({ project, onClick, index }) => {
  const colors = ['terminal-green', 'neon-orange', 'electric-purple', 'cyber-pink'];
  const borderColor = colors[index % colors.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      onClick={onClick}
      className={`border-4 border-${borderColor} bg-black p-6 cursor-pointer group relative overflow-hidden`}
    >
      {/* Project Number */}
      <div className={`absolute top-0 right-0 bg-${borderColor} text-black font-bold px-4 py-2 text-2xl font-mono`}>
        [{(index + 1).toString().padStart(2, '0')}]
      </div>

      {/* Status Tag */}
      <div className="mb-4">
        <span className={`inline-block px-3 py-1 border-2 border-${borderColor} text-${borderColor} text-xs font-mono font-bold`}>
          {project.status.toUpperCase()}
        </span>
      </div>

      {/* Title */}
      <h3 className={`text-2xl font-bold font-mono mb-3 text-${borderColor} group-hover:underline`}>
        {project.title.toUpperCase()}
      </h3>

      {/* Category */}
      <p className="text-gray-400 font-mono text-sm mb-4 uppercase">
        // {project.category}
      </p>

      {/* Description */}
      <p className="text-terminal-green font-mono text-sm leading-relaxed mb-4">
        {project.description}
      </p>

      {/* Tech Tags */}
      <div className="flex flex-wrap gap-2">
        {project.technologies.slice(0, 3).map((tech, idx) => (
          <span
            key={idx}
            className="px-2 py-1 border border-gray-600 text-gray-400 text-xs font-mono"
          >
            {tech}
          </span>
        ))}
        {project.technologies.length > 3 && (
          <span className="px-2 py-1 text-gray-600 text-xs font-mono">
            +{project.technologies.length - 3}
          </span>
        )}
      </div>

      {/* Hover Effect */}
      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-${borderColor} transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left`} />
    </motion.div>
  );
};

const ProjectModal = ({ project, onClose, index }) => {
  const colors = ['terminal-green', 'neon-orange', 'electric-purple', 'cyber-pink'];
  const borderColor = colors[index % colors.length];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 20 }}
        onClick={(e) => e.stopPropagation()}
        className={`border-4 border-${borderColor} bg-black max-w-4xl w-full max-h-[90vh] overflow-y-auto`}
      >
        {/* Header */}
        <div className={`bg-${borderColor} px-6 py-4 flex items-center justify-between`}>
          <div className="flex items-center gap-3">
            <span className="text-black font-mono font-bold text-xl">PROJECT_DETAILS</span>
            <span className="text-black font-mono">
              [{(index + 1).toString().padStart(2, '0')}]
            </span>
          </div>
          <motion.button
            whileHover={{ rotate: 90, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="text-black text-2xl"
          >
            <FiX />
          </motion.button>
        </div>

        {/* Content */}
        <div className="p-8 text-terminal-green font-mono">
          {/* Title & Status */}
          <div className="mb-6">
            <h2 className={`text-4xl font-bold mb-3 text-${borderColor}`}>
              {project.title.toUpperCase()}
            </h2>
            <div className="flex items-center gap-4">
              <span className={`px-3 py-1 border-2 border-${borderColor} text-${borderColor} text-sm`}>
                {project.status.toUpperCase()}
              </span>
              <span className="text-gray-400 text-sm">
                // {project.category}
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6 pb-6 border-b-2 border-gray-800">
            <h3 className="text-xl mb-3 text-neon-orange">[OVERVIEW]</h3>
            <p className="text-sm leading-relaxed text-gray-300">
              {project.fullDescription}
            </p>
          </div>

          {/* Highlights */}
          <div className="mb-6 pb-6 border-b-2 border-gray-800">
            <h3 className="text-xl mb-3 text-neon-orange">[KEY_FEATURES]</h3>
            <div className="space-y-2">
              {project.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm">
                  <span className={`text-${borderColor} mt-1`}>▸</span>
                  <span className="text-gray-300">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-6 pb-6 border-b-2 border-gray-800">
            <h3 className="text-xl mb-3 text-neon-orange">[TECH_STACK]</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className={`px-3 py-1 border border-${borderColor} text-${borderColor} text-xs`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Achievements */}
          {project.achievements && project.achievements.length > 0 && (
            <div className="mb-6">
              <h3 className="text-xl mb-3 text-neon-orange flex items-center gap-2">
                <FiAward /> [RECOGNITION]
              </h3>
              <div className="space-y-2">
                {project.achievements.map((achievement, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 border border-neon-orange bg-neon-orange/10">
                    <FiAward className="text-neon-orange flex-shrink-0" />
                    <span className="text-sm text-gray-200">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Links */}
          {project.github && project.github !== '#' && (
            <div className="flex gap-4">
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-6 py-3 border-2 border-${borderColor} text-${borderColor} hover:bg-${borderColor} hover:text-black transition-all`}
              >
                <FiGithub /> [VIEW_CODE]
              </motion.a>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...new Set(projects.map(p => p.category))];
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="relative py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="border-4 border-terminal-green bg-black p-8">
            <h2 className="text-5xl md:text-6xl font-bold font-mono text-terminal-green mb-4">
              [PROJECTS]
            </h2>
            <p className="text-gray-400 font-mono text-sm">
              // AUTONOMOUS_SYSTEMS | ROBOTICS | IoT_SOLUTIONS
            </p>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {categories.map((category, idx) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 border-2 font-mono font-bold text-sm transition-all ${
                filter === category
                  ? 'bg-terminal-green text-black border-terminal-green'
                  : 'text-terminal-green border-terminal-green hover:bg-terminal-green hover:text-black'
              }`}
            >
              [{category.toUpperCase()}]
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
              >
                <ProjectCard
                  project={project}
                  index={idx}
                  onClick={() => {
                    setSelectedProject(project);
                    setSelectedIndex(idx);
                  }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selectedProject && (
            <ProjectModal
              project={selectedProject}
              index={selectedIndex}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </AnimatePresence>
      </div>

      {/* Scanlines Effect */}
      <div className="fixed inset-0 pointer-events-none z-40" 
           style={{
             background: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.15) 0px, rgba(0,0,0,0.15) 1px, transparent 1px, transparent 2px)',
             opacity: 0.2
           }}
      />
    </section>
  );
};

export default Projects;
