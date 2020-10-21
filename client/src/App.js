import React from 'react';

// scss files
import './GlobalStyles.scss';

// React components
import Home from './pages/Home/Home';
import Header from './components/Header/Header';

function App() {
    return (
        <div className='App'>
            <Header />
            <Home />
        </div>
    );
}

export default App;
