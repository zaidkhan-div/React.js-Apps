import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/login'
import ChatApp from './pages/ChatApp'
import Navbar from './customComponents/Navbar'
import NotFound from './pages/NotFound'
import { ToastContainer } from 'react-toastify'
import ProtectedRoute from './customComponents/ProtectedRoute'

const App = () => {

  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === 'persist:chatApp1') {
        // You can add checks here to avoid unnecessary reloads
        window.location.reload();
      }
    };
    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);


  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<ProtectedRoute><ChatApp /></ProtectedRoute>} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App