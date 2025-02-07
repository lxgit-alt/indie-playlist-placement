import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import UploadTrack from './components/UploadTrack';
import CuratorReview from './components/CuratorReview';
import SpotifyCallback from './components/SpotifyCallback'; // New callback component

const App = () => {
  return (
    <div className="App">
      <h1>Indie Playlist Placement</h1>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/upload" element={<UploadTrack />} />
        <Route path="/curator" element={<CuratorReview />} />
        <Route path="/callback" element={<SpotifyCallback />} /> {/* New route for Spotify */}
      </Routes>
    </div>
  );
};

export default App;
