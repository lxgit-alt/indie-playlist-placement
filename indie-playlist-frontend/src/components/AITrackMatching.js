// src/components/AITrackMatching.js
import React, { useState } from "react";
import axios from "axios";
import "./AITrackMatching.css";

function AITrackMatching() {
  const [trackDetails, setTrackDetails] = useState({
    title: "",
    genre: "",
    mood: "",
    lyricsSnippet: "",
  });
  const [suggestion, setSuggestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setTrackDetails({
      ...trackDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuggestion("");

    try {
      // Post track details to your backend AI endpoint
      const response = await axios.post(
        "/api/ai-track-matching",
        trackDetails
      );
      // Expect the backend to return { suggestion: "Custom pitch..." }
      setSuggestion(response.data.suggestion);
    } catch (err) {
      console.error("Error generating suggestion:", err);
      setError("Error generating suggestion. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ai-track-matching">
      <h2>AI Track Matching</h2>
      <p>Enter your track details to receive an AI-generated pitch suggestion.</p>
      <form onSubmit={handleSubmit} className="ai-form">
        <label htmlFor="title">Track Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Enter track title"
          value={trackDetails.title}
          onChange={handleChange}
          required
        />
        <label htmlFor="genre">Genre:</label>
        <input
          type="text"
          id="genre"
          name="genre"
          placeholder="Enter genre"
          value={trackDetails.genre}
          onChange={handleChange}
          required
        />
        <label htmlFor="mood">Mood:</label>
        <input
          type="text"
          id="mood"
          name="mood"
          placeholder="Enter mood"
          value={trackDetails.mood}
          onChange={handleChange}
          required
        />
        <label htmlFor="lyricsSnippet">Lyrics Snippet:</label>
        <textarea
          id="lyricsSnippet"
          name="lyricsSnippet"
          placeholder="Enter a snippet of your lyrics"
          value={trackDetails.lyricsSnippet}
          onChange={handleChange}
          rows="4"
          required
        ></textarea>
        <button type="submit" className="btn" disabled={loading}>
          {loading ? "Generating..." : "Get Suggestion"}
        </button>
      </form>
      {error && <p className="error">{error}</p>}
      {suggestion && (
        <div className="suggestion">
          <h3>Suggested Pitch:</h3>
          <p>{suggestion}</p>
        </div>
      )}
    </div>
  );
}

export default AITrackMatching;
