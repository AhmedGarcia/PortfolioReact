import React from 'react';

// Resume page component listing proficiencies and providing a download link
function Resume() {
  return (
    <section>
      <h2>Resume</h2>
      <p>
        Download my resume <a href="/resume.pdf" className="resume-link">here</a>

      </p> {/* Link to download the resume */}
      <h3>Proficiencies</h3>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>CSS</li>
        <li>HTML</li>
        {/* Add more proficiencies as needed */}
      </ul>
    </section>
  );
}

export default Resume;
