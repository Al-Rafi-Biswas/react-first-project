import React from "react";
import "./reusable5.css"; // CSS file import

const Reusable5 = ({ heading, items1, items2, items3, items4 }) => {
  return (
    <div>
      <h3 className="reusable5_head">{heading}</h3>
      <ul>
        <li className="reusable5_item">
          <a href="#">{items1}</a>
        </li>
        <li>
          <a href="#">{items2}</a>
        </li>
        <li>
          <a href="#">{items3}</a>
        </li>
        <li>
          <a href="#">{items4}</a>
        </li>
      </ul>
    </div>
  );
};

export default Reusable5;
