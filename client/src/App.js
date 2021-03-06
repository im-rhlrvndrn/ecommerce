import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom';
import { auth } from './firebase';
import { useDataLayerValue } from './DataLayer';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

// scss files
import './GlobalStyles.scss';

// React components
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Cart from './pages/Cart/Cart';
import Login from './pages/Login/Login';
import Checkout from './pages/Checkout/Checkout';
import Orders from './pages/Orders/Orders';

const promise = loadStripe('pk_test_L3BcfF6ZVyoCnzXcu9jBZ72c002d0JJF5i');

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
                        path='/cart'
                        exact
                        render={() => (
                            <>
                                <Header />
                                <Cart />
                            </>
                        )}
                    />
                    <Route
                        path='/checkout'
                        exact
                        render={() => (
                            <>
                                <Header />
                                <Elements stripe={promise}>
                                    <Checkout />
                                </Elements>
                            </>
                        )}
                    />
                    <Route
                        path='/orders'
                        exact
                        render={() => (
                            <>
                                <Header />
                                <Orders />
                            </>
                        )}
                    />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
