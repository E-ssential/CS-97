import React from "react";
import "./RoomManager.css";
import { Link } from "react-router-dom";

const RoomItem = ({ roomName, userName }) => {


  function goToChat() {
    const newlocation =`http://localhost:3000/chat/?name=${userName}&room=${roomName}`;
  
    window.location.replace(newlocation);
  }



  return (
    <div className="room-item">
      <div className="room-link">
        <a onClick={ (e) => {goToChat()}} > {roomName} </a>
      </div>
    </div>
  );
};
export default RoomItem;
