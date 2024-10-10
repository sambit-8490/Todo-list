import React, { useState } from 'react'
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const App = () => {

let [todos,setTodos]=useState([])
let [filter,setFilter]=useState("all")
//  add todo  item
let addTodo=(todo)=>{
  setTodos([...todos,todo])
};
// set toggle button as done or not
let toggleCompleted=(id)=>{
  setTodos(todos.map((todo)=>(todo.id===id ? {...todo,completed: !todo.completed} : todo)));
}

// remove todo
 let removeTodo=(id)=>{
  setTodos(todos.filter((todo)=>(todo.id !== id) ))
 }
// filtertodos
let filterTodos=todos.filter((todo)=>{
  if(filter==="completed") return todo.completed
  if(filter==='active') return !todo.completed
  return true;
})

console.log(todos);



  return (
    <div>
     <h1 className='text-center text-3xl font-semibold'>TODO LIST </h1>
     <div className='flex gap-3 justify-center mt-5'>
      <button className='bg-gray-500 p-2 rounded-md text-white' onClick={()=>{setFilter("all")}}>ALL</button>
      <button className='bg-blue-500 p-2 rounded-md text-white' onClick={()=>{setFilter("active")}}>Active</button>
      <button className='bg-green-500 p-2 rounded-md text-white' onClick={()=>{setFilter("completed")}}>COMPLETED</button>
     </div>
     <TodoForm addtodo={addTodo} />
     <TodoList 
     todos={filterTodos} 
     toggleCompleted={toggleCompleted} 
     removeTodo={removeTodo}
     />
    </div>
  )
}

export default App
