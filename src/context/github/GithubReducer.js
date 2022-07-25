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
    
  }
}

export default githubReducer