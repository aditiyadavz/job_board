import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import JobList from '../components/JobList';
import jobs from '../data/jobs';
import './JobBoard.css';

const JobBoard = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="jobboard-container">
      <h2>Available Jobs</h2>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <JobList jobs={filteredJobs} />
    </div>
  );
};

export default JobBoard;