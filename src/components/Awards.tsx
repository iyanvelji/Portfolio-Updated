import React from "react";
import "../scss/Awards.scss";

interface Award {
  id: string;
  date: string;
  title: string;
  issuer: string;
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
  },
  {
    id: "04",
    date: "Jun 2024",
    title: "Dean's Honour Roll",
    issuer: "Mount Royal University",
  },
];

const Awards: React.FC = () => {
  return (
    <section className="awards-ledger-wrapper">
      <div className="awards-ledger-container">
        
        {/* Elegant Typography Header */}
        <header className="ledger-main-header">
          <h2 className="ledger-main-heading">Awards</h2>
        </header>
        
        {/* Refined Premium Column Headings */}
        <div className="ledger-header-row">
          <span className="ledger-header-label date-col">Timeline</span>
          <span className="ledger-header-label title-col">Recognition</span>
          <span className="ledger-header-label issuer-col">Issuer</span>
        </div>

        {/* Matrix Body */}
        <div className="ledger-matrix-body">
          {AWARDS_DATA.map((award) => (
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

      </div>
    </section>
  );
};

export default Awards;