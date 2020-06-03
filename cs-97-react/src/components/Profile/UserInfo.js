import React, { useState, useEffect } from "react";
import "./Userinfo.css";

const UserInfo = ({ userData }) => {
  return (
    <div className="container">
      <div className="information">
        <h1 className="myId">
          UserId:
          <div className="myData"> {userData[0]} </div>
        </h1>
        <h2 className="myName">
          Username:
          <div className="myData2">{userData[1]}</div>
        </h2>
        <h3 className="myEmail">
          Email:
          <div className="myData3">{userData[2]}</div>
        </h3>
      </div>
    </div>
  );
};

export default UserInfo;
