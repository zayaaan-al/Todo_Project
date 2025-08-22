import React from 'react'
import Todo from './components/Todo'
import Add from './components/Add'
import Update from './components/Update'
import { BrowserRouter,Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Todo/>} />
        <Route path='/add' element={<Add/>}/>
        <Route path='/update/:id' element={<Update/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
