import React from "react";
import "./RoomManager.css";
import { Link } from "react-router-dom";

const RoomItem = ({ roomName, userName }) => {
  return (
    <div className="room-item">
    <Link to={`/chat/?name=${userName}&room=${roomName}`}>
        {roomName}
    </Link>
    </div>
  );
};
export default RoomItem;
