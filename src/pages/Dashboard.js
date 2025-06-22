import React from 'react';
import { useAuth } from '../context/AuthContext';

function Dashboard({ jobs }) {
  const { applications, user } = useAuth();

  if (!user || user.email !== 'admin@admin.com') return <p>Access Denied</p>;

  return (
    <div className="dashboard">
      <h1>Admin Dashboard</h1>
      <p>Total Jobs Posted: {jobs.length}</p>
      <p>Total Applications: {applications.length}</p>
      <p>Job Types: {[...new Set(jobs.map(j => j.type))].join(', ')}</p>
    </div>
  );
}

export default Dashboard;
