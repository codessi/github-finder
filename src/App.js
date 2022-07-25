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
 
//gt search
  // import useState   []
  // inside function text state default  ""  []
  // add value to input text state  []
  // onChange handle change  []
  // make handleChange  []
  // set text to the target value  []
  // check on dev tool component  []
  // add onsubmit on form tag  []
  // create handleSubmit  []
  // prevent default  []
  // if text is blank alert('Plase enter someting) else comment todo search users  set text to reset ""  []
  // import useContext   GithubContext  []
  // bringing in users from context  []
  // above parent of button  []
  // jsx js if user length is bigger than 0 put button tage in ()  []
  // 

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
