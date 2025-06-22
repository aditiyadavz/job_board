import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  // Load user from localStorage if available
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('jobportal_user');
    return saved ? JSON.parse(saved) : null;
  });

  // Store job applications in state (can extend to persist if needed)
  const [applications, setApplications] = useState([]);

  // Simulate login
  const login = (email) => {
    const newUser = { email };
    setUser(newUser);
    localStorage.setItem('jobportal_user', JSON.stringify(newUser));
  };

  // Simulate logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem('jobportal_user');
    setApplications([]); // optional: clear applications on logout
  };

  // Track applied jobs
  const applyToJob = (job) => {
    setApplications((prev) => [...prev, job]);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, applications, applyToJob }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook for easier usage
export function useAuth() {
  return useContext(AuthContext);
}
