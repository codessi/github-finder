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
    // open up  github docs resource rest api  [x]
 // goto post man  [x]

  // / users on postman  [x]
  // users/myanme  [x]
  // search/users?q=johan  [x]
  // header-limit  10 per min   [x]
  // to change create token
  // go to  setting on my account github []
  // dev setting -> personal access token  []
  // click user generalte token  []
  // postman => authorization => bearer token  []
  // react -> .env create -> REACT_APP_GITHUB_TOKE  []
  // REACT_APP_GITHUB_URL= "https://api.github.com"  []
  // goto home.js  []
  // {process.env.REACT_APP.....}  []

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
