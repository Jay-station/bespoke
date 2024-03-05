import React from "react";
import { Link } from "react-router-dom";
import "./SecurityTesting.scss";
import icon from "../../assets/pentest.svg";
import listIcon from "../../assets/listItemdown.svg";
import techIcon from "../../assets/techIcon3.svg";

const SecurityTesting = () => {
  return (
    <div className="SecurityTesting">
      <section className="SecurityTesting__content">
        <section className="SecurityTesting__Holder">
          <div className="SecurityTesting__Holder-icon">
            <img src={icon} alt="Service Icon" />
          </div>
          <div className="SecurityTesting__Holder-title">Security Testing</div>
        </section>
        <article className="SecurityTesting__box">
          <div className="SecurityTesting__box-text">
            <div className="SecurityTesting__description">
              A mature security program must include security testing to
              identify vulnerabilities and blind spots in your applications,
              networks, and code. We use security testing tools to assess your
              customer-facing website and internal apps with sensitive IP. Our
              experts provide insights into potential gaps, threat mitigation,
              and risk management. Don't risk the unknown—choose our services
              for peace of mind.
            </div>
            <div className="SecurityTesting__offering">Included:</div>
            <div className="SecurityTesting__offering-list">
              <ul>
                <li className="SecurityTesting__offering-list-holder">
                  <img
                    className="SecurityTesting__offering-listIcon"
                    src={listIcon}
                    alt="List Icon"
                  />
                  Web application checkup
                </li>
                <li className="SecurityTesting__offering-list-holder">
                  <img
                    className="SecurityTesting__offering-listIcon"
                    src={listIcon}
                    alt="List Icon"
                  />
                  DAST Scanning
                </li>
                <li className="SecurityTesting__offering-list-holder">
                  <img
                    className="SecurityTesting__offering-listIcon"
                    src={listIcon}
                    alt="List Icon"
                  />
                  SAST Scanning
                </li>

                <li className="SecurityTesting__offering-list-holder">
                  <img
                    className="SecurityTesting__offering-listIcon"
                    src={listIcon}
                    alt="List Icon"
                  />
                  Wireless Network Assessment
                </li>
                <li className="SecurityTesting__offering-list-holder">
                  <img
                    className="SecurityTesting__offering-listIcon"
                    src={listIcon}
                    alt="List Icon"
                  />
                  Penetration testing
                </li>
                <li className="SecurityTesting__offering-list-holder">
                  <img
                    className="SecurityTesting__offering-listIcon"
                    src={listIcon}
                    alt="List Icon"
                  />
                  Network & Endpoint Vulnerability Assessment
                </li>
              </ul>
            </div>
          </div>
          <img className="SecurityTesting__box-image" src={techIcon} alt="" />
        </article>
        <div className="SecurityTesting__benefit">
          Benefits of Security Testing
        </div>
        <div className="SecurityTesting__benefit__text">
          Think of Security Testing Services as your IT guardian angel. It's
          like having a team of experts who put your digital defenses to the
          test. They simulate real cyberattacks to find any weak spots in your
          systems, networks, and applications. With their help, you can lock
          down your digital fortress, protect sensitive data, and stay one step
          ahead of cyber threats. It's like having a personal cybersecurity SWAT
          team on your side
        </div>
        <div className="SecurityTesting__button">
          <Link to="/contact-us">Contact Us</Link>
        </div>
      </section>
    </div>
  );
};

export default SecurityTesting;
