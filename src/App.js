import React from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/layout/Footer";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import { GithubProvider } from "./context/github/GithubContext";
import { AlertProvider } from "./context/alert/AlertContext";
import Alert from "./components/layout/Alert";
import User from "./pages/User";

function App() {
  // create RepoItem.jsx    [x]
  // rafce  [x]
  // gt list imoprt item in the map  [x]
  // go item  pass repo  [x]
  // import Proptypes &&  [x]
  // import fa eye info link star utensils  [x]
  // destructure repo  [x]
  // jsx  .mb-2 rounded-md card bg-gray-800 hover:bg-gray-900 wrap  [x]
  // .card-body wrap  [x]
  // h3.mb-2 text-xl font-semibold wrap  [x]
  // a  href html_url wrap?  [x]x
  // FaLink.inline.mr-1  [x]
  // check  [x]
  // sibling h3, p.mb-3 wrap  [x]
  // {description}  [x]
  // sibleing p, .mr-2.badge.badge-info.badge-lg wrap  [x]
  // FaEye.mr-s wrap  [x]
  // {watchers_count}  [x]
  // copy badge paste 3+  [x]
  // 2nd change info to succes stargazers_count FaStar  [x]
  // 3rd error open_issues Info  [x]
  // 4th warning  forks utential  [x]

  
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen ">
            <Navbar />
            <main className="container mx-auto px-3 pb-12">
              <Alert />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/" element={<NotFound />} />
                <Route path="/user/:login" element={<User /> } />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
