import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import { getMenuStyles } from "../../utils/common";
import useHeaderColor from "../../hooks/useHeaderColor";
import OutsideClickHandler from "react-outside-click-handler";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const headerColor = useHeaderColor();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    const offset = 160; // Adjust as needed, considering any fixed header height
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const offsetPosition = elementRect - bodyRect - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <section className="h-wrapper" style={{ background: headerColor }}>
      <div className="flexCenter innerWidth paddings h-container">
        {/* logo */}
        <img src="./lisam.png" alt="logo" width={100} />

        {/* menu */}
        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div
            // ref={menuRef}
            className="flexCenter h-menu "
            style={getMenuStyles(menuOpened)}
          >
            <a href="#services"  onClick={(e) => {
              e.preventDefault();
              scrollToSection("services");
            }}>Services</a>
            <a href="#about"   onClick={(e) => {
              e.preventDefault();
              scrollToSection("about");
            }}>About Us</a>
            <a href="#products"   onClick={(e) => {
              e.preventDefault();
              scrollToSection("products");
            }}>Products</a>
            <a href="#value"   onClick={(e) => {
              e.preventDefault();
              scrollToSection("value");
            }}>Our Value</a>
            <a href="#testimonials"   onClick={(e) => {
              e.preventDefault();
              scrollToSection("testimonials");
            }} >Testimonials</a>
            <a href="#get-started"   onClick={(e) => {
              e.preventDefault();
              scrollToSection("get-started");
            }}>Get Started</a>
            <button className="button">
              <a href="#contact"   onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}>Contact Us</a>
            </button>
          </div>
        </OutsideClickHandler>

        {/* for medium and small screens */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
