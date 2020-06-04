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
        <ScrollToBottom>
            {allListings.map((listing, i)=>

                <div className='ListingItem' key={i}>

                    <ListingItem listingData={listing}/>
                    
                </div>

            )}


        </ScrollToBottom>
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