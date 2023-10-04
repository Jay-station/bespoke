import React from "react";
import { Link } from "react-router-dom";
import "./BlockchainSecurity.scss";
import icon from "../../assets/pentest.svg";
import listIcon from "../../assets/listItemdown.svg";
import techIcon from "../../assets/techIcon8.svg";

const BCSecurity = () => {
  return (
    <div className="BCSecurity">
      <section className="BCSecurity__content">
        <section className="BCSecurity__Holder">
          <div className="BCSecurity__Holder-icon">
            <img src={icon} alt="Service Icon" />
          </div>
          <div className="BCSecurity__Holder-title">Blockchain Security</div>
        </section>
        <article className="BCSecurity__box">
          <div className="BCSecurity__box-text">
            <div className="BCSecurity__description">
              We provide a Bespoke end-to-end monitoring and alerting services
              that provide integration with a wide range of protocols, wallets,
              and smart contracts so you can monitor known vulnerabilities
              within your environment
            </div>
            <div className="BCSecurity__offering">Included:</div>
            <div className="BCSecurity__offering-list">
              <ul>
                <li className="BCSecurity__offering-list-holder">
                  <img
                    className="BCSecurity__offering-listIcon"
                    src={listIcon}
                    alt="List Icon"
                  />
                  Smart contract audits that assess the security of code and
                  blockchain protocols
                </li>
                <li className="BCSecurity__offering-list-holder">
                  <img
                    className="BCSecurity__offering-listIcon"
                    src={listIcon}
                    alt="List Icon"
                  />
                  Know-Your-Customer (KYC) identity verification services
                </li>
                <li className="BCSecurity__offering-list-holder">
                  <img
                    className="BCSecurity__offering-listIcon"
                    src={listIcon}
                    alt="List Icon"
                  />
                  Penetration testing and attack simulations for exchanges,
                  wallets, and decentralized apps
                </li>
                <li className="BCSecurity__offering-list-holder">
                  <img
                    className="BCSecurity__offering-listIcon"
                    src={listIcon}
                    alt="List Icon"
                  />
                  Wallet tracing and visualization technologies to follow the
                  trail of transactions
                </li>
                <li className="BCSecurity__offering-list-holder">
                  <img
                    className="BCSecurity__offering-listIcon"
                    src={listIcon}
                    alt="List Icon"
                  />
                  AI generated security analysis using an API that scans for
                  vulnerabilities
                </li>
                <li className="BCSecurity__offering-list-holder">
                  <img
                    className="BCSecurity__offering-listIcon"
                    src={listIcon}
                    alt="List Icon"
                  />
                  Automated code audits that detect vulnerabilities prior to
                  product launch
                </li>
              </ul>
            </div>
          </div>
          <img className="BCSecurity__box-image" src={techIcon} alt="" />
        </article>
        <div className="BCSecurity__benefit">
          Benefits of Blockchain Security
        </div>
        <div className="BCSecurity__benefit__text">
          Think of blockchain security as your digital bodyguard. It's like
          having a trustworthy friend who keeps your online stuff safe from
          sneaky hackers. With blockchain security, your data and transactions
          become rock-solid and super reliable. So, whether you're dealing with
          digital money, smart contracts, or online apps, you've got a guardian
          angel watching your back in the digital world.
        </div>
        <div className="BCSecurity__button">
          <Link to="/contact-us">Contact Us</Link>
        </div>
      </section>
    </div>
  );
};

export default BCSecurity;
