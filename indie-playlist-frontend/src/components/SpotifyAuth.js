// src/components/SpotifyAuth.js
import React from 'react';
import './SpotifyAuth.css';

const SpotifyAuth = () => {
  // Replace these with your actual Spotify credentials and desired scopes
  const clientId = 'e55b0e67c0aa4e77a5a83a58351cf060';
  const redirectUri = encodeURIComponent('http://localhost:3000/callback');
  const scopes = encodeURIComponent('user-read-private user-read-email');

  // Construct the Spotify authorization URL
  const spotifyAuthUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${scopes}`;

  const handleAuth = () => {
    // Redirect the user to Spotify's authorization page
    window.location.href = spotifyAuthUrl;
  };

  return (
    <div className="spotify-auth">
      <h2>Sign Up or Login with Spotify</h2>
      <p>Use your Spotify account to quickly get started and access exclusive features.</p>
      <div className="button-group">
        <button className="btn" onClick={handleAuth}>
          Sign Up with Spotify
        </button>
        <button className="btn" onClick={handleAuth}>
          Login with Spotify
        </button>
      </div>
    </div>
  );
};

export default SpotifyAuth;
