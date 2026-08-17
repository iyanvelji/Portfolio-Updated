import React from "react";
import "../scss/Footer.scss";

export const Footer: React.FC = () => {
  // Dynamically tracks the current calendar year automatically
  const currentYear = new Date().getFullYear();

  return (
    <footer className="cyber-footer">
      {/* Visual background ambient beam layer */}
      <div className="footer-glow" />
      
      <div className="footer-content container">
        {/* Brand Frame */}
        <div className="footer-brand">
          <span className="brand-logo">IV</span>
          <p className="brand-tagline">
            Utilizing technology to solve real-world problems.
          </p>
        </div>

        {/* Navigation Core Matrix */}
        <div className="footer-links-group">
          <h4 className="links-title">Navigation</h4>
          <ul className="footer-nav">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#projects">Projects</a></li>
          </ul>
        </div>

        {/* Secure External Relational Docks */}
        <div className="footer-socials">
          <h4 className="links-title">Connect</h4>
          <a
            href="https://www.linkedin.com/in/iyan-velji/"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-link"
          >
           <img 
              src="images/linkedin.svg" 
              alt="LinkedIn" 
              className="linkedin-icon" 
            />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>

      {/* Baseline Dynamic Copyright Capsule */}
      <div className="footer-bottom">
        <p>&copy; {currentYear} Iyan Velji</p>
      </div>
    </footer>
  );
};

export default Footer;