import React, { useState, useEffect } from 'react';
import './TrafficLightSimulator.css';

const TrafficLightSimulator = () => {
  const cycleLights = ['red', 'green', 'yellow'];
  const [activeLight, setActiveLight] = useState('red');

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLight(prevLight => {
        const currentIndex = cycleLights.indexOf(prevLight);
        const nextIndex = (currentIndex + 1) % cycleLights.length;
        return cycleLights[nextIndex];
      });
    }, 3000);

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
