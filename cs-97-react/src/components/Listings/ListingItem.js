
import React, {useState, useEffect } from 'react';
import './ViewListings.css';

const ListingItem = ({listingData}) => {

const parsedData=JSON.parse(listingData);
return(
    // <body>
    // <div className="row">
    //     <div className="column">
    //         <h1>Item</h1>
    //         <p>{parsedData.item}</p>
    //     </div>
    

    
    //     <div className="column">
    //         <h1>Quantity</h1>
    //      {/* <p>{parsedData.quantity}</p> */}
    //     </div>

    //     <div className="column">
    //         <h1>User</h1>
    //      {/* <p>{parsedData.quantity}</p> */}
    //     </div>

       
    // </div>
   

       
     <div className='Item-Container'>
    
        <p>{parsedData.item}</p>
       
        <p>{parsedData.quantity}</p>
        <p>{parsedData.username}</p>
        </div>
        
   
    // </body>
)
}
export default ListingItem;

