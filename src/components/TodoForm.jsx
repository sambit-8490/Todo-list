import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState('');
  const [status, setStatus] = useState('Pending');
  const [deadline, setDeadline] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: text.trim(),
      status,
      deadline: deadline || null,
    };

    addTodo(newTodo);
    setText('');
    setStatus('Pending');
    setDeadline('');
  };

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">📝 Add New Task</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Task</label>
          <input
            type="text"
            placeholder="What do you need to do?"
            className="w-full border px-3 py-2 rounded"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Status</label>
          <select
            className="w-full border px-3 py-2 rounded"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Deadline (optional)</label>
          <input
            type="datetime-local"
            className="w-full border px-3 py-2 rounded"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
