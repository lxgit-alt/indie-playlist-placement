// Callback.js
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './Callback.css'; // Ensure this file exists or create it

const Callback = () => {
  const history = useHistory();

  useEffect(() => {
    // Simulate token processing from the callback URL
    setTimeout(() => {
      // After processing, redirect the user (e.g., to a dashboard)
      history.push('/dashboard');
    }, 2000);
  }, [history]);

  return (
    <div className="callback">
      <h2>Processing Your Login...</h2>
      <p>Please wait while we sign you in.</p>
    </div>
  );
};

export default Callback;
