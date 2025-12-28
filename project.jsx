import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaGamepad,
  FaChartLine,
  FaRobot,
  FaServer
} from 'react-icons/fa';
import './project.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'AI Trading Bot',
      description: 'Machine learning-based cryptocurrency trading system with real-time market analysis and automated trading decisions.',
      category: 'Data Science',
      tech: ['Python', 'TensorFlow', 'Pandas', 'Binance API'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      icon: <FaRobot />,
      color: '#FF6F00'
    },
    {
      id: 2,
      title: '3D Battle Royale Game',
      description: 'Multiplayer 3D game with Unreal Engine featuring real-time combat, character customization, and voice chat.',
      category: 'Game Development',
      tech: ['C++', 'Unreal Engine 5', 'Blender', 'Multiplayer'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      icon: <FaGamepad />,
      color: '#0E1128'
    },
    {
      id: 3,
      title: 'Freelancer Vibe Platform',
      description: 'Full-stack freelancing platform with real-time chat, project bidding, and payment integration.',
      category: 'Web Development',
      tech: ['React', 'Node.js', 'Socket.io', 'Stripe'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      icon: <FaServer />,
      color: '#61DAFB'
    },
    {
      id: 4,
      title: 'Medical Image Analysis',
      description: 'Deep learning model for detecting diseases from medical images with 95% accuracy.',
      category: 'Data Science',
      tech: ['Python', 'PyTorch', 'OpenCV', 'Django'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      icon: <FaChartLine />,
      color: '#EE4C2C'
    },
    {
      id: 5,
      title: 'VR Escape Room',
      description: 'Virtual reality puzzle game with interactive environments and physics-based interactions.',
      category: 'Game Development',
      tech: ['C#', 'Unity', 'Oculus SDK', '3D Modeling'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      icon: <FaGamepad />,
      color: '#000000'
    },
    {
      id: 6,
      title: 'Real-time Analytics Dashboard',
      description: 'Interactive dashboard for monitoring business metrics with live data visualization.',
      category: 'Web Development',
      tech: ['React', 'D3.js', 'WebSockets', 'MongoDB'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      icon: <FaChartLine />,
      color: '#00B0FF'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "backOut"
      }
    },
    hover: {
      y: -15,
      scale: 1.02,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const iconVariants = {
    hover: {
      rotate: [0, -10, 10, -10, 0],
      scale: 1.2,
      transition: {
        duration: 0.5
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.2
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <section id="projects" className="projects-section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="section-header"
      >
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">Data Science • Game Development • Web Applications</p>
      </motion.div>

      <div className="projects-filter">
        <button className="filter-btn active">All</button>
        <button className="filter-btn">Data Science</button>
        <button className="filter-btn">Game Dev</button>
        <button className="filter-btn">Web Apps</button>
      </div>

      <motion.div 
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="project-card"
            variants={cardVariants}
            whileHover="hover"
            style={{ borderTop: `4px solid ${project.color}` }}
          >
            <div className="project-header">
              <motion.div 
                className="project-icon-wrapper"
                variants={iconVariants}
                style={{ color: project.color }}
              >
                {project.icon}
              </motion.div>
              <span className="project-category" style={{ backgroundColor: `${project.color}15`, color: project.color }}>
                {project.category}
              </span>
            </div>
            
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              
              <div className="tech-stack">
                {project.tech.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
            
            <div className="project-footer">
              <motion.a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="project-link"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <FaGithub /> Code
              </motion.a>
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="project-link demo"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                style={{ backgroundColor: project.color }}
              >
                <FaExternalLinkAlt /> Live Demo
              </motion.a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;