// src/components/SpotifyIntegration.js
import React from 'react';
import './SpotifyIntegration.css';

const SpotifyIntegration = () => {
  const handleConnect = () => {
    // Redirect to Spotify authentication (replace with actual URL and parameters)
    window.location.href = 'https://accounts.spotify.com/authorize?...';
  };

  return (
    <div className="spotify-integration">
      <h2>Connect Your Spotify Account</h2>
      <p>
        Link your Spotify account to fetch play data and enhance your analytics.
      </p>
      <button onClick={handleConnect} className="btn btn-primary">
        Connect to Spotify
      </button>
    </div>
  );
};

export default SpotifyIntegration;
