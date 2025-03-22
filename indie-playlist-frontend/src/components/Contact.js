// src/components/Contact.js
import React, { useState } from 'react';
import './Legal.css';

const Contact = () => {
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can integrate a form service or API to send contact messages.
    // For now, we'll simulate submission.
    setStatus('Thank you for your message! We will get back to you soon.');
    setMessage('');
  };

  return (
    <div className="legal-page">
      <h1>Contact Us</h1>
      <p>If you have any questions or concerns, please reach out using the form below.</p>
      <form onSubmit={handleSubmit} className="contact-form">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your message..."
          rows="5"
          required
        ></textarea>
        <button type="submit" className="btn">Send Message</button>
      </form>
      {status && <p className="status-message">{status}</p>}
    </div>
  );
};

export default Contact;
