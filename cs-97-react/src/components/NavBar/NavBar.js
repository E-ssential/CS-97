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
        <Link to="/listingsForm">Listing Form </Link>
        <Link to="/viewListing">View Listings</Link>
        <Link to="/selectRoom"> Chat </Link>
      </div>
      

      <div className="nav-right">
        
        
        <Link to="/profile"> Profile </Link>
        <Link to="/" onClick={logOut}>
        Sign Out
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
        <Link to="/viewListing">View Listing</Link>
      </div>




      <div className="nav-right">
        
        <Link to="/login">Sign In</Link>
      </div>
    </div>

  );
};

export default NavBar;
