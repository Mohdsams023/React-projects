import React, { useState } from "react"
import './App.css'

function App() {
  const [Color, setColor] = useState('Black')
  return (
    <>
    <div style={backgroundColor= {setColor}}>
    <h1 className=' bg-black text-white'>HELLO</h1>
    <div></div>

    </div>

    </>
  )
}

export default App
