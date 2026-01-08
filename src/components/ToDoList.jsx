import React from 'react'
import ToDoItem from './ToDoItem'

/**
 * @returns the UI to display the whole list of todos enterred by the user
 * it recieves :
 *  -> todos : an array of tasks/todos
 *  -> onToggel, onEdit, onDelete, onSave
 * 
 * its responsible for:
 *  -> display all todo items using map
 *  -> pass all the todos and the utility functions
 */

function ToDoList({todos, onToggle, onDelete, onEdit, onSave}) {
    console.log(todos);
    return (
        <div className="mt-6 p-4 rounded-lg shadow-lg border-red-500 bg-red-200">
            {/* here we will be mapping through and render the todos entered by the users */}
            {/* using the map function */}
            
            {todos.map((item) => (
                <ToDoItem 
                key={item.id} 
                todo={item} 
                onToggle={onToggle} 
                onDelete={onDelete} 
                onEdit={onEdit} 
                onSave={onSave}/>
            ))}
        </div>
    )
}

export default ToDoList
