import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes and Route
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WorkoutSessions from "./components/WorkoutSessions";
import Gallery from "./components/Gallery";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import BMICalculator from "./components/BMICalculator";
import Footer from "./components/Footer";
import JoinNow from './components/JoinNow';


const App = () => {
  
  return (
    <Router>
      <Navbar />
      {/* Define routes for each section */}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/workouts" element={<WorkoutSessions />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/bmi-calculator" element={<BMICalculator />} />
        <Route path="/join-now" element={<JoinNow />} />
      </Routes>
      <Footer />
      <ToastContainer theme="dark" position="top-center" />
    </Router>
  );
};

export default App;
