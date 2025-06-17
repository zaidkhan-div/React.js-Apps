import React from 'react'
import FetchingData from './Components/FetchingData'
import DataAxios from './Components/DataAxios'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      {/*  */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<DataAxios />} />
          <Route path='next' element={<FetchingData />} />
        </Routes >
      </BrowserRouter>
    </div>
  )
}

export default App