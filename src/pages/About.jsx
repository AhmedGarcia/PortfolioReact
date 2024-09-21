import React from 'react';

// About Me component
function About() {
  return (
    <section>
      <h2>About Me</h2>
      <img src="/assets/Screenshot 2024-08-17 080120.png" alt="Your avatar" /> {/* Avatar */}
      <p>Hello! Mi name is Ahmed Garcia. I am a passionate Full Stack Developer with a strong foundation in JavaScript and experience working with a wide range of technologies including PostgreSQL, Express, React, MongoDB, and Mongoose. I specialize in building dynamic and interactive web applications, focusing on seamless user experiences and robust back-end systems.<br></br>

My skill set spans across both front-end and back-end development. On the front-end, I leverage React to create responsive and intuitive user interfaces, utilizing modern libraries and frameworks to deliver polished and efficient applications. On the back-end, I have expertise in building RESTful APIs and GraphQL services using Node.js and Express. I’m proficient in managing databases with both relational systems like PostgreSQL and NoSQL systems like MongoDB, using Mongoose ORM for data modeling.<br></br>

I am experienced in implementing authentication and authorization mechanisms using JWT, and I emphasize secure coding practices throughout my work. I have a proven track record of deploying and maintaining applications on platforms like Render and Netlify, ensuring optimal performance and accessibility.<br></br>

Recent projects include a social book review platform where I architected the back-end with GraphQL and JWT authentication, and a progressive web application utilizing service workers and IndexedDB for offline functionality. I am committed to continuous learning and am always eager to take on new challenges, refine my skills, and contribute to innovative projects.</p> {/* Bio */}
    </section>
  );
}

export default About;