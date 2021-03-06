import React from 'react';
import './ViewListings.css';
import ListingItem from './ListingItem';



const ListingList = ({allListings}) => {
const isValid = allListings.length > 0;
    return(
        isValid ?

        (
        <div className="view-listing">
            <div className='view-list-header'>
                <div className="header-name">
                    Item Name
                </div>
                <div className="header-quantity">
                    Amount
                </div>
                
                <div className="header-user">
                    Posted By
                </div>

            </div>
            
            
            <div className="view-list">
                {allListings.map((listing)=>
                    <ListingItem listingData={listing}/>

                )}

            </div>
        </div>
        )

        :

        (
            <div className="view-list">
                <p>No Result Found</p>
            </div>

        )
    )
}



export default ListingList;