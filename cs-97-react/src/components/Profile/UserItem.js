import React from 'react';
import './ViewProfile.css';
import axios from 'axios';

import Xbutton from "../../icons/clear_24px.png";




const UserItem = ({ItemData, setFetch }) => {
    const parsedData=JSON.parse(ItemData);
    const deleteItem = async (e, id) => {
        e.preventDefault();
        console.log(id);
        
        const data = {
            ID: parsedData._id
        }
        await axios.post('http://localhost:5000/listings/deleteItem', data, {withCredentials:true})
        .then(async res =>{
             
             await setFetch(true);
        })
        .catch(async err =>{
            console.log(err.response);
        })
        
      }



    return(
    <div className='Item-Container' >
        <div className="profile-item">
            {parsedData.item}
        </div>
        <div className="profile-quantity">
            {parsedData.quantity}
        </div>
        <div className='profile-x-button'>
            <img src={Xbutton} alt="Delete Item" 
            onClick={(e) => {deleteItem(e,ItemData)}} />
        </div>
    </div>
)
}
export default UserItem;