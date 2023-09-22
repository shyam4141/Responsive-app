
import React, { useEffect, useState } from "react";
import "./chatbot.css";

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [botMessages, setBotMessages] = useState([]);
  const [combinedArray, setCombinedArray] = useState([]);
  const [input, setInput] = useState("");
  const finalArray = [];

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };


  useEffect(()=>{
    //// Simulate bot response here...
    const botResponse = {
        text: "Hey!! How can I help you?",
        isUser: false,
      };
      setBotMessages([...botMessages, botResponse]);
      for (let i = 0; i < messages.length; i++) {
        finalArray.push(messages[i]);
        finalArray.push(botMessages[i]);
      }

      setCombinedArray(finalArray);
  },[messages])

  const handleSendMessage = () => {
    if (input.trim() !== "") {
      const newMessage = {
        text: input,
        isUser: true,
      };
      
      setMessages([...messages, newMessage]);
      setInput("");
    }
  };

  return (
    <div className="chatbot">
      <div className="chatbot-messages">
        {combinedArray.map((message, index) => (
          <div
            key={index}
            className={`message ${message.isUser ? "user" : "bot"}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="chatbot-input">
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={handleInputChange}
        />
        <button className="chat-btn" onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatBot;
