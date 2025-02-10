import React from "react";
import "./Navbar.css";

const Navbar = ({ toggleDarkMode }) => {
  return (
    <nav className="navbar">
      <div className="logo">🎵 Indie Playlist Placement</div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/submit">Submit Music</a></li>
        <li><a href="/curators">Curators</a></li>
        <li><a href="/pricing">Pricing</a></li>
        <li><a href="/login" className="btn-nav">Login</a></li>
        {/* 🌙 Dark Mode Toggle Button */}
        <li>
          <button className="btn-darkmode" onClick={toggleDarkMode}>
            🌙 Dark Mode
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
