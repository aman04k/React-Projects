import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
         <h1>Hello</h1>
    </UserContextProvider>
  )
}

export default App
