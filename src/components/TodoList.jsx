import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleCompleted, removeTodo, updateTodo }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleCompleted={toggleCompleted}
          removeTodo={removeTodo}
          updateTodo={updateTodo} // ✅ Pass update function here
        />
      ))}
    </div>
  );
};

export default TodoList;
