import React from 'react';
import './JoinRoom.css';
import ScrollToBottom from 'react-scroll-to-bottom';
import RoomItem from './RoomItem';

const RoomList = ({allListings}) => {
    const isValid = allListings.length > 0;

    return(
        isValid ? 

        (
            <div className="room-list">


                <p>{allListings}</p>
            </div>


        )

        :

        (
            <div className='room-list'>
                <p>Oops. Looks like you have no room history. Join a room to get started</p> 
            </div>
            
            
        )

    )




}

export default RoomList;