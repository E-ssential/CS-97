import React , { useState, useEffect }from 'react';
import axios from 'axios';
import RoomList from './RoomList';
import './JoinRoom.css';

const RoomManager = ({userData, checkLogin}) => {

    const [roomList ,setRooms] = useState([]);
    const [isFetch, setFetch] = useState(true);

    const fetchRooms = async() => {
        await axios.get('http://localhost:5000/users/getRooms', {withCredentials:true})
        .then(async res => {
            console.log(res.data);
            await setRooms(res.data);
            await setFetch(false);
        })
        .catch(async err => {
            await setFetch(false);
        })
    }

    useEffect( () => {
        fetchRooms();

    }, [isFetch])


    return(

        isFetch ? (

            <div className="room-manager">
                <p>Please wait, Loading Chat Rooms...</p>
            </div>
        )
            :

        (

            <div className="room-manager">

                <div className="user-info">
                    <p>{userData[1]}</p>
                </div>
                <p>Gimme like thirty min</p> 
                <RoomList allListings={roomList}/>
            </div>

        )



    )
}



export default RoomManager;