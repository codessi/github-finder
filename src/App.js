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

// gt user.jsx
  //import icon from fa  facodepen store userfriends users
    //  Link spinner
  // bring loding from context
  // add loading under effect
  // return spinner
  // check spinner flash on browser
  // above loading  destructure user object { name, type.  14 items }
  // jsx  fragment <>
  // .w-full.mx-auto.lg:w-10/12 warp
  // insert .mb-4 wrap
  // insert Link to='/' class='btn btn-ghost'
  // content Back To Search
  // outsidd of .mb-4 div -sibling
  // .grid.grid-cols-1.xl:grid-col-3.lg:grid-cols-3.md:grid-cols-3.mb-8.md:gap-8 wrap
  // insert .custom-card-image.mb-6.md:mb-0 wrap
  // insert .rounded-lg.shadow-xl.card.image-full wrap
  // insert figure wrap insert img src avatar_url
  // check on browser to see pic faded.
  // sibling to figure,   .card-body.justify-end wrap
  // insert h2.card-title.mb-0 wrap
  // {name}
  // check browser 
  

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
