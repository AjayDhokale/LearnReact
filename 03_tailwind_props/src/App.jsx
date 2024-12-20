import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  const myObj = {
    username: 'Anuradha',
    age: '55'
  }


  return (
    <>

      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <div className='flex '>
        <Card username={myObj.username} btnText="Click Me"  />
        <Card username="Anu"  />
      </div>

    </>
  )
}

export default App
