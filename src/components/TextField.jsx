import React from 'react';
import "./TextField.css"

const TextField = ({ message, onMessageChange, onSendMessage }) => {
  return (
    <div className="input-container">
      <input
        type="text"
        value={message}
        onChange={onMessageChange}
        placeholder="Type your message"
      />
      <button onClick={onSendMessage}>Send</button>
    </div>
  );
};

export default TextField;
