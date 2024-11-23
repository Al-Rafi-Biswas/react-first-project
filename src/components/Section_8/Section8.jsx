import React from "react";
import Reuseable5 from "../Reuseable5/Reuseable5";
import "./section8.css";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const Section8 = () => {
  return (
    <div className="container">
      <div className="section_8_all">
        <Reuseable5
          heading="Company Info"
          items1="About Us"
          items2="Carrier"
          items3="User Analytic"
          items4="User Analytic"
        />
        <Reuseable5
          heading="Legal"
          items1="Carrier"
          items2="Carrier"
          items3="User Analytic"
          items4="IOS & Android"
        />
        <Reuseable5
          heading="Features"
          items1="We are hiring"
          items2="We are hiring"
          items3="Business Marketing"
          items4="Unlimited Support"
        />
        <Reuseable5
          heading="Resources"
          items1="Blog"
          items2="Blog"
          items3="IOS & Android"
          items4="User Analytic"
        />
        <div>
          <h3>Get IN Touch</h3>
          <ul>
            <li>
              <a href="#">
                <FaPhone />
                (480) 555-0103
              </a>
            </li>
            <li>
              <a href="#">
                <FaLocationDot /> 4517 Washington Ave. Manchester, <br />
                Kentucky 39495
              </a>
            </li>
            <li>
              <a href="#">
                <IoMdMail />
                debra.holt@example.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Section8;
