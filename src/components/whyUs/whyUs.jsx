import React from "react";
import "./whyUs.scss";
import help from "../../assets/help.svg";
import service from "../../assets/support.svg";
import worker from "../../assets/worker.svg";
import good from "../../assets/good.svg";
import rating from "../../assets/rating.svg";
import business from "../../assets/business.svg";
import image from "../../assets/why.png";

const WhyUs = () => {
  const salesData = {
    Block1: {
      Title: "Expertise and Knowledge",
      Content:
        "At BespokeCyber, we excel in blockchain and cybersecurity. Our team of experts stays ahead in these fields, providing cutting-edge solutions tailored to your needs. Trust us for effective navigation of these technologies.",
    },

    Block2: {
      Title: "Customer-Centric Approach",
      Content:
        "We prioritize exceptional customer service. At BespokeCyber, you're not just a customer; you're a valued partner. We understand your unique challenges, aligning our solutions with your goals.",
    },

    Block3: {
      Title: "Forward-Thinking Solutions",
      Content:
        "In tech, we're forward-thinking. We explore trends, adapt to developments, and proactively anticipate challenges in blockchain and cybersecurity. Choose us for a partner prepared for the ever-evolving tech landscape.",
    },

    Block4: {
      Title: "Robust Security Measures",
      Content:
        "Security is paramount. We employ robust measures to protect your assets. Rest assured, your concerns are addressed with diligence and expertise.",
    },

    Block5: {
      Title: "Proven Track Record",
      Content:
        "Our track record speaks for itself. We've successfully delivered solutions that exceed expectations, enhancing security and leveraging blockchain technology.",
    },

    Block6: {
      Title: "Customized Solutions",
      Content:
        "We specialize in tailored solutions. Whether it's a customized blockchain solution or a cybersecurity strategy, count on us for precisely what you need in the digital landscape.",
    },
  };

  return (
    <div className="Ad-container">
      <h2 className="Header">Why Choose Us?</h2>
      <div className="Ad">
        <section className="row">
          <article className="Ad__holder">
            <div className="Ad__holder-icon">
              <img src={service} alt="support icon" />
            </div>
            <div className="Ad__holder-title">{salesData.Block1.Title}</div>
            <div className="Ad__holder-text">{salesData.Block1.Content}</div>
          </article>

          <article className="Ad__holder">
            <div className="Ad__holder-icon">
              <img src={worker} alt="worker icon" />
            </div>
            <div className="Ad__holder-title">{salesData.Block2.Title}</div>
            <div className="Ad__holder-text">{salesData.Block2.Content}</div>
          </article>

          <article className="Ad__holder">
            <div className="Ad__holder-icon">
              <img src={help} alt="help icon" />
            </div>
            <div className="Ad__holder-title">{salesData.Block3.Title}</div>
            <div className="Ad__holder-text">{salesData.Block3.Content}</div>
          </article>
        </section>

        <section className="row">
          <article className="Ad__holder">
            <div className="Ad__holder-icon">
              <img src={good} alt="history icon" />
            </div>
            <div className="Ad__holder-title">{salesData.Block4.Title}</div>
            <div className="Ad__holder-text">{salesData.Block4.Content}</div>
          </article>

          <article className="Ad__holder">
            <div className="Ad__holder-icon">
              <img src={rating} alt="security icon" />
            </div>
            <div className="Ad__holder-title">{salesData.Block5.Title}</div>
            <div className="Ad__holder-text">{salesData.Block5.Content}</div>
          </article>

          <article className="Ad__holder">
            <div className="Ad__holder-icon">
              <img src={business} alt="customize icon" />
            </div>
            <div className="Ad__holder-title">{salesData.Block6.Title}</div>
            <div className="Ad__holder-text">{salesData.Block6.Content}</div>
          </article>
        </section>
      </div>
    </div>
  );
};

export default WhyUs;
