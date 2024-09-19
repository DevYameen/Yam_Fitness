import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const JoinNow = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subscription: "quarterly", 
  });

  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/join/now`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), 
      });

      const result = await response.json();

      if (response.ok) {
        alert('Form submitted successfully! An email has been sent.');
     
        setFormData({
          name: "",
          email: "",
          phone: "",
          subscription: "quarterly",
        });
      
        navigate("/");
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form. Please try again.");
    }
  };

  const handleClose = () => {
    navigate("/"); 
  };

  return (
    <div className="join-now-container">
      <div className="join-now-form">
        
        <button className="close-button" onClick={handleClose}>X</button>

        <h2 className="form-title">
          Join <span className="highlight">YamFitness</span> Now!
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="subscription">Subscription Plan</label>
            <select
              name="subscription"
              id="subscription"
              value={formData.subscription}
              onChange={handleChange}
              required
            >
              <option value="quarterly">Quarterly</option>
              <option value="half-yearly">Half-Yearly</option>
              <option value="yearly">Yearly</option>
            </select>
          </div>

          <button type="submit" className="submit-button">
            Join Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default JoinNow;
