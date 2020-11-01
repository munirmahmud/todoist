import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { useProjectsValue, useSelectedProjectsValue } from '../context';
import { firebase } from '../firebase';

export const SingleProject = ({project}) => {
    const [showConfirm, setShowConfirm] = useState(false);
    const { projects, setProjects } = useProjectsValue();
    const { setSelectedProject } = useSelectedProjectsValue();

    const deleteProject = docId => {
        firebase.firestore()
            .collection('projects')
            .doc(docId)
            .delete()
            .then(() => {
                setProjects([...projects]);
                setSelectedProject('INBOX');
            });
    };

    return (
        <>
            <span className="sidebar__dot">&middot;</span>  
            <span className="sidebar__project-name">{project.name}</span>
            <span 
                className="sidebar__project-delete" 
                data-testid="delete-project"
                role="button"
                onKeyDown={() => setShowConfirm(showConfirm => !showConfirm)}
                onClick={() => setShowConfirm(showConfirm => !showConfirm)}
                >
                <FaTrashAlt />
                {showConfirm && (
                    <div className="project-delete-modal">
                        <div className="project-delete-modal__inner">
                            <p>Are you sure to delete this project?</p>

                            <button type="button" onClick={() => deleteProject(project.docId)}>
                                Delete
                            </button>
                            <span 
                                onClick={() => setShowConfirm(!showConfirm)}
                                onKeyDown={(e) => {
                                    if(e.key === 'Enter') setShowConfirm(!showConfirm);
                                }}
                                tabIndex={0}
                                role="button"
                                aria-label="Cancel adding project, do not delete"
                            >Cancel</span>
                        </div>
                    </div>
                )}
            </span>
        </>
    )
}