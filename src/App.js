import React from "react";
// import './Styles/App.css';
import Homepage from "./Components/homepage";
import NavBar from "./Components/NavBar";
import AboutMe from "./Components/AboutMe";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path="/AboutMe" element={<AboutMe />} />
        {/* <Route path="/GitHub" element={<GitHub />} />
        <Route path="/Contact" element={<Contact />} /> */}

      </Routes>
    </Router>
  );
}

export default App;