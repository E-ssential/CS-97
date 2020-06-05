import React, { useState } from "react";
import axios from "axios";
import "./RoomManager.css";
import "./CreateRoom.css";
import addIcon from '../../icons/add_circle.png';

const CreateRoom = ({ setStatus, setFetch, statusMessage }) => {
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
    <div className="new-room">
      <p1>{statusMessage}</p1>
      <form  onSubmit={addRoom}>
        <input
          required
          placeholder="Create your own room"
          className="roomkey"
          type="text"
          onChange={(event) => setRoom(event.target.value)}
        />
        
        
        <img className="creator" src={addIcon} type="submit"/>
        
      </form>
    </div>
  );
};



export default CreateRoom;
