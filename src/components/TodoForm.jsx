import React, { useState } from 'react'

const TodoForm = ({addtodo}) => {
    let [input,setInput]=useState('')


    let handleForm=(e)=>{
        e.preventDefault();
        // if(!input) return;

        const newtodo={
            id:Math.floor(Math.random()*10000),
            text:input,
            completed:false
        };

            addtodo(newtodo)
            setInput('')

    }


  return (
    <div>
        
        <form onSubmit={handleForm} className='flex justify-center m-5 gap-4'>
            <input type="text"
             placeholder='Add a task'
             value={input}
             onChange={(e)=>{setInput(e.target.value)}}
             className='bg-gray-200 p-2 w-[300px] rounded-md outline-none'
             />
             <button type='submit'
             className='bg-blue-600 rounded-md text-white p-[8px_10px] hover:bg-blue-800'
             >Add</button>
        </form>
      
    </div>
  )
}

export default TodoForm

