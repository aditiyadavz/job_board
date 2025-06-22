import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const { user, logout, applications } = useAuth();
  const navigate = useNavigate();

  if (!user) return <p>Please <a href="/login">login</a> to view your profile.</p>;

  return (
    <div className="profile">
      <h1>Welcome, {user.email}</h1>
      <h3>Your Applications</h3>
      {applications.length === 0 ? (
        <p>No applications yet.</p>
      ) : (
        <ul>
          {applications.map((job, index) => (
            <li key={index}>
              {job.title} - {job.location} ({job.type})
              {job.resume && <span> | Resume: {job.resume}</span>}
            </li>
          ))}
        </ul>
      )}
      <button onClick={() => {
        logout();
        navigate('/');
      }}>Logout</button>
    </div>
  );
}

export default Profile;
