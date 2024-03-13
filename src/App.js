import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
// import Projects from './components/Projects';


function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const timelineRef = useRef(null);  
  const projectsRef = useRef(null); 
  const contactRef = useRef(null);   
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
    { label: 'Timeline', ref: timelineRef },  
    { label: 'Projects', ref: projectsRef }, 
    { label: 'Contact', ref: contactRef },    
  ];

  return (
    <div className={`App ${nightMode ? 'night-mode' : ''}`}>
      <Navbar sections={sections} toggleNightMode={toggleNightMode} nightMode={nightMode} />
      <div ref={homeRef}><Home nightMode={nightMode} /></div>
      <div ref={aboutRef}><About nightMode={nightMode} /></div>
      <div ref={skillsRef}><Skills nightMode={nightMode} /></div>
      <div ref={timelineRef}><Timeline nightMode={nightMode} /></div>
      {/* <div ref={projectsRef}><Projects nightMode={nightMode}/></div> */}
      <div ref={contactRef}> {/* Contact component */}</div>
      {/* ... rest of your components */}
    </div>
  );
}

export default App;
