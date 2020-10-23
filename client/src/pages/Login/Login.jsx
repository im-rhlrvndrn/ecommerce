import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../firebase';

// scss files
import './Login.scss';

const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => history.push('/'))
            .catch((err) => alert(err.message));
    };

    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth);
                history.push('/');
            })
            .catch((err) => alert(err.message));
    };

    return (
        <div className='login'>
            <Link to='/'>
                <img
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
                    alt='amazon logo'
                />
            </Link>

            <div className='loginFormContainer'>
                <h1>Sign-in</h1>
                <form>
                    <div className='inputContainer'>
                        <label htmlFor='signin_email'>Email</label>
                        <input
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            id='signin_email'
                            placeholder='Email'
                        />
                    </div>
                    <div className='inputContainer'>
                        <label htmlFor='sigin_password'>Password</label>
                        <input
                            type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            id='sigin_password'
                            placeholder='Password'
                        />
                    </div>
                    <button type='submit' onClick={login} className='amazon_full_button'>
                        Sign in
                    </button>
                </form>
                <p className='termsConditions'>By signing-in you agree to the Terms & Conditions</p>
                <button onClick={register} className='registration_button'>
                    Create your Amazon Account
                </button>
            </div>
        </div>
    );
};

export default Login;
