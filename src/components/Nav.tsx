import { useState } from "react";
import "../scss/Nav.scss";
import { Link } from "react-router-dom";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Mobile Hamburger Trigger */}
        <button
          className={`nav-toggle ${isOpen ? "is-open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Navigation Links Grid */}
        <ul className={`nav-links ${isOpen ? "is-active" : ""}`}>
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>{" "}
          </li>
          <li>
            <Link to="/education" onClick={() => setIsOpen(false)}>
              Education
            </Link>
          </li>
          <li>
            <Link to="/experience" onClick={() => setIsOpen(false)}>
              Experience
            </Link>
          </li>
          <li>
            <Link to="/certifications" onClick={() => setIsOpen(false)}>
              Certifications
            </Link>
          </li>
          <li>
            <Link to="/courses" onClick={() => setIsOpen(false)}>
              Courses
            </Link>
          </li>
          <li>
            <Link to="/skills" onClick={() => setIsOpen(false)}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={() => setIsOpen(false)}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/awards" onClick={() => setIsOpen(false)}>
              Awards
            </Link>
          </li>
          <li>
            <Link to="/publications" onClick={() => setIsOpen(false)}>
              Publications
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
