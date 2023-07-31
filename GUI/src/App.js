import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MoreProjects from "./components/newPage/MoreProjects";

function App() {
  return (
      <Router>
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Project />
        <Contact />
        <Routes>
        <Route path="/MoreProject" element={<MoreProjects />} />
        </Routes>
        <Footer />
      </Router>
  );
}

export default App;
