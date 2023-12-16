// import React from "react";
import NavBar from "./Components/Navbar";
import Home from "./Components/Home/Home";
// import Particle2 from "../src/Components/Particle2";
import {
  BrowserRouter as Router,
  // Route,
  // Routes,
  // Navigate
} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
      </Router>
      <Home />
    </div>
  );
}

export default App;
