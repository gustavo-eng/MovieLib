import { useState } from 'react'
import React from 'react'

//Rotas
import { Link, Outlet } from 'react-router-dom'

//Components
import Navbar from './Components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
