import React from 'react';
import { Link } from 'react-router-dom';
import Project from '../components/Project';

// Portfolio page component displaying multiple projects
function Portfolio() {
  // Array of projects to be displayed on the portfolio page
  const projects = [
    {
      id: '1',
      title: 'WeForecast',
      image: '/assets/WeForecast.png', // Image path
      deployedLink: 'https://ahmedgarcia.github.io/WeForecast/', // Deployed app URL
      githubLink: 'https://github.com/AhmedGarcia/WeForecast' // GitHub repository URL
    },
    {id: '2',
      title: 'Blog-Post9',
      image: '/assets/Blog-Post9.png',
      deployedLink: 'https://ahmedgarcia.github.io/Blog-Post9/',
      githubLink: 'https://github.com/AhmedGarcia/Blog-Post9'
    },
    {
      id: '3',
      title: 'VibesCast',
      image: '/assets/VibesCast.png',
      deployedLink: 'https://wilsacker.github.io/Vibes-Cast/',
      githubLink: 'https://github.com/wilsacker/Vibes-Cast'
    },
    {
      id: '4',
      title: 'Paws2Doors',
      image: '/assets/Paws2Doors.png',
      deployedLink: 'https://paws-to-doors.onrender.com/',
      githubLink: 'https://github.com/jocoso/paws-to-doors'
    },
    {
      id: '5',
      title: 'Task-Mngr',
      image: '/assets/Task-Mngr.png',
      deployedLink: 'https://ahmedgarcia.github.io/Task-Mngr/',
      githubLink: 'https://github.com/AhmedGarcia/Task-Mngr'
    },
    {
      id: '6',
      title: 'First Portfolio',
      image: '/assets/First Portfolio.png',
      deployedLink: 'https://ahmedgarcia.github.io/portfolio-new/',
      githubLink: 'https://github.com/AhmedGarcia/portfolio-new'
    },
    
  ];


return (
    <section className="portfolio-grid">
      <h2>Portfolio</h2>
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </section>
  );
}

export default Portfolio;
