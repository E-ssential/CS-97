import React from 'react';

import './MessageList.css';
import ChatMessage from './ChatMessage';
import ScrollToBottom from 'react-scroll-to-bottom';



const MessageList = ({messages, name}) =>{
return(
    <ScrollToBottom className='MessageList'>
        {messages.map((message,i) =>

        <div key={i}>

            <ChatMessage
                message={message}
                name={name}
            />
        </div>
        )}

    </ScrollToBottom>
);

}

export default MessageList