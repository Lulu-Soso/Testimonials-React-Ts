import React from 'react'
import {Routes, Route } from "react-router-dom"
import Home from './views/home/Home'
import Testimonial1 from './views/testimonial1/Testimonial1'
import Testimonial2 from './views/testimonial2/Testimonial2'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/testimonial1" element={<Testimonial1 />} />
        <Route path="/testimonial2" element={<Testimonial2 />} />
      </Routes>
    </div>
  )
}

export default App
