import React, { useState } from "react";
import "../scss/Courses.scss";

interface Course {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
}

const COURSES_DATA: Course[] = [
  {
    id: 1,
    title: "Job Skills: Supply Chain and Operations",
    issuer: "LinkedIn",
    date: "Jun 2026",
    description: "Explored foundational logistics, material management strategy, and operational workflows required to build resilient end-to-end global distribution frameworks."
  },
  {
    id: 2,
    title: "Careers in Supply Chain and Operations",
    issuer: "LinkedIn",
    date: "Jun 2026",
    description: "Analyzed corporate career pathways within global logistics ecosystems, procurement optimization, and lean manufacturing process mapping."
  },
  {
    id: 3,
    title: "Tableau Essential Training",
    issuer: "LinkedIn",
    date: "Jun 2026",
    description: "Mastered data visualization pipelines, interactive dashboard architectures, calculated fields, and advanced analytical worksheets within the Tableau architecture."
  },
  {
    id: 4,
    title: "Sass Essential Training",
    issuer: "LinkedIn",
    date: "Jun 2026",
    description: "Deep dive into CSS preprocessing workflows focusing on programmatic mixins, architectural inheritance patterns, map variables, and optimized nesting compilation systems."
  },
  {
    id: 5,
    title: "Career Essentials in Business Analysis by Microsoft and LinkedIn",
    issuer: "Microsoft",
    date: "Jun 2026",
    description: "An elite credential combining core enterprise modeling concepts, stakeholder communication planning, software development lifecycles, and modern system mapping."
  },
  {
    id: 6,
    title: "Skills for Change AI Training",
    issuer: "Calgary Economic Development",
    date: "Jun 2026",
    description: "Specialized deep-dive into regional technology alignment focusing on prompt engineering frameworks, automated workflows, and corporate implementations of agentic AI systems."
  },
  {
    id: 7,
    title: "Managing Data with Microsoft 365",
    issuer: "LinkedIn",
    date: "Jun 2026",
    description: "Focused on cloud data schemas, governance protocols, secure cross-platform data handling, and automated lifecycle policies inside the Microsoft 365 tenant infrastructure."
  },
  {
    id: 8,
    title: "Business Analysis Foundations: Business Process Modeling",
    issuer: "LinkedIn",
    date: "Jun 2026",
    description: "Advanced methodology for engineering precise current-state and future-state workflow maps using standardized BPMN symbols and system gap tracking paradigms."
  },
  {
    id: 9,
    title: "React Foundations by Pearson",
    issuer: "LinkedIn",
    date: "Jun 2026",
    description: "Comprehensive core JavaScript execution layer modeling inside declarative component architectures, virtual DOM reconciliation, and unidirectional state flows."
  },
  {
    id: 10,
    title: "Zendesk Customer Service Professional Certificate",
    issuer: "Zendesk",
    date: "Jun 2026",
    description: "Enterprise service desk blueprint mastery covering ticket channel optimization, triggers, custom automation flows, macro libraries, and global service SLA enforcement metrics."
  },
  {
    id: 11,
    title: "Creating Positive Conversations with Challenging Customers",
    issuer: "LinkedIn",
    date: "Jun 2026",
    description: "Applied psychological frameworks and corporate communication tactics optimized to diffuse systemic friction points and pivot encounters toward successful business resolutions."
  },
  {
    id: 12,
    title: "Customer Service: Handling Abusive Customers",
    issuer: "LinkedIn",
    date: "Jun 2026",
    description: "Corporate escalation procedure mapping and conversational boundary strategies built to manage hostile communication channels while enforcing platform policy security."
  },
  {
    id: 13,
    title: "Serving Customers Using Social Media",
    issuer: "LinkedIn",
    date: "Jun 2026",
    description: "Omnichannel customer resolution tracking across open digital platforms, optimizing for real-time response metrics, brand preservation, and structured public escalation containment."
  },
  {
    id: 14,
    title: "Customer Service Foundations",
    issuer: "LinkedIn",
    date: "Jun 2026",
    description: "Core tenets of cross-functional client alignment, relationship lifecycle retention modeling, dynamic listening metrics, and high-frequency issue isolation patterns."
  },
  {
    id: 15,
    title: "Modern Project Management in Microsoft 365",
    issuer: "LinkedIn",
    date: "Jun 2026",
    description: "Streamlining agile structures using Planner, Project, and loop components to coordinate resource allocations, project baselines, and team telemetry charts."
  },
  {
    id: 16,
    title: "Business Analysis: Essential Tools and Techniques",
    issuer: "LinkedIn",
    date: "Jun 2026",
    description: "Technical tool suite walkthrough covering requirement matrix prioritization tables, stakeholder RACI maps, SWAT analysis, and system requirement documents (FRD/BRD)."
  },
  {
    id: 17,
    title: "Become a Full-Stack Web Developer",
    issuer: "LinkedIn",
    date: "Jun 2026",
    description: "An intensive developmental roadmap spanning front-end rendering engines, application logic structures, back-end servers, and transactional persistent data layers."
  },
  {
    id: 18,
    title: "Learning REST APIs",
    issuer: "LinkedIn",
    date: "Jun 2026",
    description: "Architectural blueprint parsing of HTTP request/response lifecycles, stateless verbs, contract design formatting, error code protocols, and secure endpoint communication rules."
  },
  {
    id: 19,
    title: "Git Essential Training",
    issuer: "LinkedIn",
    date: "Jun 2026",
    description: "Distributed version control system mastery mapping out index tracking states, branch isolation structures, merge resolution algorithms, and rebasing techniques."
  },
  {
    id: 20,
    title: "HTML Essential Training",
    issuer: "LinkedIn",
    date: "Jun 2026",
    description: "Semantic DOM structural validation patterns, accessible node markup formatting (ARIA), layout micro-scaffolding, and document standard structures."
  },
  {
    id: 21,
    title: "Generative AI for Business Analysts",
    issuer: "LinkedIn",
    date: "Jun 2026",
    description: "Integrating Large Language Models into systemic analysis pipelines to automate data collection, synthesis, user persona modeling, and synthetic user test generation."
  },
  {
    id: 22,
    title: "The Role of Business Analysis in Data Analytics",
    issuer: "LinkedIn",
    date: "Jun 2026",
    description: "Bridging corporate insight voids by aligning structured data warehousing queries with executable operational strategies, predictive trends, and corporate logic systems."
  },
  {
    id: 23,
    title: "TypeScript Essential Training",
    issuer: "LinkedIn",
    date: "Jun 2026",
    description: "Statically typed JavaScript engine optimization covering structural interfaces, abstract classes, generic declarations, type assertion rules, and automated compiler safety checks."
  },
  {
    id: 24,
    title: "SQL Essential Training",
    issuer: "LinkedIn",
    date: "Jun 2026",
    description: "Relational database indexing logic optimization covering complex multitable JOIN engines, subquery aggregations, mathematical data mutations, and strict schema query patterns."
  },
  {
    id: 25,
    title: "Customer Service: Problem-Solving and Troubleshooting",
    issuer: "LinkedIn",
    date: "Jun 2026",
    description: "Root-cause diagnostics mapping using logic tree frameworks to efficiently deconstruct and patch infrastructure errors and software workflow anomalies reported by clients."
  },
  {
    id: 26,
    title: "Agentic AI for Business Analysis",
    issuer: "LinkedIn",
    date: "Jun 2026",
    description: "Designing autonomous multi-agent systems via programmatic tool integration to independently scrape documentation, perform market mapping, and compile business strategy templates."
  },
  {
    id: 27,
    title: "NoSQL Essential Training",
    issuer: "LinkedIn",
    date: "Jun 2026",
    description: "Non-relational data clustering mechanisms specializing in schema-less document object models, high-frequency key-value collections, and scalable horizontally cluster distribution configurations."
  },
  {
    id: 28,
    title: "Introduction to Business Analysis",
    issuer: "LinkedIn",
    date: "Jun 2026",
    description: "Foundational breakdown of the core Business Analysis Body of Knowledge (BABOK), requirement gathering frameworks, and corporate scope definition protocols."
  },
  {
    id: 29,
    title: "Learning ECMAScript 6+ (ES6+)",
    issuer: "LinkedIn",
    date: "Jun 2026",
    description: "Advanced engineering patterns utilizing modern core JS features including lexical scopes, asynchronous promises, destructuring paradigms, and module injection compilation systems."
  },
  {
    id: 30,
    title: "Statistics Foundations Professional Certificate by Wolfram Research",
    issuer: "Wolfram",
    date: "Jun 2026",
    description: "Elite statistical data modeling processing pipelines analyzing mathematical distributions, regression logic variables, variance systems, and complex analytics code execution parameters."
  },
  {
    id: 31,
    title: "Excel Statistics Essential Training: 2",
    issuer: "LinkedIn",
    date: "Jun 2026",
    description: "Advanced numerical modeling inside spreadsheet grids using statistical functions, automated Z-tests, ANOVA matrix arrays, and complex correlation trend tracking maps."
  },
  {
    id: 32,
    title: "Statistical Analysis with Wolfram Language",
    issuer: "LinkedIn",
    date: "May 2026",
    description: "Programmatic algorithmic engineering using Wolfram symbolic language configurations to generate predictive data trends and automate multi-variable calculations."
  },
  {
    id: 33,
    title: "Node.js Essential Training",
    issuer: "LinkedIn",
    date: "May 2026",
    description: "Asynchronous non-blocking V8 backend runtime processing covering event-loop telemetry tracking, filesystem stream handling, and secure cluster routing configurations."
  },
  {
    id: 34,
    title: "JavaScript Essential Training",
    issuer: "LinkedIn",
    date: "May 2026",
    description: "Core prototype-based programming logic principles mapping out memory stack references, dynamic event capturing loops, and algorithmic DOM manipulation logic architectures."
  },
  {
    id: 35,
    title: "Statistics Foundations 4: Advanced Topics",
    issuer: "LinkedIn",
    date: "May 2026",
    description: "Analyzing modern multi-sample hypothesis testing systems, non-parametric analysis engines, chi-square evaluation profiles, and complex probability curves."
  },
  {
    id: 36,
    title: "Search Techniques for Web Developers",
    issuer: "LinkedIn",
    date: "May 2026",
    description: "Engineering performant client data querying algorithms, advanced indexing methods, search engine crawler optimization schemas, and asynchronous text filtering engines."
  },
  {
    id: 37,
    title: "React Essential Training",
    issuer: "LinkedIn",
    date: "May 2026",
    description: "Component hook state management structures, side-effect dependencies tracking, custom context layer injections, and structural component tree optimizations."
  },
  {
    id: 38,
    title: "DevOps Foundations",
    issuer: "LinkedIn",
    date: "May 2026",
    description: "Continuous development deployment architecture pipelines tracking CI/CD build scripts, automated system monitoring, container configurations, and infrastructure-as-code foundations."
  },
  {
    id: 39,
    title: "Statistics Foundations 3: Using Data Sets",
    issuer: "LinkedIn",
    date: "May 2026",
    description: "Isolating anomalies and normalizations across dirty raw corporate datasets using descriptive index metrics, tracking distributions, and checking parameter boundaries."
  },
  {
    id: 40,
    title: "Career Essentials in System Administration by Microsoft and LinkedIn",
    issuer: "Microsoft",
    date: "May 2026",
    description: "Professional infrastructure tracking blueprint mastery analyzing secure network directory setups, user permission configurations, server terminal setups, and automated backup routines."
  },
  {
    id: 41,
    title: "Statistics Foundations 2: Probability",
    issuer: "LinkedIn",
    date: "May 2026",
    description: "Permutation calculations, combination tracking, conditional probability calculations, and Bayes theorem modeling optimized for data forecasting scenarios."
  },
  {
    id: 42,
    title: "Statistics Foundations 1: The Basics",
    issuer: "LinkedIn",
    date: "May 2026",
    description: "Core central tendency mathematical models parsing out mean, median, standard deviations, variations, and descriptive chart distributions mapping structures."
  },
  {
    id: 43,
    title: "Career Essentials in Generative AI by Microsoft and LinkedIn",
    issuer: "Microsoft",
    date: "May 2026",
    description: "Elite theoretical AI framework processing mapping foundational prompt logic parameters, cognitive bias reduction targets, and corporate ethical implementation constraints."
  },
  {
    id: 44,
    title: "Everyday AI Concepts",
    issuer: "LinkedIn",
    date: "May 2026",
    description: "Demystifying everyday neural network processing loops, recommendation systems algorithms, machine learning logic blocks, and data parsing mechanics."
  },
  {
    id: 45,
    title: "Ethics in the Age of Generative AI",
    issuer: "LinkedIn",
    date: "May 2026",
    description: "Parsing algorithmic fairness objectives, copyright vulnerabilities within generative training pipelines, intellectual property security, and responsible model fine-tuning frameworks."
  },
  {
    id: 46,
    title: "Learning Microsoft 365 Copilot for Work",
    issuer: "LinkedIn",
    date: "May 2026",
    description: "Maximizing enterprise productivity graphs by writing precise orchestrations connecting natural language prompts to tenant data repositories."
  },
  {
    id: 47,
    title: "What Is Generative AI?",
    issuer: "LinkedIn",
    date: "May 2026",
    description: "Structural parsing of deep neural architectures, transformers, tokens embeddings logic tracks, and the underlying probability modeling of conversational text generators."
  },
  {
    id: 48,
    title: "Your Top AI Questions Answered: AI Literacy for Everyone",
    issuer: "LinkedIn",
    date: "May 2026",
    description: "Deconstructing core machine learning capabilities, model limitations, vector search spaces, and future automation impacts across modern information tech fields."
  },
  {
    id: 49,
    title: "Career Essentials in Administrative Assistance by Microsoft and LinkedIn",
    issuer: "Microsoft",
    date: "Jun 2025",
    description: "Operational infrastructure optimization focusing on digital documentation control, record architecture maintenance, and high-frequency communication calendar management models."
  },
  {
    id: 50,
    title: "Collaborating with Microsoft 365",
    issuer: "LinkedIn",
    date: "Jun 2025",
    description: "Architecting cloud-based collaborative structures utilizing synchronous cross-platform networks, shared asset hubs, and enterprise communication systems."
  },
  {
    id: 51,
    title: "Note-Taking for Business Professionals",
    issuer: "LinkedIn",
    date: "Jun 2025",
    description: "Information synthesis modeling converting dense real-time boardroom verbal arrays into highly indexed, task-prioritized strategic roadmap records."
  },
  {
    id: 52,
    title: "Time Management Fundamentals",
    issuer: "LinkedIn",
    date: "Jun 2025",
    description: "Algorithmic time block allocation methodologies engineered to neutralize focus cognitive leakage vectors and optimize cross-project deliverable milestones."
  },
  {
    id: 53,
    title: "Tips for Writing Business Emails",
    issuer: "LinkedIn",
    date: "Jun 2025",
    description: "Structural business messaging parsing aimed at minimizing communication loops by engineering highly directive, crystal-clear professional correspondence styles."
  },
  {
    id: 54,
    title: "Communication Foundations",
    issuer: "LinkedIn",
    date: "Jun 2025",
    description: "Deconstructing systemic team interaction loops, situational vocal phrasing, and assertive feedback architectures to elevate organizational output speed."
  },
  {
    id: 55,
    title: "Administrative Professional Tips",
    issuer: "LinkedIn",
    date: "May 2025",
    description: "Micro-optimization workflows for professional operations, data capture methods, and priority scheduling mechanics."
  },
  {
    id: 56,
    title: "Administrative Professional Foundations",
    issuer: "LinkedIn",
    date: "May 2025",
    description: "Core tenets of project coordination, standard business documentation layouts, office technology optimization tracking, and internal stakeholder relations."
  },
  {
    id: 57,
    title: "Career Essentials in Cybersecurity by Microsoft and LinkedIn",
    issuer: "Microsoft",
    date: "May 2025",
    description: "Elite security credential mapping infrastructure threat vectors, data encryption standards, verification loops, and access permission protocols."
  },
  {
    id: 58,
    title: "Microsoft Security Copilot (2024)",
    issuer: "LinkedIn",
    date: "May 2025",
    description: "Harnessing real-time automated AI logic setups to parse system network security alerts, analyze malware signatures, and compile fast incident remediation responses."
  },
  {
    id: 59,
    title: "Cybersecurity Foundations",
    issuer: "LinkedIn",
    date: "May 2025",
    description: "Foundational asset-protection blueprint mapping out defensive hardware perimeters, authentication standards, social engineering mitigation vectors, and network sniffing defenses."
  },
  {
    id: 60,
    title: "Cybersecurity Awareness: Cybersecurity Terminology",
    issuer: "LinkedIn",
    date: "May 2025",
    description: "Indexing technical taxonomies across modern attack vectors including ransomware mechanisms, cross-site injection profiles, and malicious payload distribution tracking."
  },
  {
    id: 61,
    title: "The Cybersecurity Threat Landscape",
    issuer: "LinkedIn",
    date: "May 2025",
    description: "Analytical mapping tracking geopolitical advanced persistent threats, zero-day vulnerabilities mitigation, and distributed botnet swarm tracking systems."
  },
  {
    id: 62,
    title: "Career Essentials in Data Analysis by Microsoft and LinkedIn",
    issuer: "Microsoft",
    date: "May 2025",
    description: "Enterprise analytical tracking credentials mapping relational semantic storage systems, data ingestion cleanup passes, and KPI calculation modeling pipelines."
  },
  {
    id: 63,
    title: "Learning Data Analytics Part 2: Extending and Applying Core Knowledge",
    issuer: "LinkedIn",
    date: "May 2025",
    description: "Statistical correlation analysis modeling parsing sample sizes distributions and executing predictive trending equations over clean server data aggregates."
  },
  {
    id: 64,
    title: "Learning Data Analytics: 1 Foundations",
    issuer: "LinkedIn",
    date: "May 2025",
    description: "Parsing data architecture systems, understanding data storage schemas, tracking primary data collection pipelines, and validating transactional outputs."
  },
  {
    id: 65,
    title: "Introduction to Career Skills in Data Analytics",
    issuer: "LinkedIn",
    date: "May 2025",
    description: "Mapping technological tracks across SQL analysis, cloud reporting structures, and formatting data to resolve business optimization challenges."
  },
  {
    id: 66,
    title: "What Is Business Analysis?",
    issuer: "LinkedIn",
    date: "Apr 2025",
    description: "Deconstructing requirement analysis pipelines, scope validation parameters, structural enterprise gaps, and systems engineering bridge concepts."
  },
  {
    id: 67,
    title: "Neo4j Certified Professional",
    issuer: "Neo4j",
    date: "Mar 2022",
    description: "Elite graph database certification analyzing nodes relationships tracking logic patterns, high-velocity Cypher database querying scripts, and index execution tracing optimizations."
  },
  {
    id: 68,
    title: "Google Analytics Certification",
    issuer: "Google",
    date: "Jul 2023",
    description: "Advanced web event-stream orchestration setup tracking data layers custom streams variables, user acquisition funnel tracking calculations, and custom dimension tagging."
  }
];

