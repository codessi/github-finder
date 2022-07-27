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
  
  // gt gh context
  // add repos for initial state array default
// add value repos: state.repos
  // copy search users
  // paste under getsingleusers
  // comment  get user repos
  // change name to getUserRepos
  // pass login delet text
  // delete params
  // change enpoint to /users/${login}/repos }
  // payload data
  // type: "GET_REPOS"
  // add value getUserRepos,
  // gt reducer
  // add case
  // return {...state, repos: action.payload, loading: false}
  // create folder repos inside of component
  // create RepoList.jsx rafce
  // gt user jsx
  // import
  // bring in RepoList to Users.jsx above very last div
  // bringin  getUserRepos & repos through useContext
  // add on useEffect getUserRepos
  // checkout on devtoll to see the repos
  // passs prop as repos to <RepoList
  // gt RepoList.jsx
  // import Proptypes
  // RepoList.propTypes...
  // jsx
  // .rounded-lg shadow-lg card bg-base-100 wrap
  // insert card-body wrap
  // h2.text-3xl.my-4.font-bold.card-title
// content Top Repository
  // sibliing {repos.map}
  // h3 wrap {repo.name}
  // gt context
  // copy param q
  // sort: 'created', 
  // per_page: 10 



  
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
