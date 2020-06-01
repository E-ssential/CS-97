import React, { useEffect } from 'react';
import './ViewListings.css';
import ScrollToBottom from 'react-scroll-to-bottom';
import ListingItem from './ListingItem';
const ListingList = ({allListings, userData}) => {


    useEffect( () => {
       console.log("FROM THE LISTING LIST");
       
    }, [])



    return(

        <ScrollToBottom>
            {allListings.map((listing, i)=>

                <div key={i}>

                    <ListingItem listingData={listing}/>
                    
                </div>

            )}


        </ScrollToBottom>
    )
}



// class Listing extends React.Component
// {
//     constructor(props)
//     {
//         super(props);

//     }

//     render()
//     {
//         return(
        
        
//         <p>
//         <div>-----------------------------------------------</div>
//         <div>item name: {this.props.item.item}</div>
//         <div>address: {this.props.item.address}</div>
//         <div>contact: {this.props.item.name}</div>
//         <div>item quantity: {this.props.item.quantity}</div>
//         <button></button>
//         </p>  
        
//         );
//     }
// }

export default ListingList;