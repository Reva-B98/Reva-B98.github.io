import React, { useEffect } from 'react';
import ThreeScene from './components/ThreeScene';
import './App.css';

function App() {
  useEffect(() => {
    // Resize Three.js canvas to cover entire viewport
    const handleResize = () => {
      const canvas = document.querySelector('.ThreeSceneContainer canvas');
      if (canvas) {
        canvas.style.width = `${window.innerWidth}px`;
        canvas.style.height = `${window.innerHeight}px`;
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call to set the size correctly

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div id="root">
      <div className="ThreeSceneContainer">
        <ThreeScene />
      </div>
      <div className="App">
        <div className="nameOverlay">REVA B.</div>
        <div className="social-icons">
          <a href="https://github.com/Reva-B98" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/reva-balasundaram-521379153/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
          <a href="mailto:reva.bala.ca@email.com"><i className="fas fa-envelope"></i></a>
        </div>
        <nav className="top-right-nav">
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects" id="projects-link">Projects</a></li>
            <li><a href="#resume">Resume</a></li>
          </ul>
        </nav>
        <section id="about">
          <h1>About</h1>
          {/* About content */}
        </section>
        <section id="projects">
          <h1>Projects</h1>
          {/* Projects content */}
        </section>
        <section id="resume">
          <h1>Resume</h1>
          {/* Resume content */}
        </section>
      </div>
    </div>
  );
}

export default App;
