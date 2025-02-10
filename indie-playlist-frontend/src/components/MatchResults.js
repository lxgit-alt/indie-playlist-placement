import React, { useState, useEffect } from "react";

const MatchResults = ({ trackId }) => {
  const [matchData, setMatchData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMatchScore = async () => {
      if (!trackId) return;
      setLoading(true);
      try {
        const response = await fetch(`https://your-backend.onrender.com/api/tracks/match/${trackId}`);
        const data = await response.json();
        setMatchData(data);
      } catch (err) {
        setError("Error fetching match score");
      }
      setLoading(false);
    };

    fetchMatchScore();
  }, [trackId]);

  return (
    <div>
      <h3>AI Match Score</h3>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {matchData && (
        <ul>
          {matchData.map((match, index) => (
            <li key={index}>
              Curator ID: {match.curatorId}, Match Score: {match.score}%
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MatchResults;
