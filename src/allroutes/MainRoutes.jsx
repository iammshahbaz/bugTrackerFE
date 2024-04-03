import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Tracker from '../pages/Tracker'

const MainRoutes = () => {
  return (
   <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/tracker' element={<Tracker/>}/>
   </Routes>
  )
}

export default MainRoutes
