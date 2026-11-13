import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../scss/Footer.scss";

export const Footer: React.FC = () => {
  // Dynamically tracks the current calendar year automatically
  const currentYear = new Date().getFullYear();
  const location = useLocation();

  const scrollToTopInstant = () => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  // Resets scroll position to the top on every route change and full page reload
  useEffect(() => {
    scrollToTopInstant();
    requestAnimationFrame(() => {
      scrollToTopInstant();
    });
  }, [location.pathname]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetHash: string,
  ) => {
    e.preventDefault();
    scrollToTopInstant();

    if (window.location.hash !== targetHash) {
      window.location.hash = targetHash;
    }
    window.location.reload();
  };

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
            <li>
              <a href="#/" onClick={(e) => handleNavClick(e, "#/")}>
                Home
              </a>
            </li>
            <li>
              <a
                href="#/education"
                onClick={(e) => handleNavClick(e, "#/education")}
              >
                Education
              </a>
            </li>
            <li>
              <a href="#/skills" onClick={(e) => handleNavClick(e, "#/skills")}>
                Skills
              </a>
            </li>
            <li>
              <a
                href="#/projects"
                onClick={(e) => handleNavClick(e, "#/projects")}
              >
                Projects
              </a>
            </li>
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
