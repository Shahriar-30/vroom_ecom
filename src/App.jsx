import React from 'react'
import { Routes, Route } from "react-router-dom"
import Login from './pages/auth/user/login/Login'
import Regi from './pages/auth/user/registation/Regi'

const App = () => {
  return (
    <>
     <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/regi" element={ <Regi /> } />
      </Routes>
    </>
  )
}

export default App