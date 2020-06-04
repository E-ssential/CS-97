<<<<<<< HEAD
=======

>>>>>>> 4eb1bce8b6019469181d1af4268543c0711bfd5c
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
    <div className="viewListings">
      <p>Please wait, Fetching Data...</p>
    </div>
  ) : (
    <div className="viewListings">
      <div className="searchBar">Looking for an Item?</div>
      <ListingSearch fetchListings={fetchListings} />
      <div className="Listing-head">Essential Goods Currently Available</div>
      <ListingList allListings={listings} />
    </div>
  );
};

export default ListingsPage;
<<<<<<< HEAD
=======

>>>>>>> 4eb1bce8b6019469181d1af4268543c0711bfd5c
