import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Submenu.scss";

const Submenu = () => {
  const [isSubMenuOpen, setSubMenuOpen] = useState(false);

  const handleSubMenuEnter = () => {
    setSubMenuOpen(true);
  };

  const handleSubMenuLeave = () => {
    setSubMenuOpen(false);
  };

  return (
    <div
      className={`header__services-dropdown ${isSubMenuOpen ? "active" : ""}`}
      onMouseEnter={handleSubMenuEnter}
      onMouseLeave={handleSubMenuLeave}
    >
      <div className="header__desktop-link">
        <div>Cybersecurity</div>
        <ul>
          <li>
            <Link to="/services/virtual-ciso">Virtual CISO</Link>
          </li>
          <li>
            <Link to="/services/security-testing">Security Testing</Link>
          </li>
          <li>
            <Link to="/services/advisory-program-development">
              Advisory & Program Development
            </Link>
          </li>
        </ul>
      </div>
      <div className="header__desktop-link">
        <div>Blockchain</div>
        <ul>
          <li>
            <Link to="/services/blockchain-forensics">
              Blockchain Forensics
            </Link>
          </li>
          <li>
            <Link to="/services/blockchain-security">Blockchain Security</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Submenu;
