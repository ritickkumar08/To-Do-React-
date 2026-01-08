import React, { useState } from 'react'
import Header from './components/Header'
import ToDoList from './components/ToDoList'


function App() {
  /**
   * todos :- a state which will contain an array of todo items
   * each todo will have an id, text, completed, editing
   * this state is the controller of the whole application.
   */
  const[todos, setTodos] = useState([])

  /**
   * another state to keep a check on the input made
   * and we make it a controlled input by providing it with a state, value and an eventhandler
   */
  const[input, setInput] = useState("")

  /**
   * a function to handle the add function:
   * it validates the iput
   * creates a new todo object
   * and adds the new todo to the array of todos
   */
  function handleAdd(){
    if(!input.trim()) return

    const newTodo = {
      id : Date.now(),
      text: input,
      completed: false,
      editing: false
    }

    // Add new todo to the list using immutable update
    setTodos([...todos, newTodo])
    setInput("")
  }

  /**
   * toggle todo
   * it is a function that flips the completed status of the todo object
   */
  function toggleTodo(id) {
    setTodos(
      todos.map(todo => 
        todo.id === id ? {...todo, completed: !todo.completed } : todo
      )
    )
  }

  /**
   * a function to delete the todo item from the list
   * Removes a todo by filtering it out.
   */
  function deleteTodo(id){
    setTodos(todos.filter(todo => todo.id !== id))
  }

  /**
   * startEdit 
   * a function that will be called when a user clicks on the edit button 
   * 
   */
  function startEdit(id){
    setTodos(
      todos.map(todo => 
        todo.id == id ? {...todo, editing:true} : todo
      )
    )
  }

  /**
   * finaally a function to save the editid list item
   */
  function saveEdit(id,newText){
    setTodos(
      todos.map((todo) =>{
      todo.id === id ? {...todo, text: newText, editing:false} : todo
    }))
  }


  return (
    <div className="min-h-screen p-6 flex flex-col items-center bg-red-400">
      <Header/>

      <div className="w-full max-w-xl mt-6">

        {/* now the input and the add button */}
        <div className="flex gap-2">
          <input type="text"
            placeholder='enter your nexts'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 px-3 py-2 rounded border border-gray-400 bg-yellow-50" />
        </div>

        <button onClick={handleAdd} className="px-4 py-2 bg-black text-white rounded">Add</button>

        <ToDoList 
          todos={todos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
          onEdit={startEdit}
          onSave={saveEdit}/>
      </div>
    </div>
  )
}

export default App
