import React from 'react';
import '../../App.css';
import { Link } from 'react-scroll';

function NavItem({ to, children }) {
  return (
    <li className="nav-item">
      <Link
        to={to}
        smooth={true}
        duration={0}
        offset={0}
        className="nav-link"
      >
        {children}
      </Link>
    </li>
  );
}

export default NavItem;