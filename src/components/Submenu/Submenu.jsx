import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Submenu.scss";

const Submenu = ({ onClickLink, onMouseEnter, onMouseLeave }) => {
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
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div style={{ marginBottom: 10 }} className="header__desktop-link">
        {/* Just Did some styling for the Titles of the Lists */}
        <div
          className="header__desktop_title"
          style={{ fontWeight: 700, fontSize: 18, marginBottom: 8 }}
        >
          Cybersecurity
        </div>
        <ul>
          <li>
            <Link to="/services/virtual-ciso" onClick={onClickLink}>
              Virtual CISO
            </Link>
          </li>
          <li>
            <Link to="/services/security-testing" onClick={onClickLink}>
              Security Testing
            </Link>
          </li>
          <li>
            <Link
              to="/services/advisory%26program-development"
              onClick={onClickLink}
            >
              Advisory & Program Development
            </Link>
          </li>
        </ul>
      </div>
      <div className="header__desktop-link">
        <div
          className="header__desktop_title"
          style={{ fontWeight: 700, fontSize: 18, marginBottom: 8 }}
        >
          Blockchain
        </div>
        <ul>
          <li>
            <Link to="/services/blockchain-forensics" onClick={onClickLink}>
              Blockchain Forensics
            </Link>
          </li>
          <li>
            <Link to="/services/blockchain-security" onClick={onClickLink}>
              Blockchain Security
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Submenu;
