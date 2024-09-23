import React from 'react';
import { useParams } from 'react-router-dom';

// Project details page for specific project information
function ProjectDetails() {
  const { projectId } = useParams(); // Get the project ID from the URL

  // Placeholder data for project details; in a real app, this would be fetched from an API or database
  const projectDetails = {
    '1': {
      title: 'WeForecast',
      description: 'This is a weather dashboard application that allows users to search for the current weather and 5-day forecast of multiple cities. The app uses the OpenWeather API to retrieve weather data and dynamically updates the HTML and CSS to display the information. The application also stores the search history using localStorage so users can easily access previous searches.',
      technologies: ['JavaScript', 'CSS', 'HTML', 'OpenWeather API'],
      image: '/assets/WeForecast.png'
    },
    '2': {
      title: 'Blog-Post9',
      description: 'A two-page website where users will input and view blog posts. It includes building a content form, dynamically rendering blog posts, and implementing a light/dark mode toggle.',
      technologies: ['JavaScript', 'CSS', 'HTML', 'Font-Awesome'],
      image: '/assets/Blog-Post9.png'
    },
    '3': {
      title: 'VibesCast',
      description: 'Our motivation is to give users songs to listen to based on the weather for enjoyment purposes and relaxation before their day starts.',
      technologies: ['JavaScript', 'CSS', 'HTML', 'Open Meteo API', 'Spotify API', 'Bulma', 'DayJs'],
      image: '/assets/VibesCast.png'
    },
    '4': {
      title: 'Paws2Doors',
      description: '“Paws to Doors” is a pet adoption agency website designed to help unite paws with loving owners. Created with love, the site facilitates a practical and accessible way for pet lovers to find and adopt pets, and for pet owners to find homes for pets in need.',
      technologies: ['Sequelize ORM', 'Handlebars', 'Express Js', 'PostgreSQL', 'Node js', 'Bootstrap', 'Dog & Cat API'],
      image: '/assets/Paws2Doors.png'
    },
    '5': {
      title: 'Task-Mngr',
      description: 'A simple task board application that allows a team to manage project tasks. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.',
      technologies: ['JavaScript', 'CSS', 'DayJs', 'jQuery', 'Bootstrap'],
      image: '/assets/Task-Mngr.png'
    },
    '6': {
      title: 'First Portfolio',
      description: 'A portfolio with contact information where I showcase my work  to fellow developers and future employers.',
      technologies: ['CSS', 'HTML',],
      image: '/assets/First Portfolio.png'
    },
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

