import React from "react";
import { Link } from "react-router-dom";
import "./SecurityTesting.scss";
import icon from "../../assets/pentest.svg";
import listIcon from "../../assets/listItemdown.svg";
import techIcon from "../../assets/techIcon3.svg";

const SecurityTesting = () => {
  return (
    <div className="SecurityTest">
      <section className="SecurityTest__content">
        <section className="SecurityTest__Holder">
          <div className="SecurityTest__Holder-icon">
            <img src={icon} alt="Service Icon" />
          </div>
          <div className="SecurityTest__Holder-title">Penetration Testing</div>
        </section>
        <article className="SecurityTest__box">
          <div className="SecurityTest__box-text">
            <div className="SecurityTest__description">
              Penetration Testing, or pen Testing, is like having friendly
              hackers check your website for weak spots. We pretend to be bad
              guys to find any vulnerabilities and help you make your site more
              secure, so you can keep it safe from real cyber threats.
            </div>
            <div className="SecurityTest__offering">Included:</div>
            <div className="SecurityTest__offering-list">
              <ul>
                <li className="SecurityTest__offering-list-holder">
                  <img
                    className="SecurityTest__offering-listIcon"
                    src={listIcon}
                    alt="List Icon"
                  />
                  Web Application Checkup
                </li>
                <li className="SecurityTest__offering-list-holder">
                  <img
                    className="SecurityTest__offering-listIcon"
                    src={listIcon}
                    alt="List Icon"
                  />
                  Network Vulnerability Assessment
                </li>
                <li className="SecurityTest__offering-list-holder">
                  <img
                    className="SecurityTest__offering-listIcon"
                    src={listIcon}
                    alt="List Icon"
                  />
                  Wireless Network Safety Evaluation
                </li>
                <li className="SecurityTest__offering-list-holder">
                  <img
                    className="SecurityTest__offering-listIcon"
                    src={listIcon}
                    alt="List Icon"
                  />
                  Wireless Network Safety Evaluation
                </li>
                <li className="SecurityTest__offering-list-holder">
                  <img
                    className="SecurityTest__offering-listIcon"
                    src={listIcon}
                    alt="List Icon"
                  />
                  Wireless Network Safety Evaluation
                </li>
              </ul>
            </div>
          </div>
          <img className="SecurityTest__box-image" src={techIcon} alt="" />
        </article>
        <div className="SecurityTest__benefit">
          Benefits of Penetration Testing
        </div>
        <div className="SecurityTest__benefit__text">
          Imagine having a security expert who acts like a friendly intruder,
          Testing your digital defenses. That's what a penetration Test does. It
          helps you find weak spots in your systems before the bad guys do. So,
          you can lock down your digital castle, keep your data safe, and make
          sure your business stays running smoothly. It's like having a guardian
          angel for your online world
        </div>
        <div className="SecurityTest__button">
          <Link to="/contact-us">Contact Us</Link>
        </div>
      </section>
    </div>
  );
};

export default SecurityTesting;
