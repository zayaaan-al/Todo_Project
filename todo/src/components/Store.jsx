import { configureStore } from "@reduxjs/toolkit"
import todoReducer from "../UserReducer"

const store = configureStore({
  reducer: {
    todos: todoReducer   
  }
})

export default store
