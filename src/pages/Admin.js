import React, { useState } from 'react';
import './Admin.css';
import { useAuth } from '../context/AuthContext';

function Admin({ jobs, setJobs }) {
  const [newJob, setNewJob] = useState({ title: '', location: '', type: '' });
  const { user } = useAuth();

  if (!user || user.email !== 'admin@admin.com') return <p>Access Denied</p>;

  const handleAdd = (e) => {
    e.preventDefault();
    setJobs([...jobs, { id: Date.now(), ...newJob }]);
    setNewJob({ title: '', location: '', type: '' });
  };

  const handleDelete = (id) => setJobs(jobs.filter(job => job.id !== id));

  return (
    <div className="admin-panel">
      <h1>Admin Panel</h1>
      <form onSubmit={handleAdd}>
        <input value={newJob.title} onChange={(e) => setNewJob({ ...newJob, title: e.target.value })} placeholder="Title" />
        <input value={newJob.location} onChange={(e) => setNewJob({ ...newJob, location: e.target.value })} placeholder="Location" />
        <input value={newJob.type} onChange={(e) => setNewJob({ ...newJob, type: e.target.value })} placeholder="Type" />
        <button type="submit">Add Job</button>
      </form>
      <ul>
        {jobs.map(job => (
          <li key={job.id}>
            {job.title} - {job.location} ({job.type}) <button onClick={() => handleDelete(job.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Admin;
