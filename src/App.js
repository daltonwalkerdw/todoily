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
  // runs on startup
  useEffect(() => {
    getLocalTodos()
  }, [])
  // use effect
  useEffect(() => {
    filterHandler()
    saveLocalTodos()
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
  // local storage
  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }
  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]))
    } else {
     let todoLocal = JSON.parse(localStorage.getItem("todos"))
     setTodos(todoLocal)
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Todo-List</h1>
      </header>
      <Form filterTodos={filterTodos} setStatus={setStatus} inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} />
      <TodoList filterTodos={filterTodos} setTodos={setTodos} todos={todos} inputText={inputText} />
    </div>

  );

}

export default App;
