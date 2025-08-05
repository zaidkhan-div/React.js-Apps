import React from 'react'
import Navbar from './customComponents/Navbar'
import Modal from './customComponents/Modal'

const App = () => {
  return (
    <div>
      <Navbar />
      <Modal />
    </div >
  )
}

export default App

{/* <div className="grid grid-cols-[250px_1fr_250px] h-screen">
  <LeftSidebar />
  <MainContent /> 
<RightSidebar />
</div > */}