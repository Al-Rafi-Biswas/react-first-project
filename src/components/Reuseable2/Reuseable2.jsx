import React from "react";
import "./reusable2.css";

const Reuseable2 = ({ subheading, heading, description }) => {
  return (
    <div className="">
      <div className="container">
        <p className="subheading">{subheading}</p>
        <h1 className="heading">{heading}</h1>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default Reuseable2;
