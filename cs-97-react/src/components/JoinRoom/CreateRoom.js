import React, { useState}from 'react';
import axios from 'axios';
import './RoomManager.css';




const CreateRoom = ({setStatus, setFetch, statusMessage }) => {
    const [room, setRoom] = useState("");

    
    // submitData();
    const addRoom = async (e) => {

        e.preventDefault();
        const data = {
            newRoom : room
        }
        await axios.post('http://localhost:5000/users/addRoom', data, {withCredentials: true})
        .then(async res => {
            await setStatus(res.data);
            await setFetch(true);
        })
         .catch(async err =>{
            await setStatus(err.response.data);
        })
        
        
    }

    const addRoomToProfile = async (data) => {
        
    }

    return(

        <div className='create-room'>
            <p>{statusMessage}</p> 
            <form onSubmit={addRoom}>
                <input required placeholder='Create a room' className='joinInput' type='text' onChange={(event) => setRoom(event.target.value)}/>
                <button className="button" type='submit'>Create</button>
            </form>
        
        </div>
            
        
    )
}

export default CreateRoom;