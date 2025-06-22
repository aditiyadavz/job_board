import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-hero">
      <div className="overlay">
        <h1>Your Career Starts Here</h1>
        <p>Browse thousands of jobs and apply with just one click!</p>
        <button onClick={() => navigate('/jobs')}>Explore Jobs</button>
      </div>
    </div>
  );
}

export default Home;
