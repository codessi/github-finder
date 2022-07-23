import React from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/layout/Footer";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";


function App() {
  // spinner
  // create in lay out assets
  // create spinner.jsx part of layout
  // import spinner image
  //  class w-100 mt-20  make width 400px margin top 80px
  // img width={180} class text-center mx-auto src={spinner} alt="loading "
  // goto result
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen  bg-gray-700 text-primary-content footer-center">
        <Navbar />
        <main className="container mx-auto px-3 pb-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/" element={<NotFound />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
