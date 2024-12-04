import './App.css'
import { useEffect, useState } from 'react'
import { TodoProvider } from './Contexts'
import TodoForm from './Components/TodoForm'
import TodoItem from './Components/TodoItem'

function App() {

      const [todos, setTodos] = useState([])

      const addTodo = (todo) => {
        console.log("add btn clicked")
        setTodos( (prev) => (
          [ { id: Date.now(), ...todo } , ...prev]
        ) )
      }

      const updateTodo = (id, todo) => {
        setTodos( (prev) => prev.map( (prevTodo) => prevTodo.id === id ? todo : prevTodo ) )
      }

      const deleteTodo = (id) => {
        setTodos( (prev) => prev.filter( (prevTodo) => prevTodo.id !== id ) )
      }

      const toggleComplete = (id) => {
          setTodos( (prev) => prev.map( (prevTodo) => prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed } : prevTodo ) )
      }


      useEffect( () => {
          const todos = JSON.parse(localStorage.getItem("todos") )

          if (todos && todos.length > 0) {
            setTodos(todos)
          }

      }, [] )

      useEffect( () => {
        localStorage.setItem( "todos" , JSON.stringify(todos))
        
      } , [todos] )


  return (
    <TodoProvider value={ {todos, addTodo, updateTodo, deleteTodo, toggleComplete} } >
      <div className="bg-[#172842] w-screen m-0 h-screen pt-8 b   ">
        <div className="w-3/4 h-full mx-auto shadow-md rounded-lg px-36 py-3 text-white border-gray-400 border-4 border-b-0 border-double">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm/>
          </div>

          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {
              todos.map( (todo) => (
                <div key={todo.id}
                     className='w-full'
                >
                    <TodoItem todo={todo} />

                </div>
               ) )
            }
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
