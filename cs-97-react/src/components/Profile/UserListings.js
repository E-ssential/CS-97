import React, { useEffect } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import UserItem from "./UserItem";

import "./ViewProfile.css";

const UserListings = ({ userListings }) => {
  const isValid = userListings.length > 0;

  return isValid ? (
    <ScrollToBottom>
      <div className="Header">
        <h2>My Listings</h2>
      </div>
      <div className="header2">
        -----------Item ID------------------ Item Name----Quantity----Username{" "}
      </div>
      {userListings.map((item, i) => (
        <div className="UserListings" key={i}>
          <UserItem ItemData={item} />
        </div>
      ))}
    </ScrollToBottom>
  ) : (
    <p>
      Looks like you haven't made any listing yet. Go to Listing Form to submit
      a listing!
    </p>
  );
};

export default UserListings;
