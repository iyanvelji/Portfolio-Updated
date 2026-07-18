import React from 'react';
import '../scss/Experience.scss';

interface WorkRole {
  title: string;
  startDate: string;
  endDate: string;
  duration: string;
  descriptionBullets?: string[];
}

interface SkillItem {
  name: string;
  iconUrl: string;
}

interface ExperienceCompany {
  id: string;
  companyName: string;
  location?: string;
  totalDuration?: string;
  employmentType?: string;
  logoUrl: string;
  roles: WorkRole[];
  skillsList?: SkillItem[];
}

const experienceData: ExperienceCompany[] = [
  {
    id: 'exp-1',
    companyName: 'Mindrift',
    totalDuration: '2 mos', // Added to populate the Enserva-style header duration
    employmentType: 'Freelance',
    logoUrl: '../images/mindrift.jfif',
    roles: [
      {
        title: 'English Writer - AI Trainer',
        startDate: 'Jun 2026',
        endDate: 'Present',
        duration: '2 mos',
        // Added the newly polished bullet point here
        descriptionBullets: [
          'Evaluated and trained generative AI models through targeted prompt engineering, multi-modal image comparisons, and response alignment workflows.'
        ]
      }
    ],
    skillsList: [
      { name: 'Artificial Intelligence', iconUrl: 'images/promptengineering.png' },
      { name: 'Generative AI', iconUrl: 'images/generative-ai.png' }
    ]
  },
  {
    id: 'exp-2',
    companyName: 'Enserva',
    totalDuration: '8 mos',
    location: 'Calgary, Alberta, Canada',
    logoUrl: 'images/enserva.jfif',
    roles: [
      {
        title: 'Research & Policy Coordinator',
        startDate: 'Dec 2025',
        endDate: 'Feb 2026',
        duration: '3 mos',
        descriptionBullets: [
          'Populated a book of advocacy work by drafting one-pagers on benzene, the common safety orientation, IRP 29, and regulations regarding flowback.',
          'Researched and authored an informational brief on methane, alongside drafts of strategic policy positions to support organizational initiatives.',
          'Developed a strategic contact list for the Enserva Transportation Summit to drive sponsorship and booth sales, while supporting overall event promotion through the creation of visual assets such as posters.'
        ]
      },
      {
        title: 'Business Analyst (Intern)',
        startDate: 'Jul 2025',
        endDate: 'Dec 2025',
        duration: '6 mos',
        descriptionBullets: [
          'Identified 3,100+ potential member companies for Enserva to target by generating comprehensive contact lists utilizing a combination of artificial intelligence (AI) tools and manual research techniques.',
          'Optimized the Enserva monday.com Customer Relationship Management (CRM) system by cleaning data, implementing automation, creating new boards for managing councils and accounting, as well as developing five new dashboards that were used in quarterly reporting to the board.',
          'Redesigned the Enserva WordPress website using Elementor and custom CSS, updating the home page and members-only area, as well as creating a new, comprehensive Health & Safety and Policy library for members.',
          'Authored comprehensive custom technical documentation for Enserva’s monday.com CRM system and failed one-on-one training sessions to mentor staff on utilizing the software.',
          'Delivered technical support to internal councils and provided administrative assistance at Enserva events such as the State of the Industry luncheon.',
          'Expanded industry acumen by participating in multiple educational sessions based around Enserva’s “Safe Sites, Strong Communities” industry guide, including a presentation on the guide at the Indian Resource Council’s Unlock the Pipeline Gridlock conference, where I learned from top-tier industry and political leaders.',
          'Engaged in councils in the areas of advocacy, health and safety, transportation, oilwell perforation, human resources, and corporate risk.',
          'Developed a foundational understanding of the energy sector and its role in alleviating global poverty.'
        ]
      }
    ],
    skillsList: [
      { name: 'Monday.com', iconUrl: '/assets/skills/monday.png' },
      { name: 'Dashboards', iconUrl: '/assets/skills/dashboards.png' },
      { name: 'WordPress', iconUrl: '/assets/skills/wordpress.png' },
      { name: 'Data Analytics', iconUrl: '/assets/skills/analytics.png' },
      { name: 'CRM Automation', iconUrl: '/assets/skills/automation.png' }
    ]
  },
  {
    id: 'exp-3',
    companyName: 'Élections Canada',
    employmentType: 'On-Call',
    location: 'Calgary, Alberta, Canada',
    logoUrl: 'images/elections-canada.jfif',
    roles: [
      {
        title: 'Information Officer',
        startDate: 'Apr 2025',
        endDate: 'Apr 2025',
        duration: '1 day',
        descriptionBullets: [
          'Greeted voters and directed them to the correct voting station enhancing the voting experience',
          'Helped with the setup and take down of the polling place'
        ]
      }
    ],
    skillsList: [
      { name: 'Customer Service', iconUrl: '/assets/skills/customer-service.png' },
      { name: 'Public Relations', iconUrl: '/assets/skills/public-relations.png' }
    ]
  },
  {
    id: 'exp-4',
    companyName: 'UFA Co-operative',
    employmentType: 'Co-op',
    logoUrl: 'images/ufa.jfif',
    roles: [
      {
        title: 'End User Support Co-op Student',
        startDate: 'May 2022',
        endDate: 'Dec 2022',
        duration: '8 mos',
        descriptionBullets: [   
          'Successfully resolved over 1000 tickets in ServiceNow',
          'Replaced over 300 computers as part of an Evergreen Project',
          'Automated day-to-day tasks using PowerShell increasing productivity',
          'Imaged all computers in stock increasing the supply of available computers',
          'Updated computers appearing on the security vulnerability report helping secure the organization',
          'Provided remote desktop support such as software installation and troubleshooting',
          'Significantly contributed to the configuration and deployment of 7 self-service kiosk laptops currently in production at UFA petroleum agencies',
          'Troubleshooted Microsoft Teams Rooms and provided technical support during town hall meetings',
          'Configured Honeywell Mobile Barcode Scanners and OptiSigns digital signage',
          'Created technical documentation about software, hardware, and company processes',
          'Utilized Active Directory and Microsoft System Center Configuration Manager to onboard and offboard employees',
          'Provided support for Modern Point of Sale systems helping farm stores and petroleum agencies run smoothly',
          'Troubleshooted printers using PrinterLogic and maintained printers',
          'Maintained the computer lab and managed the stock room inventory in ServiceNow'
        ]
      }
    ],
    skillsList: [
      { name: 'Active Directory', iconUrl: '/assets/skills/active-directory.png' },
      { name: 'Desktop Support', iconUrl: '/assets/skills/desktop-support.png' },
      { name: 'IT Infrastructure', iconUrl: '/assets/skills/it-infra.png' }
    ]
  }
];

