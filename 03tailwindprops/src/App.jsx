import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './assets/components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj={username:'shreejesh',age:21}
  let newArr=[1,2,3,4]



  return (
    <>
      <h1 className='bg-green-300 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Card  username='shreejesh'  />

      
    </>
  )
}

export default App
