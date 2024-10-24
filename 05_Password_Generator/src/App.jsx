import { useCallback, useEffect, useRef, useState } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")




  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if (numAllowed) {
      str += '1234567890'
    }

    if (charAllowed) {
      str += '!@#$%^&*()<>/?'
    }

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numAllowed, charAllowed, setPassword])


  const passwordRef = useRef(null)


  const copyToClipBoard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,999)
    window.navigator.clipboard.writeText(password)
  }, [password])


  useEffect(() => {
    passwordGenerator()
  }, [length, numAllowed, charAllowed, passwordGenerator])

  return (
    <div className='w-full h-screen '>
      <div className='bg-gray-600 text-center max-w-lg my-8 mx-auto p-5 rounded-lg'>
        <h1 className='text-white '>Password Generator</h1>

        <div className='flex w-full overflow-hidden rounded-lg mb-4'>
          <input
            type="text"
            className='text-orange-600 text-md font-semibold  w-full px-3 py-1 outline-none'
            value={password}
            ref={passwordRef}
            readOnly
          />
          <button className='text-white bg-blue-500 py-1 px-2 shrink-0 outline-none active:scale-95'
            onClick={copyToClipBoard}
          >Copy</button>
        </div>



        <div className='flex gap-x-2 items-center'>

          <div className='flex overflow-hidden rounded-lg mb-4'>
            <input
              type="range"
              className='text-orange-600 py-1 outline-none'
              min={6}
              max={100}
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
            <label className='text-orange-500 mx-2'>Length ({length})</label>
          </div>

          <div className='flex overflow-hidden rounded-lg mb-4'>
            <input
              type="checkbox"
              className='text-orange-600  px-3 py-1 outline-none'
              defaultChecked={numAllowed}
              onChange={() => { setNumAllowed(prev => !prev) }}
            />
            <label className='text-orange-500 mx-1'>Numbers</label>
          </div>

          <div className='flex overflow-hidden rounded-lg mb-4 '>
            <input
              type="checkbox"
              className='text-orange-600  px-3 py-1 outline-none'
              defaultChecked={charAllowed}
              onChange={() => { setCharAllowed(prev => !prev) }}
            />
            <label className='text-orange-500 mx-1'>Symbols</label>
          </div>
        </div>



      </div>
    </div>
  )
}

export default App
