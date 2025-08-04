import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import ApiSlice from './Features/ApiSlice.js'
import { Provider } from 'react-redux'
import { store } from './store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <ApiProvider api={ApiSlice}> */}
    <Provider store={store}>
      <App />
    </Provider>
    {/* </ApiProvider> */}
  </StrictMode>,
)
