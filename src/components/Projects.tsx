import React, { useEffect, useRef, useState } from "react";
import "../scss/Projects.scss";

interface ProjectData {
  id: number;
  title: string;
  category: string;
  link: string;
  backgroundImage: string;
}

interface ProjectsProps {
  limit?: number;        // Optional limit for homepage (e.g., 2)
  isHomePage?: boolean;  // Renders "See More" button & homepage overrides
}

const PROJECTS_DATA: ProjectData[] = [
  {
    id: 1,
    title: "Starbucks Website Clone",
    category: "HTML, CSS, JAVASCRIPT",
    link: "https://ivresume.netlify.app/starbucks",
    backgroundImage: "images/starbucks.avif"
  },
  {
    id: 2,
    title: "Toy Store Demo",
    category: "JAVA",
    link: "https://www.youtube.com/watch?v=bBIF1056TMU",
    backgroundImage: "images/toystore.avif"
  },
  {
    id: 3,
    title: "Task Manager",
    category: "NODE.JS",
    link: "https://www.youtube.com/watch?v=dcDIXeKTCA4",
    backgroundImage: "images/taskmanager.avif"
  },
  {
    id: 4,
    title: "Calculator",
    category: "PYTHON",
    link: "https://www.youtube.com/watch?v=ju8J6riQZvM",
    backgroundImage: "images/calculator.avif"
  },
  {
    id: 5,
    title: "Powershell Scripts",
    category: "POWERSHELL",
    link: "https://ivresume.netlify.app/scripts",
    backgroundImage: "images/powershellscripts.avif"
  },
    {
    id: 6,
    title: "Crossword Puzzle App",
    category: "JAVA, MICROSERVICES",
    link: "https://github.com/iv571/comp4635assignment2",
    backgroundImage: "images/crosswordpuzzle.avif"
  },
      {
    id: 7,
    title: "RISC vs CISC",
    category: "PAPER",
    link: "https://ivresume.netlify.app/rvc.pdf",
    backgroundImage: "images/paper.avif"
  }
];

// Isolated Row Component to optimize scroll performance calculations independently
const ParallaxProjectRow: React.FC<{ project: ProjectData }> = ({ project }) => {
  const rowRef = useRef<HTMLAnchorElement>(null);
  const [translateY, setTranslateY] = useState<number>(0);

  useEffect(() => {
    const calculateParallax = () => {
      if (!rowRef.current) return;
      
      const rect = rowRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Only run math calculations if the project strip is actually inside the active viewport bounds
      if (rect.top <= viewportHeight && rect.bottom >= 0) {
        // Find the center intersection coordinate point of the row
        const rowCenter = rect.top + rect.height / 2;
        const viewportCenter = viewportHeight / 2;
        
        // Compute displacement distance from viewport center axis
        const distanceFromCenter = rowCenter - viewportCenter;
        
        // Parallax Intensity Factor (0.15 = 15% translation drift speed ratio)
        const parallaxSpeed = 0.15;
        setTranslateY(distanceFromCenter * parallaxSpeed);
      }
    };

    window.addEventListener("scroll", calculateParallax, { passive: true });
    calculateParallax(); // Initial positioning pass

    return () => window.removeEventListener("scroll", calculateParallax);
  }, []);

  return (
    <a 
      href={project.link} 
      ref={rowRef}
      className="parallax-project-row"
      target="_blank" 
      rel="noopener noreferrer"
    >
      {/* Dynamic hardware-accelerated image container layer */}
      <div 
        className="parallax-bg-image" 
        style={{ 
          backgroundImage: `url(${project.backgroundImage})`,
          transform: `translateY(${translateY}px) scale(1.15)` // Scale acts as a padding buffer for the drift movement
        }} 
      />
      
      <div className="parallax-ambient-overlay" />

      <div className="project-foreground-content">
        <div className="purple-glowing-box">
          <span className="box-corner tl" />
          <span className="box-corner br" />
          <div className="box-scanner-flicker" />
          
          <span className="project-category-tag">{project.category}</span>
          <h3 className="project-title-text">{project.title}</h3>
          
          <div className="box-action-hint">
            <span className="hint-text">LAUNCH_PROJECT</span>
            <span className="hint-arrow">→</span>
          </div>
        </div>
      </div>
    </a>
  );
};

const Projects: React.FC<ProjectsProps> = ({ limit, isHomePage = false }) => {
  const displayedProjects = limit ? PROJECTS_DATA.slice(0, limit) : PROJECTS_DATA;

    return (
<section className={`projects-viewport-wrapper ${isHomePage ? "is-home-page" : ""}`}>
  <header className="projects-page-header">
        <h2 className="projects-main-title">Projects</h2>
      </header>

      <div className="parallax-strip-stack">
        {displayedProjects.map((project) => (
          <ParallaxProjectRow key={project.id} project={project} />
        ))}
      </div>

      {isHomePage && (
        <div className="see-more-container">
          <a href="/projects" className="see-more-btn">
            <span>SEE MORE</span>
            <svg className="see-more-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      )}
    </section>
  );
};

export default Projects;