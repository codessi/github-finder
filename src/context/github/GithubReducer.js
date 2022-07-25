const githubReducer = (state, action) => {
  switch (action.type) {
    default:
      return state
    case "GET_USERS":
      return {
        ...state,
        users:action.payload,
        loading: false
      }
    case "SET_LOADING":
      return {
        ...state,
        loading: true
      }
    
  }
}

export default githubReducer