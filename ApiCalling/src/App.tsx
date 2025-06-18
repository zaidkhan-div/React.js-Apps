import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FetchingData from './Components/FetchingData'
import DataAxios from './Components/DataAxios'
import FetchWithReTry from './Components/FetchWithReTry'
import Debouncing from './Components/DebouncingApi'

const App = () => {
  return (
    <div>
      {/*  */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<DataAxios />} />
          <Route path='axios' element={<FetchingData />} />
          <Route path='retry' element={<FetchWithReTry />} />
          <Route path='debounce' element={<Debouncing/>}/>
        </Routes >
      </BrowserRouter>
    </div>
  )
}

export default App