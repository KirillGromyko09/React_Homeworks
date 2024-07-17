import { useState } from 'react'
import Alert from "./components/Alert.jsx";

function App() {

  return (
      <div>
        <Alert type="warning" text="what is love?" />
        <Alert type="danger" text="danger danger"/>
      </div>


  )
}

export default App
