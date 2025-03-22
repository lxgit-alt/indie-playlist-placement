// src/components/Hero.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';
import heroBg from '../assets/landing-hero.jpg';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>Boost Your Music</h1>
        <p>Get your tracks in front of the right audience with our powerful placement platform.</p>
        <div className="hero-buttons">
          <button className="btn" onClick={() => navigate('/login')}>
            Sign In with Email
          </button>
          <button className="btn spotify-btn" onClick={() => navigate('/spotify-auth')}>
            Sign Up / Login with Spotify
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
