import { useState } from 'react'

import './App.css'
import NavBar from './NavBar'
import Hero from './Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <NavBar/>
    <Hero/>
    </div>
  )
}

export default App