// Helper to render inline tech SVGs to eliminate broken local file paths
const IssuerLogo: React.FC<{ issuer: string }> = ({ issuer }) => {
  const norm = issuer.toLowerCase();
  if (norm.includes("linkedin")) {
    return (
      <svg className="issuer-svg ink-linkedin" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    );
  }
  if (norm.includes("microsoft")) {
    return (
      <svg className="issuer-svg ink-microsoft" viewBox="0 0 23 23" fill="currentColor">
        <path d="M0 0h11v11h-11zM12 0h11v11h-11zM0 12h11v11h-11zM12 12h11v11h-11z" />
      </svg>
    );
  }
  if (norm.includes("google")) {
    return (
      <svg className="issuer-svg ink-google" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.24 10.285V13.4h6.887c-.275 1.565-1.88 4.604-6.887 4.604-4.33 0-7.866-3.577-7.866-8s3.536-8 7.866-8c2.46 0 4.105 1.025 5.047 1.926l2.427-2.334C17.955 2.192 15.34 1 12.24 1 6.033 1 1 6.033 1 12s5.033 11 11.24 11c6.478 0 10.793-4.537 10.793-10.997 0-.746-.08-1.32-.176-1.718H12.24z" />
      </svg>
    );
  }
  // Alternate sleek tech geometric node icon for customized regional authorities
  return (
    <svg className="issuer-svg ink-generic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  );
};

const Courses: React.FC = () => {
  const [activeCourse, setActiveCourse] = useState<Course | null>(null);

  return (
    <section className="courses-viewport-wrapper">
      <div className="courses-layout-container">
        
        <header className="courses-section-header">
          <div className="header-telemetry">SYS // CREDENTIALS_INDEX</div>
          <h2 className="courses-main-title">Specializations & Certifications</h2>
        </header>

        {/* Small Responsive Grid Configuration */}
        <div className="courses-dense-grid">
          {COURSES_DATA.map((course) => (
            <article 
              key={course.id} 
              className={`small-course-card ${activeCourse?.id === course.id ? "targeted" : ""}`}
              onClick={() => setActiveCourse(course)}
            >
              {/* Sci-Fi Background Layers */}
              <div className="card-mesh-texture" />
              <div className="card-reactive-neon-glow" />
              <span className="card-corner-bracket topleft" />
              <span className="card-corner-bracket bottomright" />

              <div className="card-content-wrapper">
                <div className="card-top-meta">
                  <IssuerLogo issuer={course.issuer} />
                  <span className="issuer-name-text">{course.issuer}</span>
                </div>

                <h3 className="course-title-heading">{course.title}</h3>
                
                <div className="card-bottom-meta">
                  <time className="course-date-stamp">{course.date}</time>
                  <span className="telemetry-action-hint">DETAILS //</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Cybernetic Description Drawer Overlay Box */}
      {activeCourse && (
        <div className="console-overlay-backdrop" onClick={() => setActiveCourse(null)}>
          <div className="console-description-box" onClick={(e) => e.stopPropagation()}>
            <div className="console-scanner-line" />
            
            <header className="console-box-header">
              <div className="console-telemetry-status">
                <span className="pulse-node" /> STATUS // CREDENTIAL_VERIFIED_2026
              </div>
              <button className="console-close-button" onClick={() => setActiveCourse(null)}>
                &times; CLOSE
              </button>
            </header>

            <div className="console-box-body">
              <div className="console-meta-row">
                <div className="meta-block">
                  <span className="meta-label">ISSUING_AUTHORITY</span>
                  <span className="meta-val highlight">{activeCourse.issuer}</span>
                </div>
                <div className="meta-block">
                  <span className="meta-label">TIMELINE_STAMP</span>
                  <span className="meta-val">{activeCourse.date}</span>
                </div>
              </div>

              <div className="console-divider-line" />

              <h4 className="console-course-title">{activeCourse.title}</h4>
              
              <div className="console-description-wrapper">
                <span className="terminal-prompt">&gt; DESCRIPTION:</span>
                <p className="console-description-text">{activeCourse.description}</p>
              </div>
            </div>

            <footer className="console-box-footer">
              <span className="footer-telemetry-string">LOG_ID_MRU_EX_A0{activeCourse.id}</span>
            </footer>
          </div>
        </div>
      )}
    </section>
  );
};

export default Courses;