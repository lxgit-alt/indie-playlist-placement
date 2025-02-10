import "./UploadTrack.css";
import React, { useState } from "react";
import axios from "axios";
import MatchResults from "./MatchResults"; // Import MatchResults

const UploadTrack = () => {
  const [trackName, setTrackName] = useState("");
  const [artistName, setArtistName] = useState("");
  const [demoTrack, setDemoTrack] = useState(null);
  const [message, setMessage] = useState("");
  const [trackId, setTrackId] = useState(null); // Store uploaded track ID

  console.log("Rendering UploadTrack component");

  const handleTrackChange = (e) => setDemoTrack(e.target.files[0]);
  const handleNameChange = (e) => setTrackName(e.target.value);
  const handleArtistChange = (e) => setArtistName(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("demoTrack", demoTrack);
    formData.append("trackName", trackName);
    formData.append("artistName", artistName);

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/upload`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      
      setMessage(`File uploaded successfully: ${response.data.trackId}`);
      setTrackId(response.data.trackId); // Store trackId for MatchResults
    } catch (error) {
      setMessage("Failed to upload file");
    }
  };

  return (
    <div className="upload-container">
      <h3>Upload Demo Track</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Track Name:
          <input type="text" value={trackName} onChange={handleNameChange} required />
        </label>
        <label>
          Artist Name:
          <input type="text" value={artistName} onChange={handleArtistChange} required />
        </label>
        <label>
          Upload Track:
          <input type="file" onChange={handleTrackChange} required />
        </label>
        <button type="submit">Upload</button>
      </form>
      {message && <p>{message}</p>}

      {/* Show AI Match Score if trackId is available */}
      {trackId && <MatchResults trackId={trackId} />}
    </div>
  );
};

export default UploadTrack;
