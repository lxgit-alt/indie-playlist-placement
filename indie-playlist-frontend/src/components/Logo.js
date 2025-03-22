// src/components/Logo.js
import React from 'react';
import './Logo.css';
import logoImage from '../assets/branding-logo.png';

const Logo = ({ width = 120, height = 'auto' }) => {
  return (
    <div className="logo-container">
      <img
        src={logoImage}
        alt="Independent Playlist Placement Logo"
        style={{ width: width, height: height }}
      />
    </div>
  );
};

export default Logo;
