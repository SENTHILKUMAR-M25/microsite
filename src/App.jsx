import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import AddProject from "./Components/AddProject";
import Contact from "./Components/Contect";
import PortfolioForm from "./Components/PortfolioFrom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/addproject" element={<AddProject />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/setup" element={<PortfolioForm />} />

      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
