import React, { useState, useEffect }from 'react';
import { Link} from 'react-router-dom';

import './JoinRoom.css';




const JoinRoom = ({ userData, checkLogin}) => {
    const [name, setName] = useState(userData[1]);
    const [room, setRoom] = useState("");
    const [isFetch, setFetch] = useState(false);

    
    // submitData();
    const onJoinRoom = async (e) => {
        if(!name || !room){
            e.preventDefault();
            await console.log('hello');
            await checkLogin();
            await setFetch(true);
        }
        
    }

    useEffect( () => {
        
    }, [isFetch])


    return(

        <div className = 'LoginOuterContainer'>
            <div className="LoginInnerContainer">
                <h1 className="heading">Join a room</h1>
                <p>Welcome back {name}</p>
                <div><input placeholder='Room' className='joinInput' type='text' onChange={(event) => setRoom(event.target.value)}/></div>
                
                
                <Link onClick={onJoinRoom} to={`/chat/?name=${name}&room=${room}`} >
                    <button className="button" type='submit'>JoinRoom</button>
                </Link>
                
            </div>
        </div>    
        
    )
}

export default JoinRoom;