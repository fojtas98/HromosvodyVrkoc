import React, { useState } from 'react';

import Header from './Header.js';
import Content from './Content.js';

import './style.css';


const App = () => {

    const [admin, setAdmin] = useState(false);

    return (
        <div>
            <Header setAdmin={setAdmin} />
            <Content admin={admin} />
        </div>
    )
}

export default App;