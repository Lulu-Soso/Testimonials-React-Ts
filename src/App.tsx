import React from 'react'
import {Routes, Route } from "react-router-dom"
import Home from './views/home/Home'
import Testimonial1 from './views/testimonial1/Testimonial1'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/testimonial1" element={<Testimonial1 />} />
      </Routes>
    </div>
  )
}

export default App
