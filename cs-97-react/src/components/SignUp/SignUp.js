import React, { useState }from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';
import bcryptjs from 'bcryptjs';

let socket;
const SignUp = ({isSignUp}) => {

    const [username, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // console.log(username);
    // console.log(email);
    // console.log(password);


    
    return(
        isSignUp ?
        (
        <div className='sign-up-page'>
            <div className="sign-up-heading">
                <h1>Sign Up</h1>
            </div>
            <form>
                
                <div>
                    <input type="text" id="username" placeholder='Username' required
                    onChange={(event) => setName(event.target.value)}
                    minLength="8"
                    />
                </div>   
                
                <div>
                    <input type="email" id="email" placeholder='Email' required
                    onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div>
                    <input type="password" id="password" placeholder="Password" required
                    onChange={async (event) =>   setPassword(event.target.value)}
                    minLength="8"
                    />
                </div>
                
                <button type="submit" onClick={async (event) => {
                    event.preventDefault();
                    console.log(username, email, password);
                    const salt = await bcryptjs.genSalt();
                    const hashedPassword = await bcryptjs.hash(password, salt);
                    console.log(salt);
                    console.log(hashedPassword);


                }}>Sign Up</button>
                
            </form>
            <Link to='/login' >
                        Already have an account? Login
            </Link>
        </div>
        )

        :

        (

        <div className='sign-up-page'>
            <div className='sign-up-heading'>
                <h1>Login</h1>
            </div>
            <form>
            <div>
                    <input type="text" id="username" placeholder='Username' required
                    onChange={(event) => setName(event.target.value)}
                    minLength="8"
                    />
                </div>  
                <div>
                    <input type="password" id="password" placeholder="Password" required
                    onChange={(event) => setPassword(event.target.value)}
                    minLength="8"
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            <Link to='/signUp' >
                        Don't have an account? Sign Up
            </Link>
        </div>
        )
        
    );
}

export default SignUp;