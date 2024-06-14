import React from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function WebsiteProtection() {
  

  return (
    <div className="container" style={styles.container}>
      <h1>Website Protection</h1>
      <p>Starting protection for your website...</p>

      <Card className="mt-3" style={styles.card}>
        <Card.Header style={styles.cardHeader}>Options</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item as={Link} to="/security">
            <Button variant="light" style={styles.button}>
              Security
            </Button>
          </ListGroup.Item>
          <ListGroup.Item as={Link} to="/dashboard">
            <Button variant="light" style={styles.button}>
              Dashboard
            </Button>
          </ListGroup.Item>
          <ListGroup.Item as={Link} to="/traffic">
            <Button variant="light" style={styles.button}>
              Traffic
            </Button>
          </ListGroup.Item>
        </ListGroup>
      </Card>

      
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
  },
  card: {
    marginTop: '20px',
  },
  cardHeader: {
    backgroundColor: '#007bff',
    color: 'white',
  },
  button: {
    width: '100%',
    textAlign: 'left',
  },
};

export default WebsiteProtection;
