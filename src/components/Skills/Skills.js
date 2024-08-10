import React from 'react';
import '../../App.css';
import SkillItem from './SkillItem.js';
import {
  javaIcon,
  springBootIcon,
  sqlIcon,
  pythonIcon,
  numPyIcon,
  pandasIcon,
  javaScriptIcon,
  reactIcon,
  nodeJSIcon,
  htmlIcon,
  cssIcon,
  gitIcon,
  awsIcon,
  hadoopIcon,
  sparkIcon,
} from '../../assets/skills';

const skills = [
  { name: 'Java', icon: javaIcon },
  { name: 'Spring Boot', icon: springBootIcon },
  { name: 'Python', icon: pythonIcon },
  { name: 'NumPy', icon: numPyIcon },
  { name: 'pandas', icon: pandasIcon },
  { name: 'JavaScript', icon: javaScriptIcon },
  { name: 'React', icon: reactIcon },
  { name: 'Node.js', icon: nodeJSIcon },
  { name: 'HTML', icon: htmlIcon },
  { name: 'CSS', icon: cssIcon },
  { name: 'Hadoop', icon: hadoopIcon },
  { name: 'Spark', icon: sparkIcon },
  { name: 'SQL', icon: sqlIcon },
  { name: 'AWS', icon: awsIcon },
  { name: 'Git', icon: gitIcon },
];

function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        {skills.map(skill => (
          <SkillItem key={skill.name} name={skill.name} icon={skill.icon} />
        ))}
      </div>
    </section>
  );
}

export default Skills;