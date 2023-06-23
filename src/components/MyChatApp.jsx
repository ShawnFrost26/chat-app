import React, { useState } from "react";
import "./MyChatApp.css";
import TextField from "./TextField";
import MessageThread from "./MessageThread";

const MyChatApp = () => {
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [username, setUsername] = useState("");

  const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];
  const colors = [
    "#FF6633",
    "#FFB399",
    "#FF33FF",
    "#FFFF99",
    "#00B3E6",
    "#E6B333",
    "#3366E6",
    "#999966",
  ];

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      const randomUser =
        user_list[Math.floor(Math.random() * user_list.length)];
      setUsername(randomUser);
      const currentTime = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      const newMessage = {
        user: randomUser,
        text: message,
        time: currentTime,
        likes: 0,
        color: getRandomColor(),
      };
      setMessageList([newMessage, ...messageList]);
      setMessage("");
    }
  };

  const handleLike = (index) => {
    const updatedMessages = [...messageList];
    updatedMessages[index].likes += 1;
    setMessageList(updatedMessages);
  };

  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div className="chat-app">
      <TextField
        message={message}
        onMessageChange={handleInputChange}
        onSendMessage={handleSendMessage}
      />
      <MessageThread messageList={messageList} onLike={handleLike} />
    </div>
  );
};

export default MyChatApp;
