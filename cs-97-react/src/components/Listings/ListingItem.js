import React, {useState, useEffect } from 'react';
import './ViewListings';

const ListingItem = ({listingData}) => {
console.log(listingData);
const parsedData=JSON.parse(listingData);
return(
    <div className='ListingItem'>
        <p>{parsedData.item}</p>
        
    </div>
)
}
export default ListingItem;