import React from "react";
import "./section5.css";
import Reuseable2 from "../Reuseable2/Reuseable2";
import Reuseable3 from "../Reuseable3/Reuseable3";
import img5 from "../../assets/img5.png";
import img6 from "../../assets/img6.png";

const Section5 = () => {
  return (
    <div className="section_5_all">
      {/* use reusable2 for 5 section */}
      <Reuseable2
        subheading="Testimonials"
        heading="Watch our Courses"
        description="Problems trying to resolve the conflict between 
               the two major realms of Classical physics: Newtonian mechanics "
      />
      <div className="container">
        {/* use resuable3 for 5 section */}
        <div className="container reusable_3_all_item">
          <Reuseable3
            photo={img5}
            firsthead="Slate helps you see how many more days 
            you need to work to reach your financial 
            goal for the month and year."
            secondhead="Designer"
          />
          <Reuseable3
            photo={img6}
            firsthead="Slate helps you see how many more days 
                you need to work to reach your financial 
                goal for the month and year."
            secondhead="Designer"
          />
        </div>
      </div>
    </div>
  );
};

export default Section5;
