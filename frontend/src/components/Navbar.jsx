import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/YamFitness.png" alt="YamFitness Logo" />
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/workouts">Workouts</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/pricing">Pricing</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/bmi-calculator">BMI Calculator</Link></li>
      </ul>
      <div className="navbar-button">
        <li><Link to="/join-now"><button>Join Now</button></Link></li>
      </div>
    </nav>
  );
};

export default Navbar;
