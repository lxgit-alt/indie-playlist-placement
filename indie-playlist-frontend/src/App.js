import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import UploadTrack from './components/UploadTrack';
import CuratorReview from './components/CuratorReview';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  // 🌙 Dark Mode State
  const [darkMode, setDarkMode] = useState(false);

  // 🔄 Toggle Dark Mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <div className={`App ${darkMode ? 'dark' : ''}`}>
      {/* 🎸 Retro Navbar */}
      <Navbar toggleDarkMode={toggleDarkMode} />

      {/* 🌟 Animated Retro Header */}
      <h1>Indie Playlist Placement</h1>

      {/* 📌 Routing */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/upload" element={<UploadTrack />} />
        <Route path="/curator" element={<CuratorReview />} />
      </Routes>

      {/* 🌊 SVG Wave Background */}
      <div className="bg-wave">
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#ff00ff"
            fillOpacity="0.5"
            d="M0,256L48,240C96,224,192,192,288,192C384,192,480,224,576,208C672,192,768,128,864,122.7C960,117,1056,171,1152,202.7C1248,235,1344,245,1392,250.7L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>

      {/* 📌 Footer */}
      <Footer />
    </div>
  );
};

export default App;
