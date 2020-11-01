import React, { useState } from 'react';
import { FaChevronDown, FaInbox, FaRegCalendar, FaRegCalendarAlt } from 'react-icons/fa';
import { useSelectedProjectValue } from '../../context';
import { AddProject } from '../AddProject';
import { Projects } from '../Projects';

export const Sidebar = () => {
    const { setSelectedProject } = useSelectedProjectValue();
    const [active, setActive] = useState('Inbox');
    const [showProjects, setShowProjects] = useState(true);

    return (
        <div className="sidebar" data-testid="sidebar">
            <ul className="sidebar__generic">
                <li 
                    data-testid="inbox" 
                    className={active === 'inbox' ? 'active' : undefined}
                    onClick={() => {
                        setActive('inbox');
                        setSelectedProject('INBOX');
                    }}
                >
                    <div>
                        <span><FaInbox /></span>
                        <span>Inbox</span>
                    </div>
                </li>
                <li data-testid="today" className={active === 'today' ? 'active' : undefined} onClick={() => {
                        setActive('today');
                        setSelectedProject('TODAY');
                    }}>
                    <div>
                        <span><FaRegCalendar /></span>
                        <span>Today</span>
                    </div>
                </li>
                <li data-testid="next_7" className={active === 'next_7' ? 'active' : undefined} onClick={() => {
                        setActive('next_7');
                        setSelectedProject('NEXT_7');
                    }}>
                    <div>
                        <span><FaRegCalendarAlt /></span>
                        <span>Next 7 days</span>
                    </div>
                </li>
            </ul>

            <div className="sidebar__middle">
                <span><FaChevronDown /></span>
                <h2>Projects</h2>
            </div>

            <ul className="sidebar__projects">
                {showProjects && <Projects />}
            </ul>  

            {showProjects && <AddProject />}
                      
        </div>
    );
}
