import React from 'react';
import '../Styles/NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="navbar">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Aboutme">AboutMe</Link>
          </li>
          <li>
            <Link to="/github">GitHub</Link>
          </li>
          <li>
            <Link to="/contact-me">Contact Me</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;