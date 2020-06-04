import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ELogo from "../../icons/E-logo.png";
import "./NavBar.css";
import axios from "axios";

const NavBar = ({ isAuth, username, setAuth, checkLogin }) => {
  const logOut = () => {
    axios
      .get("http://localhost:5000/users/logout", { withCredentials: true })
      .then((res) => {
        setAuth(false);
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    if (!username) {
      checkLogin();
    }
  }, []);

  return isAuth ? (
    <div className="nav-bar">
      <div className="nav-left">
        <div className='nav-logo'>
          <Link to="/">
            <img
              src={ELogo}
              alt="Essential-logo"
              className='e-logo'
            />
          </Link>
          
        </div>
        <Link to="/listingsForm">
          <div className='nav-button'>Listing Form</div>
        </Link>
        <Link to="/listingspage">
        <div className='nav-button'>View Listing</div>
        </Link>
        <Link to="/selectRoom">
        <div className='nav-button'>Chat</div>
        </Link>
      </div>
      

      <div className="nav-right">
        
        
        <Link to="/profile">
        <div className='nav-button'>Profile</div>
        </Link>
        <Link to="/">
        <div className='nav-button' onClick={logOut}>Sign Out</div>
        </Link>
      </div>
    </div>

  ) : (

    <div className="nav-bar">
      <div className="nav-left">
        <div className='nav-logo'>
          <Link to="/">
            <img
              src={ELogo}
              alt="Essential-logo"
              className='e-logo'
            />
          </Link>
        </div>
        <Link to="/listingspage">
          <div className='nav-button'>View Listing</div>
        </Link>
      </div>




      <div className="nav-right">
        
        <Link to="/login">
          <div className='nav-button'>Sign In</div>
        </Link>
      </div>
    </div>

  );
};

export default NavBar;
