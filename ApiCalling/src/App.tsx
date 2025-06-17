import FetchingData from './Components/FetchingData'
import DataAxios from './Components/DataAxios'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FetchWithReTry from './Components/FetchWithReTry'

const App = () => {
  return (
    <div>
      {/*  */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<DataAxios />} />
          <Route path='axios' element={<FetchingData />} />
          <Route path='retry' element={<FetchWithReTry />} />
        </Routes >
      </BrowserRouter>
    </div>
  )
}

export default App