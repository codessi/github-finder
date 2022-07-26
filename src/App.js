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
  // check on browser to see pic faded. [x]
  // sibling to figure,   .card-body.justify-end wrap [x]
  // insert h2.card-title.mb-0 wrap [x]
  // {name} [x]
  // check browser  [x]
  // gt css [x]
  // .custom-card-image .card.image-full:before{ border-radius: 0.5rem; opacity: 0.45; }[x]
  // sibling to .cutom-card-image, add .col-span-2 wrap  [x]
  // insert mb-6 wrap  [x]
  // insert h1.text-3xl.card-title wrap  [x]
  // insert {name}  [x]
  // sibling to {name}, ml-2.mr-1.badge.badge-success wrap  [x]
  // {type}  [x]
  // sibling to badge  []
  // {hireable && ( )}  []
  // mx-1 badge badge-info  []
  // content Hireable  []
  // sible to h1, p {bio}  []
  // sible .mt-4.card-actions wrap  []
  // insert a href={html_url} target='_blank" rel="noreferrer"  [x]
  // check browser  [x]
// add class on a tag, btn btn-outline [x]
  // 
  

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
