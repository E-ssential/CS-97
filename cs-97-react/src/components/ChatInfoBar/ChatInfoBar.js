import React from "react";
import x_butt from "../../icons/x_butt.png";
import clear from "../../icons/grayX.png";
import closeIcon from "../../icons/closeIcon.png";
import onlineIcon from "../../icons/onlineIcon.png";
import "./ChatInfoBar.css";

const ChatInfoBar = ({ room }) => {
  return (
    <div className="chatInfoBar">  
        <h3>{room}</h3>
    </div>
  );
};

export default ChatInfoBar;
