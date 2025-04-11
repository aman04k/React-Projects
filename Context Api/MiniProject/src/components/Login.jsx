import React, { useState } from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState(' ')
    const [password, setPassword] = useState(' ')

   const handleSubmit = () => {
       
   }

  return (
    <div>
  <h2>Login</h2>
  <input type="text" placeholder='Enter your name' />
  <input type="password" placeholder='Enter your password' />
  <button onClick={handleSubmit}>Submit</button>

    </div>
  )
}

export default Login