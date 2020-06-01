import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import axios from 'axios';


const NavBar = ({isAuth, username, setAuth}) => {

    const logOut = () =>{
        axios.get('/users/logout')
        .then(res => {
            setAuth(false);
        })
        .catch(err => {
            alert(err);
            
        })
        
    }

    return(

        isAuth ?

        // IS AUTHORIZED
        (
            <div className='nav-bar'>
            <div className='nav-left'>
                <Link to='/' >
                        <button className="nav-button" >Home Page</button>
                </Link>

                <Link to='/listingsForm' >
                        <button className="nav-button" >Listing Form</button>
                </Link>
                <Link to='/listingspage' >
                        <button className="nav-button" >View Items</button>
                </Link>
                <Link to='/joinRoom' >
                        <button className="nav-button" >Chat</button>
                </Link>
            </div>

            <div className='nav-right'>

                <Link to='/' >
                        <button className="nav-button" onClick={logOut}>Log Out</button>
                </Link>

            </div>
        </div>
        
    )

    :

    // NOT AUTHORIZED
    (
        <div className='nav-bar'>
            <div className='nav-left'>
                <Link to='/' >
                        <button className="nav-button" >Home Page</button>
                </Link>

                <Link to='/listingspage' >
                        <button className="nav-button" >View Items</button>
                </Link>
            </div>

            <div className='nav-right'>

                <Link to='/login' >
                        <button className="nav-button" >Login</button>
                </Link>

            </div>
        </div>
        
    )
    )
}

export default NavBar;