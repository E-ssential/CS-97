import axios from "axios";
import React, { useState, useEffect } from "react";
import "./ViewListings.css";

function goToChat(listing) {
  var room = listing.item + listing.username;
  const data = {
    newRoom: room,
  };

  axios.post("http://localhost:5000/users/addRoom", data, {
    withCredentials: true,
  });

  window.location.replace("http://localhost:3000/selectRoom");
}

const ListingItem = ({ listingData }) => {
  const parsedData = JSON.parse(listingData);
  return (
    // <body>
    // <div className="row">
    //     <div className="column">
    //         <h1>Item</h1>
    //         <p>{parsedData.item}</p>
    //     </div>

    //     <div className="column">
    //         <h1>Quantity</h1>
    //      {/* <p>{parsedData.quantity}</p> */}
    //     </div>

    //     <div className="column">
    //         <h1>User</h1>
    //      {/* <p>{parsedData.quantity}</p> */}
    //     </div>

    // </div>

    <div className='view-item'>
      <div className="item-name">
        {parsedData.item}
      </div>
      <div className="item-quantity">
        {parsedData.quantity}
      </div>
      
      <div className="item-user" onClick={ (e) => {goToChat(parsedData)}}>
        {parsedData.username}
      </div>

        
    </div>

    // </body>
  );
};
export default ListingItem;
