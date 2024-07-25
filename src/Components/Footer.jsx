import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
          <a href="/privacy">Privacy Policy</a>
        </div>
        <div className="footer-copyright">
          &copy; {new Date().getFullYear()} InSync. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
