import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiMapPin, FiSend } from 'react-icons/fi';
import { personalInfo } from '../data/portfolio';

const Contact = () => {
  const contactInfo = [
    {
      icon: FiMail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: 'cyber-blue'
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      color: 'cyber-green'
    },
    {
      icon: FiGithub,
      label: 'GitHub',
      value: 'View Profile',
      href: personalInfo.github,
      color: 'cyber-purple'
    },
    {
      icon: FiLinkedin,
      label: 'LinkedIn',
      value: 'Connect',
      href: personalInfo.linkedin,
      color: 'cyber-cyan'
    }
  ];

  return (
    <section id="contact" className="relative py-20 overflow-hidden">
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
            <span className="text-cyber-cyan font-mono text-sm">{'<contact>'}</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">Let's Build Together</span>
          </h2>
          <p className="text-lg text-gray-400 font-body max-w-2xl mx-auto">
            Have an exciting robotics or IoT project? Let's collaborate and create something amazing!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-display font-bold text-white mb-8">
              Get In Touch
            </h3>
            <p className="text-gray-400 font-body mb-8 leading-relaxed">
              I'm always interested in hearing about new robotics projects, embedded systems challenges, 
              or collaboration opportunities. Whether you're building autonomous systems, IoT solutions, 
              or just want to chat about the latest in hardware innovation — feel free to reach out!
            </p>

            <div className="space-y-4">
              {contactInfo.map((info, idx) => (
                <motion.a
                  key={idx}
                  href={info.href}
                  target={info.label === 'GitHub' || info.label === 'LinkedIn' ? '_blank' : undefined}
                  rel={info.label === 'GitHub' || info.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="flex items-center gap-4 p-4 glass glass-hover rounded-xl group"
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                    className={`w-14 h-14 flex items-center justify-center rounded-lg bg-${info.color}/10 border border-${info.color}/30`}
                  >
                    <info.icon className={`text-2xl text-${info.color}`} />
                  </motion.div>
                  <div>
                    <p className="text-sm text-gray-500 font-body mb-1">{info.label}</p>
                    <p className="text-white font-body font-semibold group-hover:text-cyber-cyan transition-colors">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-8 p-6 glass rounded-xl"
            >
              <div className="flex items-center gap-3 mb-3">
                <FiMapPin className="text-2xl text-cyber-pink" />
                <h4 className="text-xl font-display font-bold text-white">Location</h4>
              </div>
              <p className="text-gray-400 font-body">
                Hyderabad, Telangana, India
              </p>
              <p className="text-sm text-gray-500 font-body mt-2">
                Available for on-site, remote, and hybrid opportunities
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass p-8 rounded-xl"
          >
            <h3 className="text-2xl font-display font-bold text-white mb-6">
              Send a Message
            </h3>
            <form
              action={`https://formsubmit.co/${personalInfo.email}`}
              method="POST"
              className="space-y-6"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="New Portfolio Contact!" />
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <label className="block text-gray-300 font-body font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-cyber-dark/50 border border-cyber-blue/30 rounded-lg text-white font-body focus:border-cyber-blue focus:outline-none focus:ring-2 focus:ring-cyber-blue/50 transition-all"
                  placeholder="John Doe"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <label className="block text-gray-300 font-body font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-cyber-dark/50 border border-cyber-blue/30 rounded-lg text-white font-body focus:border-cyber-blue focus:outline-none focus:ring-2 focus:ring-cyber-blue/50 transition-all"
                  placeholder="john@example.com"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <label className="block text-gray-300 font-body font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  className="w-full px-4 py-3 bg-cyber-dark/50 border border-cyber-blue/30 rounded-lg text-white font-body focus:border-cyber-blue focus:outline-none focus:ring-2 focus:ring-cyber-blue/50 transition-all"
                  placeholder="Project Collaboration"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <label className="block text-gray-300 font-body font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-cyber-dark/50 border border-cyber-blue/30 rounded-lg text-white font-body focus:border-cyber-blue focus:outline-none focus:ring-2 focus:ring-cyber-blue/50 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </motion.div>

              <motion.button
                type="submit"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-8 py-4 bg-gradient-cyber text-white font-body font-bold rounded-lg text-lg neon-button relative overflow-hidden flex items-center justify-center gap-2"
              >
                <span className="relative z-10">Send Message</span>
                <FiSend className="relative z-10" />
              </motion.button>
            </form>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="mt-6 text-center text-sm text-gray-500 font-body"
            >
              Typically responds within 24-48 hours
            </motion.p>
          </motion.div>
        </div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Response Time', value: '<24h' },
            { label: 'Projects', value: '10+' },
            { label: 'Success Rate', value: '100%' },
            { label: 'Satisfaction', value: '⭐⭐⭐⭐⭐' }
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + idx * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass p-6 rounded-xl text-center"
            >
              <div className="text-2xl md:text-3xl font-display font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-body text-gray-400 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -40, 0],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-40 -left-20 w-40 h-40 border-2 border-cyber-cyan/10 rounded-lg"
      />
    </section>
  );
};

export default Contact;
