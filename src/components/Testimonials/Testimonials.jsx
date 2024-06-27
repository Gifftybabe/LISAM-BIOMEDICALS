import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonials = () => {

  const slider = useRef()
  let tx = 0

  const slideForward = () => {
    if(tx > -50) {
      tx -= 25
    }
    slider.current.style.transform = `translateX(${tx}%)`
  }

  const slideBackward = () => {
    if(tx < 0) {
      tx += 25
    }
    slider.current.style.transform = `translateX(${tx}%)`
  }

  return (
    <div id="testimonials" className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward}/>
      <img src={back_icon} alt="" className="back-btn" onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Dr. BenProsper</h3>
                  <span>Charitos BO Hospital</span>
                </div>
              </div>
              <p>
                We've been sourcing our IVF consumables from LiSam for over five
                years, and the quality has always been top-notch. Their products
                are reliable, and their customer service is outstanding.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Dr. Chidi Okafor</h3>
                  <span>Grace Fertility Clinic, Lagos</span>
                </div>
              </div>
              <p>
                LiSam has been a blessing to us. When we were setting up our IVF
                lab, they made the whole process so smooth and straightforward.
                The team was always available and gave us the best advice on the
                consumables we needed.{" "}
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Mr. and Mrs. Adewale</h3>
                  <span>Federal Housing Estate, Abuja</span>
                </div>
              </div>
              <p>
                My wife and I had been trying for years without success. We
                decided to seek professional help and found LiSam. Their couples
                consultation and counselling were so helpful. They guided us
                through every step, and today, we are proud parents.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Dr. Ibrahim Musa</h3>
                  <span> New Dawn Fertility Clinic, Kano</span>
                </div>
              </div>
              <p>
                Our experience with LiSam has been nothing short of amazing.
                From setting up our IVF lab to providing continuous maintenance,
                their service has been excellent. Their products are affordable,
                and the team is always ready to assist. We’ve seen a significant
                improvement in our success rates since partnering with LiSam
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;