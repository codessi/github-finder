import React from 'react'

const Home = () => {
  return (
    <div>
      <h1 className="text-6xl">Welcome</h1>
      
      <p>j;;; {process.env.REACT_APP_GITHUB_TOKEN}</p>
    </div>
  )
}

export default Home