import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useAuth } from '../context/AuthContext';

function Navbar() {
  const { user, logout } = useAuth();
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">JobPortal</Link>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/jobs">Jobs</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        {user?.email === 'admin@admin.com' && (
          <li><Link to="/admin">Admin</Link></li>
        )}
        {user ? (
          <>
            <li><Link to="/profile">Profile</Link></li>
            <li>
              <button className="logout-btn" onClick={logout}>Logout</button>
            </li>
          </>
        ) : (
          <li><Link to="/login">Login</Link></li>
        )}

        <li>
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
