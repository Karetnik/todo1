import React from "react";

import './app-header.css'

const AppHeader = ({toDo, done}) => {
    return (
      <div>
          <h1>My Todo List</h1>
          <h2>{done}:done, {toDo}:more to do</h2>
      </div>
    )
}

export default AppHeader