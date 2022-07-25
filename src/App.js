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
  // inside function text state default  ""  [x]
  // add value to input text state  [x]
  // onChange handle change  [x]
  // make handleChange  [x]
  // set text to the target value  [x]
  // check on dev tool component  [x]
  // add onsubmit on form tag  [x]
  // create handleSubmit  [x]
  // prevent default  [x]
  // if text is blank alert('Plase enter someting) else comment todo search users  set text to reset ""  [x]
  // import useContext   GithubContext  [x]
  // bringing in users from context  [x]
  // above parent of button  [x]
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
