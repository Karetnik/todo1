import React from "react";

import TodoListItem from "../todo-list-item";

import './todo-list.css'

const TodoList = ({todos, onDeleted,
                  onToggleImportant,
                  onToggleDone}) => {
  const elements = todos.map((todo) => {
    const {id, ...otherProps} = todo

    return (
      <li key={id}>
        <TodoListItem
          {...otherProps}
          onDeleted={() => onDeleted(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleDone={() => onToggleDone(id)}/>
      </li>
    )
  })

  return (
    <div>
      <ul>
        {elements}
      </ul>
    </div>
  )
}

export default TodoList