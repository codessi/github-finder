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

// gt user.jsx [x]
  //import icon from fa  facodepen store userfriends users [x]
    //  Link spinner [x]
  // bring loading from context [x]
  // add conditional if loading under effect [x]
  // return spinner [x]
  // check spinner flash on browser [x]
  // above loading  destructure user object { name, type.  14 items } [x]
  // jsx  fragment <> [x]
  // .w-full.mx-auto.lg:w-10/12 warp [x]
  // insert .mb-4 wrap []
  // insert Link to='/' class='btn btn-ghost' [x]
  // content Back To Search [x]
  // outsidd of .mb-4 div -sibling [x]
  // .grid.grid-cols-1.xl:grid-col-3.lg:grid-cols-3.md:grid-cols-3.mb-8.md:gap-8 wrap [x]
  // insert .custom-card-image.mb-6.md:mb-0 wrap [x]
  // insert .rounded-lg.shadow-xl.card.image-full wrap [x]
  // insert figure wrap insert img src avatar_url [x]
  // check on browser to see pic faded. []
  // sibling to figure,   .card-body.justify-end wrap []
  // insert h2.card-title.mb-0 wrap []
  // {name} []
  // check browser  []
  

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
