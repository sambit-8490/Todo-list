import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState('');
  const [status, setStatus] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim()) {
      alert('Please enter a task.');
      return;
    }

    const newTodo = {
      id: Date.now(),
      text: text.trim(),
      status: status.trim() || 'Pending',
      deadline: deadline || null,
      completed: false, // default
    };

    addTodo(newTodo);
    setText('');
    setStatus('');
    setDeadline('');
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg mt-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">📝 Add New Task</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-1">Task</label>
          <input
            type="text"
            placeholder="What do you need to do?"
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-400"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Status (optional)</label>
          <input
            type="text"
            placeholder="E.g. Pending / In Progress / Done"
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-400"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Deadline (optional)</label>
          <input
            type="datetime-local"
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-400"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />
        </div>

        <div className="text-right">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
