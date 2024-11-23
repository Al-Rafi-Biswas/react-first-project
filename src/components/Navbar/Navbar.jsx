import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="container navbar-background">
      <div className="navbar-all">
        <div className="navbar-1">
          <h2>Brandname</h2>
        </div>
        <div className="navbar-2">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Product</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="navbar-3">
          <h4>Login</h4>
          <button>Join Us</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
