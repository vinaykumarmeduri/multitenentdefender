import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import './Home.css';
import { Link } from 'react-router-dom';

import HomePageCard from './HomePageCard'; // Import the HomePageCard component
function Home() {
  return (
    <div>
      {/* Navbar */}
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#" className="app-name">
            Multi<span className="highlight"> Tenant </span> Defender
          </Navbar.Brand>
          <Nav>
            <Nav.Link as={Link} to="/Home">Home</Nav.Link>
            <Nav.Link as={Link} to="/About">About</Nav.Link>
            <Nav.Link as={Link} to="/Settings">Settings</Nav.Link>
            <Nav.Link as={Link} to="/Profile">Profile</Nav.Link>
            <Nav.Link as={Link} to="/Login">Login</Nav.Link>
          </Nav>
          <Button variant="outline-light">Login</Button>
        </Container>
      </Navbar>
      <div className="text-center mt-5">
        <h1>Welcome to MTD !</h1>
        <p>This is the home page of our application.</p>
        {/* Include the GamesCard component */}
        <HomePageCard />
      </div>

      
      
    </div>
   
  );
}

export default Home;