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

    <div className='view-item'>
      <div className="item-name">
        {parsedData.item}
      </div>
      <div className="item-quantity">
        {parsedData.quantity}
      </div>
      
      <div className="item-user" >
        <a onClick={ (e) => {goToChat(parsedData)}} > {parsedData.username} </a>
      </div>

        
    </div>

    // </body>
  );
};
export default ListingItem;
