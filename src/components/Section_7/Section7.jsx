import React from "react";
import "./section7.css"; // CSS file import

const Section7 = () => {
  return (
    <div className="section_7">
      <div className="content">
        <h4>Section 6 Title</h4>
        <h2>Subscribe to Our Newsletter</h2>
        <p>
          Stay updated with the latest news, tips, and insights delivered
          straight to your inbox. We promise to keep our emails minimal and
          worth your time.
        </p>
        <div className="subscribe">
          <input
            type="email"
            placeholder="Enter your email"
            className="email-input"
          />
          <button className="subscribe-button">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Section7;
