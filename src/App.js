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
  //  ** search users **
 // gt context  [x]
  // change fetchUsers to seachUsers   [x]
  // create param assing to new URLSearachParams() pass object with q: text  [x]
  // change fetch point /search/users?${params}  [x]
  // change data to destucted object items  [x]
  // dispatch payload items instead of data  [x]

  // change the provider value fetchUsers to searchUsers  [x]
  // gt search jsx pass in context searachUsers  [x]
  // inside of handleSubmit add call serachUsers pass text  [xx]
  // should show   [x]


  return (
    <GithubProvider>
      <Router>
        <div className="flex flex-col justify-between h-screen  bg-gray-700 text-primary-content ">
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
