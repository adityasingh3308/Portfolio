import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { FiAward } from 'react-icons/fi';

const Education = () => {
  const [ref] = useInView();

  const educationData = [
    {
      id: 1,
      degree: "B.Tech in Computer Science Engineering",
      institution: "Sagar Institute of Science and Technology",
      startYear: "2023",
      endYear: "2027",
      score: "7.0 / 10.0",
      description:
        "Specialized in Software Development and Web Technologies with a strong foundation in Data Structures and Algorithms.",
      coursework: [
        "Data Structures",
        "Algorithms",
        "Web Development",
        "Databases",
        "System Design",
      ],
    },
    {
      id: 2,
      degree: "Higher Secondary Education (PCM) - State Board",
      institution: "Mukhi Ram High School, Thawe, Gopalganj",
      startYear: "2021",
      endYear: "2023",
      score: "70%",
      description:
        "Completed Higher Secondary Education (PCM) with a strong foundation in Physics, Chemistry, and Mathematics.",
      coursework: [
        "Physics",
        "Chemistry",
        "Mathematics",
        "English",
        "Computer Science",
        "Hindi",
      ],
    },
  ];

  return (
    <section
      id="education"
      ref={ref}
      className="py-20 px-4 bg-secondary-900/30 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto">
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
              Education
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-500 to-accent-400 mx-auto rounded-full" />
        </motion.div>

        {/* Education Timeline */}
        <div className="space-y-8">
          {educationData.map((edu) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent-500/5 to-accent-400/5 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />

              {/* Card */}
              <div className="relative p-8 rounded-xl border border-accent-500/20 hover:border-accent-500/50 transition-all duration-300 bg-secondary-900/40 hover:shadow-glow">
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Left */}
                  <div className="flex-1">
                    <motion.h3
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="text-2xl font-bold text-primary-50 mb-2"
                    >
                      {edu.degree}
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="text-accent-400 font-semibold mb-4 flex items-center gap-2"
                    >
                      <FiAward className="text-accent-500" />
                      {edu.institution}
                    </motion.p>

                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                      className="text-slate-400 leading-relaxed"
                    >
                      {edu.description}
                    </motion.p>
                  </div>

                  {/* Right */}
                  <div className="md:w-64 flex flex-col gap-6">
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="p-4 rounded-lg bg-secondary-900/50 border border-accent-500/10 hover:border-accent-500/30 transition-colors"
                    >
                      <p className="text-xs uppercase tracking-wider text-slate-400 mb-1">
                        Duration
                      </p>
                      <p className="text-lg font-bold text-primary-50">
                        {edu.startYear} - {edu.endYear}
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                      className="p-4 rounded-lg bg-gradient-to-br from-accent-500/10 to-accent-400/5 border border-accent-500/20 hover:border-accent-500/50 transition-colors"
                    >
                      <p className="text-xs uppercase tracking-wider text-accent-400 mb-1">
                        Score
                      </p>
                      <p className="text-2xl font-bold text-accent-400">
                        {edu.score}
                      </p>
                    </motion.div>
                  </div>
                </div>

                {/* Coursework */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="mt-8 pt-8 border-t border-accent-500/10"
                >
                  <p className="text-sm font-semibold text-accent-400 mb-4 uppercase tracking-wider">
                    Key Coursework
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course) => (
                      <motion.span
                        key={course}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 text-xs font-medium bg-secondary-900 border border-accent-500/20 rounded-full text-slate-300 hover:text-accent-400 hover:border-accent-500/50 transition-all cursor-default"
                      >
                        {course}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;