import React, { useState, useEffect } from "react"
import './App.css';
// imported components
import Form from './Components/Form'
import TodoList from './Components/Todolist'

function App() {

  // state
  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState('all')
  const [filterTodos, setFilterTodos] = useState([])
  // use effect
  useEffect(() => {
    filterHandler()
  }, [todos, status])
  // functions
  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilterTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFilterTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilterTodos(todos);
        break
    }
  }



return (
  <div className="App">
    <header>
      <h1>Dalton's Todo-List</h1>
    </header>
    <Form filterTodos={filterTodos} setStatus={setStatus} inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} />
    <TodoList filterTodos={filterTodos} setTodos={setTodos} todos={todos} inputText={inputText} />
  </div>

);

}

export default App;
