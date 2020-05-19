import React from 'react';

import './ChatInput.css';

const ChatInput = ({message, setMessage, sendMessage}) =>{
return(
    <form className="chat-form">
        <input
        className="chat-input"
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        onKeyPress={(event) => event.key ==='Enter' ? sendMessage(event) : null}
        />

        <button className="chat-send-btn" onClick={(event) => sendMessage(event)}>Send</button>
    </form>

    

);

}

export default ChatInput;