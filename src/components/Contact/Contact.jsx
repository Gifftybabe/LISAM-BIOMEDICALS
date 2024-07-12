import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "9a38dc7b-c370-4598-a2f3-abd4ebc3397f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message sent Successfully");
      event.target.reset();
      // Clear the result message after 3 seconds
      setTimeout(() => {
        setResult("");
      }, 3000);
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="innerWidth paddings flexCenter">
        {/* Contact Information Column */}
        <div className="contact-col">
          <h3>
            Send us a message <img src={msg_icon} alt="" />
          </h3>
          <p>
            Please fill out the form below with your inquiries or feedback, and
            we will respond promptly. At LiSam, your success is our mission, and
            we are excited to partner.
          </p>
          <ul>
            <li>
              <img src={mail_icon} alt="" />
              <span>somonoji2020@gmail.com</span>
            </li>
            <li>
              <img src={phone_icon} alt="" />
              <span>+234 818 397 1129</span>
            </li>
            <li>
              <img src={location_icon} alt="" />
              <span>
                Plot 170 HillSide Extension <br /> Darwaki Abuja Nigeria
              </span>
            </li>
          </ul>

          <div className="icon">
            <h3>Follow Us</h3>

            <div className="flex_space">
              <i className="fab fa-facebook-f" style={{ color: "#3b5998" }}></i>
              <i className="fab fa-twitter" style={{ color: "#1da1f2" }}></i>
              <i className="fab fa-linkedin" style={{ color: "#0077b5" }}></i>
              <i className="fab fa-instagram" style={{ color: "#e1306c" }}></i>
            </div>
          </div>
        </div>

        {/* Contact Form Column */}
        <div className="contact-form-col">
          <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              required
            />
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              required
            />
            <label>Write your message here</label>
            <textarea
              name="message"
              rows="6"
              placeholder="Enter your message"
              required
            ></textarea>
            <button type="submit" className="button">
              Send
            </button>
          </form>
          {result && <span className="submit-message">{result}</span>}
        </div>
      </div>
    </section>
  );
};

export default Contact;
