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
        <p className="messageText colorWhite">{text}</p>
      </div>
    </div>
  ) : (
    <div className="messageContainer justifyStart">
      <div className="messageBox">
        <p className="messageText colorDark">{text}</p>
      </div>
      <p className="sentText">{user}</p>
    </div>
  );
};

export default ChatMessage;
