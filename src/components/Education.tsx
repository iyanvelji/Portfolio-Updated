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
          "An introduction to problem solving in the context of computer programming. The design of fundamental algorithmic solutions and the implementation of those solutions in a visual development environment.",
      },
      {
        code: "COMP 1502",
        name: "Programming II: Object-Oriented Programming",
        description:
          "The concepts and practices essential to programming within an object-oriented environment.",
      },
      {
        code: "COMP 2503",
        name: "Programming III: Data Structures",
        description:
          "Data structures important to computing such as basic linear structures, trees, heaps and hash tables. Additionally searching and sorting methods.",
      },
      {
        code: "COMP 2511",
        name: "Web I: Client Development",
        description:
          "The concepts and practice necessary for creating Internet content. A technical overview of the Internet environment and the structure of the World Wide Web.",
      },
      {
        code: "COMP 2521",
        name: "Database I: Modelling & Query",
        description:
          "Concepts necessary to design and implement databases. Conceptual and logical data modeling is covered in detail.",
      },
      {
        code: "COMP 2531",
        name: "Architecture & Operating Systems",
        description:
          "Fundamental hardware and system software topics. Hardware including CPU architecture and computer organization. The inner workings of operating systems, including file systems, process scheduling, concurrency, and memory management.",
      },
      {
        code: "COMP 2541",
        name: "Systems Analysis",
        description:
          "An introduction to systems analysis in the development of computer-based information systems. System development methodologies and key systems analysis tools and techniques, with a focus on object-oriented strategies.",
      },
      {
        code: "COMP 3309",
        name: "IT and Society",
        description:
          "The implications of information technology for society. Historical perspectives, social context of computing, legal and ethical problems, economic issues, and philosophical frameworks for analysis.",
      },
      {
        code: "COMP 3512",
        name: "Web II: Web Application Development",
        description:
          "The concepts and technologies needed to develop web-centric applications. Special emphasis is given to server-side programming, including the creation of multi-tier and multi-layer web applications and using Web Services to integrate web applications with other IT applications.",
      },
       {
        code: "COMP 3532",
        name: "System Administration",
        description:
          "The deployment and maintenance of modern computer systems, with particular emphasis on the administration of user accounts. An overview of basic administrative tasks associated with network operating systems such as Windows and Linux.",
      },
       {
        code: "COMP 3533",
        name: "Network Infrastructure",
        description:
          "The principles and practice of computer networking, focusing on the high-level protocol-oriented aspects of computer networks. Networking as it relates to database and file service applications is examined along with Internet structure, protocols and routing.",
      },
        {
        code: "COMP 3553",
        name: "Human-Computer Interaction",
        description:
          "The fundamental theory and practice in the design and evaluation of human-computer interfaces. The impacts of computer-based information systems on individuals and organizations are examined along with the rationale for a user-centric approach in all IT applications and systems.",
      },
      {
        code: "COMP 4522",
        name: "Database II: Advanced Database",
        description:
          "Advanced concepts and techniques associated with information management. Database implementation and administration issues. Emerging database trends such as data warehousing and data mining. An overview of distributed database topics, including distributed transactions.",
      },
      {
        code: "COMP 4543",
        name: "Project Management & QA",
        description:
          "Strategic approaches for successful management of system development or enhancement projects, from both technical and organizational perspectives. The steps involved in ensuring a high quality deployment of a new application.",
      },
       {
        code: "COMP 4635",
        name: "Distributed Systems",
        description:
          "The design and implementation of distributed systems. Topics such as grid computing, virtualization, cloud computing and principles such as multithreading, communication, synchronization, replication, fault tolerance and security are covered.",
      },
      {
        code: "COMP 5590",
        name: "Senior Project",
        description:
          "Students complete a project of their choosing in some area of computer information systems under the guidance of a supervisor. The project results are then presented as a paper and an oral presentation to the department.",
      },
    ],
  },
  {
    title: "Business",
    key: "business",
    courses: [
      {
        code: "ACCT 2121",
        name: "Financial Accounting",
        description:
          "An introduction to accounting principles and the accounting cycle. Topics include fundamental concepts such as accounting principles, assumptions, constraints, and the preparation and reporting of financial information to investors, managers, and others. Emphasis is on financial statement preparation and analysis.",
      },
      {
        code: "MGMT 2130",
        name: "Management Principles & Practices",
        description:
          "A comprehensive and practical study of the major functions that comprise management processes, and the constraints within which the manager must operate. The focus (through the use of case studies and experiential exercises) is on how to perform these functions in an ethical and socially responsible manner to maximize productivity within the constraints of the organizational environment.",
      },
      {
        code: "MKTG 2150",
        name: "Introduction to Marketing",
        description:
          "An introduction to the fundamental concepts and principles of marketing including an introduction to the 4 P’s or marketing mix - product, price, place and promotion. Evaluate customer wants and needs; analyze and interpret market research; link trends in the environment to marketing decisions; develop a customer or target market profile for a product (good, service or idea); and communicate a marketing strategy effectively in visual, verbal and written formats.",
      },
      {
        code: "HRES 2170",
        name: "Intro to Human Resources",
        description:
          "The various elements of Human Resources management. In addition to the functional areas within HR, students will focus on the legal, ethical, and strategic HR management issues. Additonally, contemporary HR issues.",
      },
       {
        code: "MKTG 3150",
        name: "The Science of Persuasion",
        description:
          "Marketing ultimately hinges on the ability to comprehend human motivation in order to understand the attitudes and behaviours of people and organizations. The theory and practice of persuasion and using these concepts to develop persuasive and compelling stories in visual, verbal and written formats.",
      },
      {
        code: "MGMT 3210",
        name: "Business Communication",
        description:
          "Writing business letters, memoranda, reports, and preparing and delivering oral presentations. Exploring both internal and external organizational communication strategies.",
      },
      {
        code: "MGMT 3230",
        name: "Business Law",
        description:
          "Legal problem solving with emphasis on legal issues involving business. Critical legal thinking in the following areas: agreements, liability, property rights, constitutional rights, and different ways to set-up businesses and non-profit activities.",
      },
      {
        code: "MKTG 3258",
        name: "Evidence-Based Marketing",
        description:
          "The goals of evidence-based marketing and essential methodologies used to gain insight. How to support effective marketing decisions through focused market research and analysis.",
      },
      {
        code: "MGMT 3276",
        name: "Organizational Behaviour",
        description:
          "An examination of the behaviour of people in organizations. Emphasis on the application of theory through group interaction and case studies. Topics include: individual behaviour, group behaviour, leadership, motivation, conflict resolution, and organizational culture.",
      },
      {
        code: "INBU 3301",
        name: "Global Business Environment",
        description:
          "An introduction to the field of international business: national economic, political and cultural differences; the issues surrounding globalization; the role of international institutions in facilitating international trade; international trade agreements; the international monetary system; current international business trends and developments. ",
      },
      {
        code: "ENTR 3305",
        name: "The Art of the Pitch",
        description:
          "Prepare for and present business ideas to prospective investors, partners, employees and customers. Skill development in visual, verbal and vocal communications to pitch business ideas and handle questions and answers about presentations.",
      },
      {
        code: "MGMT 4402",
        name: "Corporate Social Responsibility",
        description:
          "The interrelationship of corporate social responsibility, corporate integrity, organizational culture, corporate strategy and organizational management/leadership. Fair-trade and globalization and other converging and emerging ideas about the continuing evolution of CSR.",
      },
    ],
  },
  {
    title: "General Education",
    key: "gen-ed",
    courses: [
        {
        code: "UGST 1001",
        name: "Effective Learning",
        description:
          "Opportunities to increase knowledge of effective learning, enhance use of strategies, and reflect on learning. Activities and assignments in a collaborative classroom setting facilitate the application of concepts from research to the students’ own learning.",
      },
      {
        code: "UGST 1002",
        name: "Change, Challenge and Choice",
        description:
          "Current research and strategies related to effective coping in a rapidly-changing world. Topics such as stress, effective coping, relating and working well with others, and putting change in perspective are included.",
      },
      {
        code: "GNED 1101",
        name: "Science & Mathematical Literacy",
        description:
          "The intersections of mathematics, science and technology with daily life. Critical thinking and scientific reasoning skills are developed through the examination of issues drawn from the real world and current events.",
      },
        {
        code: "ANTH 1101",
        name: "Primatology & Human Evolution",
        description:
          "Human evolution, the role of biosocial phenomena in the evolution of physical structure and social behaviour, and the origins and development of culture.",
      },
        {
        code: "ANTH 1103",
        name: "Intro to Cultural Anthropology",
        description:
          "A cross-cultural exploration of the nature of human culture and society: its elements, variability and perpetuation. Symbolism and meaning, subsistence strategies, sex and gender, kinship, social organization, and political, economic, and religious institutions.",
      },
          {
        code: "GNED 1202",
        name: "Texts and Ideas",
        description:
          "How specific ideas shape attitudes, belief systems, and values through the perspectives of various disciplines. The nature, origins and relevance of ideas such as “leadership,” “mind,” “the self,” “modernity,” and “the good life”.",
      },
      {
        code: "ASTR 1303",
        name: "Stars, Galaxies, and Cosmology",
        description:
          "Basic concepts of astronomy, with emphasis on the universe outside the solar system. Topics include the properties of the Sun and other stars, the life and death of stars, galaxies, large-scale structure, and cosmology.",
      },
       {
        code: "GNED 1304",
        name: "Communities and Societies",
        description:
          "The meaning, power, and obligations of citizenship, and the skills necessary to create positive, effective, and sustainable change.",
      },
      {
        code: "GNED 1401",
        name: "Writing for Academic Success",
        description:
          "Review basics, analyze contemporary examples, develop research and referencing skills, and design writing for specific audiences. Writing for Academic Success provides an opportunity to develop new talents and gain confidence in expressing ideas.",
      },
      {
        code: "MATH 1505",
        name: "Puzzling Adventures in Math",
        description:
          "A problem-solving approach to discrete mathematics covering secret codes, public-key codes, error-correcting codes, applications of graph theory, and parallel algorithms.",
      },
      {
        code: "SPCH 2001",
        name: "Intro to Public Speaking",
        description:
          "An introduction to current theories of communication. An understanding of effective communication and its potential is promoted through participation in a variety of speaking situations. Opportunity is given for group discussion; audience analysis; development of good listening habits and how to research, organize and prepare various types of speeches.",
      },
      {
        code: "COMM 2500",
        name: "Intro to Communication Studies",
        description:
          "When we consume information or communicate with others we are sharing and assessing facts, ideas, opinions, and biases. In doing so we are developing a sense of who we are as individuals, and we’re also making decisions about how our world functions. This course is about the discipline of Communication Studies, and examination of a range of communication theories, which describe these dynamic social and personal processes.",
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
