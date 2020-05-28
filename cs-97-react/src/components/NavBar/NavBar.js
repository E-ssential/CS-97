import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';


const NavBar = () => {
    return(
        <div className='nav-bar'>
            <div className='nav-left'>
                <Link to='/' >
                        <button className="nav-button" type='submit'>Home Page</button>
                </Link>

                <Link to='/listingsForm' >
                        <button className="nav-button" type='submit'>Listing Form</button>
                </Link>

                <Link to='/joinRoom' >
                        <button className="nav-button" type='submit'>Chat</button>
                </Link>

            </div>

            <div className='nav-right'>

                <Link to='/login' >
                        <button className="nav-button" type='submit'>Login</button>
                </Link>

            </div>
        </div>
    )
}

export default NavBar;