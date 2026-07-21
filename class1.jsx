import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  
  const links = [
    { id: 1, name: 'Home' },
    { id: 2, name: 'About' },
    { id: 3, name: 'Projects' },
    { id: 4, name: 'Skills' },
    { id: 5, name: 'Contact' }
  ];

  const menuVariants = {
    hidden: { opacity: 0, x: -300 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.3
      }
    })
  };

  return (
    <motion.div 
      className="navbar"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <motion.div 
          className="logo-space"
        >
        </motion.div>
        
        <motion.ul 
          className={nav ? 'nav-menu active' : 'nav-menu'}
          variants={menuVariants}
          animate={nav ? 'visible' : 'hidden'}
        >
          {links.map(({ id, name }, i) => (
            <motion.li 
              key={id}
              custom={i}
              variants={linkVariants}
            >
              <motion.a 
                href={`#${name.toLowerCase()}`} 
                onClick={() => setNav(false)}
                whileHover={{ scale: 1.1, color: '#64ffda' }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {name}
              </motion.a>
            </motion.li>
          ))}
        </motion.ul>
        
        <motion.div 
          className="hamburger" 
          onClick={() => setNav(!nav)}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            animate={{ rotate: nav ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Navbar;