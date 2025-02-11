import React from "react";
import bg from '/src/images/retro-sunset-bg.png';
import "./Hero.css";

const Hero = () => {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${retroSunsetBg})` }} // Set the background image here
    >
      <div className="hero-content">
        <h1 className="neon-text">Get Your Music on the Best Indie Playlists</h1>
        <p>Connect with top Spotify curators and grow your audience.</p>
        <a href="/submit" className="btn-cta">Submit Your Track</a>
      </div>
    </section>
  );
};

export default Hero;
