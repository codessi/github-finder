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

function App() {
  // *** user profile and alert
  // ** alert context & reducer
  // constext alert folder (sybeling)  []
  // AlertContext.js  [v]
  // AlertReducers.js  [v]
  // gt aler context js  [v]
  //  import context reducer  [v]
  // import alertReduers from AL... reduer  [x]
  // const AlertContext with createContext  [x]
  // export AlerProvider children initialstate null  [x]
  // useReducer state dispatch alertReducer initalState  [x]
  // provider wraped with childre  [x]
  // add value alert: state  [x]
  // export default ...  [x]
  // gt app.js  wrap all with AlertProvider  [x]
  // checkon dev tool  [x]
  // gt context  [x]
  // const setAlert function pass msg and type {} dispatch pass object key type value "SET_ALERT"  payload value object with msg, type  [x]
  // setTimout (() => dispatch({type: "REMOVE_ALERT"}), 3000)  [x]
  // gt reducer  [x]
  // create contst alertReducer function  pass state and action switch pass action.type  case "SET_ALERT" : return action.payload  [x]
  // case "REMOVE_ALERT": return null  [x]
  // default : return state  [x]
  // export default alertReducer  [x]
  // gt context  [x]
  // jsx add value setAlert   [x]

  return (
    <GithubProvider>
      <AlertProvider>
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
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
