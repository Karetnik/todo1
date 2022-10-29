import React, {Component} from "react";

import './todo-list-item.css'

export default class TodoListItem extends Component {


  render() {
    const {label, important, done,
          onDeleted,
          onToggleImportant, onToggleDone} = this.props


    let classList = '';
    if (done) {
      classList += ' done'
    }
    if (important) {
      classList += ' important'
    }

    return (
      <span>
      <span
        className={classList}
        onClick={onToggleDone}>
        {label}
      </span>
      <button
        type="button"
        className="btn btn-outline-secondary"
        onClick={onDeleted}>
        Del
      </button>
      <button
        type="button"
        className="btn btn-outline-secondary"
        onClick={onToggleImportant}>
        Imp
      </button>
      </span>
    )
  }
}

