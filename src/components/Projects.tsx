import React, { useEffect, useRef, useState } from "react";
import "../scss/Projects.scss";

interface ProjectData {
  id: number;
  title: string;
  category: string;
  link: string;
  backgroundImage: string;
}

const PROJECTS_DATA: ProjectData[] = [
  {
    id: 1,
    title: "Starbucks Website Clone",
    category: "HTML, CSS, JAVASCRIPT",
    link: "https://github.com/yourportfolio/logistics-pipeline",
    backgroundImage: "images/starbucks.avif"
  },
  {
    id: 2,
    title: "Toy Store Demo",
    category: "JAVA",
    link: "https://github.com/yourportfolio/telemetry-dashboard",
    backgroundImage: "images/toystore.avif"
  },
  {
    id: 3,
    title: "Task Manager",
    category: "NODE.JS",
    link: "https://github.com/yourportfolio/agentic-modeler",
    backgroundImage: "images/taskmanager.avif"
  },
  {
    id: 4,
    title: "Calculator",
    category: "PYTHON",
    link: "https://github.com/yourportfolio/node-matrix",
    backgroundImage: "images/calculator.avif"
  },
  {
    id: 5,
    title: "Powershell Scripts",
    category: "POWERSHELL",
    link: "https://github.com/yourportfolio/node-matrix",
    backgroundImage: "images/powershellscripts.avif"
  },
    {
    id: 6,
    title: "Crossword Puzzle App",
    category: "JAVA, MICROSERVICES",
    link: "https://github.com/yourportfolio/node-matrix",
    backgroundImage: "images/crosswordpuzzle.avif"
  },
      {
    id: 7,
    title: "RISC vs CISC",
    category: "PAPER",
    link: "https://github.com/yourportfolio/node-matrix",
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

const Projects: React.FC = () => {
  return (
    <section className="projects-viewport-wrapper">
      <header className="projects-page-header">
        <h2 className="projects-main-title">Projects</h2>
      </header>

      <div className="parallax-strip-stack">
        {PROJECTS_DATA.map((project) => (
          <ParallaxProjectRow key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;