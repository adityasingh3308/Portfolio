import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -10 }}
      className="group relative overflow-hidden rounded-xl border border-accent-500/10 hover:border-accent-500/30 transition-all duration-300 h-full"
    >
      {/* Card Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary-900/50 to-secondary-900/20 pointer-events-none" />

      {/* Image Container */}
      <div className="relative h-64 md:h-72 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary-900" />
      </div>

      {/* Content */}
      <div className="relative p-6 space-y-4">
        {/* Title */}
        <h3 className="text-xl font-semibold text-primary-50 group-hover:text-accent-400 transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-xs font-medium bg-accent-500/10 text-accent-400 rounded-full border border-accent-500/20 hover:border-accent-500/50 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 pt-4 border-t border-accent-500/10">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-accent-500/10 text-accent-400 hover:bg-accent-500/20 border border-accent-500/20 hover:border-accent-500/50 transition-all duration-300 text-sm font-semibold"
          >
            <FiGithub size={16} />
            GitHub
          </motion.a>
          <motion.a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-gradient-to-r from-accent-500 to-accent-400 text-primary-900 hover:shadow-glow-lg border border-accent-500/50 transition-all duration-300 text-sm font-semibold"
          >
            <FiExternalLink size={16} />
            Demo
          </motion.a>
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
};

export default ProjectCard;
