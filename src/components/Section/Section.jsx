import React from "react";
import "./section.css";
import img1 from "../../assets/img1.png";

function Section() {
  return (
    <div className="container">
      <div className="hero-section">
        <div className="hero-text">
          <p className="welcome-text">Welcome</p>
          <h1>Best Learning Opportunities</h1>
          <p className="description">
            Our goal is to make online education work for everyone
          </p>
          <div className="buttons">
            <button className="btn btn-primary">Join Us</button>
            <button className="btn btn-secondary">Learn More</button>
          </div>
        </div>
        <div className="hero-image">
          <img src={img1} alt="Learning Opportunities" />
        </div>
      </div>
    </div>
  );
}

export default Section;
