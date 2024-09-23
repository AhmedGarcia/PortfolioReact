// import React from 'react';

// // Project component to display details for a single project
// function Project({ title, image, deployedLink, githubLink }) {
//     return (
//       <div className="project">
//         <h3>{title}</h3> {/* Display project title */}
//         <img src={image} alt={`${title} screenshot`} /> {/* Project screenshot */}
//         <p>
//           <a href={deployedLink} target="_blank" rel="noopener noreferrer">View Project</a> {/* Link to deployed project */}
//           <br />
//           <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a> {/* Link to GitHub repo */}
//         </p>
//       </div>
//     );
//   }
  
//   export default Project;

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation

// Project component to display details for a single project
function Project({ id, title, image, deployedLink, githubLink }) {
  return (
    <div className="project">
      <h3>{title}</h3> {/* Display project title */}
      <img src={image} alt={`${title} screenshot`} /> {/* Project screenshot */}
      <p>
        {/* Link to the deployed project */}
        <a href={deployedLink} target="_blank" rel="noopener noreferrer">
          View Project
        </a>
        <br />
        {/* Link to GitHub repository */}
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          GitHub Repo
        </a>
        <br />
        {/* Link to Project Details */}
        <Link to={`/portfolio/${id}`}>View Project Details</Link> {/* Internal link for project details */}
      </p>
    </div>
  );
}

export default Project;

