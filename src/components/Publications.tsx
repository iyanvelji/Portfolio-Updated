import React from "react";
import "../scss/Publications.scss";

interface Publication {
  id: number;
  title: string;
  link: string;
}

const PUBLICATIONS_DATA: Publication[] = [
  {
    id: 1,
    title: "How AI could change the world",
    link: "https://www.thereflector.ca/2023/11/13/how-ai-could-change-the-world/", 
  },
  {
    id: 2,
    title: "How AI could improve SETI research",
    link: "https://www.thereflector.ca/2024/12/12/how-ai-could-improve-seti-research/", 
  },
];

const Publications: React.FC = () => {
  return (
    <div className="publications-viewport-wrapper">
      <main className="publications-main-container">
        <h2>Publications</h2>

        <div className="publications-side-grid">
          {PUBLICATIONS_DATA.map((pub) => (
            <article key={pub.id} className="premium-pub-card">
              
              <div className="card-texture-overlay" />
              <div className="card-neon-core-glow" />
              <div className="card-interactive-pulse" />
              
              <div className="pub-card-inner-frame">
                {/* RESTORED: Original CSS Copy-emulated Logo Header Structure 👇 */}
                <div className="logo-emulation-header">
                  <span className="logo-the">the</span>
                  <span className="logo-reflector">reflector</span>
                </div>

                <h3 className="pub-article-title">{pub.title}</h3>

                <a 
                  href={pub.link} 
                  className="pub-read-more-action"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <span>Read More</span>
                  <svg 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="pub-arrow-icon"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </main>

  
    </div>
  );
};

export default Publications;