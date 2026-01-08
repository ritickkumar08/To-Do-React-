import React, { useState } from 'react'
import Header from './components/Header'
import ToDoList from './components/ToDoList'
import Intro from './components/Intro'

function App() {
  const[todos, setTodos] = useState([])

  const addToDo = (text) =>{
    setTodos([...todos,{
      id:Date.now(),
      text,
      completed:false
    }])
  }
  

  return (
    <div className='bg-red-300'>
      <Intro/>
      <Header onAdd={addTodo}/>
      <ToDoList/>
    </div>
  )
}

export default App
