import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Dashboard.css'; // Import custom CSS file for Dashboard styling
import TrafficDetails from './TrafficDetails'; // Import TrafficDetails component

function Dashboard() {
    const [totalRequests, setTotalRequests] = useState(0);
    const [blockedRequests, setBlockedRequests] = useState(0);
    const [threatsIdentified, setThreatsIdentified] = useState(0);

    return (
        <Container className="dashboard-container">
            <h1 className="dashboard-title">Dashboard Overview</h1>
            <Row>
                <Col>
                    <Card className="dashboard-card">
                        <Card.Body>
                            <Card.Title className="dashboard-card-title">Total Requests</Card.Title>
                            <Card.Text className="dashboard-card-text">{totalRequests}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="dashboard-card">
                        <Card.Body>
                            <Card.Title className="dashboard-card-title">Blocked Requests</Card.Title>
                            <Card.Text className="dashboard-card-text">{blockedRequests}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="dashboard-card">
                        <Card.Body>
                            <Card.Title className="dashboard-card-title">Threats Detected</Card.Title>
                            <Card.Text className="dashboard-card-text">{threatsIdentified}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* Render TrafficDetails without showing the credentials */}
            <TrafficDetails
                setTotalRequests={setTotalRequests}
                setBlockedRequests={setBlockedRequests}
                setThreatsIdentified={setThreatsIdentified}
                showDetails={false}
            />
        </Container>
    );
}

export default Dashboard;
