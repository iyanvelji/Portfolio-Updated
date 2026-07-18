import React, { useState } from "react";
import "../scss/Education.scss";

interface Course {
  code: string;
  name: string;
  description: string;
}

interface CourseCategory {
  title: string;
  key: string;
  courses: Course[];
}

const educationData = {
  university: "Mount Royal University",
  degree: "Bachelor of Computer Information Systems",
  timeline: "Sept 2020 - Apr 2025",
  logoUrl:
    "images/mountroyal.png",
};

const categories: CourseCategory[] = [
  {
    title: "Computing",
    key: "computing",
    courses: [
      {
        code: "COMP 1501",
        name: "Programming I: Intro to Problem Solving",
        description:
          "Introduction to fundamental programming concepts, algorithmic thinking, and problem-solving methodologies using a modern high-level language.",
      },
      {
        code: "COMP 1502",
        name: "Programming II: Object-Oriented Programming",
        description:
          "Deep dive into object-oriented design principles including inheritance, polymorphism, encapsulation, and robust exception handling structures.",
      },
      {
        code: "COMP 2503",
        name: "Programming III: Data Structures",
        description:
          "Analysis and implementation of core data structures such as linked lists, binary trees, heaps, hash tables, and advanced search/sort algorithms.",
      },
      {
        code: "COMP 2511",
        name: "Web I: Client Development",
        description:
          "Building modern responsive interfaces using HTML5, semantic CSS3, layout systems, and asynchronous vanilla JavaScript client architecture.",
      },
      {
        code: "COMP 2521",
        name: "Database I: Modelling & Query",
        description:
          "Relational database design principles, entity-relationship diagrams (ERD), normalization rules, and writing optimized relational SQL queries.",
      },
      {
        code: "COMP 2531",
        name: "Architecture & Operating Systems",
        description:
          "Understanding hardware abstraction layers, CPU instructions, memory mapping, process scheduling, and concurrency models within Unix/Linux systems.",
      },
      {
        code: "COMP 2541",
        name: "Systems Analysis",
        description:
          "The software development lifecycle (SDLC), capturing complex user requirements, system modeling, and agile solution blueprinting frameworks.",
      },
      {
        code: "COMP 3309",
        name: "IT and Society",
        description:
          "Examining professional code of ethics, digital privacy laws, societal impacts of AI automation, and security policies in modern tech ecosystems.",
      },
      {
        code: "COMP 3532",
        name: "System Administration",
        description:
          "Advanced deployment automation, shell scripting, access control lists, network file systems configuration, and monitoring remote cloud infrastructure.",
      },
      {
        code: "COMP 3533",
        name: "Network Infrastructure",
        description:
          "In-depth study of OSI model layers, TCP/IP protocols, subnetting matrices, packet routing mechanics, and secure network architecture configurations.",
      },
      {
        code: "COMP 3512",
        name: "Web II: Web Application Development",
        description:
          "Engineering secure end-to-end fullstack applications using server-side rendering, API routing design, state management, and continuous deployment pipelines.",
      },
      {
        code: "COMP 4522",
        name: "Database II: Advanced Database",
        description:
          "Exploring non-relational database models (NoSQL), distributed data clusters, indexing optimization metrics, and query execution performance analysis.",
      },
      {
        code: "COMP 3553",
        name: "Human-Computer Interaction",
        description:
          "Cognitive usability frameworks, interactive low/high-fidelity prototyping methods, behavioral user-testing methodologies, and interface heuristics.",
      },
      {
        code: "COMP 4543",
        name: "Project Management & QA",
        description:
          "Managing delivery cycles using SCRUM frameworks, resource scheduling algorithms, risk mitigation strategies, and test-driven development methodologies.",
      },
      {
        code: "COMP 5590",
        name: "Senior Project",
        description:
          "Capstone course requiring engineering an enterprise-grade software solution from initial scoping to validation for a real-world client sponsor.",
      },
      {
        code: "COMP 4635",
        name: "Distributed Systems",
        description:
          "Architecting cloud-native distributed nodes, microservice orchestration mechanisms, remote procedure calls (RPC), and fault-tolerant consensus systems.",
      },
    ],
  },
  {
    title: "Business",
    key: "business",
    courses: [
      {
        code: "MKTG 2150",
        name: "Introduction to Marketing",
        description:
          "Core principles of target audience segmentation, market position strategies, product positioning lifecycles, and distribution channel models.",
      },
      {
        code: "MGMT 2130",
        name: "Management Principles & Practices",
        description:
          "Foundational organizational leadership models, strategic operational planning techniques, business decision matrix structures, and team assembly paradigms.",
      },
      {
        code: "MGMT 3210",
        name: "Business Communication",
        description:
          "Formulating high-impact professional reports, executive briefings, stakeholder crisis strategies, and persuasive technical writing.",
      },
      {
        code: "HRES 2170",
        name: "Intro to Human Resources",
        description:
          "Strategic workforce talent acquisition systems, labor relations frameworks, compensation modeling structures, and performance assessment cycles.",
      },
      {
        code: "ACCT 2121",
        name: "Financial Accounting",
        description:
          "Analyzing corporate financial transactions, double-entry bookkeeping systems, and generating balance sheets and income statements.",
      },
      {
        code: "MKTG 3150",
        name: "The Science of Persuasion",
        description:
          "Psychological principles of consumer behavior analysis, tactical positioning methods, and neuromarketing decision-making variables.",
      },
      {
        code: "MKTG 3258",
        name: "Evidence-Based Marketing",
        description:
          "Utilizing modern web analytics metrics, data-driven marketing campaigns, and statistical modeling to measure conversion efficiency.",
      },
      {
        code: "MGMT 4402",
        name: "Corporate Social Responsibility",
        description:
          "Designing ethical environmental corporate governance structures, sustainable resource models, and stakeholder accountability matrices.",
      },
      {
        code: "ENTR 3305",
        name: "The Art of the Pitch",
        description:
          "Formulating compelling investor presentation models, venture capital capital-raise strategies, and validation of business concepts.",
      },
      {
        code: "MGMT 3230",
        name: "Business Law",
        description:
          "Understanding commercial tort liabilities, binding contract validation structures, intellectual property rights, and corporate statutory regulations.",
      },
      {
        code: "MGMT 3276",
        name: "Organizational Behaviour",
        description:
          "Analyzing internal workplace group dynamics, systemic motivation drivers, structural communication channels, and cultural evolution models.",
      },
      {
        code: "INBU 3301",
        name: "Global Business Environment",
        description:
          "Navigating cross-border currency exchange mechanics, international trade agreements, geopolitical risk variables, and global logistics channels.",
      },
    ],
  },
  {
    title: "General Education",
    key: "gen-ed",
    courses: [
      {
        code: "GNED 1401",
        name: "Writing for Academic Success",
        description:
          "Advanced critical textual analysis methods, academic research compilation strategies, argument validation techniques, and citation structuring.",
      },
      {
        code: "MATH 1505",
        name: "Puzzling Adventures in Math",
        description:
          "Discrete mathematical theory structures, logic puzzle matrices, combinatorial optimization algorithms, and introduction to graph networks.",
      },
      {
        code: "GNED 1304",
        name: "Communities and Societies",
        description:
          "Sociological analysis of modern community microstructures, urban development trends, and systemic institutional power distributions.",
      },
      {
        code: "ANTH 1103",
        name: "Intro to Cultural Anthropology",
        description:
          "Comparative ethnographic studies, kinship lineage systems, linguistic evolution models, and cross-cultural structural analysis.",
      },
      {
        code: "GNED 1101",
        name: "Science & Mathematical Literacy",
        description:
          "Application of empirical scientific method testing frameworks, statistical data verification models, and analytical error checking.",
      },
      {
        code: "GNED 1202",
        name: "Texts and Ideas",
        description:
          "Philosophical exploration of foundational historical texts, logic ethics paradigms, and human existential value frameworks.",
      },
      {
        code: "SPCH 2001",
        name: "Intro to Public Speaking",
        description:
          "Rhetorical architecture methods, dynamic vocal modulation styles, physical gesture metrics, and high-impact anxiety control strategies.",
      },
      {
        code: "ASTR 1303",
        name: "Stars, Galaxies, and Cosmology",
        description:
          "Astrophysical stellar evolution pathways, galactic spatial distributions, cosmic background radiation mechanics, and orbital tracking equations.",
      },
      {
        code: "ANTH 1101",
        name: "Primatology & Human Evolution",
        description:
          "Paleoanthropological fossil analysis frameworks, primate social structures, genetic divergence timelines, and evolutionary biology parameters.",
      },
      {
        code: "COMM 2500",
        name: "Intro to Communication Studies",
        description:
          "Mass media dissemination theories, semiotic analysis systems, digital message echo patterns, and societal information filters.",
      },
      {
        code: "UGST 1001",
        name: "Effective Learning",
        description:
          "Metacognitive cognitive retention methodologies, memory encoding optimization routines, and strategic time-management scheduling blocks.",
      },
      {
        code: "UGST 1002",
        name: "Change, Challenge and Choice",
        description:
          "Analyzing personal decision matrix frameworks, leadership behavior strategies during operational crises, and adaptivity models.",
      },
    ],
  },
];

