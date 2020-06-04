import React, { useState, useEffect } from "react";
import axios from "axios";

import ListingSearch from "./ListingSearch.js";
import ListingList from "./ListingList";
import "./ViewListings.css";

const ListingsPage = () => {
  const [listings, setListings] = useState([]);
  const [isFetch, setFetch] = useState(true);

  const fetchListings = async (request) => {
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
    fetchListings();
  }, [isFetch]);

  return isFetch ? (
    <div className="view-page">
      <p>Please wait, Fetching Data...</p>
    </div>
  ) : (
    <div className="view-page">

      <div className='view-header'>
      </div>
      <div className="view-body">
        <ListingSearch fetchListings={fetchListings} />
        <ListingList allListings={listings} />

      </div>
      <div className='view-footer'></div>
        
      
    </div>
  );
};

export default ListingsPage;
