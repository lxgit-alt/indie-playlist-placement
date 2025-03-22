// src/components/TrackManagementIcon.js
import React from 'react';

const TrackManagementIcon = ({ className = '' }) => (
  <svg
    className={`icon ${className}`}
    width="24"
    height="24"
    viewBox="0 0 64 64"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="4" y="4" width="56" height="56" rx="8" fill="currentColor" opacity="0.1" />
    <rect x="16" y="16" width="8" height="32" fill="currentColor" />
    <rect x="28" y="24" width="8" height="24" fill="currentColor" />
    <rect x="40" y="20" width="8" height="28" fill="currentColor" />
    <path
      d="M32 12 C28 12, 24 16, 24 20 C24 24, 28 28, 32 28 C36 28, 40 24, 40 20 C40 16, 36 12, 32 12 Z"
      fill="currentColor"
    />
  </svg>
);

export default TrackManagementIcon;
