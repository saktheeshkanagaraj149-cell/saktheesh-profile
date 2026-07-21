import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaPython, 
  FaCode, 
  FaGamepad, 
  FaRocket,
  FaArrowDown
} from 'react-icons/fa';
import './hero.css';

const Hero = () => {
  const floatingIcons = [
    { Icon: FaPython, delay: 0, top: '10%', left: '5%' },
    { Icon: FaCode, delay: 0.5, top: '70%', left: '80%' },
    { Icon: FaGamepad, delay: 1, top: '75%', left: '10%' },
    { Icon: FaRocket, delay: 1.5, top: '20%', left: '85%' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="home" className="hero-section">
      {/* Background Elements */}
      <div className="hero-background">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
      </div>

      {/* Floating Icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className="floating-icon"
          style={{ top: item.top, left: item.left }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 15, -15, 0],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: 5 + index,
            delay: item.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <item.Icon />
        </motion.div>
      ))}

      <div className="hero-content">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="hero-text"
        >
          <motion.span
            variants={itemVariants}
            className="greeting"
          >
            👋 Hello, I'm
          </motion.span>
          
          <motion.h1
            variants={itemVariants}
            className="hero-title"
          >
            Saktheesh
            <br />
            <span className="highlight">Full Stack Developer</span>
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="tagline"
          >
            Creating stunning web experiences with React, Node.js & Modern Technologies
            <span className="freelance"> • Available for Projects</span>
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            className="cta-buttons"
          >
            <motion.a
              href="#projects"
              className="btn primary"
              whileHover={{ scale: 1.08, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
            <motion.a
              href="#skills"
              className="btn secondary"
              whileHover={{ scale: 1.08, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              My Skills
            </motion.a>
            <motion.a
              href="#about"
              className="btn tertiary"
              whileHover={{ scale: 1.08, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              About Me
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="hero-stats"
          >
            <div className="stat">
              <h3>50+</h3>
              <p>Projects</p>
            </div>
            <div className="stat">
              <h3>5+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat">
              <h3>30+</h3>
              <p>Happy Clients</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <FaArrowDown />
      </motion.div>
    </section>
  );
};

export default Hero;