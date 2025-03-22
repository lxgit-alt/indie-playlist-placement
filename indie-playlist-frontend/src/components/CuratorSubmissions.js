import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CuratorSubmissions.css';

const CuratorSubmissions = () => {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const response = await axios.get('/api/curator-submissions'); // Fetch submissions
        setSubmissions(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching submissions.');
        setLoading(false);
      }
    };
    fetchSubmissions();
  }, []);

  const handleAction = async (submissionId, action) => {
    try {
      await axios.post('/api/update-submission', { submissionId, action });
      setSubmissions(submissions.filter((s) => s.id !== submissionId)); // Remove after action
    } catch (err) {
      alert('Error updating submission.');
    }
  };

  if (loading) return <p>Loading submissions...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="curator-submissions">
      <h2>Manage Submissions</h2>
      {submissions.length === 0 ? (
        <p>No pending submissions.</p>
      ) : (
        <ul>
          {submissions.map((submission) => (
            <li key={submission.id} className="submission-item">
              <div>
                <p><strong>Track:</strong> {submission.trackName} by {submission.artistName}</p>
                <p><strong>Genre:</strong> {submission.genre}</p>
                <iframe
                  src={`https://open.spotify.com/embed/track/${submission.spotifyId}`}
                  width="100%"
                  height="80"
                  frameBorder="0"
                  allow="encrypted-media"
                  title="Spotify Preview"
                ></iframe>
              </div>
              <div className="actions">
                <button className="approve" onClick={() => handleAction(submission.id, 'approved')}>
                  ✅ Approve
                </button>
                <button className="reject" onClick={() => handleAction(submission.id, 'rejected')}>
                  ❌ Reject
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CuratorSubmissions;
