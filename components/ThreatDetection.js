import React, { useState } from 'react';
import axios from 'axios';
import './ThreatDetection.css';

function ThreatDetection() {
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/threat-detection', {
        url: url
      });
      const prediction = response.data.prediction;
      if (prediction === 1) {
        alert('Threat Detected!');
      } else {
        alert('No Threat Detected');
      }
      setError('');
    } catch (error) {
      console.error('Error:', error);
      setError('Error occurred while predicting. Please try again.');
    }
  };

  return (
    <div className="container">
      <h2 className="title">Threat Detection</h2>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">URL:</label>
          <div className="control">
            <input className="input" type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <button className="button is-primary" type="submit">Predict</button>
          </div>
        </div>
      </form>
      {error && <div className="notification is-danger">{error}</div>}
    </div>
  );
}

export default ThreatDetection;
