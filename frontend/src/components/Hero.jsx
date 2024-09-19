import React from "react";
import { Link } from "react-router-dom";
import WorkoutSessions from "./WorkoutSessions";
import Gallery from "./Gallery";
import Pricing from "./Pricing";
import Contact from "./Contact";
import BMICalculator from "./BMICalculator";

const Hero = () => {
  return (
  <> 
    <section className="hero">
      <div className="content">
        <div className="title">
          <h1>LET'S</h1>
          <h1>GET</h1>
          <h1>MOVING</h1>
        </div>
        <div className="sub-title">
          <p>Your Journey to Fitness Starts Here</p>
          <p>Unleash Your Potential</p>
        </div>
        <div className="buttons">
          <Link to="/workouts">
            <button>Start Your Journey</button>
          </Link>
          <Link to="/pricing">
            <button>Discover Your Plan</button>
          </Link>
        </div>
      </div>
    </section>
    <BMICalculator />
    <WorkoutSessions />
    <Gallery />
    <Contact />
    <Pricing />
      
  </>  
  );
};

export default Hero;