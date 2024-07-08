import React, { useState } from 'react'
import Card from "./Card.jsx";
import Definitions from "./Definitions.jsx";

function App() {
  const definitions = [
    { dt: 'one', dd: 'two', id: 1 },
    { dt: 'another term', dd: 'another description', id: 2 },
  ];

  return (
      <div className={App}>
        <Definitions data={definitions} />;
      </div>

  )
}

export default App
