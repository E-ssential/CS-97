import React, { useState, useEffect } from "react";
import axios from "axios";
import RoomList from "./RoomList";
import CreateRoom from "./CreateRoom";
import Chat from "../Chat/Chat";
import "./RoomManager.css";

const RoomManager = ({ userData, checkLogin }) => {
  const [roomList, setRoomList] = useState([]);
  const [isFetch, setFetch] = useState(true);
  const [Room, setRoom] = useState("None");
  const [status, setStatus] = useState("");
  const userName = userData[1];

  const fetchRooms = async () => {
    await axios
      .get("http://localhost:5000/users/getRooms", { withCredentials: true })
      .then(async (res) => {
        await setRoomList(res.data.sort());
        await setFetch(false);
      })
      .catch(async (err) => {
        await setFetch(false);
      });
  };

  useEffect(() => {
    fetchRooms();
  }, [isFetch]);

  return isFetch ? (
    <div className="room-manager">
      <p>Please wait, Loading Chat Rooms...</p>
    </div>
  ) : (
    <div className="room-manager">
      <div className="room-status">
        <p>{Room}</p>
      </div>
      <RoomList userName={userName} allRooms={roomList} setRoom={setRoom} />
        
      
      <CreateRoom
      setFetch={setFetch}
      setStatus={setStatus}
      statusMessage={status}
      />
   </div>
  );
};

export default RoomManager;
