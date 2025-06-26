import React, { useState } from 'react';

const TodoItem = ({ todo, toggleCompleted, removeTodo, updateTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    const trimmedText = editText.trim();
    if (trimmedText) {
      updateTodo(todo.id, trimmedText);
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

  const formatDeadline = (deadline) => {
    if (!deadline) return 'No deadline';
    const date = new Date(deadline);
    return date.toLocaleString();
  };

  return (
    <div className="w-full mx-auto p-4 border border-gray-300 mt-3 bg-white rounded-md shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3 w-full">
          <input
            type="checkbox"
            checked={todo.completed}
            className="mt-1 h-5 w-5"
            onChange={() => toggleCompleted(todo.id)}
          />

          {isEditing ? (
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              className="flex-grow p-2 border rounded-md outline-none"
            />
          ) : (
            <div className="flex flex-col">
              <span className={`text-lg font-medium ${todo.completed ? 'line-through text-gray-500' : ''}`}>
                {todo.text}
              </span>
              <span className="text-sm text-gray-600 mt-1">
                <strong>Status:</strong> {todo.status || 'Pending'}
              </span>
              <span className="text-sm text-gray-600">
                <strong>Deadline:</strong> {formatDeadline(todo.deadline)}
              </span>
            </div>
          )}
        </div>

        <div className="flex-shrink-0 space-x-2">
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
    </div>
  );
};

export default TodoItem;
