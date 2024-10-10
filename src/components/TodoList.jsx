import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todos,toggleCompleted,removeTodo}) => {
  return (
    <div>
        {todos.map((todo)=>(
            <TodoItem key={todo.id} todo={todo} toggleCompleted={toggleCompleted} removeTodo={removeTodo} />
        ))}
       
    </div>
  )
}

export default TodoList
