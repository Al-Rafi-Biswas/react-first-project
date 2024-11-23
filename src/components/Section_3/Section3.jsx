import React from "react";
import "./section3.css";
import img from "../../assets/img2.png";

const App = () => {
  return (
    <div className="container">

      <div className="section_3">
      <div className="image-section">
        <img src={img} alt="Excited Woman" className="image" />
      </div>
      <div className="content-section">
        <h2>Video in Live Action</h2>
        <p>
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
        <a href="#learn-more" className="learn-more">
          Learn More &rarr;
        </a>
      </div>
      </div>
    </div>
  );
};

export default App;
