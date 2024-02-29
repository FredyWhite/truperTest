import Login from '../components/Login'
import Home from '../components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import React from 'react'

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="/login" element={<Login />} /> 
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Navigation