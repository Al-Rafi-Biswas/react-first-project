import React from "react";
import { FaStar, FaImage } from "react-icons/fa"; // Importing icons from React Icons
import "./reuseable3.css";

const Reuseable3 = ({ photo, firsthead, secondhead }) => {
  return (
    <div className="container">
      <div className="reuseable3_course-card">
        {/* Image Section */}
        <div className="reuseable3_image-section">
          <img src={photo} className="reuseable3_image-placeholder" />
          {/* <FaImage className="reuseable3_image-icon" />  */}
        </div>

        {/* Content Section */}
        <div className="reuseable3_content-section">
          <p className="reuseable3_course-info">{firsthead}</p>
          <div className="reuseable3_rating">
            <FaStar className="reuseable3_star-icon" /> 4.9 {/* Star Rating */}
          </div>
          <h2 className="reuseable3_course-title">{secondhead}</h2>
          <p className="reuseable3_course-description">
            We focus on ergonomics and meeting you where you work. It's only a
            keystroke away.
          </p>
          <a href="#learn-more" className="reuseable3_learn-more-btn">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Reuseable3;
