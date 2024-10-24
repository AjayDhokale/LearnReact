import { useState } from "react"

function App() {
const [color, setcolor] = useState("black")
  return (
 
      <div className="w-screen h-screen "
      style={{backgroundColor:color}}
      >
        <div className="fixed flex flex-wrap justify-center top-12 inset-x-0 px-3 ">

          <div className="fixed flex justify-center px-3 py-2 bg-white text-black rounded-3xl gap-3">

            <button 
            onClick={() => setcolor("red")}
            className="rounded-full text-white outline-none py-1 shadow-lg bg-red-600"
            
            >Red</button>

            <button 
            onClick={() => setcolor("violet")}
            className="rounded-full text-white outline-none py-1 shadow-lg bg-pink-400"
            
            >Pink</button>

            <button 
            onClick={() => setcolor("orange")}
            className="rounded-full text-white outline-none py-1 shadow-lg bg-orange-600"
            
            >Orange</button>

            <button 
            onClick={() => setcolor("black")}
            className="rounded-full text-white outline-none py-1 shadow-lg bg-black"
            
            >Black</button>

            <button 
            onClick={() => setcolor("green")}
            className="rounded-full text-white outline-none py-1 shadow-lg bg-green-600"
            
            >Green</button>

            <button 
            onClick={() => setcolor("blue")}
            className="rounded-full text-white outline-none py-1 shadow-lg bg-blue-600"
            
            >Blue</button>

            <button 
            onClick={() => setcolor("maroon")}
            className="rounded-full text-white outline-none py-1 shadow-lg bg-red-950"
            
            >Maroon</button>

          </div>
        </div>
      </div>
    
  )
}

export default App
