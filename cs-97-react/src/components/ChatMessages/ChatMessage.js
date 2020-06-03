import React from "react";

import "./ChatMessage.js";
import "./ChatMessage.css";

const ChatMessage = ({ message: { user, text }, name }) => {
  let isFromCurrentUser = false;
  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isFromCurrentUser = true;
  }

  return isFromCurrentUser ? (
    <div className="messageContainerUser justifyEnd">
      <div className="messageBoxUser">
        <p className="messageText">{text}</p>
      </div>
    </div>
  ) : (
    <div className="messageContainer justifyStart">
      <div className="messageBox">
        <p className="messageText">{text}</p>
      </div>
      <p className="othername">{user}</p>
    </div>
  );
};

export default ChatMessage;
