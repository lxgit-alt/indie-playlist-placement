// src/components/TrackManagement.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TrackManagement.css';

const TrackManagement = () => {
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(null);

  useEffect(() => {
    fetchTracks();
  }, []);

  const fetchTracks = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/api/tracks'); // Uses the proxy if set in package.json
      setTracks(response.data.tracks);
      setLoading(false);
    } catch (err) {
      setError('Error fetching tracks');
      setLoading(false);
    }
  };

  const handleDelete = async (trackId) => {
    if (!window.confirm('Are you sure you want to delete this track?')) return;
    try {
      await axios.delete(`/api/tracks/${trackId}`);
      fetchTracks();
    } catch (err) {
      console.error('Delete error:', err);
    }
  };

  const handleEdit = (track) => {
    setCurrentTrack(track);
    setEditModalOpen(true);
  };

  const closeModal = () => {
    setEditModalOpen(false);
    setCurrentTrack(null);
  };

  const handleSave = async (updatedTrack) => {
    try {
      await axios.put(`/api/tracks/${updatedTrack.id}`, updatedTrack);
      closeModal();
      fetchTracks();
    } catch (err) {
      console.error('Update error:', err);
    }
  };

  if (loading) return <p>Loading tracks...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="track-management">
      <h2>Your Tracks</h2>
      {tracks.length === 0 ? (
        <p>No tracks available. Please upload a track.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Date Uploaded</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tracks.map((track) => (
              <tr key={track.id}>
                <td>{track.name}</td>
                <td>{new Date(track.uploadedAt).toLocaleString()}</td>
                <td>
                  <button onClick={() => handleEdit(track)}>Edit</button>
                  <button onClick={() => handleDelete(track.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {editModalOpen && currentTrack && (
        <EditTrackModal track={currentTrack} onClose={closeModal} onSave={handleSave} />
      )}
    </div>
  );
};

const EditTrackModal = ({ track, onClose, onSave }) => {
  const [name, setName] = useState(track.name);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...track, name });
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Edit Track</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="trackName">Track Name:</label>
          <input
            id="trackName"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <div className="modal-buttons">
            <button type="submit">Save</button>
            <button type="button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TrackManagement;
