// src/components/PrivacySettings.js
import React, { useState } from 'react';
import './PrivacySettings.css';

const PrivacySettings = () => {
  const [profileVisibility, setProfileVisibility] = useState("Public");
  const [dataSharing, setDataSharing] = useState(true);
  const [blockedUsers] = useState(["user1@example.com", "user2@example.com"]); // Example data

  return (
    <div className="privacy-settings">
      <h2>Privacy & Security</h2>
      <div className="setting-item">
        <label>Profile Visibility:</label>
        <select value={profileVisibility} onChange={(e) => setProfileVisibility(e.target.value)}>
          <option value="Public">Public</option>
          <option value="Private">Private</option>
        </select>
      </div>
      <div className="setting-item">
        <label>
          <input 
            type="checkbox" 
            checked={dataSharing} 
            onChange={() => setDataSharing(!dataSharing)} 
          />
          Allow anonymized data sharing to improve our AI
        </label>
      </div>
      <div className="setting-item">
        <label>Blocked Users:</label>
        <ul>
          {blockedUsers.map(user => (
            <li key={user}>{user}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PrivacySettings;
