import React from "react";
import { Link } from "react-router-dom";
import "./Hero.scss";
import icon from "../../assets/shapes.svg";

const Hero = () => {
  return (
    <div>
      <div className="hero">
        <section className="hero__container">
          <div className="hero__icon">
            <img src={icon} alt="hero Icon" />
            <h2 className="hero__slogan">Our solutions to your risk</h2>
          </div>
          <p className="hero__description">
            BespokeCyber are your trusted cybersecurity experts fortifying your
            business, data & clients beyond industry standards.
            <br />
            We champion cybersecurity, privacy, and a thriving future.
            <br />
            <span>Let's discuss your security needs.</span>
          </p>
          <div className="hero__button">
            <Link to="/contact-us">contact us</Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
