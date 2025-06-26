import React, { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : [];
  });
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const updateTodo = (id, newText, newStatus) => {
    setTodos(
      todos.map(todo =>
        todo.id === id
          ? {
              ...todo,
              text: newText,
              status: newStatus,
              completed: newStatus.toLowerCase() === 'done',
            }
          : todo
      )
    );
  };

  const toggleCompleted = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
              status: !todo.completed ? 'Done' : 'Pending',
            }
          : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const resetTodos = () => {
    localStorage.removeItem('todos');
    setTodos([]);
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'active') return !todo.completed;
    return true;
  });

  return (
    <div className="space-y-6">
      <h1 className="text-center text-4xl font-bold text-gray-800">📝 Smart Todo List</h1>

      <div className="flex justify-center gap-4 flex-wrap">
        <button onClick={() => setFilter('all')} className="btn-filter">All</button>
        <button onClick={() => setFilter('active')} className="btn-filter">Active</button>
        <button onClick={() => setFilter('completed')} className="btn-filter">Completed</button>
        <button
          onClick={resetTodos}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Reset All Tasks
        </button>
      </div>

      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={filteredTodos}
        toggleCompleted={toggleCompleted}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
};

export default App;
