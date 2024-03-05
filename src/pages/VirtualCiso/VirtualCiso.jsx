import React from "react";
import { Link } from "react-router-dom";
import "./VirtualCiso.scss";
import icon from "../../assets/pentest.svg";
import listIcon from "../../assets/listItemdown.svg";
import techIcon from "../../assets/techIcon11.svg";

const VCiso = () => {
  return (
    <div className="VCiso">
      <section className="VCiso__content">
        <section className="VCiso__Holder">
          <div className="VCiso__Holder-icon">
            <img src={icon} alt="Service Icon" />
          </div>
          <div className="VCiso__Holder-title">Virtual CISO Services</div>
        </section>
        <article className="VCiso__box">
          <div className="VCiso__box-text">
            <div className="VCiso__description">
              Whether you need an interim CISO, additional support for your
              current CISO, or a long-term solution, Bespoke's Virtual CISO
              Advisory Services provide essential leadership. Our experienced
              team offers guidance in the complex cybersecurity landscape, with
              expertise in C-suite advisory across diverse industries and
              company sizes. From day one, we'll collaborate with you to create
              tailored information security strategies to meet your unique needs
              and challenges.
            </div>
            <div className="VCiso__offering">Included:</div>
            <div className="VCiso__offering-list">
              <ul>
                <li className="VCiso__offering-list-holder">
                  <img
                    className="VCiso__offering-listIcon"
                    src={listIcon}
                    alt="List Icon"
                  />
                  Establishing and guiding the implementation of privacy and
                  security policies, standards, procedures, and guidelines
                </li>
                <li className="VCiso__offering-list-holder">
                  <img
                    className="VCiso__offering-listIcon"
                    src={listIcon}
                    alt="List Icon"
                  />
                  Managing and directing information security teams within your
                  organization
                </li>
                <li className="VCiso__offering-list-holder">
                  <img
                    className="VCiso__offering-listIcon"
                    src={listIcon}
                    alt="List Icon"
                  />
                  Engaging directly with your management team to align security
                  efforts with broader business objectives
                </li>
                <li className="VCiso__offering-list-holder">
                  <img
                    className="VCiso__offering-listIcon"
                    src={listIcon}
                    alt="List Icon"
                  />
                  Establish effective lines of communication with board members,
                  investors, and government agencies, fostering a proactive
                  approach to security
                </li>
                <li className="VCiso__offering-list-holder">
                  <img
                    className="VCiso__offering-listIcon"
                    src={listIcon}
                    alt="List Icon"
                  />
                  Conducting comprehensive risk assessments to identify and
                  mitigate operational security vulnerabilities
                </li>
                <li className="VCiso__offering-list-holder">
                  <img
                    className="VCiso__offering-listIcon"
                    src={listIcon}
                    alt="List Icon"
                  />
                  Providing ongoing threat intelligence updates and overseeing
                  enterprise-wide security practices
                </li>
                <li className="VCiso__offering-list-holder">
                  <img
                    className="VCiso__offering-listIcon"
                    src={listIcon}
                    alt="List Icon"
                  />
                  Offering crisis management support, ensuring swift and
                  effective response in times of security incidents
                </li>
              </ul>
            </div>
          </div>
          <img className="VCiso__box-image" src={techIcon} alt="" />
        </article>
        <div className="VCiso__benefit">Benefits of having a vCiso</div>
        <div className="VCiso__benefit__text">
          In today's rapidly evolving landscape of cybersecurity, it is
          absolutely crucial for companies across all industries to have a Chief
          Information Security Officer (CISO) in place. The presence of a
          skilled and experienced data security leader not only ensures a strong
          foundation for cybersecurity but also equips the company with the
          agility needed to counter emerging threats effectively. If you are a
          start up, growing fast or well established company that needs senior
          security guidance without the overhead of a FTE… our vCISO provides a
          great financial alternative
        </div>
        <div className="VCiso__button">
          <Link to="/contact-us">Contact Us</Link>
        </div>
      </section>
    </div>
  );
};

export default VCiso;
