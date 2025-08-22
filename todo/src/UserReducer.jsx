import { createSlice } from "@reduxjs/toolkit"
import { todoList } from "./components/Data"

const todoSlice = createSlice({
  name: 'todos',
  initialState: todoList,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload)
    },
    updateTodo: (state, action) => {
      const { id, task } = action.payload
      const existing = state.find(todo => todo.id === id)
      if (existing) {
        existing.task = task
      }
    },
    deleteTodo: (state, action) => {
      const { id } = action.payload
      return state.filter(todo => todo.id !== id)
    }
  }
})

export const { addTodo, updateTodo, deleteTodo } = todoSlice.actions
export default todoSlice.reducer
