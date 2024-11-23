import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./section9.css";

const Section9 = () => {
  return (
    <div className="container">
      <div className="section9_all">
        {/* Left Side Text */}
        <div className="section9_text">
          <p>
            Made With <span style={{ color: "green" }}>Md.Al Rafi Biswas </span>{" "}
            By Figmaland All Right Reserved
          </p>
        </div>

        {/* Right Side Icons */}
        <div className="section9_icons">
          <a href="#" className="icon">
            <FaFacebook />
          </a>
          <a href="#" className="icon">
            <FaInstagram />
          </a>
          <a href="#" className="icon">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Section9;
