import React from "react";
import "./section2.css";
import icon1 from "../../assets/icon1.png"; // Change to your icon path
import icon2 from "../../assets/icon2.png"; // Change to your icon path

function Packages() {
  return (
    <div className="packages-section">
      <div className="packages-header">
        <h2>Approdable Packages</h2>
        <p>
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics.
        </p>
        <a href="#" className="learn-more">
          Learn More →
        </a>
      </div>
      <div className="packages-cards">
        <div className="card">
          <img src={icon1} alt="Certified Teacher" className="card-icon" />
          <h3>Certified Teacher</h3>
          <p>The gradual accumulation of information about</p>
        </div>
        <div className="card">
          <img src={icon2} alt="Expert Instruction" className="card-icon" />
          <h3>Expert Instruction</h3>
          <p>The gradual accumulation of information about</p>
        </div>
      </div>
    </div>
  );
}

export default Packages;
