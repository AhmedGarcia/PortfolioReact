import React, { useState, useEffect } from 'react';

// Component to toggle between light and dark mode
function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');

  // Handle theme toggle
  const toggleTheme = () => {
    const newTheme = !darkMode ? 'dark' : 'light';
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
    localStorage.setItem('theme', newTheme);
  };

  // Set the initial theme based on localStorage value
  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.add('dark-mode');
    }
  }, []);

  return (
    <button onClick={toggleTheme}>
      {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
}

export default ThemeToggle;

