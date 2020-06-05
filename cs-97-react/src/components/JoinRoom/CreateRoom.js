import React, { useState } from "react";
import axios from "axios";
import "./RoomManager.css";

import addIcon from '../../icons/add_circle.png';

const CreateRoom = ({ setStatus, setFetch}) => {
  const [room, setRoom] = useState("");

  // submitData();
  const addRoom = async (e) => {
    e.preventDefault();
    const data = {
      newRoom: room,
    };
    await axios
      .post("http://localhost:5000/users/addRoom", data, {
        withCredentials: true,
      })
      .then(async (res) => {
        await setStatus(res.data);
        await setFetch(true);
      })
      .catch(async (err) => {
        await setStatus(err.response.data);
      });
  };

  const addRoomToProfile = async (data) => {};

  return (
    <div className="room-create">
      
      <form  onSubmit={addRoom}>
        <input
          required
          placeholder="Create your own room"
          className="roomkey"
          type="text"
          onChange={(event) => setRoom(event.target.value)}
        />
        
        
        {/* <button><img className="room-create-img" src={addIcon} onClick={addRoom}/></button> */}
        
      </form>
    </div>
  );
};



export default CreateRoom;
