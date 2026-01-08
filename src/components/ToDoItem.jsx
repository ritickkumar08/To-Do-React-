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

function ToDoItem({todo, onToggle, onDelete, onEdit, onSave}) {
    const[editText, setEditText] = useState(todo.text)

    return (
        <div className="flex items-center justify-between py-2 border-b border-gray-300">
            {/* a checkbox to toggle the completion of a task  */}
            <input type="checkbox" checked={todo.completed} onChange={()=>onToggle(todo.id)} className='w-4 h-4 rounded-full  border-2 border-gray-600 checked:bg-green-600 checked:border-green-600 appearance-none cursor-pointer transition-all duration-200' />

            {/* task text or input field if editing */}
            <div className="flex-1 px-3">
                {todo.editing ?(
                    <input value={editText} onChange={(e) => setEditText(e.target.value)} className='w-full px-2 py-1 border rounded'/> //to update the temprory state
                ) : (
                    <span className={todo.completed ? "line-through text-grey-500" : ""}>{todo.text}</span>
                )}
            </div>

            {/* buttons :- edit save delete  */}
            <div className="flex gap-2">
                {
                    todo.editing ? (<button onClick={() => onSave(todo.id, editText)} className='text-green-500'>save</button>) : 
                    (<button onClick={() => onEdit(todo.id)} className='text-blue-500'>Edit</button>)
                }
                
                <button onClick={()=> onDelete(todo.id)} className="text-red-600">Delete</button>
            </div>
        </div>
    )
}

export default ToDoItem
