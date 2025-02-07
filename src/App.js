import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import UploadTrack from './components/UploadTrack';
import CuratorReview from './components/CuratorReview';

const App = () => {
  return (
    <div className="App">
      <h1>Indie Playlist Placement</h1>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/upload" element={<UploadTrack />} />
        <Route path="/curator" element={<CuratorReview />} />
      </Routes>
    </div>
  );
};

export default App;
