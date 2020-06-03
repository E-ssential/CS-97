import React from 'react';
import './RoomManager.css';
import ScrollToBottom from 'react-scroll-to-bottom';
import RoomItem from './RoomItem';


const RoomList = ({allRooms, setRoom, userName}) => {
    const isValid = allRooms.length > 0;

    return(
        isValid ? 

        (
            <div className="room-list">
                <ScrollToBottom>
                    {allRooms.map( (room, i) => 
                    <div className="room-item" key={i}>
                        <RoomItem userName={userName} roomName={room}/>
                    </div>

                    )}

                </ScrollToBottom>
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