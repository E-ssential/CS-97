import React, { useState }from 'react';
import { Link } from 'react-router-dom';
import './Login.css';



const Login = () => {
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");


    return(
        <div className = 'LoginOuterContainer'>
            <div className="LoginInnerContainer">
                <h1 className="heading">Join</h1>
                <div><input placeholder='Username' className='joinInput' type='text' onChange={(event) => setName(event.target.value)}/></div>
                <div><input placeholder='Room' className='joinInput' type='text' onChange={(event) => setRoom(event.target.value)}/></div>
                
                
                <Link onClick ={(event) => (!name || !room) ? event.preventDefault() : null} to={`/chat/?name=${name}&room=${room}`} >
                    <button className="button" type='submit'>Sign In</button>
                </Link>
                
            </div>
        </div>
    )
}

export default Login;