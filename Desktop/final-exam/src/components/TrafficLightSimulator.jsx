import React, { useState, useEffect } from 'react';
import './TrafficLightSimulator.css';

const TrafficLightSimulator = () => {
  const [activeLight, setActiveLight] = useState('red');

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLight(prev => {
        if (prev === 'red') return 'green';
        if (prev === 'green') return 'yellow';
        return 'red';
      });
    }, 2000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <h2>Traffic Light Simulator</h2>
      <div className="traffic-light">
        <div className={`light red ${activeLight === 'red' ? 'active' : ''}`}></div>
        <div className={`light yellow ${activeLight === 'yellow' ? 'active' : ''}`}></div>
        <div className={`light green ${activeLight === 'green' ? 'active' : ''}`}></div>
      </div>
    </div>
  );
};

export default TrafficLightSimulator;
