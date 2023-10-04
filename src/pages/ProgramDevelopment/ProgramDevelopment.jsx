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
            Threat Risk Assessments, Advisory & Program development
          </div>
        </section>
        <article className="ProgramDevelopment__box">
          <div className="ProgramDevelopment__box-text">
            <div className="ProgramDevelopment__description">
              Are you launching a new client facing web product, internal or
              regulatory compliance & audit prep…? Don’t fret, we have all your
              assessment needs covered. At BespokeCyber we have worked with
              enterprise as well as small business clients to help them better
              understand any risks that may not have been identified, create
              mitigation and action plans e.t.c. to help mature your security
              program where you feel you need it the most…
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
                  Policy, standards and process development
                </li>
                <li className="ProgramDevelopment__offering-list-holder">
                  <img
                    className="ProgramDevelopment__offering-listIcon"
                    src={listIcon}
                    alt="List Icon"
                  />
                  Regulatory compliance preparation for ISO27001, PCI, GDPR,
                  HIPPA, SOC Type II
                </li>
                <li className="ProgramDevelopment__offering-list-holder">
                  <img
                    className="ProgramDevelopment__offering-listIcon"
                    src={listIcon}
                    alt="List Icon"
                  />
                  Security awareness program development
                </li>
                <li className="ProgramDevelopment__offering-list-holder">
                  <img
                    className="ProgramDevelopment__offering-listIcon"
                    src={listIcon}
                    alt="List Icon"
                  />
                  Threat risk assessments
                </li>
                <li className="ProgramDevelopment__offering-list-holder">
                  <img
                    className="ProgramDevelopment__offering-listIcon"
                    src={listIcon}
                    alt="List Icon"
                  />
                  Cloud migration assessments
                </li>
                <li className="ProgramDevelopment__offering-list-holder">
                  <img
                    className="ProgramDevelopment__offering-listIcon"
                    src={listIcon}
                    alt="List Icon"
                  />
                  3rd Party / Managed service assessments
                </li>
                <li className="ProgramDevelopment__offering-list-holder">
                  <img
                    className="ProgramDevelopment__offering-listIcon"
                    src={listIcon}
                    alt="List Icon"
                  />
                  Business Contingency & Incident response plan development
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
          Threat Risk Assessments, Advisory & Program development
        </div>
        <div className="ProgramDevelopment__benefit__text">
          Many organizations see security as a burden, something that comes
          after the cool product you just built… but at Bespoke we know that
          there is true value in cyber security, not just a box for you to
          check, we know your clients will have trust in your product when they
          know it is secure… security is not just a safety blanket, it’s a sales
          tool too!
        </div>
        <div className="ProgramDevelopment__button">
          <Link to="/contact-us">Contact Us</Link>
        </div>
      </section>
    </div>
  );
};

export default ProgramDevelopment;
