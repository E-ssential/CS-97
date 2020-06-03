import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../icons/oklogo.png";
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
    // IS AUTHORIZED
    <div className="nav-bar">
      <div className="nav-left">
        <Link to="/">
          <img
            src={Logo}
            alt="Essential-logo"
            width="500"
            height="400"
            className="EssentialLogo"
          />
        </Link>
      </div>

      <div className="nav-right">
        <Link to="/listingsForm">
          <button className="nav-button">Listing Form</button>
        </Link>
        <Link to="/listingspage">
          <button className="nav-button">View Items</button>
        </Link>
        <Link to="/selectRoom">
          <button className="nav-button">Chat</button>
        </Link>
        <Link to="/profile">
          <button className="nav-button">Profile</button>
        </Link>
        <Link to="/">
          <button className="nav-button" onClick={logOut}>
            Log Out
          </button>
        </Link>
      </div>
    </div>
  ) : (
    // NOT AUTHORIZED
    <div className="nav-bar">
      <div className="nav-left">
        <Link to="/">
          <button className="nav-button">Home Page</button>
        </Link>

        <Link to="/listingspage">
          <button className="nav-button">View Items</button>
        </Link>
      </div>

      <div className="nav-right">
        <Link to="/login">
          <button className="nav-button">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
