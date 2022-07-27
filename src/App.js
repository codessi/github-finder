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
  
  // gt gh context   [x]
  // add repos for initial state array default   [x]
// add value repos: state.repos   [x]
  // copy search users   [x]
  // paste under getsingleusers   [x]
  // comment  get user repos   [x]
  // change name to getUserRepos   [x]
  // pass login delet text   [x]

  // change enpoint to /users/${login}/repos }   [x]
  // payload data   []
  // type: "GET_REPOS"   [x]
  // add value getUserRepos,   [x]
  // gt reducer   [x]
  // add case   [x]
  // return {...state, repos: action.payload, loading: false}   [x]
  // create folder repos inside of component   [x]
  // create RepoList.jsx rafce   [x]
  // gt user jsx   [x]
  // import   [x]
  // bring in RepoList to Users.jsx above very last div   [x]
  // bringin  getUserRepos & repos through useContext   [x]
  // add on useEffect getUserRepos   [x]
  // checkout on devtoll to see the repos   [x]
  // passs prop as repos to <RepoList   [x]
  // gt RepoList.jsx   [x]
  // import Proptypes   [x]
  // RepoList.propTypes...   [x]
  // jsx   [x]
  // .rounded-lg shadow-lg card bg-base-100 wrap   [x]
  // insert card-body wrap   []
  // h2.text-3xl.my-4.font-bold.card-title   [x]
// content Top Repository   [x]
  // sibliing {repos.map}   []
  // h3 wrap {repo.name}   [x]
  // gt context   [x]
  // copy param q   [x]
  // sort: 'created',    [x]
  // per_page: 10    [x]



  
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen ">
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
