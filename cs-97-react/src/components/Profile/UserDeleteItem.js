import React, {useState} from 'react';
import './ViewProfile.css';
import axios from 'axios';



const UserDeleteItem = ({setStatus, setFetch}) =>{

    const [deleteID, setDeleteID] = useState('');


    const deleteItem = async (e) => {
        e.preventDefault();
        const data = {
            ID: deleteID
        }
        axios.post('http://localhost:5000/listings/deleteItem', data, {withCredentials:true})
        .then(async res =>{
             await setStatus(res.data);
             await setFetch(true);
        })
        .catch(async err =>{
             await setStatus(err.response.data);
        })
        
    }

    return(
        <form className='delete-Listing' onSubmit={deleteItem}>
            <input type='text' placeholder='Listing ID' onChange={(e) => {setDeleteID(e.target.value)}} required/>
            <button type='submit'>Delete</button>
        </form>
    )

}

export default UserDeleteItem;