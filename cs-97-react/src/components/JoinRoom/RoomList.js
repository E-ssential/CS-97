import React from "react";
import "./RoomManager.css";
import RoomItem from "./RoomItem";

const RoomList = ({ allRooms, setRoom, userName }) => {
  const isValid = allRooms.length > 0;

  return isValid ? (
    <div className="room-list">
        {allRooms.map((room) => (
          <div className="room-item">
            <RoomItem userName={userName} roomName={room} />
          </div>
        ))}
     </div>
  ) : (
    <div className="room-list">
      <p>
        Oops. Looks like you have no room history. Join a room to get started
      </p>
    </div>
  );
};


            //   <div className='view-list-header'>
            //     <div className="item-name">
            //         Item Name
            //     </div>
            //     <div className="item-quantity">
            //         Amount
            //     </div>
                
            //     <div className="item-user">
            //         Posted By
            //     </div>

            // </div>

export default RoomList;
