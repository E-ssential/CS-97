import React from 'react';
import './ViewListings.css';
import ScrollToBottom from 'react-scroll-to-bottom';
import ListingItem from './ListingItem';



const ListingList = ({allListings}) => {
const isValid = allListings.length > 0;
    return(
        isValid ?

        (
        <div className="view-list">
            {allListings.map((listing)=>
                <ListingItem listingData={listing}/>

            )}

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