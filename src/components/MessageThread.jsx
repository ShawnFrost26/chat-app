import React from "react";
import Message from "./Message";
import "./MessageThread.css";

const MessageThread = ({ messageList, onLike }) => {
  return (
    <div className="message-thread">
      {messageList.map((msg, index) => (
        <Message key={index} message={msg} onLike={() => onLike(index)} />
      ))}
    </div>
  );
};

export default MessageThread;
