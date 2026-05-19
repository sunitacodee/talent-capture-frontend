import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    console.log("this about page")
  return (
    <div>
      <h2>THis is about page</h2>
      <h1>About Page</h1>
      <p>This is the about page.</p>
      <Link to="/">Back to Home</Link>
    </div>
  )
}

export default About
