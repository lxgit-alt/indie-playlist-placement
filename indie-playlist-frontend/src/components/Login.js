// src/Login.js
import React from "react";

const Login = () => {
  const handleSpotifyLogin = () => {
    const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
    const redirectUri = encodeURIComponent(process.env.REACT_APP_SPOTIFY_REDIRECT_URI);
    const scope = "user-read-private user-read-email"; // Add more scopes if needed

    const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&scope=${encodeURIComponent(scope)}`;

    window.location.href = authUrl;
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleSpotifyLogin}>Log in with Spotify</button>
    </div>
  );
};

export default Login;
