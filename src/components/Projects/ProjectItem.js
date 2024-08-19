import React from 'react';
import '../../App.css';
import Tag from '../Miscellaneous/Tag';

function ProjectItem({ logo, name, github, demo, stack, descriptions }) {
  return (
    <div className="project-card">
      <img className="project-logo" src={logo} alt={`Logo of ${name}`} />
      <div className="project-body">
        <h3>{name}</h3>
        <button className="link-button"><a href={github}>GitHub</a></button>
        <button className="link-button"><a href={demo}>Demo</a></button>
        <ul className="project-stack">
          {stack.map((skill, index) => (
            <Tag key={index} skill={skill} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProjectItem;