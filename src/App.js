import React from 'react';
import './App.scss';
import Content from './components/layouts/Content';
import { Header } from './components/layouts/Header';


const App = () => {
    return (
        <div>
            <Header />
            <Content />
        </div>
    )
}

export default App;
