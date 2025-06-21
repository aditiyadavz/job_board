import React from 'react';
import JobCard from './JobCard';
import './JobList.css';

const JobList = ({ jobs }) => {
  return (
    <div className="job-list">
      {jobs.length === 0 ? (
        <p className="no-results">No jobs found.</p>
      ) : (
        jobs.map((job) => <JobCard key={job.id} job={job} />)
      )}
    </div>
  );
};

export default JobList;