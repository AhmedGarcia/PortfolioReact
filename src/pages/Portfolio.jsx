import React from 'react';
import Project from '../components/Project.jsx'; // Import Project component

// Portfolio page that renders a list of projects
function Portfolio() {
    const projects = [
        {
            title: 'Project 1',
            image: '/pathto_image1.png',
            deployedLink: 'https://deployed-app1.com',
            githubLink: 'https://github.com/project1'
        },
        // TODO: Add five more projects
    ];

    return (
        <section>
      <h2>Portfolio</h2>
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </section>
    );
}

export default Portfolio;