import React from 'react';
import '../scss/Certifications.scss';

interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  image: string; 
}

const certificationData: Certification[] = [
  {
    id: 'cert-1',
    title: 'Career Essentials in Business Analysis',
    issuer: 'Microsoft and LinkedIn',
    issueDate: 'Issued Jun 2026',
    image: '../images/microsoft.png',
  },
  {
    id: 'cert-2',
    title: 'Skills for Change AI Training',
    issuer: 'Calgary Economic Development',
    issueDate: 'Issued Jun 2026',
    image: '../images/calgary-economic-development.jfif',
  },
   {
    id: 'cert-3',
    title: 'Customer Service Professional Certificate',
    issuer: 'Zendesk',
    issueDate: 'Issued Jun 2026',
    image: '../images/zendesk.svg',
  },
    {
    id: 'cert-4',
    title: 'Become a Full-Stack Web Developer',
    issuer: 'LinkedIn',
    issueDate: 'Issued Jun 2026',
    image: '../images/linkedin.svg',
  },
     {
    id: 'cert-5',
    title: 'Statistics Foundations Professional Certificate',
    issuer: 'Wolfram Research',
    issueDate: 'Issued Jun 2026',
    image: '../images/wolfram.jfif',
  },
   {
    id: 'cert-6',
    title: 'Career Essentials in System Administration',
    issuer: 'Microsoft and LinkedIn',
    issueDate: 'Issued May 2026',
    image: '../images/microsoft.png',
  },
   {
    id: 'cert-7',
    title: 'Career Essentials in Generative AI',
    issuer: 'Microsoft and LinkedIn',
    issueDate: 'Issued May 2026',
    image: '../images/microsoft.png',
  },
   {
    id: 'cert-8',
    title: 'Career Essentials in Administrative Assistance',
    issuer: 'Microsoft',
    issueDate: 'Issued Jun 2025',
    image: '../images/microsoft.png',
  },
   {
    id: 'cert-9',
    title: 'Career Essentials in Cybersecurity',
    issuer: 'Microsoft',
    issueDate: 'Issued May 2025',
    image: '../images/microsoft.png',
  },
   {
    id: 'cert-10',
    title: 'Career Essentials in Data Analysis',
    issuer: 'Microsoft and LinkedIn',
    issueDate: 'Issued May 2025',
    image: '../images/microsoft.png',
  },
   {
    id: 'cert-11',
    title: 'Neo4j Certified Professional',
    issuer: 'Neo4j',
    issueDate: 'Issued Mar 2022',
    image: '../images/neo4j.png',
  }  
];

export const CertificationsTimeline: React.FC = () => {
  return (
    <section className="timeline-container">
      {/* Tech Layer Background Elements */}
      <div className="cyber-grid-overlay" />
      <div className="ambient-glow-core" />

      <div className="timeline-content-inner container">
        <div className="timeline-header">
          <h2>Certifications</h2>
        </div>

        <div className="timeline-wrapper">
          <div className="timeline-track-line" />

          {certificationData.map((cert) => (
            <a 
              key={cert.id}
              target="_blank"
              rel="noopener noreferrer"
              className="timeline-panel-card"
              aria-label={`View credential for ${cert.title}`}
            >
              {/* Timeline Connection Node */}
              <div className="timeline-node">
                <div className="node-core" />
              </div>

              {/* Panel Core Inner */}
              <div className="panel-inner-content">
                <div className="panel-top-row">
                  <div className="issuer-branding">
                    <div className="ln-emblem"><img className="logo" src={cert.image} alt={cert.title} /></div>
                    <div className="issuer-meta">
                      <h3>{cert.title}</h3>
                      <span className="issuer-name">{cert.issuer}</span>
                    </div>
                  </div>
                  
                
                </div>

                <div className="panel-bottom-row">
                  <span className="date-badge">{cert.issueDate}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsTimeline;