import React,{useState,useContext} from 'react'
import UserContext from '../Context/UserContext'


function Login() {
    const handleLogin=(e)=>{
        e.preventDefault()
        const user = { username, password }; // This should come from your authentication logic
        setUser(user); 

    }
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')

    const {setUser}=useContext(UserContext)

  return (
    <div>
        <h2>Login</h2>
        <input value={username} onChange={(e) => {setUsername(e.target.value)}} type="text" placeholder="username" />
        <input value={password} onChange={(e) => {setPassword(e.target.value)}} type="password" placeholder="password" />
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login