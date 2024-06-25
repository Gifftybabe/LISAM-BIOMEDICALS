import React from "react";
import "./Services.css";
import program_1 from "../../assets/program_1.jpg";
import program_2 from "../../assets/program_2.jpg";
import program_3 from "../../assets/program_3.jpeg";
import program_4 from "../../assets/program_5.jpg";
import consultation from "../../assets/consultation.png";
import repair from "../../assets/repair.png";
import sales from "../../assets/sales.png";
import setup from "../../assets/setup.png";

const Services = () => {
  return (
    <div className="programs">
      <div className="program">
        <img src={program_1} alt="" />
        <div className="caption">
          <img src={setup} alt="" />
          <p>IVF Laboratory Setup</p>
        </div>
      </div>

      <div className="program">
        <img src={program_2} alt="" />
        <div className="caption">
          <img src={repair} alt="" />
          <p>Technical Setup/Maintenance</p>
        </div>
      </div>

      <div className="program">
        <img src={program_3} alt="" />
        <div className="caption">
          <img src={consultation} alt="" />
          <p>Expert Consultation</p>
        </div>
      </div>

      <div className="program">
        <img src={program_4} alt="" />
        <div className="caption">
          <img src={sales} alt="" />
          <p>IVF Supplies Distribution</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
