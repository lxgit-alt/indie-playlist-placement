// src/components/NotificationPreferences.js
import React, { useState } from 'react';
import './NotificationPreferences.css';

const NotificationPreferences = () => {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [inAppAlerts, setInAppAlerts] = useState(true);
  const [frequency, setFrequency] = useState("Daily digest");

  return (
    <div className="notification-preferences">
      <h2>Notification Preferences</h2>
      <div className="setting-item">
        <label>
          <input 
            type="checkbox" 
            checked={emailNotifications} 
            onChange={() => setEmailNotifications(!emailNotifications)} 
          />
          Email Notifications (pitch approvals, collaboration invites, AI tips)
        </label>
      </div>
      <div className="setting-item">
        <label>
          <input 
            type="checkbox" 
            checked={inAppAlerts} 
            onChange={() => setInAppAlerts(!inAppAlerts)} 
          />
          In-App Alerts (new followers, playlist submissions, trend alerts)
        </label>
      </div>
      <div className="setting-item">
        <label>Notification Frequency:</label>
        <select value={frequency} onChange={(e) => setFrequency(e.target.value)}>
          <option value="Daily digest">Daily digest</option>
          <option value="Instant notifications">Instant notifications</option>
        </select>
      </div>
    </div>
  );
};

export default NotificationPreferences;
