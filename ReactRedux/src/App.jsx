import ReactRedux from './Components/ReactRedux'
import Profile from './Components/Profile'
import TodosPage from './Components/TodoPage'
import CreateThunk from './Components/CreateThunk'
import Selector from './Components/Selector'
import ApiCallingWithThunk from './Components/ApiCallingWithThunk'

const App = () => {
  return (
    <>
      <ReactRedux />
      <Profile />
      <TodosPage />
      <CreateThunk />
      <Selector />
      <ApiCallingWithThunk />
    </>
  )
  // PersistGate is a critical component provided by the redux-persist library that delays the rendering of your app's UI until the persisted Redux state has been retrieved and saved back into the Redux store.

  // Hydration
  // State hydration is the process of retrieving previously persisted states from storage

  // Rehydration and the REHYDRATE action
  // After retrieving the persisted state, Redux Persist performs a special REHYDRATE action. This action sends the rehydrated state payload to your reducers, allowing them to update the application state accordingly. React components render according to the rehydrated state in response to the rehydration process.
}

export default App
