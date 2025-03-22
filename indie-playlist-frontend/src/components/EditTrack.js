// src/components/EditTrack.js
import React, { useState, useEffect } from "react";
import { getFirestore, doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import "./EditTrack.css";

const db = getFirestore();

const EditTrack = ({ trackId, onUpdateSuccess }) => {
  const [trackTitle, setTrackTitle] = useState("");
  const [spotifyLink, setSpotifyLink] = useState("");
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchTrackDetails = async () => {
      if (!trackId) return;
      setLoading(true);
      try {
        const trackRef = doc(db, "tracks", trackId);
        const trackSnap = await getDoc(trackRef);

        if (trackSnap.exists()) {
          const trackData = trackSnap.data();
          setTrackTitle(trackData.trackTitle || "");
          setSpotifyLink(trackData.spotifyLink || "");
        } else {
          setMessage("Track not found.");
        }
      } catch (error) {
        console.error("Error fetching track details:", error);
        setMessage("Error loading track data.");
      }
      setLoading(false);
    };

    fetchTrackDetails();
  }, [trackId]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    // Confirmation prompt before updating
    if (!window.confirm("Are you sure you want to update this track?")) {
      return;
    }
    try {
      const trackRef = doc(db, "tracks", trackId);
      await updateDoc(trackRef, { trackTitle, spotifyLink });
      setMessage("Track updated successfully!");
      if (onUpdateSuccess) onUpdateSuccess();
    } catch (error) {
      console.error("Error updating track:", error);
      setMessage("Error updating track.");
    }
  };

  const handleDelete = async () => {
    // Confirmation prompt before deletion
    if (!window.confirm("Are you sure you want to delete this track?")) {
      return;
    }
    try {
      await deleteDoc(doc(db, "tracks", trackId));
      setMessage("Track deleted successfully!");
      if (onUpdateSuccess) onUpdateSuccess();
    } catch (error) {
      console.error("Error deleting track:", error);
      setMessage("Error deleting track.");
    }
  };

  if (loading) return <p>Loading track data...</p>;

  return (
    <div className="edit-track">
      <h2>Edit Track</h2>
      <form onSubmit={handleUpdate} className="edit-track-form">
        <label htmlFor="trackTitle">Track Title</label>
        <input
          type="text"
          id="trackTitle"
          value={trackTitle}
          onChange={(e) => setTrackTitle(e.target.value)}
          required
        />

        <label htmlFor="spotifyLink">Spotify Song Link</label>
        <input
          type="url"
          id="spotifyLink"
          value={spotifyLink}
          onChange={(e) => setSpotifyLink(e.target.value)}
          required
        />

        <button type="submit" className="btn">
          Update Track
        </button>
      </form>
      <button onClick={handleDelete} className="btn delete-btn">
        Delete Track
      </button>
      {message && <p className="success-message">{message}</p>}
    </div>
  );
};

export default EditTrack;
