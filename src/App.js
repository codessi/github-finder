import React from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/layout/Footer";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import { GithubProvider } from "./context/github/GithubContext";

function App() {
  // in src create folder context  [x]
  // crate folder inside call github  []
  // create a file  GithubContext.js  []
  // import creatContext  []
  // const GITHUB_URL = process.env.....  []
  // const GITHUB_TOKEN = .....  []
  // export GithubProvider  []
  // bringin states from the result  []
  // bring fetchUsers from  []
  // return <GithubContext.Provider> wrap {childeren} add value   []attribute object users, loading  []
  // export default GithubContext  []
  // go to app.js    []
  // import GithubProvider }  []
  // wrap whole jsx githubprovider  []
  //  checkout on react dev tool  []
  // goto context, add value fetchUsers  []
  // goto result delete all the unnessary  []
  // useContext  bringin pull the value  []
  // check browser  []
  // react dev tool   []

  return (
    <GithubProvider>
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
    </GithubProvider>
  );
}

export default App;
