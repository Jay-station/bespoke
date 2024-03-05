import React from "react";
import "../Footer/Footer.scss";
import twitter from "../../assets/TW.svg";
import linkedin from "../../assets/IN.svg";
import instagram from "../../assets/IG.svg";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer__links">
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms-of-service">Terms of Service</a>
      </div>
      <div class="Footer__socials">
        <a
          href="https://www.instagram.com/bespokecyber.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagram} alt="Instagram" />
        </a>
        <a
          href="https://www.linkedin.com/in/your_linkedin_profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} alt="LinkedIn" />
        </a>
        <a
          href="https://twitter.com/bespokecyber"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={twitter} alt="Twitter" />
        </a>
      </div>

      <div>
        <p className="Footer__rights">© Bespoke Cyber. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
