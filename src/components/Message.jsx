import React from "react";
import "./Message.css";

const Message = ({ message, onLike }) => {
  return (
    <div className="message">
      <div
        className="user-avatar"
        style={{ backgroundColor: message.color }}
      >
        {message.user[0]}
      </div>
      <div className="message-content">
        <div className="message-header">
          <span style={{fontWeight:"bold", marginRight:"8px"}}>{message.user}</span>
          <span style={{fontSize:"12px", color:"#888"}}>{message.time}</span>
        </div>
        <div className="message-text">{message.text}</div>
        <div>
          <button className="like-button" onClick={onLike}>
            Like ({message.likes})
          </button>
        </div>
      </div>
    </div>
  );
};

export default Message;
