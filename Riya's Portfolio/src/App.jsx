// import React from "react";
import NavBar from "./Components/Navbar";
import Home from "./Components/Home/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  // Navigate
} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/project" element={<Projects />} />
        <Route path="/about" element={<About />} />
      <Route path="/resume" element={<Resume />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
