import React from 'react';

// Resume component that provides a resume download link and lists proficiencies

function Resume() {
    return (
        <section>
            <h2>Resume</h2>
            <p>Download my resume <a href="path_to_resume.pdf" download>here</a></p>
            <h3>Proficiencies</h3>
            <ul>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.js</li>
                {/*TODO add more proficiencies */}
            </ul>
        </section>
    );
}

export default Resume;