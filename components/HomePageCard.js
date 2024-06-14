import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function HomePageCard() {
  const [isDeployed, setIsDeployed] = useState(null);

  useEffect(() => {
    checkDeploymentStatus();
  }, []);

  const checkDeploymentStatus = async () => {
    const email = localStorage.getItem('email');

    try {
      const response = await fetch('http://localhost:5000/api/user/deployment-status', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });

      const data = await response.json();

      setIsDeployed(data.deployed);
    } catch (error) {
      console.error('Error checking deployment status:', error);
    }
  };

  const handleMTDClick = () => {
    if (isDeployed) {
      window.location.href = '/websiteprotection';
    } else {
      alert('No website deployed.');
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-lg-6">
          <Card className="bg-dark text-white">
            <Card.Header>Sections</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item as={Link} to="ThreatDetection">Threat Detection</ListGroup.Item>
              <ListGroup.Item action onClick={handleMTDClick}>MTD</ListGroup.Item>
              <ListGroup.Item as={Link} to="DeployWebsite">Deploy Website</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Button variant="primary">View All Sections</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default HomePageCard;
