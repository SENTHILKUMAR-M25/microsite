// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./Components/Navbar";
// import Footer from "./Components/Footer";

// import Home from "./Components/Home";
// import About from "./Components/About";
// import Projects from "./Components/Projects";
// // import AddProject from "./Components/AddProject";
// import Contact from "./Components/Contect";
// import PortfolioForm from "./Components/PortfolioFrom";
// import MicroSite from "./Components/microsite/MicroSite";

// function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/projects" element={<Projects />} />
//         {/* <Route path="/addproject" element={<AddProject />} /> */}
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/setup" element={<PortfolioForm />} />
//         <Route path="/microsite" element={<MicroSite />} />

//       </Routes>

//       <Footer />
//     </BrowserRouter>
//   );
// }

// export default App;


import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contect";
import PortfolioForm from "./Components/PortfolioFrom";
import MicroSite from "./Components/microsite/MicroSite";
import AddProject from "./Components/Addproject";

function AppContent() {
  const location = useLocation();

  // hide navbar & footer on microsite
  const hideLayout = location.pathname === "/microsite";

  return (
    <>
      {!hideLayout && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/setup" element={<PortfolioForm />} />
        <Route path="/microsite" element={<MicroSite />} />
        <Route path="/add-project" element={<AddProject />} />
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
