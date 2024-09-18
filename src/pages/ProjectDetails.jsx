import React from 'react';
import { useParams } from 'react-router-dom';

function ProjectDetails() {
    const { projectId } = useParams();

    return (
        <div>
            <h2>Project Details for {projectId}</h2>
            {/* Add project-specific details here */}
        </div>
    );
}

export default ProjectDetails;
