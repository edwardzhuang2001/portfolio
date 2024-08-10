import React from 'react';
import '../../App.css';
import NavMenu from './NavMenu';

function NavBar() {
  return (
    <nav>
      <NavMenu />

      {/* <button id="toggle-mode-button" onclick="toggleMode()">Toggle Dark Mode</button> */}
    </nav>
  );
}

export default NavBar;