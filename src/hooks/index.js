import moment from 'moment';
import { useEffect, useState } from 'react';
import { firebase } from '../firebase';
import { collatedTasksExist } from '../helpers';

export const useTasks = selectedProject => {
    const [tasks, setTasks] = useState([]);
    const [archivedTasks, setArchivedTasks] = useState([]);

    useEffect(() => {
        let unSubscribe = firebase
            .firestore()
            .collection('tasks')
            .where('userId', '==', 'w0qnOplDcbUDFCMCvVCQ');

            unSubscribe = selectedProject && !collatedTasksExist(selectedProject) ? 
            (unSubscribe = unSubscribe.where('projectId', '==', selectedProject)) : 
            selectedProject === 'TODAY' ? 
            (unSubscribe = unSubscribe.where('date', '==', moment.format('DD/MM/YYYY'))) : 
            selectedProject === 'INBOX' || selectedProject === 0 ? 
            (unSubscribe = unSubscribe.where('date', '==', '')) : unSubscribe;

            unSubscribe = unSubscribe.onSnapshot(snapshot => {
                const newTasks = snapshot.docs.map(task => ({
                    id: task.id,
                    ...task.data(),
                }));

                setTasks(selectedProject === 'NEXT_7' ? newTasks.filter(task => moment(task.date, 'DD-MM-YYYY').diff(moment(), 'days') <= 7 && task.archived !== true ) : newTasks.filter(task => task.archived !== true));

                setArchivedTasks(newTasks.filter(task => task.archived !== false));
            });

            return () => unSubscribe();
        
    }, [selectedProject]);
    
    return { tasks, archivedTasks };
};



