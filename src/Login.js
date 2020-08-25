import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import './Login.css'
import { auth } from './firebase'
import { useState } from 'react'


function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = e => {
        e.preventDefault(); // stops the refresh
        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                // logged in, redirect to homepage...
                history.push('/')
            })
            .catch(e => alert(e.message));
    }

    const register = e => {
        e.preventDefault(); // stops the refresh

        auth.createUserWithEmailAndPassword(email, password)
            .then(auth => {
                // created a user and logged in, redirect to homepage
                history.push('/')
            })
            .catch(e => alert(e.message))
    }
    return (
        <div className="login">
            <Link to="/">
                <img
                    className="login__logo"
                    src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo.png"
                    alt=""
                />
            </Link>
            <div className="login_container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <h5>Password</h5>
                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />

                    <button onClick={login} type="submit" className="login__signInButton">
                        Sign in
                    </button>
                </form>

                <p>
                    By signing-in you agree to Amazon's Conditions of Use and Sale.
                    Please see our Privacy Notice, our Coolies Notice and our interest-Based Ads Notice.
                </p>
                <button onClick={register} className="login_registerButton">
                    Create you Amazon Account
                </button>
            </div>
        </div>
    )
}

export default Login;
//     return(
//         <div class="login">
//             <Link to = "/">
//                 <img
//                     className="login__logo"
//                     src="http://pngimg.com/uploads/amazon/amazon_PNG21.png"
//                     alt=""/>
//             </Link>
//             <div className="login_container">
//                 <h1>Sign in</h1>
//                <form>
//                    <h5>E-mail:</h5>
//                    <input value={email} onChange={event => setEmail(event.target.value)} type="email"/>
//                    <h5>Password:</h5>
//                    <input value={password} onChange={event => setPassword(event.target.value)} type="text"/>
//                    <button onclick={login} type = "submit" className= "login__signInButton">Sign In</button>
//                </form>
//                 <p>
//                     By signing in you are agree Amazom terms and conditions
//                 </p>
//                 <button onClick={register} className = "login_registerButton"> Create your Amazon Account</button>
//             </div>
//         </div>
//     )
// }
// export default Login