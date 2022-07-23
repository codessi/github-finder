import React from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/layout/Footer";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import { GithubProvider } from "./context/github/GithubContext";

function App() {
// reducer   tke two cureatate and action 
// create newfile GithubReducer.js inside github folder  []
  // goto file create arrow function called githubReducer pass state and action  []
  // switch(action.type) {}  []
  // default:  []
  // return state  []
  // export default githubReducer  []
  // goto context  []
  //useReducer instead of useState  []
  // import githubReducer  []
  // delete state  []
  // create const initialState assign object  key users value []
  // loading true  []
  //create const [state,] = useReducer(githubReducer, initialState)  []
  // delete setStates  []
  // insert dispatch() pass object add type: "GET_USERS"  []
  // goto reduser.js  []
  // inser case case "GET_USERS":  return {}  ...state  []
  // goto context.js  []
  // inside dipatch insert payload: data,  []
  // goto reducers.js  []
  // insert after...state,   users: action.payload, loading: false,  []
  // goto context.js  []
  // add value   users: state.users, loading: state.loading,   []

  return (
    <GithubProvider>
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
    </GithubProvider>
  );
}

export default App;
