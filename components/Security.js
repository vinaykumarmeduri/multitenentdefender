import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SecurityInfo.css'; 

function SecurityInfo() {
    const [securityData, setSecurityData] = useState({});
    
    useEffect(() => {
        // Fetch security information from the server when the component mounts
        fetchSecurityInfo();
    }, []);

    const fetchSecurityInfo = async () => {
        try {
            const response = await axios.get('/security'); // Adjust the API endpoint as needed
            setSecurityData(response.data);
        } catch (error) {
            console.error('Error fetching security information:', error);
        }
    };

    const toggleFirewall = async () => {
        try {
            const updatedData = { ...securityData, firewallEnabled: !securityData.firewallEnabled };
            setSecurityData(updatedData);
            await axios.put('/security/firewall', { enabled: updatedData.firewallEnabled }); // Adjust the API endpoint as needed
        } catch (error) {
            console.error('Error toggling firewall:', error);
        }
    };

    const toggleAntivirus = async () => {
        try {
            const updatedData = { ...securityData, antivirusEnabled: !securityData.antivirusEnabled };
            setSecurityData(updatedData);
            await axios.put('/security/antivirus', { enabled: updatedData.antivirusEnabled }); // Adjust the API endpoint as needed
        } catch (error) {
            console.error('Error toggling antivirus:', error);
        }
    };

    const toggleIntrusionDetection = async () => {
        try {
            const updatedData = { ...securityData, intrusionDetectionEnabled: !securityData.intrusionDetectionEnabled };
            setSecurityData(updatedData);
            await axios.put('/security/intrusion-detection', { enabled: updatedData.intrusionDetectionEnabled }); // Adjust the API endpoint as needed
        } catch (error) {
            console.error('Error toggling intrusion detection:', error);
        }
    };

    return (
        <div className="security-info-container">
            <h2 className="security-info-title">Security Information</h2>
            <ul className="security-info-list">
                <li>
                    Firewall Status: 
                    <button className={`toggle-button ${securityData.firewallEnabled ? 'enabled' : 'disabled'}`} onClick={toggleFirewall}>
                        {securityData.firewallEnabled ? 'Enabled' : 'Disabled'}
                    </button>
                </li>
                <li>
                    Antivirus Status: 
                    <button className={`toggle-button ${securityData.antivirusEnabled ? 'enabled' : 'disabled'}`} onClick={toggleAntivirus}>
                        {securityData.antivirusEnabled ? 'Enabled' : 'Disabled'}
                    </button>
                </li>
                <li>
                    Intrusion Detection: 
                    <button className={`toggle-button ${securityData.intrusionDetectionEnabled ? 'enabled' : 'disabled'}`} onClick={toggleIntrusionDetection}>
                        {securityData.intrusionDetectionEnabled ? 'Enabled' : 'Disabled'}
                    </button>
                </li>
                {/* Add more security information as needed */}
            </ul>
        </div>
    );
}

export default SecurityInfo;
