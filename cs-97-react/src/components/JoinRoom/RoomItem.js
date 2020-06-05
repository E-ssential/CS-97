import React from "react";
import "./RoomManager.css";
import "./RoomItem.css";
import { Link } from "react-router-dom";

const RoomItem = ({ roomName, userName }) => {
  return (
   
    <Link to={`/chat/?name=${userName}&room=${roomName}`}>
      <div className="room">
      <button className="room-button" type="submit">
        {roomName}
      </button>
      </div>
    </Link>
  
  );
};
export default RoomItem;
