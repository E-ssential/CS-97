import React from 'react';
import './ViewProfile.css';
import axios from 'axios';




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
        <div className="profile-item-name">
            {parsedData.item}
        </div>
        <div className="profile-item-quantity">
            {parsedData.quantity}
        </div>
        <div className='profile-item-delete'>
            <button  onClick={(e) => {deleteItem(e,ItemData)}}>Delete</button>
        </div>
    </div>
)
}
export default UserItem;