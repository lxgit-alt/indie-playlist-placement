import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CuratorReview = () => {
  const [tracks, setTracks] = useState([]);
  const [feedback, setFeedback] = useState({});

  useEffect(() => {
    fetchTracks();
  }, []);

  const fetchTracks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/curator/review');
      setTracks(response.data);
    } catch (error) {
      console.error('Error fetching tracks:', error);
    }
  };

  const handleFeedbackChange = (trackId, event) => {
    setFeedback({ ...feedback, [trackId]: event.target.value });
  };

  const submitFeedback = async (trackId, accepted) => {
    try {
      await axios.post(`http://localhost:5000/curator/review/${trackId}`, {
        feedback: feedback[trackId] || '',
        accepted,
      });
      alert('Feedback submitted!');
      fetchTracks(); // Refresh the list
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  };

  return (
    <div className="curator-review-container">
      <h2>Curator Review Panel</h2>
      {tracks.length === 0 ? (
        <p>No tracks available for review.</p>
      ) : (
        tracks.map((track) => (
          <div key={track.id} className="track-card">
            <h3>{track.trackName} - {track.artist}</h3>
            <audio controls>
              <source src={`http://localhost:5000/${track.filePath}`} type="audio/mp3" />
              Your browser does not support the audio tag.
            </audio>
            <textarea
              placeholder="Leave feedback..."
              value={feedback[track.id] || ''}
              onChange={(event) => handleFeedbackChange(track.id, event)}
            />
            <button onClick={() => submitFeedback(track.id, true)}>Approve</button>
            <button onClick={() => submitFeedback(track.id, false)}>Reject</button>
          </div>
        ))
      )}
    </div>
  );
};

export default CuratorReview;
