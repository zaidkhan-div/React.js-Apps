import ReactRedux from './Components/ReactRedux'
import Profile from './Components/Profile'
import TodosPage from './Components/TodoPage'
import CreateThunk from './Components/CreateThunk'
import Selector from './Components/Selector'

const App = () => {
  return (
    <>
      <ReactRedux />
      <Profile />
      <TodosPage />
      <CreateThunk />
      <Selector />
    </>
  )
}

export default App