// src/components/CommunityGallery.js
import React from 'react';
import './CommunityGallery.css';
import community1 from '../assets/community1.jpg';
import community2 from '../assets/community2.jpg';

const CommunityGallery = () => (
  <section className="community-gallery">
    <h2>Our Community</h2>
    <div className="gallery-grid">
      <img src={community1} alt="Community 1" />
      <img src={community2} alt="Community 2" />
    </div>
  </section>
);

export default CommunityGallery;
