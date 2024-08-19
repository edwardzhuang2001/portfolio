import React from 'react';
import '../../App.css';
import Tag from '../Miscellaneous/Tag';

function ExperienceItem({ title, company, team, date, logo, descriptions, stack }) {
  return (
    <div className="experience-item">
      <div className="experience-header">
        <div className="title-company">
          <h3 className="title">{title} |</h3>
          <h4 className="company">{company}, {team}</h4>
        </div>
        <h4><i>{date}</i></h4>
      </div>
      <div className="experience-body">
        <img className="experience-logo" src={logo} alt={`Logo of ${company}`} />
        <ul className="experience-description">
          {descriptions.map((description, index) => (
            <li key={index}><p>{description}</p></li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ExperienceItem;