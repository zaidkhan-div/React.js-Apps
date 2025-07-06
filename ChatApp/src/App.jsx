import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/login'
import ChatApp from './pages/ChatApp'
import Navbar from './customComponents/Navbar'
import NotFound from './pages/NotFound'
import { ToastContainer } from 'react-toastify'
import ProtectedRoute from './customComponents/ProtectedRoute'
const App = () => {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/home/:id' element={<ProtectedRoute><ChatApp /></ProtectedRoute>} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App