import React from 'react'
import { Routes, Route } from "react-router-dom"
import Login from './pages/auth/user/login/Login'
import Regi from './pages/auth/user/registation/Regi'
import Profile from './pages/profile/Profile'

const App = () => {
  return (
    <>
     <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/regi" element={ <Regi /> } />

        <Route path="/profile" element={<Profile />} />


      </Routes>
    </>
  )
}

export default App