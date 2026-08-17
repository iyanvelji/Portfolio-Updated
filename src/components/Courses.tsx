import React, { useState, useMemo, type ChangeEvent } from "react";
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
    title: "R Code Challenges: Data Science",
    issuer: "LinkedIn",
    date: "Jul 2026",
    description: "Short, bite-sized challenges you can use to practice R programming."
  },
  {
    id: 2,
    title: "Data Wrangling in R",
    issuer: "LinkedIn",
    date: "Jul 2026",
    description: "Learn about the principles of tidy data, discover how to create and manipulate data tibbles, and find out how to use the tibbles in importing, transforming, and cleaning your data. Uses R and the tidyverse packages to teach the concept of data wrangling."
  },
  {
    id: 3,
    title: "R for Data Science: Analysis and Visualization",
    issuer: "LinkedIn",
    date: "Jul 2026",
    description: "The lessons explain how to get started with R, including installing R, RStudio, and code packages that extend R’s power. You also see first-hand how to use R and RStudio for beginner-level data modeling, visualization, and statistical analysis."
  },
  {
    id: 4,
    title: "Complete Guide to R: Wrangling, Visualizing, and Modeling Data",
    issuer: "LinkedIn",
    date: "Jul 2026",
    description: "A thorough introduction to R, with detailed instruction for installing and navigating R and RStudio and hands-on examples, from exploratory graphics to neural networks."
  },
  {
    id: 5,
    title: "Introduction to Data Science",
    issuer: "LinkedIn",
    date: "Jul 2026",
    description: "What data science is and how it differs from other common data-related careers. Discover some of the most important tools used in the trade to develop your understanding of data libraries and data manipulation."
  },
  {
    id: 6,
    title: "Supply Chain Foundations: Managing the Process",
    issuer: "LinkedIn",
    date: "Jul 2026",
    description: "How to differentiate between the two leading supply chain models, the importance of process integration throughout the supply chain, the necessity for collaboration and partnership within the supply chain, and more."
  },
  {
    id: 7,
    title: "Power BI Essential Training",
    issuer: "LinkedIn",
    date: "Jul 2026",
    description: "Examining the Power BI service, explaining how to import data, create visualizations, arrange those visualizations into reports, and use Copilot to build datasets and reports."
  },
  {
    id: 8,
    title: "Job Skills: Supply Chain and Operations",
    issuer: "LinkedIn",
    date: "Jun 2026",
    description: "How to communicate effectively with suppliers, customers, and colleagues, as well as how to manage inventory and forecast demand."
  },
  {
    id: 9,
    title: "Careers in Supply Chain and Operations",
    issuer: "LinkedIn",
    date: "Jun 2026",
    description: "Understand the roles, skills, and networking opportunities available, so you can get a job and prepare for a future in supply chain."
  },
  {
    id: 10,
    title: "Tableau Essential Training",
    issuer: "LinkedIn",
    date: "Jun 2026",
    description: "Create informative and attractive Tableau dashboards that promote greater engagement from stakeholders."
  },
  {
    id: 11,
    title: "Sass Essential Training",
    issuer: "LinkedIn",
    date: "Jun 2026",
    description: "The best way to install Sass and work with its main features: variables, nesting, partials, and mixins. Plus, learn how to use SassScript to create complex functions from Sass lists and control statements."
  },
  {
    id: 12,
    title: "Managing Data with Microsoft 365",
    issuer: "LinkedIn",
    date: "Jun 2026",
    description: "How to use the Microsoft 365 suite to manage your data more effectively. Covers Forms, Power Automate, Excel, and PowerBI."
  },
  {
    id: 13,
    title: "Business Analysis Foundations: Business Process Modeling",
    issuer: "LinkedIn",
    date: "Jun 2026",
    description: "The most widely used business process modeling diagrams—context, functional flow, cross-functional flow, and flowchart—and the purpose of each one."
  },
  {
    id: 14,
    title: "Creating Positive Conversations with Challenging Customers",
    issuer: "LinkedIn",
    date: "Jun 2026",
    description: "Approaches that can help you reframe conversations and use your words and actions to put a positive slant on an otherwise negative situation."
  },
  {
    id: 15,
    title: "Customer Service: Handling Abusive Customers",
    issuer: "LinkedIn",
    date: "Jun 2026",
    description: "The skills you need to formulate an action plan and navigate difficult customer service interactions with poise and professionalism."
  },
  {
    id: 16,
    title: "Serving Customers Using Social Media",
    issuer: "LinkedIn",
    date: "Jun 2026",
    description: "Examine real-world tweets, Facebook posts, ratings, and reviews to see what happens when skillful customer service reps talk down angry customers and even trolls."
  },
  {
    id: 17,
    title: "Customer Service Foundations",
    issuer: "LinkedIn",
    date: "Jun 2026",
    description: "Learn how to build winning relationships, provide the right assistance at the right times, and effectively handle angry customers."
  },
  {
    id: 18,
    title: "Modern Project Management in Microsoft 365",
    issuer: "LinkedIn",
    date: "Jun 2026",
    description: "Learn about the Microsoft 365 tools and services—including Outlook, Planner, Teams, and more—that can help you manage your projects more efficiently."
  },
  {
    id: 19,
    title: "Business Analysis: Essential Tools and Techniques",
    issuer: "LinkedIn",
    date: "Jun 2026",
    description: "This technology-agnostic course employs different tools to show you how to set up and deliver key business analysis artifacts."
  },
  {
    id: 20,
    title: "Learning REST APIs",
    issuer: "LinkedIn",
    date: "Jun 2026",
    description: "Review how HTTP and REST APIs relate, explore the six constraints of REST, and learn about HTTP status messages. Learn how to get started with consuming REST APIs to incorporate them into data-driven applications."
  },
  {
    id: 21,
    title: "Git Essential Training",
    issuer: "LinkedIn",
    date: "Jun 2026",
    description: "Find out why people use Git. Learn how Git works, locally or through a provider, and how you can get it installed, configured, and running the way you need it to work. Follow the full process of pushing your code with Git, then explore ways to make changes to files."
  },
  {
    id: 22,
    title: "HTML Essential Training",
    issuer: "LinkedIn",
    date: "Jun 2026",
    description: "The fundamental concepts and skills you need to know to start writing HTML, including terminology, syntax, how to create a document structure, and more."
  },
  {
    id: 23,
    title: "Generative AI for Business Analysts",
    issuer: "LinkedIn",
    date: "Jun 2026",
    description: "Learn about generative AI's role in business analysis and how it can enhance your work—and navigate your own change curve to adoption."
  },
  {
    id: 24,
    title: "The Role of Business Analysis in Data Analytics",
    issuer: "LinkedIn",
    date: "Jun 2026",
    description: "Explore the five core steps of analytics: formulating research questions, sourcing data, analyzing and interpreting data, and integrating insights into decision-making. Prepare for real-world scenarios as you dive into strategic applications, best practices, and common challenges in the field."
  },
  {
    id: 25,
    title: "TypeScript Essential Training",
    issuer: "LinkedIn",
    date: "Jun 2026",
    description: "How to leverage the full power of the TypeScript language in your JavaScript applications."
  },
  {
    id: 26,
    title: "SQL Essential Training",
    issuer: "LinkedIn",
    date: "Jun 2026",
    description: "The basic structure of databases—what they are, how they work, and how to successfully navigate them; how to use SQL to retrieve and understand data no matter the scale of a database; and how to master the most important SQL query syntax, along with how and when to use it best."
  },
  {
    id: 27,
    title: "Customer Service: Problem-Solving and Troubleshooting",
    issuer: "LinkedIn",
    date: "Jun 2026",
    description: "Learn critical problem-solving and troubleshooting processes for common sense customer service in a wide variety of applications."
  },
  {
    id: 28,
    title: "Agentic AI for Business Analysis",
    issuer: "LinkedIn",
    date: "Jun 2026",
    description: "Discover how AI can revolutionize enterprise systems, customer experiences, and processes, while understanding the risks and requirements for responsible implementation. Dive into robotic process automation (RPA), AI automation, the evolution of agentic AI, and the importance of human oversight and business analysis."
  },
  {
    id: 29,
    title: "NoSQL Essential Training",
    issuer: "LinkedIn",
    date: "Jun 2026",
    description: "Just exactly what NoSQL is, the pros and cons, and tradeoffs you’ll make when using NoSQL."
  },
  {
    id: 30,
    title: "Introduction to Business Analysis",
    issuer: "LinkedIn",
    date: "Jun 2026",
    description: "Explore how business analysis spans various contexts, including, software, AI, technical integrations, process improvements, and vendor evaluations. Understand the importance of balancing urgency with structured analysis to achieve impactful results."
  },
  {
    id: 31,
    title: "Learning ECMAScript 6+ (ES6+)",
    issuer: "LinkedIn",
    date: "Jun 2026",
    description: "The new keywords and operators that can help simplify code, as well as new ways of creating functions and objects. How to write and search through template strings, create map objects to store key/value pairs, move values from one array to another—or one object to another—with the spread operator, build reusable classes, and use arrow functions and generators. Plus, learn how to handle asynchronous data and tasks with promises, fetch, and the async/await syntax."
  },
  {
    id: 32,
    title: "Excel Statistics Essential Training: 2",
    issuer: "LinkedIn",
    date: "Jun 2026",
    description: "Find out how to perform hypothesis tests, ANOVA, regression, and correlation testing and run simulations in Microsoft Excel."
  },
  {
    id: 33,
    title: "Excel Statistics Essential Training",
    issuer: "LinkedIn",
    date: "May 2026",
    description: "Utilize Microsoft Excel to learn the fundamentals of descriptive and inferential statistics."
  },
  {
    id: 34,
    title: "Node.js Essential Training",
    issuer: "LinkedIn",
    date: "May 2026",
    description: "Learn the essentials of Node.js and start creating your own JavaScript applications."
  },
  {
    id: 35,
    title: "JavaScript Essential Training",
    issuer: "LinkedIn",
    date: "May 2026",
    description: "Build your understanding of JavaScript piece by piece, from core principles like variables, data types, conditionals, and functions through advanced topics including loops, and DOM scripting."
  },
  {
    id: 36,
    title: "Statistics Foundations 4: Advanced Topics",
    issuer: "LinkedIn",
    date: "May 2026",
    description: "The practical study and application of experimental design, analysis of variance (ANOVA), two-population comparisons, and regression analysis."
  },
  {
    id: 37,
    title: "Search Techniques for Web Developers",
    issuer: "LinkedIn",
    date: "May 2026",
    description: "How to master searches with search techniques for Google, other search engines, internal site searches, and GitHub."
  },
  {
    id: 38,
    title: "React Essential Training",
    issuer: "LinkedIn",
    date: "May 2026",
    description: "Get familiar with libraries like Next and Vite, and discover the differences between React Server Components and Client Components. Find out how to use the latest tools, techniques, and patterns that will help futureproof applications and make them more scalable and performant."
  },
  {
    id: 39,
    title: "DevOps Foundations",
    issuer: "LinkedIn",
    date: "May 2026",
    description: "An overview of the DevOps movement, focusing on the core value of CAMS (culture, automation, measurement, and sharing). The various methodologies and tools an organization can adopt to transition into DevOps, looking at both agile and lean project management principles and how old-school principles like ITIL, ITSM, and SDLC fit within DevOps."
  },
  {
    id: 40,
    title: "Statistics Foundations 3: Using Data Sets",
    issuer: "LinkedIn",
    date: "May 2026",
    description: "Practical, example-based lessons on the intermediate skills associated with statistics: Samples and sampling, standard errors, confidence intervals, and hypothesis testing."
  },
  {
    id: 41,
    title: "Statistics Foundations 2: Probability",
    issuer: "LinkedIn",
    date: "May 2026",
    description: "Covers permutations, combinations, and percentiles, and goes into how to describe and calculate them."
  },
  {
    id: 42,
    title: "Statistics Foundations 1: The Basics",
    issuer: "LinkedIn",
    date: "May 2026",
    description: "Master the terms, formulas, and techniques needed to perform the most common types of statistics."
  },
  {
    id: 43,
    title: "Everyday AI Concepts",
    issuer: "LinkedIn",
    date: "May 2026",
    description: "Understand key AI concepts and discover how artificial intelligence can benefit your team, organization, products, and services."
  },
  {
    id: 44,
    title: "Ethics in the Age of Generative AI",
    issuer: "LinkedIn",
    date: "May 2026",
    description: "Better understand and act on the emerging ethical risks and considerations of generative artificial intelligence. Get a solid introduction to the ethical concerns around generative AI, then learn how to use a framework of ethical analysis to address these concerns."
  },
  {
    id: 45,
    title: "Learning Microsoft 365 Copilot for Work",
    issuer: "LinkedIn",
    date: "May 2026",
    description: "Discover how—through Copilot—AI can help you create documents, summarize messages, and analyze data from natural language requests in Word, Excel, Outlook, Teams, and PowerPoint."
  },
  {
    id: 46,
    title: "What Is Generative AI?",
    issuer: "LinkedIn",
    date: "May 2026",
    description: "The basics of generative AI, with topics including what it is, how it works, how to create your own content, different types of models, future predictions, and ethical implications."
  },
  {
    id: 47,
    title: "Your Top AI Questions Answered: AI Literacy for Everyone",
    issuer: "LinkedIn",
    date: "May 2026",
    description: "Discover the differences between traditional AI and generative AI, before diving into constructing effective prompts to enhance the usefulness of AI responses in various contexts. Learn about key technologies including transformer architecture, large language models (LLMs), and real-world applications like chatbots, translators, and agents."
  },
  {
    id: 48,
    title: "Collaborating with Microsoft 365",
    issuer: "LinkedIn",
    date: "Jun 2025",
    description: "This course teaches you how to use both Teams and SharePoint to collaborate with others more effectively."
  },
  {
    id: 49,
    title: "Note-Taking for Business Professionals",
    issuer: "LinkedIn",
    date: "Jun 2025",
    description: "Effective note-taking is a core skill that professionals at all levels can improve upon—and this course shows you how. It explains how to decide when to take linear vs. visual notes, how to effectively listen, how to document action plans, and how to effectively write meeting minutes."
  },
  {
    id: 50,
    title: "Time Management Fundamentals",
    issuer: "LinkedIn",
    date: "Jun 2025",
    description: "How to develop habits to be more organized and reduce the clutter in your workspace; how to stay mentally on task and eliminate the to-dos you have floating in your head; and how to develop a time budget to get the most done during your workday and focus on your most valuable activities. If you’ve been looking for strategies to help you manage your time more efficiently, this course may be well worth your time."
  },
  {
    id: 51,
    title: "Tips for Writing Business Emails",
    issuer: "LinkedIn",
    date: "Jun 2025",
    description: "Tips to strengthen your email skills and shape a positive online reputation."
  },
  {
    id: 52,
    title: "Communication Foundations",
    issuer: "LinkedIn",
    date: "Jun 2025",
    description: "The four building blocks of communication—people, message, context, and listening—and show how they apply in different circumstances."
  },
  {
    id: 53,
    title: "Administrative Professional Tips",
    issuer: "LinkedIn",
    date: "May 2025",
    description: "Key skills such as gatekeeping, project management, and navigating office politics. Tools to help you be more productive and efficient—including a detailed look at ways you can leverage new AI tools in your work—and shares resources to find answers specific to your industry."
  },
  {
    id: 54,
    title: "Administrative Professional Foundations",
    issuer: "LinkedIn",
    date: "May 2025",
    description: "New techniques for effective communication, time management, and leveraging AI, while exploring career growth opportunities and professional development. Learn to manage complex schedules, plan impactful events, and support multiple executives."
  },
  {
    id: 55,
    title: "Microsoft Security Copilot (2024)",
    issuer: "LinkedIn",
    date: "May 2025",
    description: "Harnessing real-time automated AI logic setups to parse system network security alerts, analyze malware signatures, and compile fast incident remediation responses."
  },
  {
    id: 56,
    title: "Cybersecurity Foundations",
    issuer: "LinkedIn",
    date: "May 2025",
    description: "Details pertinent cyber threats and how they operate, including how cyber criminals hide their attacks, how advanced persistent threats work, and even how to determine what's real and what's merely cyber fear, uncertainty, and doubt (FUD)."
  },
  {
    id: 57,
    title: "Cybersecurity Awareness: Cybersecurity Terminology",
    issuer: "LinkedIn",
    date: "May 2025",
    description: "Discover core concepts in the cybersecurity field by exploring the relationship between people, processes, and technology, noting the variety of terminology in the constantly shifting security landscape, and building your skills along the way."
  },
  {
    id: 58,
    title: "The Cybersecurity Threat Landscape",
    issuer: "LinkedIn",
    date: "May 2025",
    description: "Some of the most common cybersecurity threats, including phishing and ransomware, deepfakes, unmanaged Internet of Things (IoT) devices, business email compromise, and more."
  },
  {
    id: 59,
    title: "Learning Data Analytics Part 2: Extending and Applying Core Knowledge",
    issuer: "LinkedIn",
    date: "May 2025",
    description: "How to create data sets with queries, joins, and appends, then goes into building aggregate data with total queries. How to use pivots to build basic dashboards and visualizations, and how to use Power Query for data transformations."
  },
  {
    id: 60,
    title: "Learning Data Analytics: 1 Foundations",
    issuer: "LinkedIn",
    date: "May 2025",
    description: "How to work with data, including how to import data, work with flat files such as CSVs, and create datasets for others. Introduces you to SQL queries, PowerBI, and more"
  },
  {
    id: 61,
    title: "Introduction to Career Skills in Data Analytics",
    issuer: "LinkedIn",
    date: "May 2025",
    description: "Explore the power of data and data analysis to develop a better understanding of the role. Learn about business intelligence, data-driven decision-making, data collection methods, discovery, and interpretation, as well as how to structure, assess, and transform data using core functions in Excel and Power BI."
  },
  {
    id: 62,
    title: "What Is Business Analysis?",
    issuer: "LinkedIn",
    date: "Apr 2025",
    description: "Establishes a comprehensive viewpoint of the breadth of the business analysis profession, then helps you to recognize a core set of competencies required to effectively perform business analysis."
  }
];

