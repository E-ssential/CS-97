import UserInfo from "./UserInfo";
import UserListing from "./UserListings";
import UserDeleteItem from "./UserDeleteItem";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ViewProfile.css";

const ViewProfile = ({ userData, checkLogin }) => {
  const [listings, setListings] = useState([]);
  const [isFetch, setFetch] = useState(true);
  const [status, setStatus] = useState("");

  const fetchUserListings = async (request) => {
    await axios
      .post("http://localhost:5000/listings/searchItems", request, {
        withCredentials: true,
      })
      .then(async (res) => {
        await setListings(res.data);
        await setFetch(false);
      })
      .catch(async (err) => {
        await setFetch(false);
      });
  };

  useEffect(() => {
    const data = {
      username: userData[1],
    };

    fetchUserListings(data);
  }, [isFetch]);

  return isFetch ? (
    <div className="profile-page">
      <UserInfo userData={userData} />
      <p>'Please wait, Fetching Data...'</p>
    </div>
  ) : (
    <div className="profile-page">
      <div className="info">
        <UserInfo userData={userData} />
      </div>
      <div className="mylist">
        <UserListing userListings={listings} setFetch={setFetch} />
      </div>
      <div className="delete-butt">
        <UserDeleteItem
          setStatus={setStatus}
          setFetch={setFetch}
          statusMessage={status}
        />
      </div>
    </div>
  );
};

export default ViewProfile;