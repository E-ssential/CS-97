import React, {useState, useEffect } from 'react';
import './ViewListings.css';

const ListingItem = ({listingData}) => {

const parsedData=JSON.parse(listingData);
return(
    <div className='Item-Container'>
        <p>{parsedData.item}</p>
        <p>{parsedData.quantity}</p>
        <p>{parsedData.username}</p>
    </div>
)
}
export default ListingItem;