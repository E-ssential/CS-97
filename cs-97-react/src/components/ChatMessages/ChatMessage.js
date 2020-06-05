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
      <div className="messageBoxUser messageBoxUserNext">
        <p className="messageText">{text}</p>
      </div>
    </div>
  ) : (
    <div className="messageContainer justifyStart">
      <p className="othername">{user}</p>
      <div className="bubble bubble-bottom-left">
        <p className="messageText">{text}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
