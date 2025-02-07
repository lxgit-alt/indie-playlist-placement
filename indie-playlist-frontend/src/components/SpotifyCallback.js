import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SpotifyCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const params = new URLSearchParams(hash.substring(1));
      const accessToken = params.get("access_token");
      if (accessToken) {
        localStorage.setItem("spotify_access_token", accessToken);
        navigate("/upload"); // Redirect after successful login
      }
    }
  }, [navigate]);

  return <p>Processing Spotify login...</p>;
};

export default SpotifyCallback;
