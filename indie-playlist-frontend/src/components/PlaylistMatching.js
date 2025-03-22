// src/components/PlaylistMatching.js
import React, { useState } from 'react';
import './PlaylistMatching.css';

const samplePlaylists = [
  { id: 1, name: 'Indie Vibes', genre: 'Indie' },
  { id: 2, name: 'Chill Beats', genre: 'Chill' },
  { id: 3, name: 'Rock Anthems', genre: 'Rock' },
];

const PlaylistMatching = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredPlaylists = samplePlaylists.filter(playlist =>
    playlist.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="playlist-matching">
      <h2>Find Your Playlist Matches</h2>
      <input 
        type="text" 
        placeholder="Search playlists..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredPlaylists.map(playlist => (
          <li key={playlist.id}>
            <h3>{playlist.name}</h3>
            <p>Genre: {playlist.genre}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlaylistMatching;
