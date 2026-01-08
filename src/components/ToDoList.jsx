import React from 'react'
import ToDoItem from './ToDoItem'

/**
 * @returns the UI to display the whole list of todos enterred by the user
 * 
 */

function ToDoList({todos, onToggle, onEdit, onSave, onDelete}) {
    return (
        <div>
            {/* here we will be mapping through and render the todos entered by the users */}
            {/* using the map function */}
            {todos.map((item) => {
                <ToDoItem key={item.id} todo={item} onToggle={onToggle} onDelete={onDelete} onEdit={onEdit} onSave={onSave}/>
            })}
        </div>
    )
}

export default ToDoList
