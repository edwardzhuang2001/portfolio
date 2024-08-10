import React from 'react';
import '../App.css';
import Resume from '../assets/resume.pdf';

function Hero() {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>I'm Edward,</h1>
        <h6 className="slogan">a Software Engineer.</h6>
      </div>
      <div className="hero-buttons-container">
        <a href="mailto:edwardzhuang2001@gmail.com" title="Email" target="_blank" rel="noreferrer">
          <i className="hero-button fas fa-envelope-open-text"></i>
        </a>
        <a href={Resume} title="Resume" target="_blank" rel="noreferrer">
          <i className="hero-button fas fa-file-invoice"></i>
        </a>
        <a href="https://github.com/edwardzhuang2001" title="GitHub" target="_blank" rel="noreferrer">
          <i className="hero-button fab fa-github-square"></i>
        </a>
        <a href="https://www.linkedin.com/in/edwardzhuang2001/" title="LinkedIn" target="_blank" rel="noreferrer">
          <i className="hero-button fab fa-linkedin"></i>
        </a>
      </div>
    </div>
  );
};

export default Hero;