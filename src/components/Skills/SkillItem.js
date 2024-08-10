import React from 'react';
import '../../App.css';

function SkillItem({ name, icon }) {
  return (
    <div className="skill-item">
      <img className="skill-icon" src={icon} alt={`${name} icon`} />
      <p className="skill-name">{name}</p>
    </div>
  );
}

export default SkillItem;