import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import './Jobs.css';

function Jobs({ jobs }) {
  const { applyToJob } = useAuth();
  const [filter, setFilter] = useState('');
  const [selectedJob, setSelectedJob] = useState(null);
  const [resume, setResume] = useState(null);

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(filter.toLowerCase()) ||
    job.location.toLowerCase().includes(filter.toLowerCase()) ||
    job.type.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    document.body.style.overflow = selectedJob ? 'hidden' : 'auto';
  }, [selectedJob]);

  const handleApply = (e) => {
    e.preventDefault();
    applyToJob({ ...selectedJob, resume: resume?.name });
    alert(`Applied to ${selectedJob.title} with resume: ${resume?.name}`);
    setSelectedJob(null);
    setResume(null);
  };

  return (
    <div className="jobs-container">
      <h1>📋 Explore Available Jobs</h1>
      <input
        type="text"
        placeholder="Filter by title, location, or type"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="filter-input"
      />

      <ul className="job-list">
        {filteredJobs.map(job => (
          <li key={job.id} className="job-card">
            <h3>{job.title}</h3>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Type:</strong> {job.type}</p>
            <button onClick={() => setSelectedJob(job)}>Apply Now 📝</button>
          </li>
        ))}
      </ul>

      {selectedJob && (
        <div className="apply-form">
          <h2>Apply for {selectedJob.title}</h2>
          <form onSubmit={handleApply}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Why should we hire you?" required />
            <input type="file" onChange={(e) => setResume(e.target.files[0])} required />
            <button type="submit">Submit Application</button>
            <button type="button" onClick={() => setSelectedJob(null)} className="close-btn">Cancel</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Jobs;
