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
}

export default App
