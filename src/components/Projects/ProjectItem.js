import React from 'react';
import '../../App.css';

function ProjectItem({ name, links, logo, stack, descriptions }) {
  return (
    <div className="project-item">
      <img className="project-logo" src={logo} alt={`Logo of ${name}`} />
      <div className="project-body">
        <h3>{name}</h3>
        <h4>{links}</h4>
        <h4>{stack}</h4>
      </div>
    </div>
  );
}

export default ProjectItem;