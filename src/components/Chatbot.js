import React, { useState, useEffect } from "react";
import chatbotData from "../data/Chatbot.json"; // ✅ Import JSON directly
import "./Chatbot.css"; // ✅ Ensure the CSS is correctly linked

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    let botResponse = "I don't understand.";
    if (chatbotData) {
      const intent = chatbotData.intents.find((intent) =>
        intent.patterns.some((pattern) => input.toLowerCase().includes(pattern.toLowerCase()))
      );

      if (intent) {
        botResponse = intent.responses[Math.floor(Math.random() * intent.responses.length)];
      }
    }

    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: "bot", text: botResponse }]);
    }, 500);

    setInput("");
  };

  return (
    <div className="chat-container">
      <h2>Recommender Chatbot</h2>
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask something..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
