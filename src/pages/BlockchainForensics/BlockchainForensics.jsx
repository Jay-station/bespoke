import React from "react";
import { Link } from "react-router-dom";
import "./BlockchainForensics.scss";
import icon from "../../assets/pentest.svg";
import listIcon from "../../assets/listItemdown.svg";
import techIcon from "../../assets/techIcon10.svg";

const BCForensics = () => {
  return (
    <div className="BCForensics">
      <section className="BCForensics__content">
        <section className="BCForensics__Holder">
          <div className="BCForensics__Holder-icon">
            <img src={icon} alt="Service Icon" />
          </div>
          <div className="BCForensics__Holder-title">
            Blockchain Digital Forensics
          </div>
        </section>
        <article className="BCForensics__box">
          <div className="BCForensics__box-text">
            <div className="BCForensics__description">
              We provide access to a Blockchain explorer and analytics tool that
              detects fraudulent Blockchain activity. The service also helps
              protect you from transacting with malicious actors on DeFi, this
              is performed through filtering and blocking of known malicious
              actors. This service enables clients to trace the trail of
              compromised funds across multiple tokens and chains
            </div>
            <div className="BCForensics__offering">Included:</div>
            <div className="BCForensics__offering-list">
              <ul>
                <li className="BCForensics__offering-list-holder">
                  <img
                    className="BCForensics__offering-listIcon"
                    src={listIcon}
                    alt="List Icon"
                  />
                  Comprehensive analysis and databases that are admissible as
                  evidence in court
                </li>
                <li className="BCForensics__offering-list-holder">
                  <img
                    className="BCForensics__offering-listIcon"
                    src={listIcon}
                    alt="List Icon"
                  />
                  Application Programming Interface (API) access to all analysis
                  data allows companies to program custom solutions
                </li>
                <li className="BCForensics__offering-list-holder">
                  <img
                    className="BCForensics__offering-listIcon"
                    src={listIcon}
                    alt="List Icon"
                  />
                  Autonomous wallet and transaction screening, along with
                  real-time alerting
                </li>
                <li className="BCForensics__offering-list-holder">
                  <img
                    className="BCForensics__offering-listIcon"
                    src={listIcon}
                    alt="List Icon"
                  />
                  Suspicious wallet addresses are marked to prevent exchanges
                  and individuals from making trades with them and putting their
                  funds at risk
                </li>
              </ul>
            </div>
          </div>
          <img className="BCForensics__box-image" src={techIcon} alt="" />
        </article>
        <div className="BCForensics__benefit">
          Benefits of Blockchain Security
        </div>
        <div className="BCForensics__benefit__text">
          Imagine Blockchain Digital Forensics as your personal cyber
          investigator. It's like having a super-detective for the digital
          world. This service helps you dig deep into blockchain data to uncover
          hidden clues and solve digital mysteries. With it, you can keep your
          investments secure, ensure transparency in transactions, and have
          peace of mind in the blockchain universe. It's like having your own
          digital detective agency at your service.
        </div>
        <div className="BCForensics__button">
          <Link to="/contact-us">Contact Us</Link>
        </div>
      </section>
    </div>
  );
};

export default BCForensics;