export const Experience: React.FC = () => {
  return (
    <section className="experience-section-container">
      <div className="cyber-grid-overlay" />
      <div className="ambient-glow-core" />

      <div className="experience-inner-content container">
        <div className="experience-header">
          <h2>Experience</h2>
        </div>

        <div className="timeline-master-wrapper">
          {/* ⚡ THE GLOWING PURPLE TIMELINE RAIL */}
          <div className="timeline-neon-rail">
            <div className="rail-pulse-beam" />
          </div>

          <div className="experience-list-wrapper">
            {experienceData.map((company) => {
              // 🛠️ CHANGED LOGIC: Use the nested structure if there are multiple roles 
              // OR if the first role contains description bullets (like Mindrift now does)
              const useNestedTimeline = company.roles.length > 1 || !!company.roles[0].descriptionBullets;

              return (
                <div key={company.id} className="company-timeline-block">
                  
                  {/* MASTER DOCKING HUB NODE */}
                  <div className="timeline-hub-anchor">
                    <div className="hub-core-pulse" />
                  </div>

                  <div className="company-group-card">
                    {/* TOP SECTION HEADER */}
                    <div className="company-main-row">
                      <div className="company-logo-frame">
                        <img 
                          src={company.logoUrl} 
                          alt={`${company.companyName} logo`}
                          className="company-brand-img"
                          onError={(e) => {
                            (e.target as HTMLElement).style.display = 'none';
                          }}
                        />
                      </div>

                      <div className="company-meta-details">
                        {useNestedTimeline ? (
                          <>
                            <h3 className="company-name-heading">{company.companyName}</h3>
                            <span className="global-duration-label">
                              {company.totalDuration} {company.employmentType ? `· ${company.employmentType}` : ''}
                            </span>
                            {company.location && <span className="location-label">{company.location}</span>}
                          </>
                        ) : (
                          <>
                            <h3 className="single-role-title">{company.roles[0].title}</h3>
                            <span className="single-role-subline">
                              {company.companyName} {company.employmentType ? `· ${company.employmentType}` : ''}
                            </span>
                            <span className="date-duration-timeline">
                              {company.roles[0].startDate} - {company.roles[0].endDate} · {company.roles[0].duration}
                            </span>
                            {company.location && <span className="location-label">{company.location}</span>}
                          </>
                        )}
                      </div>
                    </div>

                    {/* NESTED TIMELINE (Triggers for Enserva and Mindrift) */}
                    {useNestedTimeline && (
                      <div className="nested-roles-container">
                        <div className="nested-timeline-subrail" />
                        {company.roles.map((role, idx) => (
                          <div key={idx} className="nested-role-node">
                            <div className="role-bullet-indicator" />
                            <div className="role-content-block">
                              <h4 className="nested-role-title">{role.title}</h4>
                              <span className="nested-role-dates">
                                {role.startDate} - {role.endDate} · {role.duration}
                              </span>
                              
                              {role.descriptionBullets && (
                                <ul className="role-bullet-list">
                                  {role.descriptionBullets.map((bullet, bIdx) => (
                                    <li key={bIdx}>{bullet}</li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* 🛠️ INDIVIDUAL INTERACTIVE SKILLS BLURBS */}
                    {company.skillsList && company.skillsList.length > 0 && (
                      <div className="skills-section-footer">
                        <span className="skills-section-title">Skills:</span>
                        <div className="skills-blurbs-grid">
                          {company.skillsList.map((skill, sIdx) => (
                            <a 
                              key={sIdx}
                              href={`/skills#${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
                              className="skill-blurb-link"
                              title={`Explore skills related to ${skill.name}`}
                            >
                              <img 
                                src={skill.iconUrl} 
                                alt="" 
                                className="skill-micro-icon"
                                aria-hidden="true"
                              />
                              <span className="skill-text-name">{skill.name}</span>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;