import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom';
import { auth } from './firebase';
import { useDataLayerValue } from './DataLayer';

// scss files
import './GlobalStyles.scss';

// React components
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Checkout from './pages/Checkout/Checkout';
import Login from './pages/Login/Login';

function App() {
    const history = useHistory();
    const [{ user }, dispatch] = useDataLayerValue();

    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            console.log('User is: ', authUser);
            if (authUser) {
                dispatch({ type: 'SET_USER', user: authUser });
            } else {
                dispatch({ type: 'SET_USER', user: null });
                history.push('/login');
            }
        });
    }, []);

    return (
        <div className='App'>
            <Router>
                <Switch>
                    <Route path='/login' exact render={() => <Login />} />
                    <Route
                        path='/'
                        exact
                        render={() => (
                            <>
                                <Header />
                                <Home />
                            </>
                        )}
                    />
                    <Route
                        path='/checkout'
                        exact
                        render={() => (
                            <>
                                <Header />
                                <Checkout />
                            </>
                        )}
                    />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
