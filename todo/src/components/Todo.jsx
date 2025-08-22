import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteTodo } from '../UserReducer'

function Todo() {
  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(deleteTodo({ id }))
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Todo List</h2>
          <Link
            to="/add"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Add
          </Link>
        </div>

        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">Task</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {todos.length > 0 ? (
              todos.map((todo) => (
                <tr
                  key={todo.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="p-3">{todo.id}</td>
                  <td className="p-3">{todo.task}</td>
                  <td className="p-3 flex gap-2">
                    <Link
                      to={`/update/${todo.id}`}
                      className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                    >
                      Edit
                    </Link>
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      onClick={() => handleDelete(todo.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center p-4 text-gray-500">
                  No todos available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Todo
