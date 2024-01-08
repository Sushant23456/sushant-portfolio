import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);  // Corrected refs
  const timelineRef = useRef(null);  // Corrected refs
  const contactRef = useRef(null);   // Corrected refs
  const [nightMode, setNightMode] = useState(false);

  const toggleNightMode = () => {
    setNightMode(!nightMode);
  };

  useEffect(() => {
    document.body.className = nightMode ? 'night-mode' : '';
  }, [nightMode]);

  const sections = [
    { label: 'Home', ref: homeRef },
    { label: 'About', ref: aboutRef },
    { label: 'Skills', ref: skillsRef },
    { label: 'Projects', ref: projectsRef },  // Corrected refs
    { label: 'Timeline', ref: timelineRef },  // Corrected refs
    { label: 'Contact', ref: contactRef },    // Corrected refs
  ];

  return (
    <div className={`App ${nightMode ? 'night-mode' : ''}`}>
      <Navbar sections={sections} toggleNightMode={toggleNightMode} nightMode={nightMode} />
      <div ref={homeRef}><Home nightMode={nightMode} /></div>
      <div ref={aboutRef}><About nightMode={nightMode} /></div>
      <div ref={skillsRef}><Skills nightMode={nightMode} /></div>
      <div ref={projectsRef}> {/* Projects component */}</div>
      <div ref={timelineRef}> {/* Timeline component */}</div>
      <div ref={contactRef}> {/* Contact component */}</div>
      {/* ... rest of your components */}
    </div>
  );
}

export default App;
