import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/1000076036.jpg';
import { FaCode, FaDatabase, FaRobot } from 'react-icons/fa';
import './About.css';

const About = () => {
  const skills = [
    { icon: <FaCode />, label: 'Full Stack Developer', color: '#64ffda' },
    { icon: <FaDatabase />, label: 'Data Scientist', color: '#00bcd4' },
    { icon: <FaRobot />, label: 'AI/ML Enthusiast', color: '#4dd0e1' }
  ];

  return (
    <section id="about" className="about-section">
      {/* Background Code Elements */}
      <div className="code-background">
        <div className="code-line code-1">{'<div className="developer">'}</div>
        <div className="code-line code-2">{'const skills = [React, Python, ML]'}</div>
        <div className="code-line code-3">{'// Building the future'}</div>
        <div className="code-line code-4">{'</div>'}</div>
      </div>

      {/* Animated Background Blobs */}
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>

      <div className="about-container">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="about-content"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="about-tag"
          >
            {'<About />'} 
          </motion.div>

          <h2 className="section-title">About Me</h2>
          
          <p className="about-text">
            I'm a passionate <span className="highlight-text">Full Stack Developer</span> and <span className="highlight-text">Data Scientist</span> with expertise in building scalable web applications and implementing AI solutions. I love turning complex problems into elegant, user-friendly applications.
          </p>
          <p className="about-text">
            My journey in tech is driven by curiosity and continuous learning. Whether it's crafting responsive UIs with React, building robust backends with Node.js, or developing ML models with Python, I'm always excited to tackle new challenges.
          </p>

          {/* Skills Icons */}
          <div className="skills-icons">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="skill-icon-item"
                whileHover={{ scale: 1.1, y: -10 }}
                transition={{ type: "spring", stiffness: 400 }}
                style={{ color: skill.color }}
              >
                <div className="icon-wrapper">{skill.icon}</div>
                <p>{skill.label}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="about-stats">
            <motion.div 
              whileHover={{ y: -10, scale: 1.05 }}
              className="stat-card"
            >
              <div className="stat-number">50+</div>
              <p>Projects</p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -10, scale: 1.05 }}
              className="stat-card"
            >
              <div className="stat-number">5+</div>
              <p>Years Exp</p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -10, scale: 1.05 }}
              className="stat-card"
            >
              <div className="stat-number">30+</div>
              <p>Clients</p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="about-image"
        >
          <div className="image-frame">
            <img src={profileImage} alt="Profile" className="profile-image" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
