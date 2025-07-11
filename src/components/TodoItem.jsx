import React, { useState } from 'react';

const TodoItem = ({ todo, toggleCompleted, removeTodo, updateTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const [editStatus, setEditStatus] = useState(todo.status);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    const trimmedText = editText.trim();
    if (trimmedText) {
      updateTodo(todo.id, trimmedText, editStatus);
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditText(todo.text);
    setEditStatus(todo.status);
    setIsEditing(false);
  };

  return (
    <div className="w-full max-w-2xl mx-auto flex items-center justify-between p-2 border border-gray-400 mt-2 bg-white rounded-md">
      <div className="flex flex-col w-full">
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={todo.completed}
            className="h-5 w-5"
            onChange={() => toggleCompleted(todo.id)}
          />

          {isEditing ? (
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              className="flex-grow p-1 border rounded-md outline-none"
            />
          ) : (
            <span className={`flex-grow ${todo.completed ? 'line-through text-gray-500' : ''}`}>
              {todo.text}
            </span>
          )}
        </div>

        <div className="text-sm text-gray-600 ml-8 mt-1">
          {isEditing ? (
            <select
              value={editStatus}
              onChange={(e) => setEditStatus(e.target.value)}
              className="border px-2 py-1 rounded"
            >
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Done">Done</option>
            </select>
          ) : (
            <>
              <p>Status: {todo.status || 'Pending'}</p>
              <p>Deadline: {todo.deadline ? new Date(todo.deadline).toLocaleString() : 'No deadline'}</p>
            </>
          )}
        </div>
      </div>

      <div className="flex gap-2 ml-4">
        {isEditing ? (
          <>
            <button
              onClick={handleSave}
              className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600"
            >
              Save
            </button>
            <button
              onClick={handleCancel}
              className="bg-gray-400 text-white px-3 py-1 rounded-md hover:bg-gray-500"
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <button
              onClick={handleEdit}
              className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600"
            >
              Edit
            </button>
            <button
              onClick={() => removeTodo(todo.id)}
              className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700"
            >
              Remove
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TodoItem;
