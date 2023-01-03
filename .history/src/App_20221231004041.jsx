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
      
      <Link to={'/movie/13'}>Movie</Link>
      <Link to={'/search'}>Search</Link>
      <h4>TELAS -- </h4>
      <Outlet />
    </div>
  )
}

export default App
