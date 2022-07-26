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
// gt userItem.js []
  // change link users to user   []
  // click on visit profile on browser   []
  //gt appjs   []
  // insert  route componet user   []
  // path user/:login   []
  // check on browser   []
  // gt Githubcontext   []
  // add value user: state.user   []
  // copy search user   []
  // change to single user   []
  // pass login   []
  // setloading to true ??   []
  // delete params   []
  // change enpoint /users/${login}   []
  // add after response   []
  // if response.status =-- 404 then window.location = '/notfound'   []
  // else {}  isert rest in   []
  // reaplce items to data   []
  // dispatch change users to user and item to data   []
  // gt github reducer   []
  // add case "GET_USER"   []
  // return {...state,user: action.payload, loading: false}   []
  // gt context   []
  // add value of getUser   []
  // gt user.jsx   []
  // effect context ghcontext  import   []
  // getuser, user from context   []
  // useEffect take in getUser() pass params.login   []
  // ** router provides match  
  // import useParam  from react-router-dom   []
  // create params = useParams()   []
  // check devtool gitub provider   []
  // check state   []
  // insert user.login on jsx    []


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
