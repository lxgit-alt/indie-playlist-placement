import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="neon-text">Get Your Music on the Best Indie Playlists</h1>
        <p>Connect with top Spotify curators and grow your audience.</p>
        <a href="/submit" className="btn-cta">Submit Your Track</a>
      </div>
    </section>
  );
};

export default Hero;
