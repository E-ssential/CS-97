import React, { useState, useEffect } from "react";

const UserInfo = ({ userData }) => {
  return (
    <div className="user-info">
      <div className="user-slot">
        <div className="user-label">User ID: </div>
        <p className="user-data">{userData[0]}</p>
      </div>
      <div className="user-slot">
        <div className="user-label">Username:</div>
        <p className="user-data">{userData[1]}</p>
      </div>
      <div className="user-slot">
        <div className="user-label">Email: </div>
        <p className="user-data">{userData[2]}</p>
      </div>
      
    </div>
  );
};

export default UserInfo;
