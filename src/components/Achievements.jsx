import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { FiAward, FiCode, FiUsers, FiGitBranch } from 'react-icons/fi';

const Achievements = () => {
  const [ref] = useInView();

  const achievementsData = [
    {
      id: 1,
      title: "Coding Contests",
      description: "Global Rank 156 in CodeForces | Top 100 in HackerRank DSA | Multiple hackathon wins",
      icon: FiCode,
      stats: "50+ Contests",
      achievements: ["CodeForces", "HackerRank", "LeetCode", "AtCoder"],
    },
    {
      id: 2,
      title: "Hackathons",
      description: "Winner of multiple prestigious hackathons with innovative projects and solutions",
      icon: FiAward,
      stats: "12+ Wins",
      achievements: ["Hack MIT 2023", "AngelHack 2023", "DevFest 2023", "BuildIt 2023"],
    },
    {
      id: 3,
      title: "Open Source",
      description: "Active contributor to major open-source projects with 500+ stars on personal repositories",
      icon: FiGitBranch,
      stats: "15+ Projects",
      achievements: ["React Contrib", "Node.js", "Django", "Vue.js"],
    },
    {
      id: 4,
      title: "Speaking & Mentoring",
      description: "Tech talks at conferences and mentoring junior developers in the community",
      icon: FiUsers,
      stats: "20+ Mentees",
      achievements: ["JSConf", "ReactConf", "DevConf", "TechMeetups"],
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
