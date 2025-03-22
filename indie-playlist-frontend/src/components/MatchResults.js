// MatchResults.js
import React from 'react';
import './MatchResults.css';

const MatchResults = ({ results }) => {
  return (
    <section className="match-results">
      <div className="container">
        <h2>Your Playlist Matches</h2>
        {results && results.length > 0 ? (
          <ul>
            {results.map((result, index) => (
              <li key={index} className="match-item">
                <h3>{result.playlistName}</h3>
                <p>{result.description}</p>
                <a 
                  href={result.link} 
                  className="btn btn-secondary" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Listen Now
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p>No matches found. Try uploading a new track!</p>
        )}
      </div>
    </section>
  );
};

export default MatchResults;
