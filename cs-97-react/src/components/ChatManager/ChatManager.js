import React, { useState, useEffect } from "react";
import axios from "axios";
import Chat from '../Chat/Chat';
import RoomManager from '../JoinRoom/RoomManager';

const ChatManager = ({userData, checkLogIn}) => {
    const [room, setRoom] = useState("None");
    

    useEffect(() => {
        
      }, [room]);
    return(
        <div className='chat-manager-page'>
            <RoomManager userData={userData} checkLogin={checkLogIn} room={room} setRoom={setRoom}/>
            <Chat/>
        </div>
    )

}

export default ChatManager;