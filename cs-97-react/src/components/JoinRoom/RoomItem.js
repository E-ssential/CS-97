import React from "react";
import "./RoomManager.css";
import "./RoomItem.css";
import { Link } from "react-router-dom";

const RoomItem = ({ roomName, userName }) => {
  return (
    <Link to={`/chat/?name=${userName}&room=${roomName}`}>
      <button className="room-button" type="submit">
        {roomName}
      </button>
    </Link>
  );
};
export default RoomItem;
