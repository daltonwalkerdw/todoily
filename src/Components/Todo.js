import React from 'react';

function Todo(props) {
    const deleteHandler = (e) => {
        props.setTodos(props.todos.filter((el) => el.id !== props.todo.id))
    }

    const completeHandler = (e) => {
        props.setTodos(props.todos.map((item) => {
            if(item.id === props.todo.id){
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }

    return (
        <div className='todo'>
            <li className={`todo-item ${props.todo.completed ? "completed" : ''}`}>{props.text}</li>
            <button onClick={completeHandler} className='complete-btn'>
                <i className='fas fa-check'></i>
            </button>
            <button onClick={deleteHandler} className='trash-btn'>
                <i className='fas fa-trash'></i>
            </button>
        </div>
    )
}

export default Todo