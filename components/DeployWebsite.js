import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function DeployWebsite() {
  const [websiteDetails, setWebsiteDetails] = useState({
    domain: '',
    backendURL: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWebsiteDetails({
      ...websiteDetails,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const email = localStorage.getItem('email');
      const response = await fetch('http://localhost:5000/api/deploy-website', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...websiteDetails, email })
      });

      const result = await response.json();

      if (response.ok) {
        setMessage(result.message);
        
      } else {
        setMessage(result.message || 'Failed to deploy website');
      }
    } catch (error) {
      console.error('Error deploying website:', error);
      setMessage('Error deploying website');
    }
  };

  return (
    <div className="container">
      <h1 className="mt-5">Deploy Your Local Website</h1>
      <Form className="mt-3" onSubmit={handleSubmit}>
        <Form.Group controlId="formDomain">
          <Form.Label>Domain Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter domain name"
            name="domain"
            value={websiteDetails.domain}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formBackendURL">
          <Form.Label>Backend URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter backend URL"
            name="backendURL"
            value={websiteDetails.backendURL}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Deploy
        </Button>
      </Form>
      {message && <div className="mt-3 alert alert-info">{message}</div>}
    </div>
  );
}

export default DeployWebsite;
