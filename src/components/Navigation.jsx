import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink for routing

// Navigation component with links to different sections
function Navigation() { 
    return (
        <nav>
      <ul>
        <li><NavLink to="/" end>About Me</NavLink></li> {/* Link to About Me */}
        <li><NavLink to="/portfolio">Portfolio</NavLink></li> {/* Link to Portfolio */}
        <li><NavLink to="/contact">Contact</NavLink></li> {/* Link to Contact */}
        <li><NavLink to="/resume">Resume</NavLink></li> {/* Link to Resume */}
      </ul>
    </nav>
    );
}

export default Navigation;