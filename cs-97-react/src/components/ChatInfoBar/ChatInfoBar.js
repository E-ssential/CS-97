import React from 'react';
import closeIcon from '../../icons/closeIcon.png';
import onlineIcon from '../../icons/onlineIcon.png';
import './ChatInfoBar.css';

const ChatInfoBar = ({room}) => {

    return(
    <div className='chatInfoBar'>
        
        <div className="leftInnerContainer">
            <img src={onlineIcon} alt="online-status" className="onlineIcon"/>
            <h3>{room}</h3>
        </div>

        <div className="RightInnerContainer">
            {/* click this to leave */}
            <a href="/"><img src={closeIcon} alt="close-btn"/></a>
        </div>

    </div>
    );
}

export default ChatInfoBar;