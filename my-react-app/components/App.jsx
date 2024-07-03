import { useState } from 'react'
import Card from "./Card.jsx";

function App() {

  return (
      <div>
        <Card text = 'Hello,'/>
        <Card title = 'World'/>
        <Card text = 'Hello,' title = 'World'/>
      </div>
  )
}

export default App
