import About from "../components/About";
import Projects from "../components/Projects"; 
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Education from "../components/Education";

export const tabs = [
    { label: "About", value: "about", component: <About /> },
    { label: "Projects", value: "projects", component: <Projects /> },
    { label: "Skills", value: "skills", component: <Skills /> },
    { label: "Education", value: "education", component: <Education /> },
    { label: "Experience", value: "experience", component: <Experience /> },
    { label: "Contact", value: "contact", component: <Contact /> },
];
