import React, { useState } from "react";
import "./ViewListings.css";
import searchIcon from '../../icons/searchIcon.png';
const ListingSearch = ({ fetchListings }) => {
  const [searchItem, setItem] = useState("");

  const OnSubmit = (e) => {
    e.preventDefault();

    if (!searchItem) {
      fetchListings();
    } else {
      const data = {
        item: searchItem,
      };
      fetchListings(data);
    }
  };

  return (
    <div className="view-search">
      <form onSubmit={OnSubmit}>
        <div className="view-input">
        
        <input
          type="text"
          placeholder="What are you looking for?"
          onChange={(e) => {
            setItem(e.target.value);
          }}
        />
       <button type="submit"><img src={searchIcon} className='view-icon' /></button>
        </div>
      </form>
    </div>
  );
};

export default ListingSearch;
