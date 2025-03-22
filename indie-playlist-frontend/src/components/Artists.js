// src/components/Artists.js
import React from 'react';
import './Artists.css';
import artist1 from '../assets/artist1.jpg';
import artist2 from '../assets/artist2.jpg';

const Artists = () => (
  <section className="artists">
    <h2>Our Featured Artists</h2>
    <div className="artist-gallery">
      <img src={artist1} alt="Artist One" />
      <img src={artist2} alt="Artist Two" />
      {/* Add more images as needed */}
    </div>
  </section>
);

export default Artists;
