import { useState } from 'react'
import React from 'react'

import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <nav id='navbar'>
        <h2><Link to={'/'}>Movielib</Link></h2>
      </nav>
      <Link to={'/movie/13'}>Movie</Link>
      <Link to={'/search'}>Search</Link>
      <h4>TELAS -- <Outlet /></h4>
      <Outlet />
    </div>
  )
}

export default App
