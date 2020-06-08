import React from "react";

import "./MessageList.css";
import ChatMessage from "./ChatMessage";
// import ScrollToBottom from "react-scroll-to-bottom";

const MessageList = ({ messages, name }) => {
  return (
    
      <div className='chat-body'>
      {messages.map((message, i) => (
          <ChatMessage message={message} name={name} key={i} />
        
      ))}
      </div>
    
  );
};

export default MessageList;
