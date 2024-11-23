import React from "react";
import img7 from "../../assets/img7.png";
import img8 from "../../assets/img8.png";
import img9 from "../../assets/img9.png";
import img10 from "../../assets/img10.png";
import "./section6.css"; // Section 6 specific styles
import Reuseable2 from "../Reuseable2/Reuseable2";
import Reuseable4 from "../Reuseable4/Reuseable4";

const Section6 = () => {
  return (
    <div className="section_6_all">
      <Reuseable2
        subheading="Team"
        heading="Get Quality Education"
        description=" Problems trying to resolve the conflict between 
                 the two major realms of Classical physics: Newtonian mechanics "
      />
      <div className="container">
        <div className="reusable_4_section-container">
          <div className="reusable_4_card-container">
            <Reuseable4 photo={img7} name="John Doe" position="Web Developer" />
            <Reuseable4
              photo={img8}
              name="Jane Smith"
              position="Graphic Designer"
            />
            <Reuseable4 photo={img9} name="John Doe" position="Web Developer" />
            <Reuseable4
              photo={img10}
              name="Jane Smith"
              position="Graphic Designer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
