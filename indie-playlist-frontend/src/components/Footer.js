import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-container">
        <div className="footer-links">
          <Link to="/terms">Terms of Service</Link>
          <Link to="/privacy">Privacy Notice</Link>
          <Link to="/refund">Refund Policy</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
        <div className="social-icons">
          <a href="#"><img src="/assets/facebook-icon.png" alt="Facebook" /></a>
          <a href="#"><img src="/assets/twitter-icon.png" alt="Twitter" /></a>
          <a href="#"><img src="/assets/instagram-icon.png" alt="Instagram" /></a>
        </div>
        <p>&copy; {new Date().getFullYear()} Indie Playlist Placement. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
