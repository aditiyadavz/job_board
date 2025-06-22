import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-bg">
      <div className="overlay">
        <h1>About Us</h1>
        <p>Welcome to JobPortal — your one-stop solution for job discovery, applications, and career growth.</p>

        <h2>🚀 Our Mission</h2>
        <p>To bridge the gap between job seekers and great companies, making hiring simple and effective for everyone.</p>

        <h2>📬 Contact Information</h2>
        <ul className="contact-list">
          <li><strong>Email:</strong> support@jobportal.com</li>
          <li><strong>Phone:</strong> +91 9876543210</li>
          <li><strong>Address:</strong> Sharda University, Knowledge Park III, Greater Noida, India</li>
        </ul>

        <h2>👩‍💻 Meet the Team</h2>
        <ul className="team-list">
          <li>Aditi Yadav - CEO</li>
          
        </ul>
      </div>
    </div>
  );
}

export default AboutUs;
