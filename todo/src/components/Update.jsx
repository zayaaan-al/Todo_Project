import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTodo } from '../UserReducer';
import { useNavigate, useParams } from 'react-router-dom';

const Update = () => {
  const { id } = useParams();
  const todoId = parseInt(id);

  const todos = useSelector((state) => state.todos);
  const existingTodo = todos.find((t) => t.id === todoId);

  const [utask, setTask] = useState(existingTodo ? existingTodo.task : "");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (event) => {
    event.preventDefault();
    dispatch(updateTodo({ id: todoId, task: utask }));
    navigate('/');
  };

  return (
    <div>
      <form onSubmit={handleUpdate}>
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto space-y-4">
          <div className="flex flex-col">
            <label className="mb-1 font-semibold text-gray-700">Task:</label>
            <input
              type="text"
              value={utask}
              onChange={(e) => setTask(e.target.value)}
              placeholder="Enter your task"
              className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors">
            Edit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Update;
