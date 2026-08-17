import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { FiAward, FiCode, FiUsers, FiGitBranch } from 'react-icons/fi';

const Achievements = () => {
  const [ref] = useInView();

  const achievementsData = [
   {
  id: 1,
  title: "Technical Projects",
  description:
    "Built practical applications using Java, Spring Boot, SQL, Python, and modern web technologies.",
  icon: FiCode,
  stats: "5+ Projects",
  achievements: [
    "Java Applications",
    "Spring Boot",
    "SQL & MySQL",
    "React & Vite",
  ],
},
{
  id: 2,
  title: "Certifications",
  description:
    "Completed industry-recognized courses and certifications to strengthen my programming, data, and AI skills.",
  icon: FiAward,
  stats: "8+ Certifications",
  achievements: [
    "Cisco Networking Academy",
    "Forage",
    "Data Analytics",
    "Modern AI",
  ],
},
{
  id: 3,
  title: "Professional Development",
  description:
    "Completed virtual job simulations and practical training focused on software development and real-world engineering workflows.",
  icon: FiGitBranch,
  stats: "2+ Job Simulations",
  achievements: [
    "Technology Software Development",
    "Deloitte",
    "Software Development",
    "Problem Solving",
  ],
},
{
  id: 4,
  title: "Technical Skills",
  description:
    "Continuously developing my skills in backend development, databases, web technologies, and software engineering.",
  icon: FiUsers,
  stats: "10+ Technologies",
  achievements: [
    "Java & Spring Boot",
    "SQL & MySQL",
    "React & JavaScript",
    "Git & GitHub",
  ],
},
  ];

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
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="achievements"
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
            <span className="bg-gradient-to-r from-accent-400 to-accent-500 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-500 to-accent-400 mx-auto rounded-full" />
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {achievementsData.map((achievement) => {
            const IconComponent = achievement.icon;
            return (
              <motion.div
                key={achievement.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-xl p-8 border border-accent-500/10 hover:border-accent-500/30 transition-all duration-300"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary-900/40 to-secondary-900/10 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-br from-accent-500/5 to-accent-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Content */}
                <div className="relative">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="inline-block p-4 rounded-lg bg-accent-500/10 border border-accent-500/20 mb-6 group-hover:bg-accent-500/20 group-hover:shadow-glow transition-all duration-300"
                  >
                    <IconComponent className="text-accent-400 text-3xl" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-primary-50 mb-2 group-hover:text-accent-400 transition-colors">
                    {achievement.title}
                  </h3>

                  {/* Stats */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="inline-block mb-4 px-3 py-1 rounded-full bg-accent-500/10 border border-accent-500/20"
                  >
                    <span className="text-sm font-semibold text-accent-400">{achievement.stats}</span>
                  </motion.div>

                  {/* Description */}
                  <p className="text-slate-400 leading-relaxed mb-6">
                    {achievement.description}
                  </p>

                  {/* Achievements List */}
                  <div className="space-y-3">
                    <p className="text-xs uppercase tracking-wider text-accent-400 font-semibold">Notable</p>
                    <div className="flex flex-wrap gap-2">
                      {achievement.achievements.map((item, idx) => (
                        <motion.span
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + idx * 0.05 }}
                          className="px-3 py-1 text-xs font-medium bg-secondary-900 border border-accent-500/20 rounded-full text-slate-300 group-hover:border-accent-500/50 group-hover:text-accent-400 transition-all"
                        >
                          {item}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-xl pointer-events-none"
                  whileHover={{
                    boxShadow: 'inset 0 0 20px rgba(59, 130, 246, 0.1)',
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
