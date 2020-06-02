import React from 'react';
import './ViewListings.css';
import ScrollToBottom from 'react-scroll-to-bottom';
import ListingItem from './ListingItem';



const ListingList = ({allListings, userData}) => {
const isValid = allListings.length > 0;
    return(
        isValid ?

        (
        <ScrollToBottom>
            {allListings.map((listing, i)=>

                <div className='ListingItem' key={i}>

                    <ListingItem listingData={listing}/>
                    
                </div>

            )}


        </ScrollToBottom>

        )

        :

        (
            <p>No Result Found</p>


        )
    )
}



export default ListingList;