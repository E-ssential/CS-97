import React, {useState} from 'react';
import './ViewListings.css';

const ListingSearch = ({fetchListings}) => {
    
    const[searchItem, setItem] = useState('');

    const OnSubmit = (e) =>{
        e.preventDefault();
        
         if(!searchItem){
            fetchListings();
         }
         else{
             const data =
             {
                 item: searchItem
             }
             fetchListings(data);
         }
        


    }

    return(
        <div className="listingSearch">
            <form onSubmit={OnSubmit}>
                <input type="text" placeholder='Item' onChange={(e) => {setItem(e.target.value)}}/>
                <button type="submit">{searchItem ? "Search" : "Refresh"}</button>
            </form>
        </div>





    )
}

export default ListingSearch;