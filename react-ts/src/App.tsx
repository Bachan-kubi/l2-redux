
import './App.css'
import TodoForm from './Components/Todo/TodoForm'
import TodoProvider from './Context/TodoProvider'

function App() {


  return (
    <>
      <TodoProvider>
        <TodoForm />

      </TodoProvider>
    </>
  )
}

export default App
