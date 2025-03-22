import React, { useState } from "react";
import { submitTrack } from "../services/trackService"; // adjust the path as needed
import "./UploadTrack.css";

const UploadTrack = () => {
  const [trackTitle, setTrackTitle] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [trackFile, setTrackFile] = useState(null);
  const [spotifyLink, setSpotifyLink] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // You might include additional data in otherData
      const otherData = {}; // e.g., artist name, genre, etc.
      await submitTrack({ trackTitle, spotifyLink, otherData });
      setMessage("Track uploaded successfully!");
      // Reset the form fields
      setTrackTitle("");
      setTrackFile(null);
      setSpotifyLink("");
    } catch (error) {
      setMessage("There was an error uploading your track.");
    }
  };

  return (
    <div className="upload-track">
      <h2>Upload Your Track</h2>
      <form className="upload-track-form" onSubmit={handleSubmit}>
        <label htmlFor="trackTitle">Track Title</label>
        <input
          type="text"
          id="trackTitle"
          placeholder="Enter track title"
          value={trackTitle}
          onChange={(e) => setTrackTitle(e.target.value)}
          required
        />
        <label htmlFor="trackFile">Upload Track File</label>
        <input
          type="file"
          id="trackFile"
          accept="audio/*"
          onChange={(e) => setTrackFile(e.target.files[0])}
          required
        />
        <label htmlFor="spotifyLink">Spotify Song Link</label>
        <input
          type="url"
          id="spotifyLink"
          placeholder="Enter Spotify song link"
          value={spotifyLink}
          onChange={(e) => setSpotifyLink(e.target.value)}
          required
        />
        <button type="submit" className="btn">Upload Track</button>
      </form>
      {message && <p className="success-message">{message}</p>}
    </div>
  );
};

export default UploadTrack;