export const Education: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  return (
    <section className="cyber-edu-container">
      <div className="edu-grid-overlay" />
      <div className="edu-ambient-glow" />

      <div className="edu-content-wrapper container">
        {/* Header Title */}
        <div className="edu-main-header">
          <h2 className="glitch-title">Education</h2>
        </div>

        {/* Hero Card */}
        {/* Hero Card */}
<div className="edu-hero-card">
  {/* Layered background visual effects */}
  <div className="card-ambient-flare" />
  <div className="card-corner-bracket top-left" />
  <div className="card-corner-bracket bottom-right" />

  {/* Large, High-Contrast Logo Dock */}
  <div className="mru-logo-pod">
    <img
      className="logo-img"
      src={educationData.logoUrl}
      alt={`${educationData.university} official emblem`}
    />
  </div>

  {/* Structured Metadata Stream */}
  <div className="mru-meta">
    <h2 className="university-title">{educationData.university}</h2>
    <p className="degree-text">{educationData.degree}</p>
    
    {/* Date Capsule cleanly aligned under everything */}
    <div className="date-wrapper">
      <span className="timeline-badge">
        <svg className="calendar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
        {educationData.timeline}
      </span>
    </div>
  </div>
</div>

        <div className="courses-section-divider">
        </div>

        {/* 3D Grid Workspace */}
        <div className="matrix-columns-grid">
          {categories.map((cat) => (
            <div
              key={cat.key}
              className={`matrix-column-panel cluster-theme-${cat.key}`}
            >
              <div className="column-header-node">
                <span className="node-pulse-indicator" />
                <h3 className=".glitch-title2">{cat.title}</h3>
              </div>

              {/* Viewport View frame */}
              <div className="viewport-3d">
                <div className="cube-cluster-matrix">
                  {cat.courses.map((course, idx) => {
                    const width = 3;

                    // 🚀 THE LEAPFROG: If the course index is at or past the forbidden slot (index 1),
                    // we push its virtual position up by +1. This leaves the back-middle slot empty
                    // and flows COMP 1502 seamlessly into the next available spot.
                    const virtualIdx = idx >= 1 ? idx + 1 : idx;

                    const x = virtualIdx % width;
                    const y = Math.floor(virtualIdx / width);

                    return (
                      <div
                        key={idx}
                        className="mini-cube-node"
                        style={
                          {
                            "--x": x,
                            "--y": y,
                            "--z": 0,
                          } as React.CSSProperties
                        }
                        onClick={() => setSelectedCourse(course)}
                      >
                        <div className="cube-face face-top">
                          <span>{course.code.split(" ")[1]}</span>
                        </div>
                        <div className="cube-face face-left">
                          <span>{course.code.split(" ")[0]}</span>
                        </div>
                        <div className="cube-face face-right"></div>

                        <div className="cube-tooltip">
                          <span className="tt-code">{course.code}</span>
                          <span className="tt-name">{course.name}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MODAL DIALOG OVERLAY */}
        {selectedCourse && (
          <div
            className="hud-modal-blur-screen"
            onClick={() => setSelectedCourse(null)}
          >
            <div
              className="hud-modal-dialog-panel"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close-trigger"
                onClick={() => setSelectedCourse(null)}
              >
                ×
              </button>

              <div className="modal-header-block">
                <span className="modal-tag-pill">Course Profile</span>
                <h3 className="modal-course-code">{selectedCourse.code}</h3>
                <h2 className="modal-course-title">{selectedCourse.name}</h2>
              </div>

              <div className="modal-body-content">
                <p>{selectedCourse.description}</p>
              </div>

              <div className="modal-footer-tray">
                <button
                  className="modal-action-btn"
                  onClick={() => setSelectedCourse(null)}
                >
                  Close Terminal
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Education;
