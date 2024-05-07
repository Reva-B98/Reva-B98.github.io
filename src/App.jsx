import React from 'react';
import ThreeScene from './components/ThreeScene';
import './App.css'; 

function App() {
  return (
    <div className="App">
      <ThreeScene />
      <div className="nameOverlay">REVA B.</div>
      <div className="social-icons">
        <a href="https://github.com/Reva-B98" target="_blank"><i className="fab fa-github"></i></a>
        
        <a href="https://www.linkedin.com/in/reva-balasundaram-521379153/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
        <a href="mailto:reva.bala.ca@email.com"><i className="fas fa-envelope"></i></a>
      </div>
      <nav className="top-right-nav">
        <ul>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#resume">Resume</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
