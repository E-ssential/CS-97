import React, {useState, useEffect } from 'react';
import axios from 'axios';


import ListingSearch from './ListingSearch.js';
import ListingList from './ListingList';
import './ViewListings.css'


const ListingsPage = ({isAuth, userData}) => {
    const [listings, setListings] = useState([]);
    const [status, setStatus] = useState('Fetching Data');
    const [isFetch, setFetch] = useState(true);
    var timer;
    //START HERE TOMORROW

        const fetchListings = async () =>{
            
            let res = await axios.get('http://localhost:5000/listings/all',  {withCredentials:true})
            .catch(err => {
                console.log(err);
            });

            await setListings(res.data);
            await setFetch(false);
            
        }
        
        useEffect( () => {
            
            fetchListings();
        }, [isFetch])


        // useEffect( () => {
        //     axios.get('http://localhost:5000/listings/all',  {withCredentials:true})
        //         .then(res => {
        //         res.data.map((object, i) =>{
        //             console.log(JSON.stringify(object));
        //             setListings([...listings, JSON.stringify(object)]);
        //             console.log(listings);
        //         })
        //         })
        //         .catch(err => {
        //             console.log(err);
        //         }
        //         )
        // }, [listings])

        return(

            isFetch ?

            (
                <div className="viewListings">
                    {/* <ListingSearch /> */}
                    <p>{status}</p>
                 </div>
            )

            :

            (

            <div className="viewListings">
                {/* <ListingSearch /> */}
                <ListingList allListings={listings} userData={userData}/>
                
            </div>


            )
        )


}







export default ListingsPage;