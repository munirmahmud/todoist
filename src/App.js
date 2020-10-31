import React from 'react';
import './App.scss';
import Content from './components/layouts/Content';
import { Header } from './components/layouts/Header';
import { ProjectsProvider, SelectedProjectProvider } from './context';


const App = () => (
    <SelectedProjectProvider>
        <ProjectsProvider>
            <Header />
            <Content />
        </ProjectsProvider>
    </SelectedProjectProvider>
)

export default App;
