import React from 'react';
import './App.css';
import Navbar from './components/class1';
import Hero from './components/he1';
import About from './components/About';
import Skills from './components/skill';
import Projects from './components/project';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
