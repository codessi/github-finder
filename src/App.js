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

function App() {
  // *** user profile and alert
  // ** alert component
  // gt search   [x]
  // import AlertContext  [x]
  // pull setAlert from AlertConterxt  [x]
  // reaplce alert on handle submit with setAlert( with msg and error "please.." "error")  [x]
  // checkout dev tool  [x]
  // click go empty and check on  alert Provider  [x]
  // create Alert.jsz in layout  [x]
  // gt app.js  [x]
  // imporrt Alert  [x]
  // insert in above Routes [x]
  // gt Alert.js  [x]
  // rface import usecontext  [x]
  // import AlertContext  [x]
  // bring in alert from AlertContext using hook  []x
  // jsx  [x]
  // if alert is not null && (p.flex.items-start.md-4.space-x-2)  []
// {alert.type === 'error' && ( inser SVG)}    []
  // p.flex-1.text-base.font-semibold.leading-7.text-white

  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen  bg-gray-700 text-primary-content ">
            <Navbar />
            <main className="container mx-auto px-3 pb-12">
              <Alert />
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
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
