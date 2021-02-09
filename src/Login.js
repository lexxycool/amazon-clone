import React, {useState} from 'react';
import './Login.css';
import {Link, useHistory} from 'react-router-dom';
import {auth}  from './firebase';

function Login() {
    const history = useHistory();

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');

    const signIn = event => {
        event.preventDefault();
        // some firebase login 
        auth.signInWithEmailAndPassword(email, password)
        .then(auth => {
            history.push('/')
        } )
        .catch(error => alert(error.message))

    }

    const register = event => {
            event.preventDefault();
        // do some fancy firebase register

        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // successfully created a user with email and password
                console.log(auth);
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img className='login_logo' src='https:/upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt=''/>
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>
            
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={event => setEmail(event.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={event => setPassword(event.target.value)} />

                    <button className='login__signInButton' onClick={signIn}>Sign In</button>
                    
                   <button className='login__registerButton' onClick={register}>Create your Amazon Account</button>
               </form>

            </div>

        </div>
    )
}

export default Login
