import { useState } from 'react'

import './App.css'
import Header from './components/Header/Header.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='text-3xl font-bold'>Welcome to React Router</h1>
     <Header />
    </>
  )
}

export default App
