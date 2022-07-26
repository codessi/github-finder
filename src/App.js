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
// gt userItem.js [x]
  // change link users to user   [x]
  // click on visit profile on browser   [x]
  //gt appjs   [x]
  // insert  route componet user   [x]
  // path user/:login   [x]
  // check on browser   [x]
  // gt Githubcontext   [x]
  // add value user: state.user   [x]
  // copy search user   [x]
  // change to single user   [x]
  // pass login   [x]
  // delete params   [x]
  // change enpoint /users/${login}   [x]
  // add after response,  if response.status =-- 404 then window.location = '/notfound'   [x]
  // else {}  isert rest in   [x]
  // reaplce items to data   [x]
  // dispatch change users to user and item to data   [x]
  // gt github reducer   [x]
  // add case "GET_USER"   [x]
  // return {...state,user: action.payload, loading: false}   [x]
  // gt context   []
  // add value of getUser   [x]
  // gt user.jsx   [x]
  // effect context ghcontext  import   [x]
  // getuser, user from context   [x]
  // useEffect take in getUser() pass params.login   [x]
  // ** router provides match  
  // import useParam  from react-router-dom   [x]
  // create params = useParams()   [x]
  // check devtool gitub provider   [x]
  // check state   [x]
  // insert user.login on jsx    [x]


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
