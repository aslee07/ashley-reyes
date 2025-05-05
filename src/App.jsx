import { Routes, Route } from "react-router-dom";
import Nav from "./components/navigation";
import Hero from "./components/hero";
import About from "./components/about";
import Contact from "./components/contact";
import Projects from "./components/projects";
import Experience from "./components/experience";
import WorkExperience from "./components/workExperience";
import './App.css'

function App() {
  return (
    <div className="w-screen min-h-screen flex flex-col">
      <Nav />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/workExperience" element={<WorkExperience />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
