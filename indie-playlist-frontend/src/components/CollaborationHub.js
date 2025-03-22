// src/components/CollaborationHub.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CollaborationHub.css';

const CollaborationHub = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  // Fetch collaboration messages from the backend
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get('/api/collaboration'); // Ensure your backend has this endpoint
        setMessages(response.data.messages);
      } catch (err) {
        console.error("Error fetching collaboration messages", err);
      }
    };

    fetchMessages();
  }, []);

  // Handle sending a new message
  const handleSendMessage = async (e) => {
    e.preventDefault();
    if(newMessage.trim() === "") return;

    try {
      const response = await axios.post('/api/collaboration', { message: newMessage });
      // Assuming the API returns the new message object in response.data.message
      setMessages([...messages, response.data.message]);
      setNewMessage("");
    } catch (err) {
      console.error("Error sending message", err);
    }
  };

  return (
    <div className="collaboration-hub">
      <h2>Curator Collaboration Hub</h2>
      <div className="messages-list">
        {messages.length === 0 ? (
          <p>No collaboration messages yet.</p>
        ) : (
          messages.map((msg) => (
            <div key={msg.id} className="message">
              <p><strong>{msg.sender}:</strong> {msg.text}</p>
              <span className="timestamp">
                {new Date(msg.timestamp).toLocaleString()}
              </span>
            </div>
          ))
        )}
      </div>
      <form onSubmit={handleSendMessage} className="message-form">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
          required
        />
        <button type="submit" className="btn">Send</button>
      </form>
    </div>
  );
};

export default CollaborationHub;
