import React from "react";
import "./reuseable.css";
import { FaArrowRight } from "react-icons/fa6";

const reused = (props) => {
  return (
    <div className="course-card">
      {/* Image Section */}
      <div className="image-section">
        <span className="sale-badge">Sale</span>
        <img src={props.photo} alt="Course Visual" className="course-image" />
      </div>

      {/* Content Section */}
      <div className="content-section">
        <p className="course-info">{props.firsthead}</p>
        <div className="rating">
          <span className="star">★</span> 4.9
        </div>
        <h2 className="course-title">{props.secondhead}</h2>
        <p className="course-description">
          We focus on ergonomics and meeting you where you work. It's only a
          keystroke away.
        </p>
        <div className="sales-info">
          <span>15 Sales</span>
          <span className="price">
            <del>$16.48</del> <strong>$6.48</strong>
          </span>
        </div>
        <div className="additional-info">
          <span>22h</span>
          <span>64 Lessons</span>
          <span>Progress</span>
        </div>
        <a href="#learn-more" className="learn-more-btn">
          Learn More <FaArrowRight />
        </a>
      </div>
    </div>
  );
};

export default reused;
