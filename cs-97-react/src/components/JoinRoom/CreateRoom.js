import React, { useState } from "react";
import axios from "axios";
import "./RoomManager.css";
import Xbutton from "../../icons/grayX.png";
import addIcon from '../../icons/add_circle.png';
const CreateRoom = ({ setStatus, setFetch}) => {
  const [room, setRoom] = useState("");
  const [seen, setSeen] = useState(false);
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

  const toggleForm = (e) => {
    e.preventDefault();
    setSeen(!seen);
  }

  return (
    <div className="room-create">
      <div className='room-create-nav'>
        <p>Join a room or create your own!</p>
        <img src={addIcon} className='create-room' alt="Delete Item" onClick={toggleForm}/>

      </div>
      


      {
      
        seen ? 
      <div className='create-popup'>

      <div className='room-x-button'>
        <img src={Xbutton} alt="Delete Item" onClick={toggleForm}/>
      </div>

      <form  onSubmit={addRoom} className='create-form'>

        <input
          required
          placeholder="Create your own room"
          className="roomkey"
          type="text"
          onChange={(event) => setRoom(event.target.value)}
        />
        <button>Create</button>
      </form>
      </div>

      :
      null
    }
      


    </div>
  );
};



export default CreateRoom;
