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
  // goto result and commen out fetch from effect  []
  // loading to false on context js  []
  // goto reducer  add case "SET_LOADING"  []
  // return {}  with ...state and loading true  []
  // go to context create function above jsx  []
  // setLoading dispatch object type key  "SET_LOADING"  []
  // call the set loading inside of fetchUsers  []
  // uncomment fetchUsers inside effect  []
  // delete useEffect in result  []

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
