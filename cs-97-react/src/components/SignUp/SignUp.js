import React, { useState }from 'react';
import { Link } from 'react-router-dom';
import io from 'socket.io-client';
import './SignUp.css';

let socket;
const SignUp = ({isSignUp}) => {

    const [username, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // console.log(username);
    // console.log(email);
    // console.log(password);

    const sendForm = (event) => {
        event.preventDefault();
        socket.emit("sendRegister", {username: username, email: email, password: password}, () =>{
            setName('');
            setEmail('');
            setPassword('');
            console.log({username: username, email: email, password: password})
        }

        );
    }
    return(
        isSignUp ?
        (
        <div className='sign-up-page'>
            <h1>Sign Up</h1>
            <form>
                <div>
                    <input type="text" id="username" placeholder='Username' required
                    onChange={(event) => setName(event.target.value)}
                    minLength="8"
                    />
                </div>   
                <div>
                    <input  type="email" id="email" placeholder='Email' required
                    onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div>
                    <input type="password" id="password" placeholder="password" required
                    onChange={(event) => setPassword(event.target.value)}
                    minLength="8"
                    />
                </div>
                <button type="submit">Sign Up</button>
            </form>
            <Link to='/login' >
                        Login
            </Link>
        </div>
        )

        :

        (

        <div className='sign-up-page'>
            <h1>Login</h1>
            <form>
            <div>
                    <input type="text" id="username" placeholder='Username' required
                    onChange={(event) => setName(event.target.value)}
                    minLength="8"
                    />
                </div>  
                <div>
                    <input type="password" id="password" placeholder="password" required
                    onChange={(event) => setPassword(event.target.value)}
                    minLength="8"
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            <Link to='/signUp' >
                        Sign Up
            </Link>
        </div>
        )
        
    );
}

export default SignUp;