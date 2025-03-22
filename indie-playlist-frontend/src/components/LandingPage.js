// src/components/LandingPage.js
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./LandingPage.css";
import logo from "../assets/branding-logo.png"; // Ensure your logo image is available in assets

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/pricing");
  };

  return (
    <div className="landing-page">
      <header className="hero">
        <div className="hero-overlay">
          <nav className="navbar">
            <div className="navbar-logo">
              <img src={logo} alt="Independent Playlist Placement Logo" />
            </div>
            <ul className="navbar-menu">
              <li><a href="#features">Features</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
          <div className="hero-content">
            <h1>Get Your Music Heard</h1>
            <p>
              Connect with independent curators and get your tracks featured on the right playlists.
            </p>
            <button className="btn hero-btn" onClick={handleGetStarted}>
              Get Started
            </button>
          </div>
          {/* Inspirational Quote */}
          <div className="hero-quote">
            <blockquote>
              “The world doesn’t need 100 ‘good enough’ tracks. It needs one that only you can make.
              So keep going. The grind isn’t the price—it’s the gift.”
            </blockquote>
          </div>
        </div>
      </header>

      <section id="features" className="features">
        <h2>Our Features</h2>
        <div className="features-grid">
          <div className="feature">
            <i className="fas fa-upload icon"></i>
            <h3>Easy Upload</h3>
            <p>Quickly upload your tracks and get feedback from top curators.</p>
          </div>
          <div className="feature">
            <i className="fas fa-robot icon"></i>
            <h3>AI Track Matching</h3>
            <p>Leverage AI to match your music with the best playlists.</p>
          </div>
          <div className="feature">
            <i className="fas fa-chart-line icon"></i>
            <h3>Analytics</h3>
            <p>Track your performance with detailed analytics and insights.</p>
          </div>
        </div>
      </section>

      <section id="testimonials" className="testimonials">
        <h2>What Artists Say</h2>
        <div className="testimonial-list">
          <div className="testimonial">
            <p>"This platform helped me skyrocket my audience. My music is now reaching the right ears!"</p>
            <span>- Indie Artist</span>
          </div>
          <div className="testimonial">
            <p>"The AI matching is a game-changer. I got my track featured on multiple playlists."</p>
            <span>- Rising Star</span>
          </div>
        </div>
      </section>

      <section id="pricing" className="pricing">
        <h2>Pricing</h2>
        <p>Choose a plan that fits your music career needs.</p>
        <div className="pricing-options">
          <div className="pricing-card free">
            <h3>Free Plan</h3>
            <p>3 submissions per day, limited features, and ads.</p>
            <button className="btn">Get Started</button>
          </div>
          <div className="pricing-card pro">
            <h3>Pro Plan</h3>
            <p>$10/month - Unlimited submissions, full features, and ad-free experience.</p>
            <button className="btn">Upgrade Now</button>
          </div>
        </div>
      </section>

      <footer id="contact" className="footer">
        <div className="footer-content">
          <ul className="footer-links">
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms of Service</Link></li>
            <li><Link to="/refund">Refund Policy</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
          <p>&copy; {new Date().getFullYear()} Indie Playlist Placement. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
