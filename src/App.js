import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Jobs from './pages/Jobs';
import Profile from './pages/Profile';
import Auth from './pages/Auth';          // Combined Login/Signup
import Admin from './pages/Admin';
import Dashboard from './pages/Dashboard';

import { AuthProvider } from './context/AuthContext';
import './App.css';

function App() {
  const [jobs, setJobs] = useState([
    { id: 1, title: 'Frontend Developer', location: 'Remote', type: 'Full-Time' },
    { id: 2, title: 'Backend Developer', location: 'Bangalore', type: 'Part-Time' },
    { id: 3, title: 'UI/UX Designer', location: 'Mumbai', type: 'Internship' },
    { id: 4, title: 'Data Analyst', location: 'Delhi', type: 'Full-Time' },
    { id: 5, title: 'DevOps Engineer', location: 'Hyderabad', type: 'Remote' },
    { id: 6, title: 'Android Developer', location: 'Chennai', type: 'Full-Time' },
    { id: 7, title: 'Project Manager', location: 'Pune', type: 'Hybrid' },
    { id: 8, title: 'QA Tester', location: 'Noida', type: 'Part-Time' }
  ]);

  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/jobs" element={<Jobs jobs={jobs} />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Auth />} />
            <Route path="/signup" element={<Auth />} />
            <Route path="/admin" element={<Admin jobs={jobs} setJobs={setJobs} />} />
            <Route path="/dashboard" element={<Dashboard jobs={jobs} />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
