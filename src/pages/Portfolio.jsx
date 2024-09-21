import React from 'react';
import Project from '../components/Project';

// Portfolio page component displaying multiple projects
function Portfolio() {
  // Array of projects to be displayed on the portfolio page
  const projects = [
    {
      title: 'Project 1',
      image: '/assets/project1.png', // Image path
      deployedLink: 'https://deployed-app1.com', // Deployed app URL
      githubLink: 'https://github.com/project1' // GitHub repository URL
    },
    {
      title: 'Project 2',
      image: '/assets/project2.png',
      deployedLink: 'https://deployed-app2.com',
      githubLink: 'https://github.com/project2'
    },
    // Add more projects as needed
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      {/* Map through the projects array and render a Project component for each */}
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </section>
  );
}

export default Portfolio;
