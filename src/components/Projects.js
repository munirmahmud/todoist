import React, { useState } from 'react';
import { useProjectsValue, useSelectedProjectsValue } from '../context';

export const Projects = ({activeValue = null}) => {
    const [active, setActive] = useState(activeValue);
    const { setSelectedProject } = useSelectedProjectsValue();
    const {projects} = useProjectsValue();

    return (
        projects && projects.map(project => (
            <li 
                key={project.projectId} 
                data-doc-id={project.docId} 
                data-testid="project-action" 
                className={active === project.projectId ? 'sidebar__project active' : 'sidebar__project'} onClick={() => {setActive(project.projectId);setSelectedProject(project.projectId)}}>
                    {JSON.stringify(project)}
            </li>
        ))
    );
}
