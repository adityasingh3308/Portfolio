import { motion } from 'framer-motion';
import { FiArrowUp, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: FiGithub, label: 'GitHub', url: 'https://github.com/adityasingh3308' },
    { icon: FiLinkedin, label: 'LinkedIn', url: 'https://linkedin.com/adityanarayan088' },
    { icon: FiTwitter, label: 'Twitter', url: 'https://twitter.com' },
  ];

  const footerLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative pt-20 px-4 border-t border-accent-500/10 bg-secondary-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-accent-400 to-accent-500 bg-clip-text text-transparent mb-2">
              DEV
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Building beautiful, performant web experiences with modern technologies and innovative solutions.
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h4 className="text-primary-50 font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-accent-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h4 className="text-primary-50 font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-lg bg-secondary-900 border border-accent-500/10 text-accent-400 hover:border-accent-500/30 hover:shadow-glow transition-all"
                    aria-label={link.label}
                  >
                    <IconComponent size={20} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-accent-500/10" />

        {/* Bottom Bar */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-slate-400 text-sm text-center md:text-left"
          >
            <p>
              © {currentYear} Aditya narayan. All rights reserved.{' '}
              <span className="text-accent-400">|</span> Crafted with{' '}
              <span className="text-red-400">❤️</span> using React & Tailwind CSS
            </p>
          </motion.div>

          {/* Back to Top Button */}
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="p-3 rounded-full bg-accent-500 hover:bg-accent-400 text-primary-900 transition-all hover:shadow-glow-lg"
            aria-label="Back to top"
          >
            <FiArrowUp size={20} />
          </motion.button>
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
          className="absolute top-0 right-0 w-72 h-72 bg-accent-500 rounded-full mix-blend-multiply filter blur-3xl opacity-3 pointer-events-none"
        />
      </div>
    </footer>
  );
};

export default Footer;
