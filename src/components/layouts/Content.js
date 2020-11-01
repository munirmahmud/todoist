import React from 'react';
import { Tasks } from '../Tasks';
import { Sidebar } from './Sidebar';

const Content = () => {
    return (
        <section className="container">
            <Sidebar />
            <Tasks />
        </section>
    )
}

export default Content;
