// src/components/SpotifyCallback.js
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const SpotifyCallback = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Parse query parameters from the URL
    const params = new URLSearchParams(location.search);
    const code = params.get('code');
    const error = params.get('error');

    if (error) {
      console.error("Spotify OAuth Error:", error);
      // Handle error appropriately, maybe navigate to an error page or show a message.
    } else if (code) {
      console.log("Spotify OAuth Code:", code);
      // Exchange the code for an access token with your backend here.
      // After processing, navigate to the dashboard (or another route):
      setTimeout(() => {
        navigate('/dashboard');
      }, 1000);
    }
  }, [location, navigate]);

  return (
    <div style={{ textAlign: 'center', padding: '40px' }}>
      <h2>Processing Spotify Login...</h2>
      <p>Please wait while we sign you in.</p>
    </div>
  );
};

export default SpotifyCallback;
