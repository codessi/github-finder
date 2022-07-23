import React from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/layout/Footer";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Home
  from "./pages/Home";

function App() {
   // create folder users im component  []
  //  UserResults.jsx  [x]
  // goto home.js  [x]
  // import UserResult  [x]
  // insert in jsx - in fragment  [x]
// go to UserResult
  //  useEffect  []
  // make fetchUsers asyn  []
  // hint  /users  []
  // google get with Autorization  []
  // 
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
