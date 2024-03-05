import React from "react";
import { Link } from "react-router-dom";
import "./ServicePreview.scss";
import wallet from "../../assets/wallet.svg";
import cyber from "../../assets/cyber.svg";

const ServicePreview = () => {
  return (
    <div className="Preview">
      <div className="PreviewHeader">
        <h2 className="PreviewHeader__title">Services</h2>
        <p className="PreviewHeader__blurb">
          Discover Our Cutting-Edge Services: Explore a range of
          industry-leading solutions, including Gap Assessment, Blockchain
          Digital Forensics, and Penetration Testing, designed to meet your
          unique needs and ensure your digital security
        </p>
      </div>
      <div className="PreviewServices">
        <section className="PreviewServices__holder">
          <h2 className="PreviewServices__title">CyberSecurity</h2>

          <article className="PreviewServices__list">
            <ul>
              <li>Security Testing</li>
              <li>Advisory & Program Development</li>
              <li>Virtual CISO</li>
            </ul>
            {/* <p className="PreviewServices__description">
              Defend your business against malware, hackers, viruses, and
              prevalent security threats.
            </p> */}
          </article>
          <article className="PreviewServices__image">
            <img src={wallet} alt="Service Icon" />
          </article>
          <div className="PreviewServices__link">
            <Link to="/services">Secure your business </Link>
          </div>
        </section>

        <section className="PreviewServices__holder">
          <h2 className="PreviewServices__title">Blockchain</h2>
          <article className="PreviewServices__list">
            <ul>
              <li>Blockchain Forensics</li>
              <li>Blockchain Security</li>
            </ul>
          </article>
          <article className="PreviewServices__image">
            <img src={cyber} alt="Service Icon" />
          </article>
          <div className="PreviewServices__link">
            <Link to="/services">Secure your business </Link>
          </div>
        </section>
      </div>
      <h2 className="PreviewServices__label">Blockchain Forensics</h2>
      <div className="PreviewServices__caption">
        Secure DeFi transactions with our fraud-detecting Blockchain explorer
      </div>
      <div className="PreviewServices__text">
        We provide access to a Blockchain explorer and analytics tool that
        detects fraudulent Blockchain activity. The service also helps protect
        you from transacting with malicious actors on DeFi, this is performed
        through filtering and blocking of known malicious actors. This service
        enables clients to trace the trail of compromised funds across multiple
        tokens and chains
      </div>
    </div>
  );
};

export default ServicePreview;
