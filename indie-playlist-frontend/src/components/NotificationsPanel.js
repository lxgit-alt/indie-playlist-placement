// src/components/NotificationsPanel.js
import React from 'react';
import './NotificationsPanel.css';

const NotificationsPanel = () => {
  // Dummy notifications for now; later, fetch these from your backend.
  const notifications = [
    { id: 1, message: 'Your track "Sunrise" has been added to Indie Vibes playlist.' },
    { id: 2, message: 'New feedback from Curator X: "Great hook, consider adjusting the chorus."'},
    { id: 3, message: 'Your subscription will renew in 3 days.' },
  ];

  return (
    <div className="notifications-panel">
      <h3>Notifications</h3>
      {notifications.length ? (
        <ul>
          {notifications.map((notif) => (
            <li key={notif.id}>{notif.message}</li>
          ))}
        </ul>
      ) : (
        <p>No new notifications.</p>
      )}
    </div>
  );
};

export default NotificationsPanel;
