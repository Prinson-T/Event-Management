import React from "react";
import "./Footer.css"; // Import the CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2 className="footer-title">Eventify</h2>
          <p className="footer-text">Manage and host your events easily with us.</p>
        </div>

        <div className="footer-section">
          <h3 className="footer-subtitle">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-subtitle">Follow Us</h3>
          <div className="footer-social">
            <a href="https://web.whatsapp.com/">whatsapp</a>
            <a href="#">Twitter</a>
            <a href="">Instagram</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Eventify. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;