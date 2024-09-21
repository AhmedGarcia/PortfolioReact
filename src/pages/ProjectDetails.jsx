import React from 'react';
import { useParams } from 'react-router-dom';

// Project details page for specific project information
function ProjectDetails() {
  const { projectId } = useParams(); // Get the project ID from the URL

  // Placeholder data for project details; in a real app, this would be fetched from an API or database
  const projectDetails = {
    '1': {
      title: 'Project 1',
      description: 'Description of Project 1...',
      technologies: ['React', 'Node.js', 'Express'],
      image: '/assets/project1.png'
    },
    '2': {
      title: 'Project 2',
      description: 'Description of Project 2...',
      technologies: ['Vue', 'Firebase', 'Bootstrap'],
      image: '/assets/project2.png'
    },
    // Add more projects as needed
  };

  // Get the project details based on the projectId
  const project = projectDetails[projectId];

  return (
    <section>
      {project ? (
        <>
          <h2>{project.title}</h2>
          <img src={project.image} alt={project.title} /> {/* Display project image */}
          <p>{project.description}</p> {/* Project description */}
          <h3>Technologies Used:</h3>
          <ul>
            {project.technologies.map((tech, index) => (
              <li key={index}>{tech}</li> // List each technology used
            ))}
          </ul>
        </>
      ) : (
        <div>Project not found</div> // Display message if project is not found
      )}
    </section>
  );
}

export default ProjectDetails;

