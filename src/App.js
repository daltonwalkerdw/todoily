import React, { useState } from "react"
import './App.css';
// imported components
import Form from './Components/Form'
import TodoList from './Components/Todolist'

function App() {
  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([])

  return (
    <div className="App">
      <header>
        <h1>Dalton's Todo-List</h1>
      </header>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} />
      <TodoList inputText={inputText} />
    </div>
    
  );
}

export default App;
