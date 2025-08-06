import React from 'react'
import Navbar from './customComponents/Navbar'
import Modal from './customComponents/Modal'
import TodoPage from './pages/TodoPage'

const App = () => {
  return (
    <div>
      <Navbar />
      <Modal />
      <TodoPage />
    </div >
  )
}

export default App

{/* <div className="grid grid-cols-[250px_1fr_250px] h-screen">
  <LeftSidebar />
  <MainContent /> 
<RightSidebar />
</div > */}