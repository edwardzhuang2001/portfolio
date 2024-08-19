import React from 'react';
import '../../App.css';

function Tag({ skill }) {
  return (
    <span>
      <p className="tag">{skill}</p>
    </span>
  );
}

export default Tag;