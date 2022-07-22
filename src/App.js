import React from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  // change title on html  [x]
  // Github Finder  [x]
  // react-router-dom  react-icon  [x]
  // folder componenets  [x]
  // subfolder layout  [x]
  // file Navbar.jsx  [x]
  // import Navbar  [v]
  // import BrowserRouter as router, route, routes  [x]
  // wrap Router  insert Navbar  [x]
  //  .flex flex-co justify-between h-screen wrap navbar with div  [x]
  // insert main content after Navbar  [x]
  // go to Navbar  [x]
  // import FaGithub  [x]
  // improt Link  [x]
  // im port PropTypes  [x]
  // pass title  destuctured prop [x]
  //  defaultProps set  object with  title to "Github"  [x]
  // proTypes string  [x]
  // edit Jsx nav tag with class 'navbar mb-12 shadow-lg bg-neutral text-neutrol-content' wrap content Navbar  [v]
  // .container mx-auto wrap Navbar  [v]
  // .flex-none px-2 mx2 wrap <FaGithub> with .inline pr-2 text-3xl  [x]
  // insert after FA.. Link tag  to "/" wrap prop title  [x]
  // add .text-lg font-bold align-middle  [x]
  // outside of parent of link  [x]
  // inert .flex-1 px-2 mx2 wrap  [x]
  // .flex justify-end wrap  [x]
  // Link tag to='/' .btn btn-ghost <- actlike link with hover effect  [x]
  // btn-sm rounded-btn  []
  // copy make about   []
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
