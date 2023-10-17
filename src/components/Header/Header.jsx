import React, { useEffect, useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import logo from "../../assets/BC logo kit/BCimage2.svg";
import logo2 from "../../assets/BC logo kit/Color logo - no background.svg";
import cross from "../../assets/cross.svg";
import hamburger from "../../assets/hamburger.svg";
import "./Header.scss";
import Submenu from "../../components/Submenu/Submenu";

const Header = () => {
  const location = useLocation();
  const isTabActive =
    location.pathname.startsWith("/") || location.pathname === "/";
  const isLinkActive = location.pathname.startsWith("/");

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(true);
  const [isServicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleServicesDropdownToggle = () => {
    setServicesDropdownOpen(!isServicesDropdownOpen);
  };

  const handleSubMenuHover = () => {
    // Do nothing when submenu is hovered to keep the dropdown open
  };

  const handleSubMenuMouseEnter = () => {
    setServicesDropdownOpen(true);
  };

  const handleSubMenuMouseLeave = () => {
    setServicesDropdownOpen(false);
  };
  console.log("Heloooo", isServicesDropdownOpen);
  return (
    <div className="header">
      <div className="header__contents">
        <article className="header__logo">
          <Link to="/">
            <img src={logo} alt="Service Icon" />
          </Link>
        </article>
        <article className="header__logo2">
          <Link to="/">
            <img src={logo2} alt="Service Icon" />
          </Link>
        </article>
        <div className="header__mobile-menu">
          <img
            src={isMobileMenuOpen ? hamburger : cross}
            alt="Mobile Menu"
            onClick={handleMobileMenuToggle}
            className="header__mobile-menu-icon"
          />
          <nav
            className={`header__nav-mobile ${isMobileMenuOpen ? "open" : ""}`}
          >
            <Link to="/" className="header__mobile-link">
              Home
            </Link>
            <div>
              <div>
                <div
                  className={`header__mobile-link ${
                    isServicesDropdownOpen ? "active" : ""
                  }`}
                >
                  Services
                  {isServicesDropdownOpen && (
                    <Submenu
                      isOpen={isServicesDropdownOpen}
                      onMouseEnter={handleSubMenuHover}
                      onMouseLeave={handleSubMenuHover}
                    />
                  )}
                </div>
              </div>
            </div>
            <Link to="/about-us" className="header__mobile-link">
              About Us
            </Link>
            <Link to="/contact-us" className="header__mobile-link">
              Contact Us
            </Link>
            <Link to="/faq" className="header__mobile-link">
              FAQs
            </Link>
          </nav>
        </div>
        <nav
          className={`header__nav ${isMobileMenuOpen ? "mobile-hidden" : ""}`}
        >
          <Link
            to="/"
            className={isLinkActive ? "header__active" : "header__inactive"}
            onClick={handleMobileMenuToggle}
          >
            Home
          </Link>
          <section className="header__services-holder">
            <div
              className={`${
                isTabActive ? "header__active" : "header__inactive"
              }`}
            >
              <div
                className={`header__desktop-services-link ${
                  isServicesDropdownOpen ? "active" : ""
                }`}
                onMouseEnter={handleSubMenuMouseEnter}
                onMouseLeave={handleSubMenuMouseLeave}
                onClick={handleServicesDropdownToggle}
              >
                Services
              </div>
            </div>
          </section>
          {isServicesDropdownOpen && (
            <Submenu
              onMouseEnter={handleSubMenuMouseEnter}
              onMouseLeave={handleSubMenuMouseLeave}
              onClickLink={handleMobileMenuToggle}
            />
          )}
          <Link
            to="/about-us"
            className={isLinkActive ? "header__active" : "header__inactive"}
            onClick={handleMobileMenuToggle}
          >
            About Us
          </Link>
          <Link
            to="/contact-us"
            className={isLinkActive ? "header__active" : "header__inactive"}
            onClick={handleMobileMenuToggle}
          >
            Contact Us
          </Link>
          <Link
            to="/faq"
            className={isLinkActive ? "header__active" : "header__inactive"}
            onClick={handleMobileMenuToggle}
          >
            FAQs
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
