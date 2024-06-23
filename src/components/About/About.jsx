import React from "react";
import "./About.css";
import about_img from "../../assets/about_img.jpg";
import play_icon from "../../assets/play_icon.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" />
      </div>
      <div className="about-right">
        <h3>ABOUT LiSam</h3>
        <h2>Leading the Way in IVF Innovation</h2>
        <p>
          At LiSam, we are dedicated to advancing the field of assisted
          reproductive technology through our extensive range of IVF
          consumables, quality equipments, and professional services. With over
          10 years of experience, we have established ourselves as a trusted
          partner for fertility clinics and laboratories worldwide.
        </p>
        <p>
          We understand the critical importance of reliable and effective tools
          in the delicate processes of IVF, which is why we provide
          comprehensive support through our repair and maintenance services.
        </p>
        <p>
          Our expert consultation services ensure that our clients receive
          personalized guidance tailored to their specific needs, helping them
          achieve the highest standards of care and success.
        </p>
      </div>
    </div>
  );
};

export default About;
