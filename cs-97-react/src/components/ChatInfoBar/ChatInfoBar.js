import React from "react";
import x_butt from "../../icons/x_butt.png";
import clear from "../../icons/grayX.png";
import closeIcon from "../../icons/closeIcon.png";
import onlineIcon from "../../icons/onlineIcon.png";
import "./ChatInfoBar.css";

const ChatInfoBar = ({ room }) => {
  return (
    <div className="chatInfoBar">
      <div className="upperPart">
        <img src={onlineIcon} alt="online-status" className="onlineIcon" />
        <h3>Room Number: {room}</h3>
      </div>

      <div className="lowerPart">
        {/* click this to leave */}
        <a href="/selectRoom">
          <img
            src={clear}
            width="20"
            height="20"
            className="EssentialLogo"
            alt="close-btn"
          />
        </a>
      </div>
    </div>
  );
};

export default ChatInfoBar;
