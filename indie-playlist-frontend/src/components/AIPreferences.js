// src/components/AIPreferences.js
import React, { useState } from 'react';
import './AIPreferences.css';

const AIPreferences = () => {
  const [matchingCriteria, setMatchingCriteria] = useState("All");
  const [feedbackFrequency, setFeedbackFrequency] = useState("Weekly");

  return (
    <div className="ai-preferences">
      <h2>AI Preferences</h2>
      <div className="setting-item">
        <label>Matching Criteria:</label>
        <select value={matchingCriteria} onChange={(e) => setMatchingCriteria(e.target.value)}>
          <option value="All">All Genres/Moods</option>
          <option value="Specific">Specific Preferences</option>
        </select>
      </div>
      <div className="setting-item">
        <label>Feedback Frequency:</label>
        <select value={feedbackFrequency} onChange={(e) => setFeedbackFrequency(e.target.value)}>
          <option value="Weekly">Weekly</option>
          <option value="On Request">Only on request</option>
        </select>
      </div>
    </div>
  );
};

export default AIPreferences;
