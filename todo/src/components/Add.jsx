import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../UserReducer';
import { useNavigate } from 'react-router-dom';

const Add = () => {
  const [task, setTask] = useState("")
  const todos = useSelector((state) => state.todos)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    const newId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1
    dispatch(addTodo({ id: newId, task }))
    navigate('/')
    alert('Added Successfully')
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto space-y-4 mt-10">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label className="mb-1 font-semibold text-gray-700">Task:</label>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter your Task"
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors">
          Submit
        </button>
      </form>
    </div>
  )
}

export default Add;
