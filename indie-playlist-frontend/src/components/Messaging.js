// src/components/Messaging.js
import React, { useState } from 'react';
import './Messaging.css';

const Messaging = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Curator', text: 'Great track! Consider adding a stronger intro.' },
    { id: 2, sender: 'You', text: 'Thanks for the feedback!' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    setMessages([...messages, { id: messages.length + 1, sender: 'You', text: newMessage }]);
    setNewMessage('');
  };

  return (
    <div className="messaging">
      <h3>Messages</h3>
      <div className="messages-list">
        {messages.map((msg) => (
          <div key={msg.id} className={`message ${msg.sender === 'You' ? 'sent' : 'received'}`}>
            <p><strong>{msg.sender}:</strong> {msg.text}</p>
          </div>
        ))}
      </div>
      <form onSubmit={handleSend} className="message-form">
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          required
        />
        <button type="submit" className="btn">Send</button>
      </form>
    </div>
  );
};

export default Messaging;
