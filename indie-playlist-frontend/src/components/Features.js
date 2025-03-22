// src/components/Features.js
import React from 'react';
import TrackManagementIcon from './TrackManagementIcon';
import AnalyticsIcon from './AnalyticsIcon';
import AITrackMatchingIcon from './AITrackMatchingIcon';
import './Features.css';

const Features = () => (
  <section id="features" className="features-section">
    <h2>Our Features</h2>
    <div className="features-container">
      <div className="feature-card">
        <TrackManagementIcon />
        <h3>Track Management</h3>
        <p>Easily upload and manage your music tracks in one place.</p>
      </div>
      <div className="feature-card">
        <AnalyticsIcon />
        <h3>Analytics</h3>
        <p>Monitor your track performance and audience growth with real-time analytics.</p>
      </div>
      <div className="feature-card">
        <AITrackMatchingIcon />
        <h3>AI Track Matching</h3>
        <p>Leverage AI to pitch your tracks and connect with curators for the best matches.</p>
      </div>
    </div>
  </section>
);

export default Features;
