import React from "react";
import Hero from "../../components/Hero/Hero";
import "./Homepage.scss";
import Certifications from "../../components/Certifications/Certifications";
import ThreatMap from "../../components/ThreatMap/ThreatMap";
import ServicePreview from "../../components/ServicePreview/ServicePreview";
import WhyUs from "../../components/whyUs/whyUs";
import Work from "../../components/Work/Work";

const Homepage = () => {
  return (
    <>
      <div className="Homepage">
        <article>
          <Hero />
        </article>
        <section>
          <Work />
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
