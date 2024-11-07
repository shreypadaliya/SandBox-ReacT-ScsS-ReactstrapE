import React, { useState } from "react";
import "../scss/navbar.scss";
import navlogo from "../assets/Link → logo-dark.png.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleMobileDropdown = () => {
    setIsMobileDropdownOpen(!isMobileDropdownOpen);
  };

  return (
    <div className="navwraper">
      <div className="container navmain">
        <div className="navlogoholder">
          <img src={navlogo} alt="" />
        </div>
        <button
          className={`hamburger ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
        <div className={`navlinkwrap ${isMenuOpen ? "active" : ""}`}>
          <div className="navlinkhold">
            <a href="#demos" className="navlinkholdatag">
              Demos
            </a>
          </div>
          <div className="navlinkhold">
            <a href="#pages" className="navlinkholdatag">
              Pages
            </a>
          </div>
          <div className="navlinkhold">
            <a href="#projects" className="navlinkholdatag">
              Projects
            </a>
          </div>
          <div className="navlinkhold">
            <a href="#blog" className="navlinkholdatag">
              Blog
            </a>
          </div>
          <div className="navlinkhold">
            <a href="#blocks" className="navlinkholdatag">
              Blocks
            </a>
          </div>
          <div className="navlinkhold">
            <a href="#documentation" className="navlinkholdatag">
              Documentation
            </a>
          </div>
          <div
            className={`mobile-navdrophold ${
              isMobileDropdownOpen ? "active" : ""
            }`}
            onClick={toggleMobileDropdown}
          >
            <div>EN</div>
            <div>__</div>
            <div className="dropdown-content">
              <div>EN</div>
              <div>ES</div>
            </div>
          </div>
        </div>
        <div className="navdrophold">
          <div>EN</div>
          <div>__</div>
          <div className="dropdown-content">
            <div>EN</div>
            <div>ES</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
