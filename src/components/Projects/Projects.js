import React from 'react';
import '../../App.css';
import ProjectItem from './ProjectItem';
import {
  aslingoLogo,
  benchSpotLogo,
  macAILogo,
  portfolioLogo,
  proboLogo,
  riftHeraldLogo,
} from '../../assets/projects';

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        <ProjectItem 
          logo={portfolioLogo}
          name="Portfolio"
          github="https://github.com/edwardzhuang2001/portfolio"
          demo="https://edwardzhuang2001.github.io/portfolio"
          stack={[
            "React",
            "JavaScript",
            "HTML",
            "CSS",
          ]}
          descriptions={[
            "",
          ]}
        />
        <ProjectItem 
          logo={aslingoLogo}
          name="ASLingo"
          github="https://github.com/stanreee/sign-language-learning"
          demo="https://www.youtube.com/watch?v=mL1AdU8d55w"
          stack={[
            "Python",
            "PyTorch",
            "OpenCV",
            "React",
          ]}
          descriptions={[
            "",
          ]}
        />
        <ProjectItem 
          logo={proboLogo}
          name="Probo"
          github="https://github.com/andrewliu08/probo"
          demo="https://ethglobal.com/showcase/probo-o5oi8"
          stack={[
            "Web3",
            "Python",
            "Flask",
            "TensorFlow",
            "React",
          ]}
          descriptions={[
            "",
          ]}
        />
        <ProjectItem 
          logo={macAILogo}
          name="PoST Study"
          github="https://github.com/McMasterAI/POST_study_Project"
          demo="https://github.com/McMasterAI/POST_study_Project"
          stack={[
            "Python",
            "pandas",
            "scikit-learn",
            "SVMs",
          ]}
          descriptions={[
            "",
          ]}
        />
        <ProjectItem 
          logo={riftHeraldLogo}
          name="Rift Herald"
          github="https://github.com/edwardzhuang2001/LoL-discord-bot"
          demo="https://github.com/edwardzhuang2001/LoL-discord-bot"
          stack={[
            "Python",
            "discord.py",
          ]}
          descriptions={[
            "",
          ]}
        />
        <ProjectItem 
          logo={benchSpotLogo}
          name="Bench Spot"
          github="https://github.com/GillianJYT/HackWestern7"
          demo="https://github.com/GillianJYT/HackWestern7"
          stack={[
            "Java",
            "Android Studio",
            "Google Maps API",
          ]}
          descriptions={[
            "",
          ]}
        />
      </div>
    </section>
  );
}

export default Projects;