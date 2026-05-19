import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
    console.log("home page")
  return (
    <div>
      <h2>Home page</h2>
      <p>Welcome to the home page!</p>
      <Link to="/about">Go to About</Link>
    </div>
  )
}

export default Home
