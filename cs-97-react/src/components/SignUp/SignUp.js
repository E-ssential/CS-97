import React, { useState }from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';
import axios from "axios";

const SignUp = ({isSignUp}) => {

    const [username, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // console.log(username);
    // console.log(email);
    // console.log(password);

    const submitData = e => {
        e.preventDefault();
        const userData = {
            username,
            password,
            email, 
            isSignUp
        };

        axios.post('http://localhost:5000/users/register-login', userData)
        .then(res => {
            console.log(res);
            console.log('hello');
            axios.get('http://localhost:5000/chat')
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
                console.log(err.response);
            })
        })
        .catch(err => {
            console.log(err);
            console.log(err.response);
        })

        console.log(userData);

       
    }
    
    
    
    return(
        isSignUp ?
        (
        <div className='sign-up-page'>
            <h1>Sign Up</h1>
            <form  onSubmit={submitData}> 
                <div>
                    <input type="text" name="username" placeholder='Username' required
                    onChange={(event) => setName(event.target.value)}
                    // minLength="8"
                    />
                </div>   
                
                <div>
                    <input  type="email" name="email" placeholder='Email' required
                    onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div>
                    <input type="password" name="password" placeholder="password" required
                    onChange={async (event) =>   setPassword(event.target.value)}
                    // minLength="8"
                    />
                </div>
                <button type="submit" >Sign Up</button>
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
            <form onSubmit={submitData}>
            <div>
                    <input type="text" id="username" placeholder='Username' required
                    onChange={(event) => setName(event.target.value)}
                    
                    />
                </div>  
                <div>
                    <input type="password" id="password" placeholder="Password" required
                    onChange={(event) => setPassword(event.target.value)}
                    
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