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
 // gt context  []
  // change fetchUsers to seachUsers   []
  // create param assing to new URLSearachParams() pass object with q: text  []
  // change fetch point /search/users?${params}  []

  // change data to destucted object items  []

  // dispatch payload items instead of data  []

  // change the provider value fetchUsers to searchUsers  []
  // gt search jsx pass in context searachUsers  []
  // inside of handleSubmit add call serachUsers pass text  []
  // should show   []


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
