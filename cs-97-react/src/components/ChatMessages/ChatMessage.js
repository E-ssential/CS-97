import React from "react";

import "./ChatMessage.js";
import "./ChatMessage.css";

const ChatMessage = ({ message: { user, text }, name, key }) => {
  let isFromCurrentUser = false;
  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isFromCurrentUser = true;
  }

  return isFromCurrentUser ? (
    <div className="chat-message-right" key={key}>
      <div className="chat-messageText-right">
      <p>{text}</p>
      </div>
    </div>
  ) : (
    <div className="chat-message-left" key={key}>
      <div className="chat-user-tag">{user}</div>


      <div className="chat-messageText-left">
          <p>{text}</p>
      </div>

      
    </div>
  );
};

export default ChatMessage;
