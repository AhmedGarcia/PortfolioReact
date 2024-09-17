import React from 'react';

// Project component to display details for a single project
function Project({ title, image, deployedLink, githubLink }) {
    return (
      <div className="project">
        <h3>{title}</h3> {/* Display project title */}
        <img src={image} alt={`${title} screenshot`} /> {/* Project screenshot */}
        <p>
          <a href={deployedLink} target="_blank" rel="noopener noreferrer">View Project</a> {/* Link to deployed project */}
          <br />
          <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a> {/* Link to GitHub repo */}
        </p>
      </div>
    );
  }
  
  export default Project;
