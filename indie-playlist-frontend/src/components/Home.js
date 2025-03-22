import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <h1>Welcome Back!</h1>
        <p>Manage your tracks, view curator feedback, and see your progress.</p>
        <div className="home-actions">
          <Link to="/upload" className="btn btn-primary">Upload Track</Link>
          <Link to="/curator" className="btn btn-secondary">View Curator Reviews</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
