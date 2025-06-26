import React, { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const App = () => {
  // Load from localStorage initially
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [filter, setFilter] = useState('all');

  // Sync todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Add new todo
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  // Toggle completed status
  const toggleCompleted = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Remove a todo
  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // ✅ Update a todo's text
  const updateTodo = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  // Filter todos based on status
  const filterTodos = todos.filter((todo) => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'active') return !todo.completed;
    return true;
  });

  return (
    <div>
      <h1 className="text-center text-3xl font-semibold">TODO LIST</h1>
      <div className="flex gap-3 justify-center mt-5">
        <button className="bg-gray-500 p-2 rounded-md text-white" onClick={() => setFilter('all')}>
          ALL
        </button>
        <button className="bg-blue-500 p-2 rounded-md text-white" onClick={() => setFilter('active')}>
          Active
        </button>
        <button className="bg-green-500 p-2 rounded-md text-white" onClick={() => setFilter('completed')}>
          COMPLETED
        </button>
      </div>
      <TodoForm addtodo={addTodo} />
      <TodoList
        todos={filterTodos}
        toggleCompleted={toggleCompleted}
        removeTodo={removeTodo}
        updateTodo={updateTodo} // ✅ Passed here
      />
    </div>
  );
};

export default App;
