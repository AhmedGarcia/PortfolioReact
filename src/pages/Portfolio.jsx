import React from 'react';
import { Link } from 'react-router-dom';
import Project from '../components/Project';

// Portfolio page component displaying multiple projects
function Portfolio() {
  // Array of projects to be displayed on the portfolio page
  const projects = [
    {
      title: 'WeForecast',
      image: '/assets/WeForecast.png', // Image path
      deployedLink: 'https://ahmedgarcia.github.io/WeForecast/', // Deployed app URL
      githubLink: 'https://github.com/AhmedGarcia/WeForecast' // GitHub repository URL
    },
    {
      title: 'Blog-Post9',
      image: '/assets/Blog-Post9.png',
      deployedLink: 'https://ahmedgarcia.github.io/Blog-Post9/',
      githubLink: 'https://github.com/AhmedGarcia/Blog-Post9'
    },
    {
      title: 'VibesCast',
      image: '/assets/VibesCast.png',
      deployedLink: 'https://wilsacker.github.io/Vibes-Cast/',
      githubLink: 'https://github.com/wilsacker/Vibes-Cast'
    },
    {
      title: 'Paws2Doors',
      image: '/assets/Paws2Doors.png',
      deployedLink: 'https://paws-to-doors.onrender.com/',
      githubLink: 'https://github.com/jocoso/paws-to-doors'
    },
    {
      title: 'Task-Mngr',
      image: '/assets/Task-Mngr.png',
      deployedLink: 'https://ahmedgarcia.github.io/Task-Mngr/',
      githubLink: 'https://github.com/AhmedGarcia/Task-Mngr'
    },
    {
      title: 'First Portfolio',
      image: '/assets/First Portfolio.png',
      deployedLink: 'https://ahmedgarcia.github.io/portfolio-new/',
      githubLink: 'https://github.com/AhmedGarcia/portfolio-new'
    },
    
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div className="portfolio-grid">
        {projects.map((project) => (
          <Link key={project.id} to={`/portfolio/${project.id}`} style={{ textDecoration: 'none' }}> {/* Link to ProjectDetails */}
            <Project {...project} />
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
