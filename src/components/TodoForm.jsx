import React, { useState } from 'react';

const TodoForm = ({ addtodo }) => {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  const handleForm = (e) => {
    e.preventDefault();

    const trimmedInput = input.trim();
    if (!trimmedInput) {
      setError('Task cannot be empty.');
      return;
    }

    const newtodo = {
      id: Math.floor(Math.random() * 10000),
      text: trimmedInput,
      completed: false,
    };

    addtodo(newtodo);
    setInput('');
    setError('');
  };

  return (
    <div className="mt-6">
      <form
        onSubmit={handleForm}
        className="flex flex-col sm:flex-row justify-center items-center gap-4"
      >
        <input
          type="text"
          placeholder="Add a task"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            if (error) setError('');
          }}
          className="bg-gray-100 p-3 w-[300px] rounded-md outline-none border focus:border-blue-400"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-800 transition px-5 py-2 rounded-md text-white font-semibold"
        >
          Add
        </button>
      </form>

      {/* Error Message */}
      {error && (
        <div className="text-center text-red-600 mt-2 text-sm">{error}</div>
      )}
    </div>
  );
};

export default TodoForm;
