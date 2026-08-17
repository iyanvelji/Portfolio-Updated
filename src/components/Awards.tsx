import React from "react";
import "../scss/Awards.scss";

interface Award {
  id: string;
  date: string;
  title: string;
  issuer: string;
  featured?: boolean;
}

interface AwardsProps {
  isHomePage?: boolean;
  awardsData?: Award[];
}

const AWARDS_DATA: Award[] = [
  {
    id: "01",
    date: "Nov 2024",
    title: "Jason Lang Scholarship",
    issuer: "Government of Alberta",
  },
  {
    id: "02",
    date: "Jan 2024",
    title: "Dean's Honour Roll",
    issuer: "Mount Royal University",
  },
  {
    id: "03",
    date: "Jan 2024",
    title: "President’s Honour Roll",
    issuer: "Mount Royal University",
    featured: true,
  },
  {
    id: "04",
    date: "Jun 2024",
    title: "Dean's Honour Roll",
    issuer: "Mount Royal University",
  },
];

const TrophyIcon: React.FC = () => (
  <svg
    className="trophy-svg"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M8 21H16M12 17V21M6 4H18V9C18 12.3137 15.3137 15 12 15C8.68629 15 6 12.3137 6 9V4Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 6H3C2.44772 6 2 6.44772 2 7V8C2 9.65685 3.34315 11 5 11H6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18 6H21C21.5523 6 22 6.44772 22 7V8C22 9.65685 20.6569 11 19 11H18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Awards: React.FC<AwardsProps> = ({ isHomePage = false, awardsData = AWARDS_DATA }) => {  // Filter for featured awards when on the homepage
  const displayedAwards = isHomePage
    ? awardsData.filter((award) => award.featured)
    : awardsData;

    const featuredAward =
    awardsData.find((award) => award.featured) || awardsData[0];
  return (
    <section className={`awards-ledger-wrapper ${isHomePage ? "homepage-section" : ""}`}>
      <div className="awards-ledger-container">
        
        {/* Elegant Typography Header */}
        <header className="ledger-main-header">
          <h2 className="ledger-main-heading">{isHomePage ? "Featured Award" : "Awards"}</h2>
        </header>
        
        {isHomePage ? (
          /* ================================================================== */
          /* HOME PAGE ONLY: FEATURED AWARD HERO CARD                          */
          /* ================================================================== */
          <>
            {/* Whole Card Links to Awards Page */}
            <a href="/awards" className="featured-award-card">
              <div className="featured-ambient-glow" />

                                  <span className="featured-date">{featuredAward.date}</span>


              {/* Corner Accents */}
              <span className="card-corner-tick top-left" />
              <span className="card-corner-tick top-right" />
              <span className="card-corner-tick bottom-left" />
              <span className="card-corner-tick bottom-right" />

              <div className="featured-card-inner">
                {/* Centered Gold Trophy Showcase */}
                <div className="trophy-showcase">
                  <div className="trophy-halo" />
                  <div className="trophy-icon-wrapper">
                    <TrophyIcon />
                  </div>
                </div>

                {/* Right Column Details */}
                <div className="featured-content">
                  <div className="featured-header-meta">
                    <span className="featured-issuer">
                      {featuredAward.issuer}
                    </span>
                  </div>

                  <h3 className="featured-title">{featuredAward.title}</h3>
                </div>
              </div>
            </a>

            {/* See More Button (Modeled after Certifications) */}
            <div className="see-more-container">
              <a href="/awards" className="see-more-btn">
                <span>SEE MORE</span>
                <svg
                  className="see-more-arrow"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
          </>
        ) : (
        <>
        {/* Refined Premium Column Headings */}
        <div className="ledger-header-row">
          <span className="ledger-header-label date-col">Timeline</span>
          <span className="ledger-header-label title-col">Recognition</span>
          <span className="ledger-header-label issuer-col">Issuer</span>
        </div>

        {/* Matrix Body */}
        <div className="ledger-matrix-body">
          {displayedAwards.map((award) => (
            <div key={award.id} className="ledger-matrix-row">
              <div className="row-ambient-flash" />
              <div className="row-neon-indicator" />
              <span className="row-corner-tick top-left" />
              <span className="row-corner-tick bottom-right" />
              
              <div className="ledger-cell date-col">
                <time dateTime={award.date}>{award.date}</time>
              </div>
              
              <div className="ledger-cell title-col">
                <span className="award-title-text">{award.title}</span>
              </div>
              
              <div className="ledger-cell issuer-col">
                <span className="award-issuer-text">{award.issuer}</span>
              </div>
            </div>
          ))}
        </div>
        </>
        )}
 
      </div>
    </section>
  );
};

export default Awards;