
import React, {useState, useEffect } from 'react';
import './ListingItem.css';

const ListingItem = ({listingData}) => {

const parsedData=JSON.parse(listingData);
return(
  
    
   

       
   
  
        /* <div className="Item-Container">
                
                
            <div className="item">
                <h2>Item</h2>
                
            </div>


            <div className="item">
                <h2>Quantity</h2> 
                
            </div>

            <div className="item">
                <h2>User</h2>
            
            </div>



        </div> */
        
        <div className="Item-Container">
            
            
                <div className="item">
                    {/* <h2>Item</h2> */}
                    <p>{parsedData.item}</p>
                </div>
        
            


           
                <div className="item">
                    {/* <h2>Quantity</h2>  */}
                     <p>{parsedData.quantity}</p>
                </div>
        
            


         
                <div className="item">
                    {/* <h2>User</h2> */}
                    <p>{parsedData.username}</p>
                </div>
        
           

        </div>
    


        
        
   
  
)
}
export default ListingItem;