// Helper to render inline tech SVGs
const IssuerLogo: React.FC<{ issuer: string }> = ({ issuer }) => {
  const norm = issuer.toLowerCase();
  if (norm.includes("linkedin")) {
    return (
      <img
        src="images/linkedin.svg"
        alt="LinkedIn logo"
        className="issuer-svg ink-linkedin"
      />
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
  return (
    <svg className="issuer-svg ink-generic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  );
};

const Courses: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeCourse, setActiveCourse] = useState<Course | null>(null);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filteredCourses = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return COURSES_DATA;

    return COURSES_DATA.filter(
      (course) =>
        course.title.toLowerCase().includes(query) ||
        course.issuer.toLowerCase().includes(query) ||
        course.description.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return (
    <section className="courses-viewport-wrapper">
      <div className="courses-layout-container">
        
        <header className="courses-section-header">
          <h2 className="courses-main-title">Courses</h2>
          
          {/* Added Search Bar Control */}
          <div className="courses-search-container">
            <input
              type="text"
              className="courses-search-input"
              placeholder="Search Courses (R, PowerBI, Business Analysis ..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <div className="search-icon">
              <img src="images/search.png" alt="Search icon" />
            </div>
          </div>
        </header>

        {/* Small Responsive Grid Configuration */}
        <div className="courses-dense-grid">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
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
            ))
          ) : (
            <div className="courses-no-results">
              <p>No courses found matching "{searchQuery}".</p>
            </div>
          )}
        </div>
      </div>

      {/* Cybernetic Description Drawer Overlay Box */}
      {activeCourse && (
        <div className="console-overlay-backdrop" onClick={() => setActiveCourse(null)}>
          <div className="console-description-box" onClick={(e) => e.stopPropagation()}>
            <div className="console-scanner-line" />
            
            <header className="console-box-header">
              <button className="console-close-button" onClick={() => setActiveCourse(null)}>
                &times; CLOSE
              </button>
            </header>

            <div className="console-box-body">
              <div className="console-meta-row">
                <div className="meta-block">
                  <span className="meta-label">ISSUING AUTHORITY</span>
                  <span className="meta-val highlight">{activeCourse.issuer}</span>
                </div>
                <div className="meta-block">
                  <span className="meta-label">DATE</span>
                  <span className="meta-val">{activeCourse.date}</span>
                </div>
              </div>

              <div className="console-divider-line" />

              <h4 className="console-course-title">{activeCourse.title}</h4>
              
              <div className="console-description-wrapper">
                <span className="terminal-prompt">DESCRIPTION:</span>
                <p className="console-description-text">{activeCourse.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Courses;