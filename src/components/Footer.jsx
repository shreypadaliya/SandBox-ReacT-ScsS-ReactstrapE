import React from "react";
import "../scss/styles.scss";
import footimg1 from "../assets/logo-light.png.png";
import footimg2 from "../assets/Nav  Link.png";
import footimg3 from "../assets/Nav  Link (1).png";
import footimg4 from "../assets/Nav  Link (2).png";
import footimg5 from "../assets/Nav  Link (3).png";
import footimg6 from "../assets/Nav  Link (4).png";

const footer = () => {
  const validateForm = (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
    return true;
  };

  return (
    <div className="footmaincom">
      <footer className="footer">
        <div className="container footmainwrap">
          
          <div className="footer-column">
            <div>
              <img src={footimg1} alt="Logo" />
            </div>
            <p className="foot1info">
              &copy; 2023 <span className="footername">Sandbox</span>.<br />
              All rights reserved.
            </p>
            <div className="social-icons">
              <a href="https://twitter.com">
                <img src={footimg2} alt="Twitter" />
              </a>
              <a href="https://facebook.com">
                <img src={footimg3} alt="Facebook" />
              </a>
              <a href="https://store.steampowered.com">
                <img src={footimg4} alt="Steam" />
              </a>
              <a href="https://instagram.com">
                <img src={footimg5} alt="Instagram" />
              </a>
              <a href="https://youtube.com">
                <img src={footimg6} alt="YouTube" />
              </a>
            </div>
          </div>

          
          <div className="footer-column">
            <h3>Get in Touch</h3>
            <a
              className="foot1info2"
              href="https://maps.app.goo.gl/bnjms6BowkFDhbEX6"
            >
              Moonshine St. 14/05
              <br />
              Light City, London,
              <br />
              United Kingdom
            </a>
            <p className="foot1info2">
              <a href="mailto:info@email.com" className="foot1info2">
                info@email.com
              </a>
              <br />
              <a href="tel:+001234567900" className="foot1info2">
                00 123 456 79 00
              </a>
            </p>
          </div>

         
          <div className="footer-column">
            <h3>Learn More</h3>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Our Story</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">Terms of Use</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>

          
          <div className="footer-column">
            <h3>Our Newsletter</h3>
            <p>
              Subscribe to our newsletter to get our news & deals delivered to
              you.
            </p>
            <form action="#" method="post" onSubmit={validateForm}>
              <input
                type="email"
                id="email"
                placeholder="Email Address"
                required
              />
              <button type="submit">Join</button>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default footer;
