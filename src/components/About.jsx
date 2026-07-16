import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const About = () => {
  const [ref, isInView] = useInView();

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 px-4 bg-secondary-900/30 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-50 mb-4">
            About <span className="bg-gradient-to-r from-accent-400 to-accent-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-500 to-accent-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-4 text-slate-300">
              <p className="text-lg leading-relaxed">
                I'm a passionate software developer with a keen interest in building innovative solutions
                that make a real impact. With expertise in modern web technologies, I thrive on solving
                complex problems and creating seamless user experiences.
              </p>
              <p className="text-lg leading-relaxed">
                My journey in software development has been driven by a constant desire to learn, innovate,
                and contribute to meaningful projects. I believe in writing clean, maintainable code and
                collaborating effectively with teams to achieve excellence.
              </p>
              <p className="text-lg leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source
                projects, or sharing knowledge with the developer community.
              </p>
            </div>
          </motion.div>

          {/* Right Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {[
              {
                title: "Passion",
                description: "Building practical software solutions that solve real-world problems through clean, efficient, and user-friendly applications. ",
                icon: "🚀",
              },
              {
                title: "Interests",
                description: "Full Stack Development, Python, REST APIs, Open Source, Cloud Technologies, and Modern Web Development.",
                icon: "⚡",
              },
              {
                title: "Goals",
                description: "To build scalable, maintainable applications and lead innovative projects that inspire others.",
                icon: "🎯",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="p-6 rounded-lg bg-secondary-900/50 border border-accent-500/20 hover:border-accent-500/50 transition-all duration-300 hover:shadow-glow group"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{item.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary-50 mb-2 group-hover:text-accent-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
