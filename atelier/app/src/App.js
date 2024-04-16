import './App.css';

import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Medcine from "./pages/Medcine/Medcine";
import Agent from "./pages/Agent/Agent";
import Home from "./pages/Gerant/home";
import LoginPage from './pages/LoginPage';
import Stock from "./pages/Gerant/Stock/Stock";
import Comptabilite from "./pages/Gerant/Comptabilite/Comptabilite";
import Personnel from "./pages/Gerant/Personnel/Personnel";
import Biologist from './pages/Biologist/Biologist';
import React, { useEffect } from 'react';
import io from 'socket.io-client';

const SERVER_URL = 'localhost:4000'; // Your Node.js server URL

function App() {
  useEffect(() => {
    const socket = io('http://localhost:4000');

    socket.on('connect', () => {
      console.log('Connected to server');
          socket.emit('message', 'Hello from Electron React app');
    });
    socket.on('error', (error) => {
      console.error('Socket error:', error);
   });
    socket.on('disconnect', () => {
      console.log('Disconnected from server');
    });   

    return () => {
      socket.disconnect();
    };
  }, []);

  return (

      <Router>
        <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/Personnel" element={<Personnel />} />
        <Route path="/home/Stock" element={<Stock />} />
        <Route path="/home/comptabilite" element={<Comptabilite />} />
        <Route path="/medcine" element={<Medcine />} />
        <Route path="/Agent" element={<Agent />} />
        <Route path="/Biologist" element={<Biologist />} />
        </Routes>
      </Router>



  );
}

export default App;


