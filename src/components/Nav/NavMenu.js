import React from 'react';
import '../../App.css';
import NavItem from './NavItem';

function NavMenu() {
  return (
    <ul className="nav-menu">
      <NavItem to="about">About</NavItem>
      <NavItem to="skills">Skills</NavItem>
      <NavItem to="experience">Experience</NavItem>
      {/* <NavItem to="project">Projects</NavItem> */}
      <NavItem to="contact">Contact</NavItem>
  </ul>
  );
}

export default NavMenu;