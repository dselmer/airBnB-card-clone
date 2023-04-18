import { useState } from 'react'

import './App.css'
import NavBar from './NavBar'
import Hero from './Hero'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <NavBar/>
    <Hero/>
  <div className='card-container'>
  

  <Card/>
  <Card/>
  <Card/>

  </div>
  
    
    </div>
  )
}

export default App
