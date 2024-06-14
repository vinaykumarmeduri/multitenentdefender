import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TrafficDetails.css'; // Import CSS file

function TrafficDetails({ setTotalRequests, setBlockedRequests, setThreatsIdentified, showDetails = true }) {
    const [userCredentials, setUserCredentials] = useState([]);

    useEffect(() => {
        fetchUserCredentials();
    }, []);

    const fetchUserCredentials = async () => {
        try {
            const response = await axios.get('http://localhost:8080/user-credentials');
            const credentials = response.data.user_credentials;

            // Set the user credentials state with the latest fetched data
            setUserCredentials(credentials);

            // Calculate total requests, blocked requests, and threats identified
            const total = credentials.length;
            const blocked = credentials.filter(credential => credential.status === 'Denied - Threat Detected').length;
            const threats = blocked; // Assuming threats are the same as blocked requests

            // Update the parent component with the counts
            if (setTotalRequests) setTotalRequests(total);
            if (setBlockedRequests) setBlockedRequests(blocked);
            if (setThreatsIdentified) setThreatsIdentified(threats);

            // Check the status of the last credential
            const lastCredential = credentials[credentials.length - 1];
            if (lastCredential && lastCredential.status === 'Denied - Threat Detected') {
                alert('Threat detected: Access denied');
            }
        } catch (error) {
            console.error('Error fetching user credentials:', error);
        }
    };

    return (
        <div className="traffic-details-container">
            {showDetails && (
                <>
                    <h2>User Credentials</h2>
                    <ul className="traffic-details-list">
                        {userCredentials.map((credential, index) => (
                            <li key={index} className="traffic-details-item">
                                <p><strong>Username:</strong> {credential.username}</p>
                                <p><strong>Password:</strong> {credential.password}</p>
                                <p><strong>Timestamp:</strong> {credential.timestamp}</p>
                                <p><strong>Status:</strong> {credential.status}</p>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
}

export default TrafficDetails;
