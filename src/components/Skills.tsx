import React, { useState, useMemo, type ChangeEvent } from "react";
import "../scss/Skills.scss";
import { Link } from "react-router-dom"; // Imported for routing redirection

interface Skill {
  title: string;
  desc: string;
  imgSrc: string;
  education?: string;
  courses?: string;
  certifications?: string;
  experience?: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

// Define structural parameters for props
interface SkillsProps {
  isHomePage?: boolean;
}

const SKILLS_DATA: SkillCategory[] = [
  {
    title: "Artificial Intelligence (AI)",
    skills: [
       {
        title: "Agentic AI",
        desc: "Explored agentic AI concepts in a specialized course.",
        imgSrc: "images/agent.png",
        courses: "Agentic AI Certification Course",
      },
       {
        title: "AI Ethics",
        desc: "Explored AI ethics in a specialized course.",
        imgSrc: "images/aiethics.png",
        courses: "AI Ethics Certification Course",
      },
       {
        title: "Generative AI",
        desc: "Explored generative AI techniques in a specialized course.",
        imgSrc: "images/gemini.webp",
        courses: "Generative AI Certification Course",
      },
      {
        title: "Prompt Engineering",
        desc: "Crafted AI prompts in a prompt engineering course offered by IBM.",
        imgSrc: "images/promptengineering.png",
        courses: "Prompt Engineering Certification Course (IBM)",
      },
      
      
    ],
  },
  {
    title: "Business Skills",
    skills: [
      {
        title: "Accounting",
        desc: "Learned the fundamentals of accounting in ACCT 2121: Financial Accounting at Mount Royal University.",
        imgSrc: "images/accounting.png",
        education: "Mount Royal University",
        courses: "ACCT 2121: Financial Accounting",
      },
      {
        title: "Business Analysis",
        desc: "Gained experience with business analysis at Enserva and through courses and certifications.",
        imgSrc: "images/businessanalysis.png",
        experience: "Business Analyst (Intern) at Enserva"
      },
       {
        title: "Business Process Automation",
        desc: "Mastered the fundamentals of business process automation at Enserva.",
        imgSrc: "images/businessprocessautomation.png",
        experience: "Business Analyst (Intern) at Enserva"
      },
      {
        title: "Corporate Social Responsibility",
        desc: "Learned CSR in MGMT 4402: Corporate Social Responsibility at Mount Royal University.",
        imgSrc: "images/csr.png",
        education: "Mount Royal University",
        courses: "MGMT 4402: Corporate Social Responsibility",
      },
         {
        title: "Customer Relationship Management (CRM)",
        desc: "Proficient in Customer Relationship Management (CRM) systems such as monday.com utilized at Enserva.",
        imgSrc: "images/crm.png",
        experience:
          "Business Analyst (Intern) at Enserva",
      },
      {
        title: "Customer Service",
        desc: "Developed customer service skills while working at United Farmers of Alberta and Elections Canada.",
        imgSrc: "images/customerservice.png",
        experience:
          "End User Support Co-op at United Farmers of Alberta, Service Representative at Elections Canada",
        certifications: "Zendesk Customer Service Professional Certificate",
      },
        {
        title: "Interpersonal Communication",
        desc: "Demonstrated strong interpersonal communication skills while working at United Farmers of Alberta, Elections Canada, and Enserva.",
        imgSrc: "images/interpersonalcommunication.png",
        experience:
          "End User Support Co-op Student at United Farmers of Alberta \n\n Business Analyst (Intern) at Enserva \n\n Service Representative at Elections Canada",

      },
      {
        title: "Marketing",
        desc: "Studied marketing in MKTG 2150: Introduction to Marketing at Mount Royal University.",
        imgSrc: "images/marketing.png",
        education: "Mount Royal University",
        courses: "MKTG 2150: Introduction to Marketing",
      },
       {
        title: "Office Administration",
        desc: "Gained an office administration certification after taking Microsoft Career Essentials in Administrative Assistance.",
        imgSrc: "images/officeadministration.png",
        certifications: "Microsoft Career Essentials in Administrative Assistance",
      },
      {
        title: "Problem Solving",
        desc: "Solved complex problems at Mount Royal University and United Farmers of Alberta.",
        imgSrc: "images/problemsolving.png",
        education: "Mount Royal University",
        experience: "Technical Enterprise IT Support Systems Optimization",
      },
       {
        title: "Project Management",
        desc: "Solved complex problems at Mount Royal University and United Farmers of Alberta.",
        imgSrc: "images/project.png",
        education: "Mount Royal University",
        experience: "Technical Enterprise IT Support Systems Optimization",
      },
      {
        title: "Public Speaking",
        desc: "Developed public speaking skills in SPCH 2001: Intro to Public Speaking at Mount Royal University.",
        imgSrc: "images/publicspeaking.png",
        education: "Mount Royal University",
        courses: "SPCH 2001: Intro to Public Speaking",
      },
       {
        title: "Supply Chain",
        desc: "Studied supply chain management in SCM 3000: Introduction to Supply Chain Management at Mount Royal University.",
        imgSrc: "images/supplychain.png",
        education: "Mount Royal University",
        courses: "SCM 3000: Introduction to Supply Chain Management",
      },
      {
        title: "Teamwork",
        desc: "Collaborated on group projects in multiple courses at Mount Royal University and at United Farmers of Alberta.",
        imgSrc: "images/teamwork.png",
        education: "Mount Royal University",
        experience: "Cross-functional Agile Project Collaborations",
      },
        {
        title: "Time Management",
        desc: "Developed strong time management skills through experience at Mount Royal University, UFA, and Enserva as well as courses taken.",
        imgSrc: "images/timemanagement.png",
        experience: "Mount Royal University",
        courses: "MKTG 2150: Introduction to Marketing",
      },
      {
        title: "Written Communication",
        desc: "Developed business writing skills in MGMT 3210: Business Communication at Mount Royal University.",
        imgSrc: "images/writtencommunication.png",
        education: "Mount Royal University",
        courses: "MGMT 3210: Business Communication",
      },
    ],
  },
  {
    title: "Communication",
    skills: [
      {
        title: "Canva",
        desc: "Learned the fundamentals of Canva graphic design through experience at Enserva.",
        imgSrc: "images/canva.jpeg",
        experience:
          "Business Analyst (Intern) at Enserva",
      },
       {
        title: "Mailchimp",
        desc: "Utilized Mailchimp email messaging at Enserva in various campaigns.",
        imgSrc: "images/mailchimp.jfif",
        experience:
          "Business Analyst (Intern) at Enserva",
      },
      {
        title: "Social Media",
        desc: "Contributed to Enserva's LinkedIn, Facebook, and Instagram accounts.",
        imgSrc: "images/socialmedia.png",
        experience:
          "Business Analyst (Intern) at Enserva",
      },
    ]
  },
   {
    title: "Data",
    skills: [
      {
        title: "Big Data",
        desc: "Explored Big Data in COMP 4522: Database II at Mount Royal University.",
        imgSrc: "images/bigdata.webp",
        education:
          "Bachelor of Computer Information Systems - Mount Royal University",
        courses: "COMP 4522: Database II",
      },
      {
        title: "Dashboards",
        desc: "Created multiple dashboards utilized in quarterly board reporting at Enserva.",
        imgSrc: "images/dashboards.png",
        experience:
          "Business Analyst (Intern) at Enserva",
      },
      {
        title: "Data Analysis",
        desc: "Learned data analysis fundamentals while obtaining the certification for Career Essentials in Data Analysis by Microsoft and LinkedIn.",
        imgSrc: "images/data analysis.png",
        certifications:
          "Career Essentials in Data Analysis by Microsoft and LinkedIn",
      },
      {
        title: "Databases",
        desc: "Worked with relational and non-relational databases at Mount Royal University.",
        imgSrc: "images/databases.png",
        education: "Mount Royal University",
      },
      {
        title: "Distributed Databases",
        desc: "Studied distributed databases in COMP 4522: Database II at Mount Royal University.",
        imgSrc: "images/distributeddatabases.png",
        education: "Mount Royal University",
        courses: "COMP 4522: Database II",
      },
      {
        title: "Hadoop",
        desc: "Learned about Hadoop in COMP 4522: Database II at Mount Royal University.",
        imgSrc: "images/hadoop.png",
        education: "Mount Royal University",
        courses: "COMP 4522: Database II",
      },
       {
        title: "Monday.com",
        desc: "Proficient with monday.com after upgrading Enserva's Monday CRM system.",
        imgSrc: "images/monday.png",
        experience: "Business Analyst (Intern) at Enserva"
      },
      {
        title: "MongoDB",
        desc: "Implemented NoSQL schemas in COMP 4522: Database II: Advanced Database at Mount Royal University.",
        imgSrc: "images/mongodb.png",
        education: "Mount Royal University",
        courses: "COMP 4522: Database II: Advanced Database",
      },
      {
        title: "Neo4j",
        desc: "Obtained a certification as a Neo4j Certified Professional.",
        imgSrc: "images/neo4j.svg",
        certifications: "Neo4j Certified Professional",
      },
      {
        title: "Pandas",
        desc: "Worked with Pandas in Python in COMP 4522: Database II: Advanced Database at Mount Royal University.",
        imgSrc: "images/pandas.png",
        education: "Mount Royal University",
        courses: "COMP 4522: Database II: Advanced Database",
      },
      {
        title: "Power BI",
        desc: "Created multiple dashboards utilized in quarterly board reporting at Enserva.",
        imgSrc: "images/powerbi.webp",
        courses: "",
      },
      {
        title: "Python",
        desc: "Utilized Python in COMP 4522: Database II: Advanced Database at Mount Royal University.",
        imgSrc: "images/python.png",
        education: "Mount Royal University",
        courses: "COMP 4522: Database II: Advanced Database",
      },
      {
        title: "R",
        desc: "Utilized R in COMP 4522: Database II: Advanced Database at Mount Royal University.",
        imgSrc: "images/r.webp",
        education: "Mount Royal University",
        courses: "COMP 4522: Database II: Advanced Database",
      },
      {
        title: "Scikit-Learn",
        desc: "Utilized Scikit-Learn in COMP 4522: Database II: Advanced Database at Mount Royal University.",
        imgSrc: "images/scikitlearn.png",
        education: "Mount Royal University",
        courses: "COMP 4522: Database II: Advanced Database",
      },
      {
        title: "SQL",
        desc: "Wrote queries in COMP 2521: Database I and COMP 4522: Database II: Advanced Database at Mount Royal University.",
        imgSrc: "images/sql.svg",
        education: "Mount Royal University",
        courses: "COMP 2521: Database I, COMP 4522: Database II",
      },
      {
        title: "SQL Server Management Studio",
        desc: "Proficient in Microsoft SSMS after volunteering at the Future Ready Initiative.",
        imgSrc: "images/mssql.png",
        experience: "Volunteer Analyst at Future Ready Initiative",
      },
      {
        title: "Statistics",
        desc: "Created multiple dashboards utilized in quarterly board reporting at Enserva.",
        imgSrc: "images/statistics.png",
        courses: "",
      },
       {
        title: "Tableau",
        desc: "Created multiple dashboards utilized in quarterly board reporting at Enserva.",
        imgSrc: "images/tableau.svg",
        courses: "",
      },
    ],
  },
   {
    title: "IT",
    skills: [
      {
        title: "Cybersecurity",
        desc: "Learned cybersecurity fundamentals while obtaining the certification for Career Essentials in Cybersecurity by Microsoft and LinkedIn.",
        imgSrc: "images/cybersecurity.png",
        certifications:
          "Career Essentials in Cybersecurity by Microsoft and LinkedIn",
      },
         {
        title: "Freshdesk",
        desc: "Proficient with  the Freshdesk ticketing system after working with it at the Future Ready Initiative.",
        imgSrc: "images/freshdesk.webp",
        experience: "OJCMS Accounts Administrator at Future Ready Initiative",
      },
      {
        title: "GCP",
        desc: "Deployed services on GCP in COMP 3512: Web II: Web Application Development.",
        imgSrc: "images/gcp.png",
        education: "Mount Royal University",
        courses: "COMP 3512: Web II",
      },
      {
        title: "Linux",
        desc: "Proficient in Linux after taking COMP 3532: System Administration at Mount Royal University.",
        imgSrc: "images/linux.webp",
        education: "Mount Royal University",
        courses: "COMP 3532: System Administration",
      },
         {
        title: "Network Administration",
        desc: "Proficient in network administration after taking COMP 3533: Network Infrastructure at Mount Royal University.",
        imgSrc: "images/network.png",
        education: "COMP 3533: Network Infrastructure",
      },
      {
        title: "ServiceNow",
        desc: "Managed tickets at United Farmers of Alberta as an End User Support Co-op student.",
        imgSrc: "images/snow.png",
        experience:
          "End User Support Co-op at United Farmers of Alberta (Resolved 1,000+ Tickets)",
      },
        {
        title: "System Administration",
        desc: "Proficient in system administration after taking COMP 3532: System Administration at Mount Royal University.",
        imgSrc: "images/sysadmin.png",
        education: "COMP 3532: System Administration",
      },
      {
        title: "Technical Documentation",
        desc: "Wrote technical documentation at United Farmers of Alberta as an End User Support Co-op student.",
        imgSrc: "../images/documentation.webp",
        experience: "End User Support Co-op at United Farmers of Alberta",
      },
      {
        title: "Troubleshooting",
        desc: "Resolved over 1,000 tickets at United Farmers of Alberta as an End User Support Co-op student.",
        imgSrc: "images/troubleshooting.png",
        experience: "End User Support Co-op at United Farmers of Alberta",
      },
      {
        title: "Vulnerability Management",
        desc: "Experienced with vulnerability management after completing courses and through experience at UFA.",
        imgSrc: "images/virus.png",
        experience: "End User Support Co-op at United Farmers of Alberta"
      },
      {
        title: "Wireshark",
        desc: "Captured network traffic in COMP 3533: Network Infrastructure at Mount Royal University.",
        imgSrc: "images/wireshark.png",
        education: "Mount Royal University",
        courses: "COMP 3533: Network Infrastructure",
      },
    ],
  },
  {
    title: "Microsoft",
    skills: [
      {
        title: "Active Directory",
        desc: "Proficient in Microsoft Active Directory after working at United Farmers of Alberta.",
        imgSrc: "images/activedirectory.webp",
        experience: "End User Support Co-op at United Farmers of Alberta",
      },
      {
        title: "Microsoft Copilot",
        desc: "Learned Microsoft Copilot while obtaining the certification for Career Essentials in Cybersecurity by Microsoft and LinkedIn.",
        imgSrc: "images/copilot.png",
        certifications:
          "Career Essentials in Cybersecurity by Microsoft and LinkedIn",
      },
      {
        title: "Microsoft Office",
        desc: "Proficient in Word, Excel, PowerPoint, and Outlook after working at United Farmers of Alberta and studying at Mount Royal University.",
        imgSrc: "images/office.png",
        education: "Mount Royal University",
        experience: "End User Support Co-op at United Farmers of Alberta",
      },
      {
        title: "Microsoft Project",
        desc: "Utilized Microsoft Project in COMP 4543: Project Management & QA at Mount Royal University.",
        imgSrc: "images/microsoftproject.png",
        education: "Mount Royal University",
        courses: "COMP 4543: Project Management & QA",
      },
      {
        title: "Microsoft System Center Configuration Manager",
        desc: "Proficient in Microsoft SCCM after working at United Farmers of Alberta.",
        imgSrc: "images/sccm.png",
        experience: "End User Support Co-op at United Farmers of Alberta",
      },
      {
        title: "Microsoft Teams",
        desc: "Proficient in Microsoft Teams and Teams meetings rooms after working at United Farmers of Alberta.",
        imgSrc: "images/teams.png",
        experience: "End User Support Co-op at United Farmers of Alberta",
      },
      {
        title: "PowerShell",
        desc: "Automated scripts at UFA as an End User Support Co-op student.",
        imgSrc: "images/powershell.png",
        experience: "End User Support Co-op at United Farmers of Alberta",
      },
    ],
  },
 
  {
    title: "Web and App Development",
    skills: [
      {
        title: "Bubble",
        desc: "Created a site using Bubble for personal use.",
        imgSrc: "images/bubble.jpg",
        experience: "Personal Web Development Portfolio Projects",
      },
      {
        title: "CSS",
        desc: "Styled responsive layouts and animations in COMP 2511: Web I at Mount Royal University.",
        imgSrc: "images/css3.webp",
        education: "Mount Royal University",
        courses: "COMP 2511: Web I",
      },
       {
        title: "DevOps",
        desc: "Styled responsive layouts and animations in COMP 2511: Web I at Mount Royal University.",
        imgSrc: "images/devops.png",
        courses: "DevOps Foundations",
      },
      {
        title: "Figma",
        desc: "Designed prototypes in COMP 3553: Human-Computer Interaction.",
        imgSrc: "images/figma.png",
        education: "Mount Royal University",
        courses: "COMP 3553: Human-Computer Interaction",
      },
      {
        title: "Git",
        desc: "Managed version control using Git in multiple courses at Mount Royal University.",
        imgSrc: "images/git.png",
        education: "Mount Royal University",
      },
      {
        title: "HTML",
        desc: "Built semantic HTML structures in COMP 2511: Web I at Mount Royal University.",
        imgSrc: "images/html5.webp",
        education: "Mount Royal University",
        courses: "COMP 2511: Web I",
      },
      {
        title: "Java",
        desc: "Mastered Java object-oriented programming in COMP 1502: Programming II at Mount Royal University.",
        imgSrc: "images/java.png",
        education: "Mount Royal University",
        courses: "COMP 1502: Programming II",
      },
      {
        title: "JavaScript",
        desc: "Implemented interactive features using JavaScript in COMP 2511: Web I at Mount Royal University.",
        imgSrc: "images/javascript.webp",
        education: "Mount Royal University",
        courses: "COMP 2511: Web I",
      },
        {
        title: "Microservices",
        desc: "Worked with the microservices architecture in projects in COMP 4635: Distributed Systems at Mount Royal University.",
        imgSrc: "images/microservice.png",
        education: "COMP 4635: Distributed Systems",
      },
      {
        title: "NodeJS",
        desc: "Built server-side applications in COMP 3512: Web II at Mount Royal University.",
        imgSrc: "images/nodejs.webp",
        education: "Mount Royal University",
        courses: "COMP 3512: Web II",
      },

      {
        title: "OOP",
        desc: "Mastered object-oriented design in COMP 1502: Programming II at Mount Royal University.",
        imgSrc: "images/oop.png",
        education: "Mount Royal University",
        courses: "COMP 1502: Programming II",
      },
      {
        title: "PHP",
        desc: "Developed dynamic web pages in COMP 2511: Web I at Mount Royal University.",
        imgSrc: "images/php.png",
        education: "Mount Royal University",
        courses: "COMP 2511: Web I",
      },
      {
        title: "React",
        desc: "Developed dynamic web pages in COMP 2511: Web I at Mount Royal University.",
        imgSrc: "images/react.webp",
        courses: "COMP 2511: Web I",
      },
       {
        title: "SASS",
        desc: "Developed dynamic web pages in COMP 2511: Web I at Mount Royal University.",
        imgSrc: "images/sass.png",
        courses: "COMP 2511: Web I",
      },
      {
        title: "Tailwind CSS",
        desc: "Styled UIs using Tailwind in COMP 3512: Web II at Mount Royal University.",
        imgSrc: "images/tailwind.jpg",
        education: "Mount Royal University",
        courses: "COMP 3512: Web II",
      },
       {
        title: "Typescript",
        desc: "Developed dynamic web pages in COMP 2511: Web I at Mount Royal University.",
        imgSrc: "images/typescript.webp",
        courses: "COMP 2511: Web I",
      },
      {
        title: "WordPress",
        desc: "Created multiple WordPress sites for personal use.",
        imgSrc: "images/wordpress.png",
        experience: "Personal Freelance Web Design Deployments",
      },
    ],
  },
 
  
];



export const Skills: React.FC<SkillsProps> = ({ isHomePage = false }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeSkill, setActiveSkill] = useState<Skill | null>(null);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Maps over ALL categories, capping each one to a max of 3 preview items
  const homePageCategories = useMemo(() => {
    if (!isHomePage) return [];
    
    return SKILLS_DATA.map((category) => ({
      ...category,
      skills: category.skills.slice(0, 3)
    }));
  }, [isHomePage]);

