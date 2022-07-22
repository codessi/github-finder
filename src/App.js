import React from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
 
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
        <main>content</main>
      </div>
    </Router>
  );
}

export default App;
