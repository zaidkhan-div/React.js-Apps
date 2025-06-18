import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import FetchingData from './Components/FetchingData'
import DataAxios from './Components/DataAxios'
import FetchWithReTry from './Components/FetchWithReTry'
import Debouncing from './Components/DebouncingApi'
import AxiosService from './Components/AxiosService'
import AxiosServices1 from './Components/AxiosServices1'

const App = () => {
  return (
    <div>
      <ToastContainer />
      {/*  */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<DataAxios />} />
          <Route path='axios' element={<FetchingData />} />
          <Route path='retry' element={<FetchWithReTry />} />
          <Route path='debounce' element={<Debouncing />} />
          <Route path='service' element={<AxiosService />} />
          <Route path='service1' element={<AxiosServices1 />} />
        </Routes >
      </BrowserRouter>
    </div>
  )
}

export default App