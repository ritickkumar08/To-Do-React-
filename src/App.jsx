import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import ToDoList from './components/ToDoList'


function App() {
  /**
   * todos :- a state which will contain an array of todo items
   * each todo will have an id, text, completed, editing
   * this state is the controller of the whole application.
   * we are stting the initial value for the todos by searching if the localstorage has any value in itself as now the 
   * React rules don't allow to use a state inside a useEffect hook.
   */
  const[todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos")
    return saved ? JSON.parse(saved) : []
  })

  /**
   * another state to keep a check on the input made
   * and we make it a controlled input by providing it with a state, value and an eventhandler
   */
  const[input, setInput] = useState("")

  /**
   * now we are trying to add the localStorage to work for as for the storage,
   * so that the data is not lost as soon as we refresh.
   */
  // useEffect(()=>{
  //   const saved = localStorage.getItem("todos")
  //   if(saved){
  //     setTodos(JSON.parse(saved));
  //   }
  // },[])

  /**
   * we will also need to store the data to local storage as the todos are added.
   */
  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])

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
        todo.id === id ? {...todo, editing:true} : todo
      )
    )
  }

  /**
   * finaally a function to save the editid list item
   */
  function saveEdit(id,newText){
    setTodos(
      todos.map(todo =>
      todo.id === id ? {...todo, text: newText, editing:false} : todo
    ))
  }


  return (
    <div className="min-h-screen p-6 flex flex-col items-center bg-red-400">
      <Header/>

      <div className="w-full max-w-2xl mt-6 border-b-2 p-2.5 rounded-b-md">

        {/* now the input and the add button */}
        <div className="flex gap-2">
          <input type="text"
            placeholder='enter your nexts'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 px-3 py-2 rounded border border-gray-400 bg-yellow-50" />
          <button onClick={handleAdd} className="px-6 py-2 bg-black text-white rounded">Add</button>
        </div>

        

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
