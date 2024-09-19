import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>Top Workout Sessions</h1>
        <p>
          Discover our top-rated workout sessions designed to help you achieve your fitness goals. Whether you're looking to build muscle, improve endurance, or just stay active, we have something for everyone.
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>Featured Bootcamps</h1>
        <p>
          Join our featured bootcamps for an intense workout experience that will push you to your limits. Our bootcamps are designed to challenge you and deliver results.
        </p>
        <div className="bootcamps">
          <div>
            <h4>Ultimate Strength Bootcamp</h4>
            <p>
              Build strength and power with our Ultimate Strength Bootcamp. This program focuses on weightlifting and high-intensity interval training (HIIT) to maximize muscle growth and endurance.
            </p>
          </div>
          <div>
            <h4>Cardio Blast Bootcamp</h4>
            <p>
              Get your heart racing with our Cardio Blast Bootcamp. Featuring a mix of running, cycling, and plyometrics, this bootcamp is perfect for improving cardiovascular health and burning calories.
            </p>
          </div>
          <div>
            <h4>Full-Body Conditioning Bootcamp</h4>
            <p>
              Achieve total-body fitness with our Full-Body Conditioning Bootcamp. This program combines strength training, cardio, and flexibility exercises for a well-rounded workout.
            </p>
          </div>
          <div>
            <h4>HIIT Fusion Bootcamp</h4>
            <p>
              Experience the perfect blend of high-intensity interval training and functional movements with our HIIT Fusion Bootcamp. This dynamic program will help you build strength and endurance while improving agility and coordination.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
