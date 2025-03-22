// src/components/AnalyticsIcon.js
import React from 'react';

const AnalyticsIcon = () => (
  <svg
    width="64"
    height="64"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="32" cy="32" r="30" fill="#FF007F" opacity="0.1" />
    <rect x="16" y="30" width="8" height="18" fill="#FF007F" />
    <rect x="28" y="22" width="8" height="26" fill="#FF007F" />
    <rect x="40" y="18" width="8" height="30" fill="#FF007F" />
    <polyline points="16,48 28,34 40,26 48,30" stroke="#FF007F" strokeWidth="2" fill="none" />
  </svg>
);

export default AnalyticsIcon;
