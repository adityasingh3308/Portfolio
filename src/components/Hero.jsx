import { motion } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';
import { useInView } from '../hooks/useInView';
import profileImage from './WhatsApp Image 2026-06-26 at 10.01.13 PM.jpeg';

const Hero = () => {
  const [ref] = useInView();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          animate={{
            y: [0, -30, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
          className="absolute top-20 left-10 w-72 h-72 bg-accent-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: 1,
          }}
          className="absolute bottom-20 right-10 w-72 h-72 bg-accent-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-8"
        >
          {/* Profile Image */}
          <motion.div variants={itemVariants}>
            <div className="w-48 h-48 mx-auto mb-8 relative">
              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 60px rgba(59, 130, 246, 0.3)',
                    '0 0 100px rgba(59, 130, 246, 0.6)',
                    '0 0 60px rgba(59, 130, 246, 0.3)',
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-full h-full rounded-full overflow-hidden border-2 border-accent-500"
              >
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl md:text-7xl font-bold text-primary-50 mb-4">
              Hi, I'm <span className="bg-gradient-to-r from-accent-400 to-accent-500 bg-clip-text text-transparent">
                Aditya Narayan
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div variants={itemVariants}>
            <p className="text-2xl md:text-3xl text-accent-400 font-semibold mb-2">
              Full Stack Developer
            </p>
          </motion.div>

          {/* Introduction */}
          <motion.div variants={itemVariants}>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
             I'm a Full Stack Developer with experience in React, JavaScript, Python, SQL, and REST APIs. I enjoy building scalable web applications and solving real-world problems through clean and efficient code. I'm continuously learning modern technologies and improving my development skills.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row gap-4 justify-center pt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const el = document.querySelector('#contact');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-400 text-primary-900 font-semibold rounded-lg hover:shadow-glow-lg transition-shadow duration-300"
            >
              Let's Connect
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/adityafinalresume.pdf"
              download="Aditya_Narayan_Resume.pdf"
              aria-label="Download resume"
              className="px-8 py-4 border-2 border-accent-500 text-accent-400 font-semibold rounded-lg hover:bg-accent-500 hover:text-primary-900 hover:shadow-glow-lg transition-all duration-300"
            >
              Download Resume
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="pt-12"
          >
            <FiArrowDown className="mx-auto text-accent-400 text-3xl" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
