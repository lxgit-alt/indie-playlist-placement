import React from 'react';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="how-it-works">
      <div className="container">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <img src="/assets/upload-icon.png" alt="Submit Your Track" />
            <h3>Submit Your Track</h3>
            <p>Upload your track and share your vision.</p>
          </div>
          <div className="step">
            <img src="/assets/match-icon.png" alt="Get Matched" />
            <h3>Get Matched with Playlists</h3>
            <p>We connect you with independent curators.</p>
          </div>
          <div className="step">
            <img src="/assets/soar-icon.png" alt="Watch Plays Soar" />
            <h3>Watch Your Plays Soar</h3>
            <p>See your audience grow as your plays skyrocket.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
