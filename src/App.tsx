import React, { useState } from 'react'
import Dash from './counter/Dash'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Tracker</h1>
      </header>
      <div className="App-content">
        <Dash />
      </div>
    </div>
  )
}

export default App