  const filteredCategories = useMemo(() => {
    if (isHomePage) return [];
    const query = searchQuery.toLowerCase().trim();
    if (!query) return SKILLS_DATA;

    return SKILLS_DATA.map((category) => ({
      ...category,
      skills: category.skills.filter(
        (skill) =>
          skill.title.toLowerCase().includes(query) ||
          skill.desc.toLowerCase().includes(query),
      ),
    })).filter((category) => category.skills.length > 0);
  }, [searchQuery, isHomePage]);

  const hasResults = isHomePage ? homePageCategories.length > 0 : filteredCategories.length > 0;

  return (
    <section id="skills" className="container">
      <h2>Skills</h2>

      {!isHomePage && (
        <div className="skills-search-container">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search skills (Python, SQL, CSS, Project Management..."
            aria-label="Search skills"
          />
          <span className="search-icon" role="img" aria-hidden="true">
            <img src="images/search.png" alt="Search" />
          </span>
        </div>
      )}

      {hasResults ? (
        <div className="skills-section">
          {isHomePage ? (
            // HOME PAGE LAYOUT
            homePageCategories.map((category) => (
              <div key={category.title} className="skills-group home-preview-group">
                <h3 className="group-title">{category.title}</h3>
                <div className="skills-grid home-preview-grid">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.title}
                      className="skill-card"
                      onClick={() => setActiveSkill(skill)}
                    >
                      <img src={skill.imgSrc} alt={skill.title} className="skill-icon" />
                      <p>{skill.title}</p>
                    </div>
                  ))}

                  {/* The index check is removed; this now renders as item #4 in ALL categories 👇 */}
                  <Link to="/skills" className="skill-card see-more-card">
                    <div className="see-more-content">
                      <p>See More</p>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="arrow-icon">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            // FULL SEARCHABLE SKILLS PAGE LAYOUT
            filteredCategories.map((category) => (
              <div key={category.title} className="skills-group">
                <h3 className="group-title">{category.title}</h3>
                <div className="skills-grid">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.title}
                      className="skill-card"
                      onClick={() => setActiveSkill(skill)}
                    >
                      <img src={skill.imgSrc} alt={skill.title} className="skill-icon" />
                      <p>{skill.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      ) : (
        <div className="skills-no-results">
          <p>No matching skills found for "{searchQuery}". Try a different keyword!</p>
        </div>
      )}

      {/* DYNAMIC DETAILS MODAL */}
      {activeSkill && (
        <div className="skills-modal-overlay" onClick={() => setActiveSkill(null)}>
          <div className="skills-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="skills-modal-close" onClick={() => setActiveSkill(null)} aria-label="Close details modal">
              &times;
            </button>

            <div className="skills-modal-header">
              <img src={activeSkill.imgSrc} alt="" className="modal-header-icon" />
              <h3>{activeSkill.title}</h3>
            </div>

            <p className="skills-modal-desc">{activeSkill.desc}</p>
            <hr className="modal-divider" />

            <div className="skills-modal-meta">
              {activeSkill.education && (
                <div className="meta-block">
                  <h4>🎓 University Education</h4>
                  <p>{activeSkill.education}</p>
                </div>
              )}
              {activeSkill.courses && (
                <div className="meta-block">
                  <h4>📚 Courses</h4>
                  <p>{activeSkill.courses}</p>
                </div>
              )}
              {activeSkill.certifications && (
                <div className="meta-block">
                  <h4>📜 Certifications</h4>
                  <p>{activeSkill.certifications}</p>
                </div>
              )}
              {activeSkill.experience && (
                <div className="meta-block">
                  <h4>💼 Experience</h4>
                  <p>{activeSkill.experience}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};