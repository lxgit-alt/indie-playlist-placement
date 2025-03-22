import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./Navbar.css";
import logo from "../logo.svg"; // Make sure this path is correct

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container navbar-container">
        <div className="navbar-logo">
          <Link to="/"> {/* Clicking logo goes to home */}
            <img src={logo} alt="Independent Playlist Placement" />
          </Link>
        </div>
        <nav className="navbar-menu">
          <ul>
            <li><a href="#how-it-works">How It Works</a></li>
            <li><a href="#partners">Partners</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><Link to="/pricing">Pricing</Link></li> {/* Updated Link */}
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="navbar-cta">
          <Link to="/dashboard" className="btn btn-primary">Get Started</Link> {/* Updated Link */}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
