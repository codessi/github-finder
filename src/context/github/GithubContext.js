import React, { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext({});

export const GithubProvider = ({ children }) => {

  const initialState = {
    users: [],
    loading: false
  }

  const [state, dispatch] = useReducer(githubReducer, initialState)


  const searchUsers = async (text) => {
    const params = new URLSearchParams({
      q: text
    })
    setLoading()

    const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/search/users?${params}`, {
      headers: { Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}` },
    });
    const {items} = await response.json();
    
    dispatch({
      type: "GET_USERS",
      payload: items
    })
  };

  const clearUsers = () => {
    dispatch({
      type: "CLEAR_USERS"
    })
  }

  const setLoading = () => {
    dispatch({
      type: "SET_LOADING"
    })
  }

  const getUser = async (login) => {

    setLoading()

    const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users/${login}`, {
      headers: { Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}` },
    });
    if (response.status === 404) {
      window.location('/notfound')
    } else {

    const data = await response.json();
    
    dispatch({
      type: "GET_USER",
      payload: data
    })
    }

  };





  return (
    <GithubContext.Provider value={{
      users: state.users,
      loading: state.loading,
      searchUsers,
      clearUsers,
      user: state.user,
      getUser,
     
    }}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
