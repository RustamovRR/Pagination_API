import React, { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Fruits from './components/Fruits';

function App() {
  const [clicked, setClicked] = useState(false)

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <Button title="Home" showed={clicked} setShowed={setClicked} />
        <Button title="Contact" />
        <Button title="About" orange />
        <Button title="News" />
      </div>
      <Fruits showed={clicked} setShowed={setClicked}/>
    </div>
  )
}

export default App