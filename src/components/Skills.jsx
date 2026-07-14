import { motion } from 'framer-motion';
import { skillsData } from '../data/skills';
import { useInView } from '../hooks/useInView';

const Skills = () => {
  const [ref] = useInView();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const groupedSkills = skillsData.reduce((acc, skill) => {
    const category = skill.category;
    if (!acc[category]) acc[category] = [];
    acc[category].push(skill);
    return acc;
  }, {});

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 px-4 relative overflow-hidden"
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
            My <span className="bg-gradient-to-r from-accent-400 to-accent-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-500 to-accent-400 mx-auto rounded-full" />
        </motion.div>

        {/* Skills by Category */}
        <div className="space-y-12">
          {Object.entries(groupedSkills).map((item, categoryIndex) => {
            const [category, skills] = item;
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * categoryIndex }}
              >
                <h3 className="text-2xl font-semibold text-accent-400 mb-8 relative inline-block">
                  {category}
                  <motion.div
                    layoutId={`underline-${category}`}
                    className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-accent-500 to-accent-400 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  />
                </h3>

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8"
                >
                  {skills.map((skill) => {
                    const IconComponent = skill.icon;
                    return (
                      <motion.div
                        key={skill.id}
                        variants={itemVariants}
                        whileHover={{ y: -10 }}
                        className="group"
                      >
                        <div className="relative p-6 rounded-xl bg-secondary-900/40 border border-accent-500/10 hover:border-accent-500/30 transition-all duration-300 h-full hover:shadow-glow">
                          {/* Icon */}
                          <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                            <IconComponent className="text-accent-400" />
                          </div>

                          {/* Skill Name */}
                          <h4 className="text-primary-50 font-semibold mb-3 group-hover:text-accent-400 transition-colors">
                            {skill.name}
                          </h4>

                          {/* Progress Bar */}
                          <div className="w-full bg-secondary-900/50 rounded-full h-2 overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.proficiency}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
                              className="h-full bg-gradient-to-r from-accent-500 to-accent-400 rounded-full"
                            />
                          </div>

                          {/* Proficiency Percentage */}
                          <div className="mt-2 text-right">
                            <motion.span
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.5 }}
                              className="text-xs text-accent-400 font-semibold"
                            >
                              {skill.proficiency}%
                            </motion.span>
                          </div>

                          {/* Glow Effect on Hover */}
                          <motion.div
                            className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent-500/0 to-accent-500/0 pointer-events-none"
                            whileHover={{
                              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(96, 165, 250, 0.1))',
                            }}
                          />
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
