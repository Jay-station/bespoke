import React from "react";
import { Link } from "react-router-dom";
import "./ProgramDevelopment.scss";
import icon from "../../assets/pentest.svg";
import listIcon from "../../assets/listItemdown.svg";
import techIcon from "../../assets/techIcon13.svg";

const ProgramDevelopment = () => {
  return (
    <div className="ProgramDevelopment">
      <section className="ProgramDevelopment__content">
        <section className="ProgramDevelopment__Holder">
          <div className="ProgramDevelopment__Holder-icon">
            <img src={icon} alt="Service Icon" />
          </div>
          <div className="ProgramDevelopment__Holder-title">
            Advisory & Program Development
          </div>
        </section>
        <article className="ProgramDevelopment__box">
          <div className="ProgramDevelopment__box-text">
            <div className="ProgramDevelopment__description">
              Whether you need an interim CISO, additional support for your
              current CISO, or a long-term solution, Bespoke's Virtual CISO
              Advisory Services provide essential leadership. Our experienced
              team offers guidance in the complex cybersecurity landscape, with
              expertise in C-suite advisory across diverse industries and
              company sizes. From day one, we'll collaborate with you to create
              tailored information security strategies to meet your unique needs
              and challenges.
            </div>
            <div className="ProgramDevelopment__offering">Included:</div>
            <div className="ProgramDevelopment__offering-list">
              <ul>
                <li className="ProgramDevelopment__offering-list-holder">
                  <img
                    className="ProgramDevelopment__offering-listIcon"
                    src={listIcon}
                    alt="List Icon"
                  />
                  Expert advisory that safeguards your business
                </li>
                <li className="ProgramDevelopment__offering-list-holder">
                  <img
                    className="ProgramDevelopment__offering-listIcon"
                    src={listIcon}
                    alt="List Icon"
                  />
                  Safeguarding assets, ensuring smooth operations, and building
                  trust for profit impact
                </li>
                <li className="ProgramDevelopment__offering-list-holder">
                  <img
                    className="ProgramDevelopment__offering-listIcon"
                    src={listIcon}
                    alt="List Icon"
                  />
                  Establishing a cybersecurity program to prepare for future
                  threats and vulnerabilities
                </li>
                <li className="ProgramDevelopment__offering-list-holder">
                  <img
                    className="ProgramDevelopment__offering-listIcon"
                    src={listIcon}
                    alt="List Icon"
                  />
                  Our cybersecurity expertise elevates staff awareness and
                  nurtures a culture of digital security within your
                  organization
                </li>
              </ul>
            </div>
          </div>
          <img
            className="ProgramDevelopment__box-image"
            src={techIcon}
            alt=""
          />
        </article>
        <div className="ProgramDevelopment__benefit">
          Benefits of Advisory & Program Development
        </div>
        <div className="ProgramDevelopment__benefit__text">
          If your company doesn't have a dedicated cybersecurity team or is
          looking to enhance its existing cybersecurity efforts, our
          Cybersecurity Advisory and Program Development services are here to
          assist. We offer cost-effective, expert-driven solutions tailored to
          businesses of all sizes. Our advisory services provide strategic
          guidance and recommendations, while our program development services
          help you establish robust cybersecurity frameworks and practices.
          Together, they bring numerous advantages to your organization
        </div>
        <div className="ProgramDevelopment__button">
          <Link to="/contact-us">Contact Us</Link>
        </div>
      </section>
    </div>
  );
};

export default ProgramDevelopment;
