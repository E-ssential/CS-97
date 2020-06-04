import React, { useState, useEffect } from "react";
import "./ListingForm.css";
import axios from "axios";

const ListingsForm = ({ userData }) => {
  const user = userData[1];
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [address, setAddress] = useState("");
  const [status, setStatus] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const requestOptions = { user, item, quantity, address };

    axios
      .post("http://localhost:5000/listings/add", requestOptions, {
        withCredentials: true,
      })
      .then((res) => {
        setStatus(res.data);
      })
      .catch((err) => {
        console.log(err.response);
        setStatus(err.response.data);
      });
  };

  return (
    <div className="listing-form">
      <div className="listing-heading">
        <h1> Listing Form</h1>
        <div className="listingBut">
          {/* <form onSubmit={this.handleSubmit}> */}

          <form onSubmit={onSubmit}>
            <p>{status}</p>
            <div>
              <label>
                
                <input
                  type="text"  placeholder="Item"
                  onChange={(event) => setItem(event.target.value)}
                  required
                />
              </label>
            </div>

            <div>
              <label>
                {/* Quantity */}
                <input
                  type="number"
                  placeholder="Quantity"
                  min="0"
                  step="1"
                  onChange={(event) => setQuantity(event.target.value)}
                  required
                />
              </label>
            </div>

            <div className="listings-info">
              <label>
                
                <input
                  type="text" placeholder="Address"
                  onChange={(event) => setAddress(event.target.value)}
                  required
                />
              </label>
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ListingsForm;
