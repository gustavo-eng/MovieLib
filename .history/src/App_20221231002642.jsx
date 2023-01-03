import { useState } from 'react'
import React from 'react'

import { Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <nav id='navbar'>
        <h2><Link to={'/'}>Movielib</Link></h2>
      </nav>
      <Link to={'/movie/13'}>Movielib</Link>
      <Link to={'/gustavo'}>Movielib</Link>
    </div>
  )
}

export default App
