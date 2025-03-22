// src/components/HelpSection.js
import React from 'react';
import './HelpSection.css';

const HelpSection = () => {
  return (
    <div className="help-section">
      <h2>Help</h2>
      <div className="setting-item">
        <h3>FAQs</h3>
        <p>Find answers to common questions.</p>
      </div>
      <div className="setting-item">
        <h3>Contact Support</h3>
        <p>Reach out to our support team.</p>
      </div>
      <div className="setting-item">
        <h3>Delete Account</h3>
        <p>Warning: This action is irreversible.</p>
      </div>
    </div>
  );
};

export default HelpSection;
