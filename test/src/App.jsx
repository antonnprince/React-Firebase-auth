import Login from "./components/Login"
import Register from "./components/Register"
import Profile from "./components/Profile"
import './App.css'
import { useState, useEffect } from "react"
import { Routes, Route, BrowserRouter as Router, Navigate } from "react-router-dom"
import {ToastContainer} from "react-toastify"
import { auth } from "./components/fireabase"

const App = () => {

  const [user,setUser]=useState()

  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      setUser(user)
    })
  })

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={user?<Navigate to="/profile"/> : <Login/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
        <ToastContainer/>
      </Router>

    </div>
  )
}

export default App