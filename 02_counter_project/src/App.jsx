import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(15)

  function addVal() {
    if (counter < 20) {
      counter++
      setCounter(counter)
    }
  }

  function removeVal() {
    if (counter > 0 ) {
      counter--
      setCounter(counter)
    }
  }

  return (
    <>
     <div>
        <h1>Simple Counter Project</h1>
        <h2>Counter Value : {counter}</h2>
        <button onClick={addVal}>Add Value {counter} </button>
        <button onClick={removeVal}>Remove Value {counter} </button>
        <p>Footer: {counter}</p>
     </div>
    </>
  )
}

export default App
