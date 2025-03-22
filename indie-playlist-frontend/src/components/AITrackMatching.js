// src/components/AITrackMatching.js
import React, { useState } from "react";
import "./AITrackMatching.css";

// Define sample options for genre and mood
const genres = ["Rock", "Pop", "Hip-Hop", "Jazz", "Electronic", "Indie"];
const moods = ["Happy", "Sad", "Energetic", "Calm", "Angry", "Melancholic"];

const AITrackMatching = () => {
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
      // Simulate an API call delay for generating a suggestion.
      setTimeout(() => {
        setSuggestion("This is an AI-generated pitch suggestion for your track!");
        setLoading(false);
      }, 1500);
    } catch (err) {
      setError("Error generating suggestion. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="ai-track-matching">
      <h2>AI Track Matching</h2>
      <p>Enter your track details to receive an AI-generated pitch suggestion.</p>
      <form onSubmit={handleSubmit} className="ai-form">
        <label htmlFor="title">Track Title</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Enter track title"
          value={trackDetails.title}
          onChange={handleChange}
          required
        />
        <label htmlFor="genre">Genre</label>
        <select
          id="genre"
          name="genre"
          value={trackDetails.genre}
          onChange={handleChange}
          required
        >
          <option value="">Select a genre</option>
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
        <label htmlFor="mood">Mood</label>
        <select
          id="mood"
          name="mood"
          value={trackDetails.mood}
          onChange={handleChange}
          required
        >
          <option value="">Select a mood</option>
          {moods.map((mood) => (
            <option key={mood} value={mood}>
              {mood}
            </option>
          ))}
        </select>
        <label htmlFor="lyricsSnippet">Lyrics Snippet</label>
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
};

export default AITrackMatching;
