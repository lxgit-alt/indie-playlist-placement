import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import UploadTrack from './components/UploadTrack';
import CuratorReview from './components/CuratorReview';
import Navbar from './components/Navbar';
import Hero from './components/Hero'; // ✅ Added Hero Section
import Footer from './components/Footer';
import './global.css'; // ✅ Ensure global styles are applied

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
      {/* 🎸 Retro Navbar with Dark Mode Toggle */}
      <Navbar toggleDarkMode={toggleDarkMode} />

      {/* 🌟 Hero Section (Big Title + CTA) */}
      <Hero />

      {/* 📌 Routing */}
      <main>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/upload" element={<UploadTrack />} />
          <Route path="/curator" element={<CuratorReview />} />
        </Routes>
      </main>

      {/* 📌 Footer */}
      <Footer />
    </div>
  );
};

export default App;
