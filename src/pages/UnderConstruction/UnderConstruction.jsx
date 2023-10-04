import React from "react";
import "./UnderConstruction.scss";
import icon from "../../assets/UCicon5.svg";
import logo from "../../assets/BC logo kit/Color logo - no background.svg";

const UnderConstruction = () => {
  return (
    <div className="UC">
      <div className="UC__holder">
        <h2 className="UC__title">We are under maintenance!</h2>
        <div className="UC__description">
          <p className="UC__text">
            Oops, it looks like our tech squad are busy strengthening online
            safety!
          </p>
          <p className="UC__text">Stay tuned for added security!</p>
        </div>
        <img className="UC__text-image" src={logo} alt="under construction" />
      </div>
      <div className="UC__image">
        <img src={icon} alt="under construction" />
      </div>
    </div>
  );
};

export default UnderConstruction;
