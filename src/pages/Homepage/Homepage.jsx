import React from "react";
import Hero from "../../components/Hero/Hero";
import "./Homepage.scss";
import Certifications from "../../components/Certifications/Certifications";
// import FAQ from "../../components/FAQ/FAQ";
import ThreatMap from "../../components/ThreatMap/ThreatMap";
import ServicePreview from "../../components/ServicePreview/ServicePreview";
import WhyUs from "../../components/whyUs/whyUs";

const Homepage = () => {
  return (
    <>
      <div className="Homepage">
        <article>
          <Hero />
        </article>
        <section>
          <ThreatMap />
        </section>
        <article>
          <ServicePreview />
        </article>
        <article>
          <WhyUs />
        </article>
        <article>
          <Certifications />
        </article>
      </div>
    </>
  );
};

export default Homepage;
