import React, { useState } from "react";
import "./FAQ.scss";
import right from "../../assets/Right.svg";
import down from "../../assets/Down.svg";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleQuestionClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close the active answer
    } else {
      setActiveIndex(index); // Open the clicked answer
    }
  };

  const faqData = [
    {
      question: "What are Virtual CISO services?",
      answer:
        "Virtual CISO services involve creating and managing security functions and programs for businesses, aligning them with business priorities, and providing strategic roadmaps for cybersecurity.",
    },
    {
      question: "What does risk management and mitigation involve?",
      answer:
        "This service helps in identifying and prioritizing risks, then implementing measures to mitigate those risks effectively.",
    },
    {
      question: "Can you elaborate on team hiring and leadership services?",
      answer:
        "Our experts can assist in hiring and leading security teams, as well as turnaround efforts for existing teams.",
    },
    {
      question: "How can you help with cyber insurance planning?",
      answer:
        "We provide guidance in understanding cyber insurance needs and preparing for potential incidents.",
    },
    {
      question: "What is gap assessment in cybersecurity?",
      answer:
        "Gap assessment involves identifying vulnerabilities and shortcomings in your security measures to improve overall protection.",
    },
    {
      question: "What services are included in program development?",
      answer:
        "Our program development services cover access management, encryption, multi-factor authentication, penetration testing, security awareness, and policy development.",
    },
    {
      question: "What compliance standards do you cover?",
      answer:
        "We offer services for ISO 27001, ISO 27018, SOC2, NIST, PCI, HIPAA, and GDPR compliance assessments.",
    },
    {
      question: "What is the focus of your blockchain security services?",
      answer:
        "Our blockchain security services encompass smart contract audits, on-chain security monitoring, penetration testing, wallet tracing, incident response, and more.",
    },
    {
      question: "How can smart contract audits benefit my project?",
      answer:
        "Smart contract audits ensure the security of code and blockchain protocols, helping to prevent vulnerabilities and risks.",
    },
    {
      question: "What is blockchain digital forensics?",
      answer:
        "Blockchain digital forensics involves analyzing blockchain data for evidence and providing real-time alerts for suspicious activities.",
    },
    {
      question: "What sets your autonomous wallet screening apart?",
      answer:
        "Our autonomous wallet screening marks suspicious addresses, preventing trades with them to safeguard funds.",
    },
    {
      question: "What do your smart contract audits entail?",
      answer:
        "Our audits involve comprehensive code reviews, AI-generated security analysis, automated code audits, and threat modeling.",
    },
    {
      question: "How does incident response planning work?",
      answer:
        "We provide incident response planning through our Bespoke Security Support team to handle potential security breaches effectively.",
    },
  ];

  return (
    <div className="FAQ">
      <h2 className="FAQ__header">Frequently Asked Questions</h2>
      <ul className="FAQ__content">
        {faqData.map((item, index) => (
          <section className="FAQ__QHolder">
            <li key={index}>
              <div
                className={`FAQ__Q ${activeIndex === index ? "active" : ""}`}
                onClick={() => handleQuestionClick(index)}
              >
                {item.question}
                <img
                  src={activeIndex === index ? down : right}
                  alt={activeIndex === index ? "down" : "right"}
                  className="FAQ__icon"
                />
              </div>
              {activeIndex === index && (
                <div className="FAQ__A">{item.answer}</div>
              )}
            </li>
          </section>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;
