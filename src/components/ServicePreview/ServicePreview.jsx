import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ServicePreview.scss";
import wallet from "../../assets/wallet.svg";
import icon from "../../assets/techIcon.svg";
import cyber from "../../assets/cyber.svg";

const ServicePreview = () => {
  const initialServices = [
    {
      title: "CyberSecurity",
      list: [
        {
          name: "Security Testing",
          caption: "Bolster Your Defenses with Comprehensive Security Testing",
          description:
            "Our security testing services offer a thorough examination of your systems, applications, and networks to identify vulnerabilities and weaknesses. With our expert analysis and testing methodologies, you can fortify your digital infrastructure, ensuring robust protection against cyber threats and data breaches",
          link: "/security-testing",
        },
        {
          name: "Threat Risk Assessments, Advisory & Program development",
          caption: "Strategic Guidance for Stronger Security",
          description:
            "Unlock the power of proactive cybersecurity with our Threat Risk Assessments, Advisory & Program development services. Our expert consultants work hand-in-hand with your organization to craft a customized security strategy, implement best practices, and develop robust programs to safeguard your digital assets and stay ahead of evolving threats",
          link: "/advisory%26program-development",
        },
        {
          name: "Virtual CISO",
          caption: "Elevate Your Cybersecurity with Virtual CISO Services",
          description:
            "Our Virtual CISO services grant you access to seasoned cybersecurity experts who provide tailored guidance and strategic oversight to detect and mitigate threats effectively. From threat detection to risk management, we're your trusted partners in safeguarding your digital assets and ensuring comprehensive protection for your organization",
          link: "/virtual-ciso",
        },
      ],
      icon: wallet,
    },
    {
      title: "Blockchain",
      list: [
        {
          name: "Blockchain Forensics",
          caption:
            "Secure DeFi transactions with our fraud-detecting Blockchain explorer",
          description:
            "We provide access to a Blockchain explorer and analytics tool that detects fraudulent Blockchain activity. The service also helps protect you from transacting with malicious actors on DeFi, this is performed through filtering and blocking of known malicious actors. This service enables clients to trace the trail of compromised funds across multiple tokens and chains",
          link: "/blockchain-forensics",
        },
        {
          name: "Blockchain Security",
          caption:
            "Enhance DeFi Security with Our Fraud-Detecting Blockchain Explorer",
          description:
            "Our Blockchain explorer and analytics tool empower you to detect and prevent fraudulent activity on the Blockchain, safeguarding your DeFi transactions by filtering and blocking malicious actors while tracing compromised funds across diverse tokens and chains",
          link: "/blockchain-security",
        },
      ],
      icon: cyber,
    },
  ];

  const defaultService = initialServices.find(
    (category) =>
      category.title === "CyberSecurity" &&
      category.list.some((item) => item.name === "Security Testing")
  );

  // Set the selectedService state to the default service
  const [selectedService, setSelectedService] = useState(
    defaultService ? defaultService.list[0] : null
  );

  const handleServiceClick = (item) => {
    setSelectedService(item);
    window.scrollTo({
      top: document.querySelector(".PreviewServices__label").offsetTop,
      behavior: "smooth", // This adds a smooth scrolling effect
    });
  };

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
        {/* Added a functunality in which on Click of any list Item it shows the Description of that Item */}
        {initialServices.map((category, index) => (
          <section className="PreviewServices__holder" key={index}>
            <h2 className="PreviewServices__title">{category.title}</h2>
            <article className="PreviewServices__list">
              <ul>
                {category.list.map((item, itemIndex) => (
                  <li key={itemIndex} onClick={() => handleServiceClick(item)}>
                    {item.name}
                  </li>
                ))}
              </ul>
            </article>
          </section>
        ))}
      </div>
      {selectedService && (
        <>
          <h2 className="PreviewServices__label">{selectedService.name}</h2>

          <div className="PreviewServices__caption">
            {selectedService.caption}
          </div>

          {/* </section> */}
          <div className="PreviewServices__text">
            {selectedService.description}
          </div>
          <div className="PreviewServices__caption-button">
            {/* Use a template literal to create the correct URL path */}
            <Link to={`/services${selectedService.link}`}>
              Explore {selectedService.name}
            </Link>
          </div>
        </>
      )}

      {/* Additional data rendering for selected service can be added here */}
    </div>
  );
};

export default ServicePreview;
