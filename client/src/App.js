import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';

// scss files
import './GlobalStyles.scss';

// React components
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Checkout from './pages/Checkout/Checkout';

function App() {
    return (
        <div className='App'>
            <Router>
                <Header />
                <Switch>
                    <Route path='/' exact render={() => <Home />} />
                    <Route path='/checkout' exact render={() => <Checkout />} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
