import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { useInView } from '../hooks/useInView';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiTwitter, FiCheck, FiAlertTriangle } from 'react-icons/fi';

const Contact = () => {
  const [ref] = useInView();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState(null);

  // Initialize EmailJS
 emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email using EmailJS
    await emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  {
    name: formData.name,
    email: formData.email,
    subject: formData.subject,
    message: formData.message,
  }
);

      setNotification({
        type: 'success',
        message: 'Message sent successfully! I\'ll get back to you soon.',
      });

      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => setNotification(null), 5000);
    } catch (error) {
      setNotification({
        type: 'error',
        message: 'Failed to send message. Please try again or contact me directly.',
      });
      console.error('Email error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'narayanaditya716@gmail.com',
      link: 'mailto:narayanaditya716@gmail.com',
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: '+91 8578851711',
      link: 'tel:+91 8578851711',
    },
    {
      icon: FiMapPin,
      label: 'Bhopal',
      value: 'Bhopal, India',
      link: '#',
    },
  ];

  const socialLinks = [
    { icon: FiGithub, label: 'GitHub', url: 'https://github.com/adityasingh3308' },
    { icon: FiLinkedin, label: 'LinkedIn', url: 'https://linkedin.com/in/adityanarayan088' },
    { icon: FiTwitter, label: 'Twitter', url: 'https://twitter.com/adityanarayan' },
  ];

  return (
    <section
      id="contact"
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
            Get In <span className="bg-gradient-to-r from-accent-400 to-accent-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-500 to-accent-400 mx-auto rounded-full" />
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            I'd love to hear from you! Whether you have a project in mind or just want to chat, feel free to reach out.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info */}
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <motion.a
                key={index}
                href={info.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-lg border border-accent-500/10 hover:border-accent-500/30 bg-secondary-900/40 hover:shadow-glow transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent-500/10 border border-accent-500/20 group-hover:bg-accent-500/20 group-hover:shadow-glow transition-all">
                    <IconComponent className="text-accent-400 text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-primary-50 font-semibold mb-1">{info.label}</h3>
                    <p className="text-slate-400 text-sm group-hover:text-accent-400 transition-colors">
                      {info.value}
                    </p>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Contact Form and Social Links */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="lg:col-span-2 p-8 rounded-lg border border-accent-500/10 hover:border-accent-500/20 bg-secondary-900/40 transition-all duration-300"
          >
            <div className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-primary-50 mb-2">
                  Name
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-secondary-900 border border-accent-500/20 text-primary-50 placeholder-slate-500 focus:outline-none focus:border-accent-500 focus:shadow-glow transition-all"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-primary-50 mb-2">
                  Email
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-secondary-900 border border-accent-500/20 text-primary-50 placeholder-slate-500 focus:outline-none focus:border-accent-500 focus:shadow-glow transition-all"
                  placeholder="your@email.com"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-primary-50 mb-2">
                  Subject
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-secondary-900 border border-accent-500/20 text-primary-50 placeholder-slate-500 focus:outline-none focus:border-accent-500 focus:shadow-glow transition-all"
                  placeholder="Subject of your message"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-primary-50 mb-2">
                  Message
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg bg-secondary-900 border border-accent-500/20 text-primary-50 placeholder-slate-500 focus:outline-none focus:border-accent-500 focus:shadow-glow transition-all resize-none"
                  placeholder="Your message here..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-accent-500 to-accent-400 text-primary-900 font-semibold hover:shadow-glow-lg transition-shadow duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </div>
          </motion.form>

          {/* Social Links and Message */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Notification */}
            {notification && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={`p-4 rounded-lg flex items-start gap-3 ${
                  notification.type === 'success'
                    ? 'bg-green-500/10 border border-green-500/20'
                    : 'bg-red-500/10 border border-red-500/20'
                }`}
              >
                {notification.type === 'success' ? (
                  <FiCheck className="text-green-400 text-xl flex-shrink-0 mt-0.5" />
                ) : (
                  <FiAlertTriangle className="text-red-400 text-xl flex-shrink-0 mt-0.5" />
                )}
                <p
                  className={
                    notification.type === 'success' ? 'text-green-300 text-sm' : 'text-red-300 text-sm'
                  }
                >
                  {notification.message}
                </p>
              </motion.div>
            )}

            {/* Social Links */}
            <div>
              <h3 className="text-primary-50 font-semibold mb-4">Connect With Me</h3>
              <div className="space-y-3">
                {socialLinks.map((link, index) => {
                  const IconComponent = link.icon;
                  return (
                    <motion.a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index }}
                      whileHover={{ x: 10, scale: 1.05 }}
                      className="flex items-center gap-3 p-3 rounded-lg bg-secondary-900/40 border border-accent-500/10 hover:border-accent-500/30 hover:shadow-glow transition-all group"
                    >
                      <IconComponent className="text-accent-400 group-hover:text-accent-300 transition-colors" />
                      <span className="text-slate-400 group-hover:text-accent-400 transition-colors">{link.label}</span>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* CTA */}
            <div className="p-6 rounded-lg bg-gradient-to-br from-accent-500/10 to-accent-400/5 border border-accent-500/20">
              <h3 className="text-primary-50 font-semibold mb-2">Let's Collaborate!</h3>
              <p className="text-slate-400 text-sm">
                I'm always open to discussing new projects, ideas, and opportunities to make something amazing together.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
