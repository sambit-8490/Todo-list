import React from 'react'

const TodoItem = ({todo,toggleCompleted,removeTodo}) => {
  return (
    <div className=' w-[700px] mx-auto flex items-center justify-between  p-1 border border-gray-400 mt-2'>
        <input
        type="checkbox"
        checked={todo.completed}
        className='h-8 w-8'
        onChange={() => toggleCompleted(todo.id)}
      />
         {todo.text}
         <button onClick={()=>{removeTodo(todo.id)}} 
            className='bg-red-600 p-2 rounded-md text-xl text-white'
            >Remove</button>
    </div>
  )
}

export default TodoItem
