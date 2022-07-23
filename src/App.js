import React from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/layout/Footer";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";


function App() {

  // ceate UserItem.jsx  [x]
  // impojrt result  [x]
  // reaplce login with UsrItem  [x]
  // key user.id user=user as prop  [x]
  // goto UserItem  [x]
  // pass prop and destucture user by login and avatar_url  [x]
  // for div class card shadow-md compact side bg-base-100  [x]
  // inside another div class .flex-row item-cemter space-x-4 card-body  [x]
  // inside div  [x]
  // inside div class avatar  [x]
  // isside div class rounded-full shadow w-14 h-14  [x]
  // img src=avatar_url from prop alt=Profile  [x]
  // 

  return (
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
  );
}

export default App;
