import React, { useState } from 'react';

const TodoTable = ({ todos, onEdit, onDelete }) => {
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');
  const [editStatus, setEditStatus] = useState('');
  const [editDeadline, setEditDeadline] = useState('');

  const handleEditClick = (todo) => {
    setEditingId(todo.id);
    setEditText(todo.text);
    setEditStatus(todo.status);
    setEditDeadline(todo.deadline);
  };

  const handleSave = (id) => {
    onEdit(id, {
      id,
      text: editText,
      status: editStatus,
      deadline: editDeadline,
    });
    setEditingId(null);
  };

  return (
    <div className="bg-white p-6 rounded shadow overflow-x-auto">
      <h2 className="text-2xl font-semibold mb-4">Todo List</h2>
      <table className="table-auto w-full text-left border border-gray-300">
        <thead className="bg-blue-100">
          <tr>
            <th className="p-2 border">Task</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Deadline</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) =>
            editingId === todo.id ? (
              <tr key={todo.id} className="bg-gray-100">
                <td className="p-2 border">
                  <input className="w-full" value={editText} onChange={(e) => setEditText(e.target.value)} />
                </td>
                <td className="p-2 border">
                  <input className="w-full" value={editStatus} onChange={(e) => setEditStatus(e.target.value)} />
                </td>
                <td className="p-2 border">
                  <input
                    type="datetime-local"
                    className="w-full"
                    value={editDeadline}
                    onChange={(e) => setEditDeadline(e.target.value)}
                  />
                </td>
                <td className="p-2 border space-x-2">
                  <button
                    onClick={() => handleSave(todo.id)}
                    className="bg-green-500 text-white px-3 py-1 rounded"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditingId(null)}
                    className="bg-gray-400 text-white px-3 py-1 rounded"
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ) : (
              <tr key={todo.id}>
                <td className="p-2 border">{todo.text}</td>
                <td className="p-2 border">{todo.status}</td>
                <td className="p-2 border">{new Date(todo.deadline).toLocaleString()}</td>
                <td className="p-2 border space-x-2">
                  <button
                    onClick={() => handleEditClick(todo)}
                    className="bg-blue-500 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(todo.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TodoTable;
