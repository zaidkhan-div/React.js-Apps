import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/login'
import ChatApp from './pages/ChatApp'
import Navbar from './customComponents/Navbar'
import NotFound from './pages/NotFound'
import { ToastContainer } from 'react-toastify'
import ProtectedRoute from './customComponents/ProtectedRoute'

import useTabSync from './Hooks/useTabSync'

const App = () => {

  useTabSync();

  // useEffect(() => {
  //   console.log("✅ useEffect mounted. Listening for tab messages...");

  //   listenToTabs(({ type, payload }) => {
  //     console.log("📩 Received from another tab:", type, payload);
  //   });
  // }, []);

  // useEffect(() => {
  //   const handleChange = (event) => {
  //     if (event.key === 'persist:chatApp1') {
  //       window.location.reload()
  //     }
  //   };
  //   window.addEventListener('storage', handleChange);
  //   return () => window.removeEventListener('storage',handleChange)
  // }, [])

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home/:id' element={<ProtectedRoute><ChatApp /></ProtectedRoute>} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App