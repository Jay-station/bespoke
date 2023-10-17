import React from "react";
import cert1 from "../../assets/ISO.svg";
import cert2 from "../../assets/CISSP.svg";
import cert3 from "../../assets/CCSK.svg";
import cert4 from "../../assets/GIAC.svg";
import "./Certifications.scss";

const Certifications = () => {
  return (
    <>
      <div className="Certification__holder">
        <h2 className="Certification__title">Certifications</h2>
        <article className="Certification__badge">
          <img src={cert1} alt="Certification Icon" />
          <img src={cert2} alt="Certification Icon" />
          <img src={cert3} alt="Certification Icon" />
          <img src={cert4} alt="Certification Icon" />
        </article>
      </div>
    </>
  );
};

export default Certifications;
