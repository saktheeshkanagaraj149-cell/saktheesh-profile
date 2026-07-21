import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaPython, 
  FaJava, 
  FaCuttlefish, 
  FaJs, 
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGamepad,
  FaRobot,
  FaChartLine
} from 'react-icons/fa';
import { 
  SiTensorflow, 
  SiPytorch, 
  SiPandas, 
  SiNumpy,
  SiOpencv,
  SiUnity,
  SiUnrealengine,
  SiDjango,
  SiFlask,
  SiGit
} from 'react-icons/si';
import './skill.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Data Science & AI',
      skills: [
        { name: 'Python', icon: <FaPython />, level: 95, color: '#3776AB' },
        { name: 'TensorFlow', icon: <SiTensorflow />, level: 85, color: '#FF6F00' },
        { name: 'PyTorch', icon: <SiPytorch />, level: 80, color: '#EE4C2C' },
        { name: 'Pandas', icon: <SiPandas />, level: 90, color: '#150458' },
        { name: 'NumPy', icon: <SiNumpy />, level: 88, color: '#4DABCF' },
        { name: 'OpenCV', icon: <SiOpencv />, level: 75, color: '#5C3EE8' },
        { name: 'Machine Learning', icon: <FaRobot />, level: 85, color: '#00B0FF' },
        { name: 'Data Analysis', icon: <FaChartLine />, level: 90, color: '#FF4081' }
      ]
    },
    {
      title: 'Game Development',
      skills: [
        { name: 'C++', icon: <FaCuttlefish />, level: 88, color: '#00599C' },
        { name: 'Unity', icon: <SiUnity />, level: 82, color: '#000000' },
        { name: 'Unreal Engine', icon: <SiUnrealengine />, level: 78, color: '#0E1128' },
        { name: 'Game Design', icon: <FaGamepad />, level: 85, color: '#FF6B35' },
        { name: 'C#', icon: <FaCuttlefish />, level: 80, color: '#239120' }
      ]
    },
    {
      title: 'Web Development',
      skills: [
        { name: 'JavaScript', icon: <FaJs />, level: 92, color: '#F7DF1E' },
        { name: 'React', icon: <FaReact />, level: 90, color: '#61DAFB' },
        { name: 'Node.js', icon: <FaNodeJs />, level: 85, color: '#339933' },
        { name: 'Django', icon: <SiDjango />, level: 82, color: '#092E20' },
        { name: 'Flask', icon: <SiFlask />, level: 80, color: '#000000' },
        { name: 'MongoDB', icon: <FaDatabase />, level: 75, color: '#47A248' },
        { name: 'Git', icon: <SiGit />, level: 88, color: '#F05032' }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const barVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        delay: 0.3,
        ease: "easeInOut"
      }
    })
  };

  return (
    <section id="skills" className="skills-section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="section-header"
      >
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">Data Science • Game Dev • Full Stack</p>
      </motion.div>

      <div className="skills-container">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            className="skill-category"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <h3 className="category-title">{category.title}</h3>
            
            <motion.div 
              className="skills-grid"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {category.skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="skill-card"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.15)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="skill-header">
                    <div 
                      className="skill-icon-wrapper"
                      style={{ backgroundColor: `${skill.color}15` }}
                    >
                      <div className="skill-icon" style={{ color: skill.color }}>
                        {skill.icon}
                      </div>
                    </div>
                    <h4>{skill.name}</h4>
                  </div>
                  
                  <div className="skill-progress">
                    <div className="progress-bar-bg">
                      <motion.div 
                        className="progress-bar-fill"
                        style={{ backgroundColor: skill.color }}
                        variants={barVariants}
                        custom={skill.level}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      />
                    </div>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;