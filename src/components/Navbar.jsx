import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-primary-900/80 backdrop-blur-md border-b border-secondary-900"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-bold bg-gradient-to-r from-accent-500 to-accent-400 bg-clip-text text-transparent"
          >
            DEV
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => (
              <motion.button
                key={item.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
                onClick={() => handleNavClick(item.href)}
                className="px-4 py-2 text-primary-50 hover:text-accent-400 transition-colors relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-500 to-accent-400 group-hover:w-full transition-all duration-300" />
              </motion.button>
            ))}
          </div>

          {/* Social Icons */}
          <div className="hidden md:flex items-center gap-4">
            <a href="https://github.com/adityanarayan" target="_blank" rel="noopener noreferrer"
              className="text-primary-50 hover:text-accent-400 transition-colors hover:scale-110 transform duration-300"
            >
              <FaGithub size={20} />
            </a>
            <a href="https://linkedin.com/in/adityanarayan088" target="_blank" rel="noopener noreferrer"
              className="text-primary-50 hover:text-accent-400 transition-colors hover:scale-110 transform duration-300"
            >
              <FaLinkedin size={20} />
            </a>
            <a href="https://twitter.com/adityanarayan088" target="_blank" rel="noopener noreferrer"
              className="text-primary-50 hover:text-accent-400 transition-colors hover:scale-110 transform duration-300"
            >
              <FaTwitter size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-primary-50 hover:text-accent-400"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="block w-full text-left px-4 py-2 text-primary-50 hover:text-accent-400 hover:bg-secondary-900 rounded transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="flex gap-4 px-4 py-4 pt-6">
              <a href="https://github.com/adityasingh3308" target="_blank" rel="noopener noreferrer"
                className="text-primary-50 hover:text-accent-400 transition-colors"
              >
                <FaGithub size={20} />
              </a>
              <a href="https://linkedin.com/in/adityanarayan088" target="_blank" rel="noopener noreferrer"
                className="text-primary-50 hover:text-accent-400 transition-colors"
              >
                <FaLinkedin size={20} />
              </a>
              <a href="https://twitter.com/adityanarayan" target="_blank" rel="noopener noreferrer"
                className="text-primary-50 hover:text-accent-400 transition-colors"
              >
                <FaTwitter size={20} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
