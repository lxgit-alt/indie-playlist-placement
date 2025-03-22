// src/components/CollaborationSettings.js
import React, { useState } from 'react';
import './CollaborationSettings.css';

const CollaborationSettings = () => {
  const [permissions, setPermissions] = useState("Standard");
  const [creditSettings, setCreditSettings] = useState("Default");

  return (
    <div className="collaboration-settings">
      <h2>Collaboration</h2>
      <div className="setting-item">
        <label>Collaboration Permissions:</label>
        <select value={permissions} onChange={(e) => setPermissions(e.target.value)}>
          <option value="Standard">Standard</option>
          <option value="Advanced">Advanced</option>
        </select>
      </div>
      <div className="setting-item">
        <label>Credit Settings:</label>
        <select value={creditSettings} onChange={(e) => setCreditSettings(e.target.value)}>
          <option value="Default">Default</option>
          <option value="Custom">Custom</option>
        </select>
      </div>
    </div>
  );
};

export default CollaborationSettings;
