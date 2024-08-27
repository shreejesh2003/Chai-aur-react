import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='text-center text-3xl'>
     <h1>Learn About Redux Tool Kit</h1>
     <AddTodo />
     <Todos />
    </div>
  )
}

export default App
