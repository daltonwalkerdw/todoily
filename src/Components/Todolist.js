import React from 'react'
import Todo from "./Todo"

function TodoList(props) {

    return (
        <div>
            <div className="todo-container">
                <ul className="todo-list">
                    {props.filterTodos.map((todo) => (
                        <Todo
                            
                            setTodos={props.setTodos}
                            todos={props.todos}
                            key={todo.id}
                            text={todo.text}
                            todo={todo}
                        />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default TodoList