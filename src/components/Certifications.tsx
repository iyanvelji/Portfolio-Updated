import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../scss/Certifications.scss';

interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  image: string; 
  url?: string;
}

interface CertificationsProps {
  isHomePage?: boolean;
}

const certificationData: Certification[] = [
  {
    id: 'cert-0',
    title: 'Google Prompting Essentials',
    issuer: 'Google',
    issueDate: 'Issued Jul 2026',
    image: 'images/google.png',
    url: 'https://www.coursera.org/account/accomplishments/specialization/781IWXX6Q35F'
  },
  {
    id: 'cert-1',
    title: 'Python for Data Science Professional Certificate',
    issuer: 'Anaconda',
    issueDate: 'Issued Jul 2026',
    image: 'images/anaconda.png',
    url: 'https://www.linkedin.com/learning/certificates/eb943ae352d2cd1cb6f59a0537186539684ec91c8b529d0adfcfa9ab9cb7d299'
  },
  {
    id: 'cert-2',
    title: 'Getting Started with R for Data Science',
    issuer: 'LinkedIn',
    issueDate: 'Issued Jul 2026',
    image: 'images/linkedin.svg',
    url: 'https://www.linkedin.com/learning/certificates/f1382855862b405611d68b6f37ea59ab2183978e11f7330f551228c2da481885?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B9ae54P6iQN6tE1jJONB%2BPg%3D%3D'
  },
  {
    id: 'cert-3',
    title: 'Supply Chain Foundations: The Essentials Professional Certificate',
    issuer: 'Council of Supply Chain Management Professionals (CSCMP)',
    issueDate: 'Issued Jul 2026',
    image: 'images/cscmp.jfif',
    url: 'https://www.linkedin.com/learning/certificates/729398d757cb53e0827cec1693bb5ebf9b000266b70977371808da1174af3250?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B9ae54P6iQN6tE1jJONB%2BPg%3D%3D'
  },
  {
    id: 'cert-4',
    title: 'Career Essentials in Business Analysis',
    issuer: 'Microsoft and LinkedIn',
    issueDate: 'Issued Jun 2026',
    image: 'images/microsoft.png',
    url: 'https://www.linkedin.com/learning/certificates/e2c95af5a9b06623bc2ae9ee261cb6bdcb33a8729022921d61d77840eaa60606'
  },
  {
    id: 'cert-5',
    title: 'Skills for Change AI Training',
    issuer: 'Calgary Economic Development',
    issueDate: 'Issued Jun 2026',
    image: 'images/calgary-economic-development.jfif',
    url: "https://ibb.co/q3QWzQ0W"
  },
  {
    id: 'cert-6',
    title: 'Customer Service Professional Certificate',
    issuer: 'Zendesk',
    issueDate: 'Issued Jun 2026',
    image: 'images/zendesk.svg',
    url: 'https://www.linkedin.com/learning/certificates/2321d24b971b0e24398459e10a7512ca4766c347c8e7a178bd0bd15ede31463c?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bkw6ncOanRBSudHiQkzNAhA%3D%3D'
  },
  {
    id: 'cert-7',
    title: 'Become a Full-Stack Web Developer',
    issuer: 'LinkedIn',
    issueDate: 'Issued Jun 2026',
    image: 'images/linkedin.svg',
    url: 'https://www.linkedin.com/learning/certificates/9af83a368975624941a5ec24564b1c2d43a786c49392ef8b13f92503beae3ce8?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bkw6ncOanRBSudHiQkzNAhA%3D%3D'
  },
  {
    id: 'cert-8',
    title: 'Statistics Foundations Professional Certificate',
    issuer: 'Wolfram Research',
    issueDate: 'Issued Jun 2026',
    image: 'images/wolfram.jfif',
    url: 'https://www.linkedin.com/learning/certificates/7e0dec9a85d651dd6a90725ae27c9f1afdcc75a90253755b2172adc58ea2bcbf?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bkw6ncOanRBSudHiQkzNAhA%3D%3D'
  },
  {
    id: 'cert-9',
    title: 'Career Essentials in System Administration',
    issuer: 'Microsoft and LinkedIn',
    issueDate: 'Issued May 2026',
    image: 'images/microsoft.png',
    url: 'https://www.linkedin.com/learning/certificates/5c18cea8d89803e5470f23558c2fdb9a95246943ea49481d249c0fbce3d316c2'
  },
  {
    id: 'cert-10',
    title: 'Career Essentials in Generative AI',
    issuer: 'Microsoft and LinkedIn',
    issueDate: 'Issued May 2026',
    image: 'images/microsoft.png',
    url: 'https://www.linkedin.com/learning/certificates/87e3cf6b48fe88c492448572b71f442c0d0ac3314f6b146f148177a75061c890?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BFJVSiFBZRpy%2BCOa1dJq61A%3D%3D'
  },
  {
    id: 'cert-11',
    title: 'Career Essentials in Administrative Assistance',
    issuer: 'Microsoft',
    issueDate: 'Issued Jun 2025',
    image: 'images/microsoft.png',
    url: 'https://www.linkedin.com/learning/certificates/6a119356fc39700ae4c185f53e45c6c5c11c622bbe6946b67ddff9ed215f0926?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BFJVSiFBZRpy%2BCOa1dJq61A%3D%3D'
  },
  {
    id: 'cert-12',
    title: 'Career Essentials in Cybersecurity',
    issuer: 'Microsoft',
    issueDate: 'Issued May 2025',
    image: 'images/microsoft.png',
    url: 'https://www.linkedin.com/learning/certificates/023ed4f89f46e01d59864d071445b51ef65617e1006e042f89e521eb381885c9?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BFJVSiFBZRpy%2BCOa1dJq61A%3D%3D'
  },
  {
    id: 'cert-13',
    title: 'Career Essentials in Data Analysis',
    issuer: 'Microsoft and LinkedIn',
    issueDate: 'Issued May 2025',
    image: 'images/microsoft.png',
    url: "https://www.linkedin.com/learning/certificates/005662171122365e7c5546c6d03e3c824a0247ab9222b327d043c9d3fdfa93be?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BFJVSiFBZRpy%2BCOa1dJq61A%3D%3D"
  },
  {
    id: 'cert-14',
    title: 'Neo4j Certified Professional',
    issuer: 'Neo4j',
    issueDate: 'Issued Mar 2022',
    image: 'images/neo4j.png',
  }   
];

