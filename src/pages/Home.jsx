import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Achievements from '../components/Achievements';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  useEffect(() => {
    // No custom wheel handling needed; allow default scrolling
  }, []);

  return (
    <motion.main className="overflow-x-hidden bg-primary-900 text-primary-50">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <motion.div
          animate={{
            y: [0, -50, 0],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5"
        />
        <motion.div
          animate={{
            y: [0, 50, 0],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
            delay: 2,
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-400 rounded-full mix-blend-multiply filter blur-3xl opacity-5"
        />
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Sections */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Education />
      <Contact />
      <Footer />
    </motion.main>
  );
};

export default Home;
