import React, { useState } from "react";
import scotiabank from "../../assets/scotiabank.svg";
import governmentOntario from "../../assets/governmentOntario.svg";
import governmentCanada from "../../assets/governmentCanada.svg";
import BMO from "../../assets/BMO.svg";
import bfi from "../../assets/bfi.svg";
import WTW from "../../assets/WTW.svg";
import LSE from "../../assets/LSE.svg";
import "./Work.scss";

const Work = () => {
  const [badges, setBadges] = useState([
    scotiabank,
    governmentOntario,
    governmentCanada,
    BMO,
    bfi,
    LSE,
    WTW,
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleArrowClick = (direction) => {
    if (direction === "left") {
      const shiftedBadges = [...badges];
      const firstBadge = shiftedBadges.shift(); // Remove the first badge
      shiftedBadges.push(firstBadge); // Add the removed badge to the end
      setBadges(shiftedBadges); // Update the state with the shifted badges
    } else {
      const shiftedBadges = [...badges];
      const lastBadge = shiftedBadges.pop(); // Remove the last badge
      shiftedBadges.unshift(lastBadge); // Add the removed badge to the beginning
      setBadges(shiftedBadges); // Update the state with the shifted badges
    }
  };

  return (
    <div className="Work">
      <h2 className="Work__title">Our Clients</h2>
      <div className="Work__blurb">
        We assist organizations in unlocking their digital potential by
        addressing their specific business needs and challenges. Here are some
        of the companies that have chosen us for their solutions.
      </div>
      <div className="Work__holder">
        <div className="arrow left" onClick={() => handleArrowClick("left")}>
          ←
        </div>
        <div className="Work__badge">
          <div className="badge-container">
            {badges.map((badge, index) => (
              <div
                key={index}
                className={`badge ${index === currentIndex ? "active" : ""}`}
              >
                <img src={badge} alt="Work Icon" className="badge-img" />
              </div>
            ))}
          </div>
        </div>
        <div className="arrow right" onClick={() => handleArrowClick("right")}>
          →
        </div>
      </div>
    </div>
  );
};

export default Work;
