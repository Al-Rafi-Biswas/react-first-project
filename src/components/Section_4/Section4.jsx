import React from "react";
import Reuseable from "../Reuseable/Reuseable"; // Reuseable Component Import
import img3 from "../../assets/img3.png"; // Image Path
import img4 from "../../assets/img4.png"; // Image Path
import "./section4.css";
import Reuseable2 from "../Reuseable2/Reuseable2";

function Section4() {
  return (
    <div className="section4-container">
      {/* Header Section */}
      <Reuseable2
        subheading="Practice Advice"
        heading="Approdable Packages"
        description="Problems trying to resolve the conflict between 
        the two major realms of Classical physics: Newtonian mechanics "
      />

      {/* Cards Section */}
      <div className="cards-container">
        <Reuseable
          firsthead="2,769 online courses"
          secondhead="Watch our Courses"
          photo={img3} // Passing image as props
        />
        <Reuseable
          firsthead="Lifetime access"
          secondhead="Our Experts Teacher"
          photo={img4} // Passing image as props
        />
      </div>
    </div>
    
  );
}

export default Section4;
