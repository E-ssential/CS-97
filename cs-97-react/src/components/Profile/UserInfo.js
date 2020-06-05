import React, { useState, useEffect } from "react";
import "./ViewProfile.css";

const UserInfo = ({ userData }) => {
  return (
    <div className="user-info">
      <div>
        <div className= "user-info-title"><p>User ID:&nbsp;</p></div>
        <div className= "user-info-data"><p> {userData[0]}</p></div>
      </div>
      <div>
        <div className= "user-info-title"><p>Username:&nbsp;</p></div>
        <div className= "user-info-data"><p>{userData[1]}</p></div>
      </div>
      <div>
        <div className= "user-info-title"><p>Email:&nbsp;</p></div>
        <div className= "user-info-data"><p>{userData[2]}</p></div>
      </div>
    </div>
  );
};

export default UserInfo;
