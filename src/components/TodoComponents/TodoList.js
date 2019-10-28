// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

import Todo from './Todo';

const TodoList = props => {
    return (
        <div>
            {props.task.map(item => (
                <Todo
                key={item.id}
                item={item}
                toggleCompleted={props.toggleCompleted}
                />
            ))}
            <button className="clear-btn" 
            onClick={props.filterItems}>
                Clear Completed
            </button>
        </div>
    )
}

export default TodoList

