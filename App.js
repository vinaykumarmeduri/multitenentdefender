import React from 'react';
//import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Settings from './components/Settings';
import Profile from './components/Profile';
import ThreatDetection from './components/ThreatDetection';
import Security from './components/Security';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';
import DeployWebsite from './components/DeployWebsite';
import WebsiteProtection from './components/WebsiteProtection';
import TrafficDetails from './components/TrafficDetails';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/home/ThreatDetection" element={<ThreatDetection />} />
          <Route path="/Security" element={<Security />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/" element={<Register />} />
          <Route path="/register" element={Register}/>
          <Route path="/home/DeployWebsite" element={<DeployWebsite />} />
          <Route path="/websiteprotection" element={<WebsiteProtection />} />
          <Route path="/traffic" element={<TrafficDetails />} />
</Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;