// src/components/TrackImprovement.js
import React, { useState } from "react";
import "./TrackImprovement.css";

const TrackImprovement = () => {
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate sending feedback
    setSubmitted(true);
  };

  return (
    <div className="track-improvement">
      <h2>Track Improvement Suggestions</h2>
      <p>Provide details about your track to receive improvement suggestions.</p>
      <form onSubmit={handleSubmit} className="improvement-form">
        <label htmlFor="feedback">Your Feedback</label>
        <textarea
          id="feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          rows="4"
          placeholder="Describe your track or what you'd like to improve..."
          required
        ></textarea>
        <button type="submit" className="btn">Submit Feedback</button>
      </form>
      {submitted && <p className="success-message">Feedback submitted successfully!</p>}
    </div>
  );
};

export default TrackImprovement;
