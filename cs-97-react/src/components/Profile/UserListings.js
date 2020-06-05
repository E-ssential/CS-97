import React, { useEffect } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import UserItem from "./UserItem";
import "./ViewProfile.css";

const UserListings = ({ userListings, setFetch, setStatus, status }) => {
  const isValid = userListings.length > 0;


 

  return isValid ? (
    <div className='mylist'>
      <div className="Header">
          <h2>My Listings</h2>
      </div>

      <div className='mylist-header'>
        <div className="profile-item-header">
            Item Name
        </div>
        <div className="profile-quantity-header">
            Amount
        </div>
        <div className="profile-x-header">
            Remove Listing
        </div>

      </div>

      {/* <div className='Item-Container' >
        <div className="profile-item-name">
            <p>Item Name</p>
        </div>
        <div className="profile-item-quantity">
            <p>Amount</p>
        </div>
        <div className='profile-item-delete'>
            Remove Item
        </div>
    </div> */}

      <div className="profile-list">
        {userListings.map((item, i) => (
            <UserItem ItemData={item} setFetch={setFetch} key={i}/>
        ))}
      </div>
    </div>

  ) : (
    <div className="profile-list">
    <p>
      Looks like you haven't made any listings yet. Go to Listing Form to submit
      a listing!
    </p>
    </div>
  );
};

export default UserListings;
