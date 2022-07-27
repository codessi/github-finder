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
  
// user.jsx  [x]
  // sibleing to col-span-2, .w-full.rounded-lg.shadow-md.bg-base-100.stats wrap  [x]
  // {location && ()}  [x]
  // insert .stat wrap  [x]
  // insert .stat-title.text-md  content Location  [x]
  // sibliing .text-lg.stat-value  wrap {location}  [x]
  // brower check  [x]
  // copy location && .. paste  [x]
  // change location to blog,  Website ,  [x]
  // replace {location}, with a tag, href of {`https://${blog}`}  [x]
  // add target & rel  [x]
  //wrap {blog} [x]
  // test  [x]
  // copy and twitter_username &&...  [x]
  // right above last div, insert .w-full.py-5.mb-6.rounded-lg.shadow-md.bg-base-100 stats wrap  [x]
  // insert .stat wrap  []
  // insert .stat-figure.text-secondary wrap  []
  // insert <FaUsers .text-3xl.md:text-5xl  [x]
  // sibling to stat-figure, .stat-title.pr-5 wrap content followers  [x]
  // sibling .stat-value.pr-5.text-3xl.md:text-4xl wrap {followers}  [x]
// copy and paste  [x]
  // following , FaUserFriends  []
  // copy and paste  []
  // Public Repos, FaCodepen  []
  // copy paste  []
  // Public Gist FaStore  []

  
  
  
  
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