export const CertificationsTimeline: React.FC<CertificationsProps> = ({ isHomePage = false }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCertifications = certificationData.filter((cert) =>
    cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cert.issuer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const displayedCertifications = isHomePage ? certificationData.slice(0, 3) : filteredCertifications;

  return (
    <section className={`timeline-container ${isHomePage ? 'homepage-section' : ''}`}>
      {/* Tech Layer Background Elements */}
      {!isHomePage && (
        <>
          <div className="cyber-grid-overlay" />
          <div className="ambient-glow-core" />
        </>
      )}

      <div className="timeline-content-inner">
        <div className="timeline-header">
          <h2>Certifications</h2>

          {!isHomePage && (
            <div className="search-container">
              <div className="search-icon">
                <img src="images/search.png" alt="Search" />
              </div>
              <input
                type="text"
                className="search-input"
                placeholder="Search Certifications (Supply Chain, Customer Service..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button 
                  className="search-clear-btn" 
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>
          )}
        </div>

        <div className="timeline-wrapper">
          {displayedCertifications.map((cert) => (
            <a 
              key={cert.id}
              target="_blank"
              href={cert.url}
              rel="noopener noreferrer"
              className="timeline-panel-card"
              aria-label={`View credential for ${cert.title}`}
            >
              {/* Panel Core Inner */}
              <div className="panel-inner-content">
                <div className="panel-top-row">
                  <div className="issuer-branding">
                    <div className="ln-emblem">
                      <img className="logo" src={cert.image} alt={cert.title} />
                    </div>
                    <div className="issuer-meta">
                      <h3>{cert.title}</h3>
                      <span className="issuer-name">{cert.issuer}</span>
                    </div>
                  </div>

                  <div className="credential-indicator">
                    <span className="indicator-text">Credential</span>
                    <svg 
                      className="external-icon" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </div>
                </div>

                <div className="panel-bottom-row">
                  <span className="date-badge">{cert.issueDate}</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {isHomePage && (
          <div className="see-more-container">
            <Link to="/certifications" className="see-more-btn">
              <span>See More</span>
              <svg 
                className="see-more-arrow" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default CertificationsTimeline;