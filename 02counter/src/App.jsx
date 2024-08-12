import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // let counter=15
  const [counter,setCounter]=useState(15)
  const addValue= () => {
    console.log("clicked",counter)
    // counter=counter+1
    if (counter<20){
    setCounter(counter+1)
    }
  }
  const removeValue=() => {
    setCounter(counter-1)

  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
