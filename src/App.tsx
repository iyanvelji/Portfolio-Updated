import "./scss/App.scss";
import Carousel from "./components/Carousel";
import Heading from "./components/Heading";
import Nav from "./components/Nav";
import Education from "./components/Education";
import { Skills } from "./components/Skills";
import Publications from "./components/Publications";
import Certifications from "./components/Certifications";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Experience from "./components/Experience";
import Courses from "./components/Courses";
import Projects from "./components/Projects";
import Awards from "./components/Awards";

function App() {
  const carouselSlides = [
    {
      title: "Education",
      image: "../images/education.png",
      path: "/education",
    },
    {
      title: "Experience",
      image: "../images/experience.png",
      path: "/experience",
    },
    {
      title: "Skills",
      image: "../images/skills.png",
      path: "/skills",
    },
    {
      title: "Certifications",
      image: "../images/certifications.png",
      path: "/certifications",
    },
    {
      title: "Publications",
      image: "../images/publications.png",
      path: "/publications",
    },
  ];

  return (
    <>
      <Heading />
      <Router>
        <Nav />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Carousel items={carouselSlides} />
                <Skills isHomePage={true} />
              </>
            }
          />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/publications" element={<Publications />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
