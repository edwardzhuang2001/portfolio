import React from 'react';
import '../App.css';
import Portrait from '../assets/portrait.png';

function About() {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="about-container">
        <img className="portrait" src={Portrait} alt="Portrait of Edward Zhuang" />
        <div className="about-text">
          <p className="about-item">
            Hi there! Welcome to my personal portfolio.
          </p>
          <p className="about-item">
            I am a Software Engineer with a Bachelor of Engineering from McMaster University, class of 2024. My professional interests include Backend Development, Data Science, and Machine Learning, with a strong focus on Java and Python development. I'm always eager to learn new skills and build exciting projects. As a a self-motivated learner, my passion for technology is driven by natural curiosity stemming from my youth and a love for discovering its many applications.
          </p>
          <p className="about-item">
            In my free time, I enjoy exploring all kinds of music, travelling the world, reading fiction (and sometimes non-fiction), playing video games, and staying active through a mix of bouldering, running, and various recreational sports.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;