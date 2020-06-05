import React, { useState, useEffect } from "react";
import axios from "axios";
import Chat from '../Chat/Chat';
import RoomManager from '../JoinRoom/RoomManager';

const ChatManager = ({userData, checkLogIn}) => {
    
    
    return(
        <div className='chat-manager-page'>
            <RoomManager userData={userData} checkLogin={checkLogIn}/>
            <div className='chat-rooms'></div>
        </div>
    )




}

export default ChatManager;