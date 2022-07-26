

const alertReducer = (state, action) => {
  switch (action.type) {
// reducer takes in payload btw action is dipatch
    // return the payload
    // msg:  'ples
    // type: 'error
    // compoent looks at state  = alert
    // alert.type === error 
    // it excute 
    default: 
      return state
    case "SET_ALERT":
      return action.payload
    case "REMOVE_ALERT":
      return null
      
  }

}

export default alertReducer
