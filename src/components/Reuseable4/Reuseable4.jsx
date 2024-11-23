import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"; // Importing social media icons
import "./reuseable4.css";

const Reuseable4 = ({ photo, name, position }) => {
  return (
    <div className="reusable_4_card">
      {/* Image Section */}
      <div className="reusable_4_image-section">
        <img
          src={photo}
          className="reusable_4_image-placeholder"
          alt="Profile"
        />
      </div>

      {/* Name and Position */}
      <h2 className="reusable_4_name">{name}</h2>
      <h4 className="reusable_4_position">{position}</h4>

      {/* Social Media Icons */}
      <div className="reusable_4_social-icons">
        <FaFacebook className="reusable_4_social-icon" />
        <FaInstagram className="reusable_4_social-icon" />
        <FaTwitter className="reusable_4_social-icon" />
      </div>
    </div>
  );
};

export default Reuseable4;
