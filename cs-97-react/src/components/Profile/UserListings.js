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


      <ScrollToBottom>
        {userListings.map((item, i) => (
            <UserItem ItemData={item} setFetch={setFetch} key={i}/>
        ))}
      </ScrollToBottom>
    </div>

  ) : (
    <p>
      Looks like you haven't made any listings yet. Go to Listing Form to submit
      a listing!
    </p>
  );
};

export default UserListings;
