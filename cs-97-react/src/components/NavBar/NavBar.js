import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';


const NavBar = () => {
    return(
        <div className='nav-bar'>
            <div className='nav-start'>
                <Link to='/' >
                        <button className="button" type='submit'>Home Page</button>
                </Link>

                <Link to='/listing' >
                        <button className="button" type='submit'>Listing</button>
                </Link>

                <Link to='/joinRoom' >
                        <button className="button" type='submit'>Chat</button>
                </Link>

            </div>

            <div className='nav-end'>
                <Link to='/signUp' >
                        <button className="button" type='submit'>SignUp</button>
                </Link>

                <Link to='/Login' >
                        <button className="button" type='submit'>Login</button>
                </Link>

            </div>
        </div>
    )
}

export default NavBar;