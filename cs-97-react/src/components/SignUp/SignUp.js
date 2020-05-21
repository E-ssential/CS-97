import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';


const SignUp = ({isSignUp}) => {
    return(

        isSignUp ?
        (
        <div className='sign-up-page'>
            <h1>Sign Up</h1>
            <form>
                <div>
                    <label for='email'>Email</label>
                    <input type="email" id="email" name="email"
                    
                </div>
            </form>


        </div>



        )
        :

        (

        <div className='sign-up-page'>
            <h1>Login</h1>



        </div>





        )
        
    );
}

export default SignUp;