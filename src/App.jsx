import Hero from "./components/hero";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import About from "./components/aboutme";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}


export default App