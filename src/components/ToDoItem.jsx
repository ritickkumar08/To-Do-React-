import React, { useState } from 'react'

/**
 * @returns a UI to display a single item/task, the todo component
 * 
 * here we will recieve different props from parents
 *  -> todo.               -> object containing text/completed/editing
 *  -> function onToggle.  -> toggles completed state
 *  -> function onEdit.    -> switches to editing mode
 *  -> function onSave     -> saves edited text
 *  -> function onDelete   -> deletes this task
 * 
 * and we also have a local state 
 *  editText - to keep a check on the editing of the input todos
 */

function ToDoItem({todo, onToggle, onSave, onEdit, onDelete}) {
    const[editText, setEditText] = useState(todo.text)

    return (
        <div>
            {/* a checkbox to toggle the completion of a task  */}
            <input type="checkbox" checked={todo.completed} onChange={()=>onToggle(todo.id)} className='w-4 h-4' />

            {/* task text or input field if editing */}
            <div>
                {todo.editing ?(
                    <input value={editText} onChange={(e) => setEditText(e.target.value)} className='w-full px-2 py-1 border rounded'/> //to update the temprory state
                ) : (
                    <span className={todo.completed ? "line-through text-grey-500" : ""}>{todo.text}</span>
                )}
            </div>

            {/* buttons :- edit save delete  */}
            <div>
                {todo.editing ? (
                    <button onClick={() => onSave(todo.id, editText)} className='text-green-500'>save</button>
                ) : (
                    <button onClick={() => onEdit(todo.id)} className='text-blue-500'>Edit</button>
                )}
                
                <button onClick={()=> onDelete(todo.id)}>Delete</button>
            </div>
        </div>
    )
}

export default ToDoItem
