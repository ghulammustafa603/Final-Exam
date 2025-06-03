
import React from 'react'
import './TrafficLightSimulator.css'

const TrafficLightSimulator = () => {
  return (
    <div>
      <div className="container">
      <h2>Traffic Light Simulator</h2>
      <div className="traffic-light">
        <div className="light red"></div>
        <div className="light yellow"></div>
        <div className="light green"></div>
      </div>
    </div>
    </div>
  )
}

export default TrafficLightSimulator
