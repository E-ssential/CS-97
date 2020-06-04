import React, { useState, useEffect } from "react";
import "./ViewProfile.css";

const UserInfo = ({ userData }) => {
  return (
    <div className="user-info">
      <div className='profile-title'> <h1>User Profile</h1></div>
      <div className="user-slot">
        <div className="user-label"><h3>User ID: {userData[0]}</h3></div>
      </div>
      <div className="user-slot">
        <div className="user-label"><h3>Username: {userData[1]}</h3></div>
      </div>
      <div className="user-slot">
        <div className="user-label"><h3>Email: {userData[2]}</h3></div>
      </div>
      
    </div>
  );
};

export default UserInfo;
