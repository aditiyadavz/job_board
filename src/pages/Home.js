import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to JobBoard</h1>
      <p>Find your dream job from top companies around the world.</p>
      <Link to="/jobs" className="cta-button">Browse Jobs</Link>
    </div>
  );
};

export default Home;