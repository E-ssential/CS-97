import React, {useState, useEffect } from 'react';
import './ViewProfile.css';

const ListingItem = ({ItemData}) => {

const parsedData=JSON.parse(ItemData);
return(
    <div className='Item-Container'>
        <p>{parsedData._id}</p>
        <p>{parsedData.item}</p>
        <p>{parsedData.quantity}</p>
        <p>{parsedData.username}</p>
    </div>
)
}
export default ListingItem;