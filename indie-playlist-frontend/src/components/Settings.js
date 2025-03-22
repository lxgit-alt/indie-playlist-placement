// src/components/Settings.js
import React, { useState } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './Settings.css';

import AccountSettings from './AccountSettings';
import NotificationPreferences from './NotificationPreferences';
import PrivacySettings from './PrivacySettings';
import AIPreferences from './AIPreferences';
import CollaborationSettings from './CollaborationSettings';
import HelpSection from './HelpSection';

const sections = {
  "Account": <AccountSettings />,
  "Notifications": <NotificationPreferences />,
  "Privacy": <PrivacySettings />,
  "AI Preferences": <AIPreferences />,
  "Collaboration": <CollaborationSettings />,
  "Help": <HelpSection />
};

const Settings = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const [activeSection, setActiveSection] = useState("Account");

  const handleLogout = () => {
    signOut(auth)
      .then(() => navigate("/pricing"))
      .catch((error) => console.error("Error signing out:", error));
  };

  return (
    <div className="settings">
      <h1>Settings</h1>
      <div className="settings-container">
        <nav className="settings-sidebar">
          {Object.keys(sections).map((section) => (
            <button
              key={section}
              className={`sidebar-item ${activeSection === section ? "active" : ""}`}
              onClick={() => setActiveSection(section)}
            >
              {section}
            </button>
          ))}
          <button className="sidebar-item logout-btn" onClick={handleLogout}>
            Log Out
          </button>
        </nav>
        <div className="settings-content">
          {sections[activeSection]}
        </div>
      </div>
    </div>
  );
};

export default Settings;
