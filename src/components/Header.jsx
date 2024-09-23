import React from 'react';
import Navigation from './Navigation';
import ThemeToggle from './ThemeToggle';

// Header component with navigation and theme toggle
function Header() {
  return (
    <header>
      <h1>Ahmed Garcia</h1>
      <ThemeToggle /> {/* Add theme toggle button */}
      <Navigation />
    </header>
  );
}

export default Header;
