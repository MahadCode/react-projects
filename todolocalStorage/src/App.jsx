import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './context.js/TodoContext'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem';

function App() {

  const [todos, setTodos] = useState(() => {
    const data = localStorage.getItem("todos");
    return data ? JSON.parse(data) : [];
  });
  
  const addTodo = (todo) => {
    console.log(todo)
    setTodos((prevTodos) => [{...todo},...prevTodos])
  }

  const updateTodo = (id, todo) =>  {
    setTodos((prevTodos) => 
      prevTodos.map((prevTodo) => {
        if (typeof todo == "string"){
            return prevTodo.id === id ? {...prevTodo, msg: todo} : prevTodo
        }
        else {
             return prevTodo.id === id ? {...prevTodo, completed: todo} : prevTodo      
        }
        
      }
        
      )
    )
  }

  const deleteTodo = (id) => {
    setTodos((prevTodos) => 
      prevTodos.filter((prevTodos) => 
       prevTodos.id !== id
      )
    )
  }

  useEffect(() => {
    const data = JSON.stringify(todos);
    localStorage.setItem("todos", data);
  },[todos])

  return (
   <TodoProvider value={{addTodo, updateTodo, deleteTodo}}>
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {todos.map( (todo) => 
                          <TodoItem key={todo.id} todo={todo}/>
                         )}
                    </div>
                </div>
            </div>
   </TodoProvider>
  )
}

export default App
