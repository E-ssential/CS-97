import React, { useState }from 'react';
import { Link, Redirect} from 'react-router-dom';
import axios from "axios";
import './JoinRoom.css';




const JoinRoom = ({isAuth, userData, setAuth}) => {
    const [name, setName] = useState(userData[1]);
    const [room, setRoom] = useState("");

    
    // submitData();
    return(

        isAuth ? (
        <div className = 'LoginOuterContainer'>
            <div className="LoginInnerContainer">
                <h1 className="heading">Join a room</h1>
                <p>Welcome back {name}</p>
                <div><input placeholder='Room' className='joinInput' type='text' onChange={(event) => setRoom(event.target.value)}/></div>
                
                
                <Link onClick ={(event) => (!name || !room) ? event.preventDefault() : null} to={`/chat/?name=${name}&room=${room}`} >
                    <button className="button" type='submit'>JoinRoom</button>
                </Link>
                
            </div>
        </div>    
        )
        :
        (
            <Redirect to="/" /> 
            
        )
    )
}

export default JoinRoom;