import React from 'react';

// About Me component
function About() {
  return (
    <section>
      <h2>About Me</h2>
      <img src="/assets/not pic.png" alt="Your avatar" /> {/* Avatar */}
      <p>Hello! Mi name is Ahmed Garcia. I am a passionate Full Stack Developer skilled in JavaScript, PostgreSQL, Express, React, MongoDB, and Mongoose. I build dynamic, user-focused web applications with robust front-end and back-end systems. Proficient in creating responsive interfaces using React and developing APIs and GraphQL services with Node.js and Express. Experienced in both relational (PostgreSQL) and NoSQL (MongoDB) databases, ensuring secure and efficient data management.

I excel in implementing JWT authentication and deploying apps on platforms like Render and Netlify. Recent projects include a social book review platform and a PWA with offline capabilities. I am passionate about learning new technologies and contributing to innovative solutions.</p> {/* Bio */}
    </section>
  );
}

export default About;