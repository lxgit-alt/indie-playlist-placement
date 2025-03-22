// src/components/Notifications.js
import React from 'react';
import './Notifications.css';

const Notifications = () => {
  const notifications = [
    { id: 1, text: 'Your track "Sunrise" was added to Indie Vibes playlist.' },
    { id: 2, text: 'New curator review available for "Moonlight".' },
  ];

  return (
    <div className="notifications">
      <h2>Notifications</h2>
      <ul>
        {notifications.map(note => (
          <li key={note.id}>{note.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
