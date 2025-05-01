// src/components/TrackApplicationStatus.jsx
import React, { useState } from 'react';
import '../styles/TrackApplicationStatus.css'; // Make sure this path is correct

const TrackApplicationStatus = () => {
  const [applicationId, setApplicationId] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!applicationId || !email) {
      setError('Please enter both Application ID and Email.');
      return;
    }

    setLoading(true);
    setError('');

    // Simulate API call
    setTimeout(() => {
      // Mock validation
      if (applicationId === '6' && email === 'test@gmail.com') {
        setStatus('Approved');
      } else {
        setStatus('Pending'); // Or "Rejected" based on your logic
      }
      setLoading(false);
    }, 1500);
  };

  return (
    <div style={{"padding":"50px"}} className="track-status-container">
      <h2>Track Your Application Status</h2>

      <form onSubmit={handleSubmit} className="track-form">
        <label>
          Application ID:
          <input
            type="text"
            value={applicationId}
            onChange={(e) => setApplicationId(e.target.value)}
            required
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <button type="submit" disabled={loading}>
          {loading ? 'Checking...' : 'Check Status'}
        </button>
      </form>

      {error && <p className="error">{error}</p>}

      {status && !loading && (
        <div className="status-display">
          <h3>Your Application Status: {status}</h3>
        </div>
      )}
    </div>
  );
};

export default TrackApplicationStatus;