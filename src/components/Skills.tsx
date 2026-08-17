import React, { useState, useMemo, useEffect, type ChangeEvent } from "react";
import "../scss/Skills.scss";
import { Link, useLocation } from "react-router-dom"; // Imported for routing redirection

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
        desc: "Explored agentic AI concepts and created an AI agent utilizing Python, Google AI Studio, and Browser Use.",
        imgSrc: "images/agent.png",
        certifications: "Skills for Change AI Training",
        courses: "Agentic AI for Business Analysis",
      },
       {
        title: "AI Ethics",
        desc: "Analyzed ethical considerations in AI and the responsible usage of AI.",
        imgSrc: "images/aiethics.png",
        certifications: "Career Essentials in Generative AI by Microsoft and LinkedIn",
        courses: "Ethics in the Age of Generative AI",
      },
       {
        title: "Generative AI",
        desc: "Mastered generative AI techniques and utilized LLMs such as Gemini, Claude, ChatGPT, Perplexity, Grok, and Deepseek.",
        imgSrc: "images/gemini.webp",
        certifications: "Career Essentials in Generative AI by Microsoft and LinkedIn \n Skills for Change AI Training",
        courses: "Generative AI for Business Analysts \n What Is Generative AI? \n Ethics in the Age of Generative AI",
      },
      {
        title: "Prompt Engineering",
        desc: "Crafted AI prompts in various AI courses including a prompt engineering course offered by IBM.",
        imgSrc: "images/promptengineering.png",
        certifications: "Career Essentials in Generative AI by Microsoft and LinkedIn \n Skills for Change AI Training",
        courses: "Prompt Engineering Certification Course (IBM)",
      },
      
      
    ],
  },
  {
    title: "Business Skills",
    skills: [
      {
        title: "Accounting",
        desc: "Learned the fundamentals of accounting in ACCT 2121: Financial Accounting at Mount Royal University",
        imgSrc: "images/accounting.png",
        education: "ACCT 2121: Financial Accounting",
      },
      {
        title: "Business Analysis",
        desc: "Gained experience with business analysis at Enserva and through courses and certifications.",
        imgSrc: "images/businessanalysis.png",
        experience: "Business Analyst (Intern) at Enserva",
        certifications: "Career Essentials in Business Analysis by Microsoft and LinkedIn",
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
        education: "MGMT 4402: Corporate Social Responsibility",
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
          "End User Support Co-op at United Farmers of Alberta \n Information Officer at Elections Canada",
        certifications: "Zendesk Customer Service Professional Certificate",
      },
        {
        title: "Interpersonal Communication",
        desc: "Demonstrated strong interpersonal communication skills while working at United Farmers of Alberta, Elections Canada, and Enserva.",
        imgSrc: "images/interpersonalcommunication.png",
        experience:
          "End User Support Co-op Student at United Farmers of Alberta \n Business Analyst (Intern) at Enserva \n Information Officer at Elections Canada",

      },
      {
        title: "Marketing",
        desc: "Studied marketing in MKTG 2150: Introduction to Marketing at Mount Royal University.",
        imgSrc: "images/marketing.png",
        education: "MKTG 2150: Introduction to Marketing",
        experience: "Business Analyst (Intern) at Enserva",
      },
       {
        title: "Office Administration",
        desc: "Gained an office administration certification after taking Microsoft Career Essentials in Administrative Assistance.",
        imgSrc: "images/officeadministration.png",
        certifications: "Microsoft Career Essentials in Administrative Assistance",
      },
      {
        title: "Problem Solving",
        desc: "Solved complex problems at Mount Royal University, Enserva, and United Farmers of Alberta.",
        imgSrc: "images/problemsolving.png",
        education: "COMP 4635: Distributed Systems \n COMP 4522: Database II: Advanced Database \n COMP 3512: Web II: Web Application Development",
        experience: "End User Support Co-op at United Farmers of Alberta \n Business Analyst (Intern) at Enserva",
      },
       {
        title: "Project Management",
        desc: "Managed multiple projects at Mount Royal University, United Farmers of Alberta, and Enserva.",
        imgSrc: "images/project.png",
        education: "COMP 4543: Project Management & QA \n COMP 5590: Senior Project",
        experience: "End User Support Co-op at United Farmers of Alberta \n Business Analyst (Intern) at Enserva",
      },
      {
        title: "Public Speaking",
        desc: "Developed public speaking skills in SPCH 2001: Intro to Public Speaking at Mount Royal University.",
        imgSrc: "images/publicspeaking.png",
        education: "SPCH 2001: Intro to Public Speaking \n ENTR 3305: The Art of the Pitch",
      },
       {
        title: "Supply Chain",
        desc: "Studied supply chain management by completing the Supply Chain Foundations Professional Certificate.",
        imgSrc: "images/supplychain.png",
        education: "Supply Chain Foundations: The Essentials Professional Certificate by Council of Supply Chain Management Professionals (CSCMP)",
      },
      {
        title: "Teamwork",
        desc: "Collaborated on group projects at Mount Royal University, United Farmers of Alberta, and Enserva.",
        imgSrc: "images/teamwork.png",
        education: "MKTG 2150: Introduction to Marketing \nCOMP 4522: Database II: Advanced Database \nCOMP 3553: Human-Computer Interaction",
        experience: "End User Support Co-op at United Farmers of Alberta \n Business Analyst (Intern) at Enserva",
      },
        {
        title: "Time Management",
        desc: "Developed strong time management skills through experience at Mount Royal University, UFA, and Enserva as well as courses taken.",
        imgSrc: "images/timemanagement.png",
        education: "UGST 1001: Effective Learning \n UGST 1002: Change, Challenge and Choice",
        experience: "End User Support Co-op at United Farmers of Alberta \n Business Analyst (Intern) at Enserva",
      },
      {
        title: "Written Communication",
        desc: "Developed business writing skills in MGMT 3210: Business Communication at Mount Royal University.",
        imgSrc: "images/writtencommunication.png",
        education: "MGMT 3210: Business Communication",
        experience: "End User Support Co-op at United Farmers of Alberta \n Business Analyst (Intern) at Enserva",
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
        education: "COMP 4522: Database II",
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
        education: "COMP 2521: Database I: Modelling & Query \n COMP 4522: Database II: Advanced Database",
      },
      {
        title: "Distributed Databases",
        desc: "Studied distributed databases in COMP 4522: Database II at Mount Royal University.",
        imgSrc: "images/distributeddatabases.png",
        education: "COMP 4522: Database II: Advanced Database",
      },
      {
        title: "Hadoop",
        desc: "Learned about Hadoop in COMP 4522: Database II at Mount Royal University.",
        imgSrc: "images/hadoop.png",
        education: "COMP 4522: Database II: Advanced Database",
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
        education: "COMP 4522: Database II: Advanced Database",
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
        education: "COMP 4522: Database II: Advanced Database",
      },
      {
        title: "Power BI",
        desc: "Created multiple dashboards utilized in quarterly board reporting at Enserva.",
        imgSrc: "images/powerbi.webp",
        education: "Database II: Advanced Database",
      },
      {
        title: "Python",
        desc: "Utilized Python in COMP 4522: Database II: Advanced Database at Mount Royal University.",
        imgSrc: "images/python.png",
        education: "COMP 4522: Database II: Advanced Database",
        certifications: "Python for Data Science Professional Certificate by Anaconda",
      },
      {
        title: "R",
        desc: "Studied R by obtaining the Getting Started with R for Data Science Certificate from LinkedIn.",
        imgSrc: "images/r.webp",
        certifications: "Getting Started with R for Data Science Certificate by LinkedIn",
      },
      {
        title: "Scikit-Learn",
        desc: "Utilized Scikit-Learn in COMP 4522: Database II: Advanced Database at Mount Royal University.",
        imgSrc: "images/scikitlearn.png",
        education: "COMP 4522: Database II: Advanced Database",
      },
      {
        title: "SQL",
        desc: "Wrote queries in COMP 2521: Database I and COMP 4522: Database II: Advanced Database at Mount Royal University.",
        imgSrc: "images/sql.svg",
        education: "COMP 2521: Database I: Modelling & Query \n COMP 4522: Database II: Advanced Database",
      },
      {
        title: "SQL Server Management Studio",
        desc: "Proficient in Microsoft SSMS after volunteering at the Future Ready Initiative.",
        imgSrc: "images/mssql.png",
        experience: "OJCMS Accounts Administrator at Future Ready Initiative",
      },
      {
        title: "Statistics",
        desc: "Created multiple dashboards utilized in quarterly board reporting at Enserva and studied statistics via LinkedIn Learning.",
        imgSrc: "images/statistics.png",
        certifications: "Statistics Foundations Professional Certificate by Wolfram Research",
        experience: "Business Analyst (Intern) at Enserva",
      },
       {
        title: "Tableau",
        desc: "Completed a course in Tableau through LinkedIn Learning.",
        imgSrc: "images/tableau.svg",
        courses: "Tableau Essential Training by LinkedIn",
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
        desc: "Utilized services on GCP in MKTG 3258: Evidence-Based Marketing.",
        imgSrc: "images/gcp.png",
        education: "MKTG 3258: Evidence-Based Marketing",
      },
      {
        title: "Linux",
        desc: "Proficient in Linux after taking COMP 3532: System Administration at Mount Royal University.",
        imgSrc: "images/linux.webp",
        education: "COMP 3532: System Administration",
      },
         {
        title: "Network Administration",
        desc: "Proficient in network administration after taking COMP 3533: Network Infrastructure at Mount Royal University.",
        imgSrc: "images/network.png",
        education: "COMP 3533: Network Infrastructure \n COMP 4635: Distributed Systems",
      },
      {
        title: "ServiceNow",
        desc: "Resolved over 1,000 tickets at United Farmers of Alberta as an End User Support Co-op student.",
        imgSrc: "images/snow.png",
        experience:
          "End User Support Co-op at United Farmers of Alberta",
      },
        {
        title: "System Administration",
        desc: "Proficient in system administration after taking COMP 3532: System Administration at Mount Royal University.",
        imgSrc: "images/sysadmin.png",
        education: "COMP 3532: System Administration",
      },
      {
        title: "Technical Documentation",
        desc: "Wrote technical documentation at United Farmers of Alberta and Enserva.",
        imgSrc: "../images/documentation.webp",
        experience: "End User Support Co-op at United Farmers of Alberta \n Business Analyst (Intern) at Enserva",
      },
      {
        title: "Troubleshooting",
        desc: "Troubleshot issues at United Farmers of Alberta as an End User Support Co-op student.",
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
        education: "COMP 3533: Network Infrastructure",
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
        experience: "Business Analyst (Intern) at Enserva",
      },
      {
        title: "Microsoft Office",
        desc: "Proficient in Word, Excel, PowerPoint, and Outlook after working at United Farmers of Alberta and studying at Mount Royal University.",
        imgSrc: "images/office.png",
        education: "MGMT 3210: Business Communication \n GNED 1401: Writing for Academic Success \n COMP 4522: Database II: Advanced Database \n MKTG 3258: Evidence-Based Marketing",
        experience: "End User Support Co-op at United Farmers of Alberta \n Business Analyst (Intern) at Enserva",
      },
      {
        title: "Microsoft Project",
        desc: "Utilized Microsoft Project in COMP 4543: Project Management & QA at Mount Royal University.",
        imgSrc: "images/microsoftproject.png",
        education: "COMP 4543: Project Management & QA",
      },
      {
        title: "Microsoft System Center Configuration Manager",
        desc: "Proficient in Microsoft SCCM after working at United Farmers of Alberta.",
        imgSrc: "images/sccm.png",
        experience: "End User Support Co-op at United Farmers of Alberta",
      },
      {
        title: "Microsoft Teams",
        desc: "Proficient in Microsoft Teams and Teams meetings rooms after working at United Farmers of Alberta and Enserva.",
        imgSrc: "images/teams.png",
        experience: "End User Support Co-op at United Farmers of Alberta \n Business Analyst (Intern) at Enserva",
        courses: "Modern Project Management in Microsoft 365 by LinkedIn \n Collaborating with Microsoft 365 by LinkedIn"
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
        experience: "Personal Web Development",
      },
      {
        title: "CSS",
        desc: "Styled responsive layouts and animations in COMP 2511: Web I and COMP 3512: Web II at Mount Royal University.",
        imgSrc: "images/css3.webp",
        education: "COMP 2511: Web I: Client Development \n COMP 3512: Web II: Web Application Development",
      },
       {
        title: "DevOps",
        desc: "Completed a course on DevOps foundations.",
        imgSrc: "images/devops.png",
        courses: "DevOps Foundations by LinkedIn",
      },
      {
        title: "Figma",
        desc: "Designed prototypes in COMP 3553: Human-Computer Interaction.",
        imgSrc: "images/figma.png",
        education: "COMP 3553: Human-Computer Interaction",
      },
      {
        title: "Git",
        desc: "Managed version control using Git in multiple courses at Mount Royal University.",
        imgSrc: "images/git.png",
        education: "COMP 1501: Programming I: Intro to Problem Solving \n COMP 2503: Programming III: Data Structures \n COMP 3512: Web II: Web Application Development",
      },
      {
        title: "HTML",
        desc: "Built semantic HTML structures in COMP 2511: Web I and COMP 3512: Web II at Mount Royal University.",
        imgSrc: "images/html5.webp",
        education: "COMP 2511: Web I: Client Development \n COMP 3512: Web II: Web Application Development",
      },
      {
        title: "Java",
        desc: "Mastered Java object-oriented programming in COMP 1502: Programming II and COMP 2503: Programming III at Mount Royal University.",
        imgSrc: "images/java.png",
        education: "COMP 1502: Programming II: Object-Oriented Programming \n COMP 2503: Programming III: Data Structures",
      },
      {
        title: "JavaScript",
        desc: "Implemented features using JavaScript in COMP 3512: Web II at Mount Royal University.",
        imgSrc: "images/javascript.webp",
        education: "COMP 3512: Web II: Web Application Development",
        certifications: "Become a Full-Stack Web Developer by LinkedIn",
      },
        {
        title: "Microservices",
        desc: "Worked with the microservices architecture in projects in COMP 4635: Distributed Systems at Mount Royal University.",
        imgSrc: "images/microservice.png",
        education: "COMP 4635: Distributed Systems",
      },
      {
        title: "NodeJS",
        desc: "Developed websites using Node.js for personal portfolio projects and learned Node.js through LinkedIn Learning training.",
        imgSrc: "images/nodejs.webp",
        certifications: "Become a Full-Stack Web Developer by LinkedIn",
        courses: "Node.js Essential Training by LinkedIn",
      },

      {
        title: "OOP",
        desc: "Mastered object-oriented design in COMP 1502: Programming II and COMP 2503: Programming III at Mount Royal University.",
        imgSrc: "images/oop.png",
        education: "COMP 1502: Programming II: Object-Oriented Programming \n COMP 2503: Programming III: Data Structures",
      },
      {
        title: "PHP",
        desc: "Developed dynamic web pages in COMP 3512: Web II at Mount Royal University.",
        imgSrc: "images/php.png",
        education: "COMP 3512: Web II: Web Application Development",
      },
      {
        title: "React",
        desc: "Utilized React to create this site and learned about React through LinkedIn Learning training.",
        imgSrc: "images/react.webp",
        courses: "React Essential Training by LinkedIn",
        certifications: "Become a Full-Stack Web Developer by LinkedIn",
      },
       {
        title: "SASS",
        desc: "Utilized SASS to create this site and learned about SASS through LinkedIn Learning training.",
        imgSrc: "images/sass.png",
        certifications: "Become a Full-Stack Web Developer by LinkedIn",
        courses: "SASS Essential Training by LinkedIn",
      },
      {
        title: "Tailwind CSS",
        desc: "Styled UIs using Tailwind in COMP 3512: Web II at Mount Royal University.",
        imgSrc: "images/tailwind.jpg",
        education: "COMP 3512: Web II",
      },
       {
        title: "Typescript",
        desc: "Utilized Typescript to create this site and learned about it through LinkedIn Learning training",
        imgSrc: "images/typescript.webp",
        certifications: "Become a Full-Stack Web Developer by LinkedIn",
        courses: "Typescript Essential Training by LinkedIn",
      },
      {
        title: "WordPress",
        desc: "Created multiple sites for personal use and worked with WordPress and Elementor at Enserva.",
        imgSrc: "images/wordpress.png",
        experience: "Business Analyst (Intern) at Enserva",
      },
    ],
  },
 
  
];

const createSkillId = (name: string) =>
  name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');


export const Skills: React.FC<SkillsProps> = ({ isHomePage = false }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeSkill, setActiveSkill] = useState<Skill | null>(null);
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace("#", "");
      
      // Small delay ensures DOM elements finish rendering before scrolling
      const timer = setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 150);

      return () => clearTimeout(timer);
    }
  }, [location]);
  
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
    <section 
    id="skills" 
    className={`container ${isHomePage ? "homepage-section" : ""}`}
  >
      <h2>Skills</h2>

      {!isHomePage && (
        <div className="skills-search-container">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search Skills (Python, SQL, CSS, Project Management..."
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
                      id={createSkillId(skill.title)}
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
                      id={createSkillId(skill.title)}
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