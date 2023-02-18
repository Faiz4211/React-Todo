import React from 'react';
import TodoItem from './TodoItem';

const Todos = (props) => {
    return (
        <div className="container my-3">
            <h3 className='my-3'>Todos Lists</h3>
            {props.todos.length === 0 ? "No Todos to display" :
                props.todos.map((todo, i) => {
                    return (
                        <>
                            <TodoItem key={i} todo={todo} onDelete={props.onDelete} />
                            <hr />
                        </>
                    )
                })}
        </div>
    )
}

export default Todos;