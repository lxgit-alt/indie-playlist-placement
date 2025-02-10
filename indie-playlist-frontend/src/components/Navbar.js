import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // ✅ Importing the updated styles

const Navbar = ({ toggleDarkMode }) => {
  return (
    <nav className="navbar">
      <h1 className="logo">🎵 Indie Playlist Placement</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/upload">Upload</Link>
        </li>
        <li>
          <Link to="/curator">Curator</Link>
        </li>
      </ul>
      <button className="dark-mode-toggle" onClick={toggleDarkMode}>
        🌙 Toggle Dark Mode
      </button>
    </nav>
  );
};

export default Navbar;
