import React from 'react'
import ChatApp from './pages/ChatApp'
import Login from './pages/Login'
import Navbar from './customComponents/Navbar'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <div>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path='/' element={<ChatApp />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App