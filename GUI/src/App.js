import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MoreProjects from "./components/MoreProject";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<><Navbar/><Home/><About/><Skills/><Project/><Contact/><Footer/></>}/>
          <Route path="/moreProjects" element={<MoreProjects/>} />
        </Routes>
      </Router>
  );
}

export default App;
