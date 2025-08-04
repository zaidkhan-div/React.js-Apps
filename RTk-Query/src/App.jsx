import React from 'react'
import ApiCalling from './Components/ApiCalling'
import Todo from './Components/Todo'

const App = () => {
  return (
    <div>
      <h1>Redux Toolkit Query</h1>
      <ApiCalling />
      <Todo />
    </div>
  )
}

export default App
