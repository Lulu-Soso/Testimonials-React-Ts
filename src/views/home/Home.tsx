import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home'>
        <h1>Home</h1>
        <Link to="/testimonial1">Testimonial 1</Link>
        <Link to="/testimonial2">Testimonial 2</Link>
    </div>
  )
}

export default Home