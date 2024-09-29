import React from 'react'
import Home from "../Pages/Home"
import About from "../Pages/About"
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import Contact from '../Pages/Contact'
import {Routes, Route} from "react-router-dom"

const Routers = () => {
  return 
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/home" element={<Home />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/about" element={<About />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Signup />} />
    </Routes>
}

export default Routers