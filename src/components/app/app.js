import React, {Component} from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";
import TodoList from "../todo-list";
import ItemAddForm from "../item-add-form";

import './app.css'

export default class App extends Component {

  maxId = 1

  createItem = (label) => {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    }
  }


  state = {
    todoData: [
      this.createItem("Have a breakfast"),
      this.createItem("Make Awesome App"),
      this.createItem("Drink Coffee")
    ]
  }


  deleteItem = (id) => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((el) => el.id === id)
      const before = todoData.slice(0, idx)
      const after = todoData.slice(idx + 1)
      const newArray = [...before, ...after]
      return {
        todoData: newArray
      }
    })
  }

  addItem = (text) => {
    const newItem = this.createItem(text)

    this.setState(({todoData}) => {
      const newArr = [...todoData, newItem]
      return {
        todoData: newArr
      }
    })
  }

  toggleImportant = (id) => {
    console.log(id)
  }

  toggleDone = (id) => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((el) => el.id === id)
      const oldItem = todoData[idx]
      const newItem = {...oldItem, done: !oldItem.done}

      const newArr = [
        ...todoData.slice(0, idx),
        newItem,
        ...todoData.slice(idx + 1)
      ]

      return {
        todoData: newArr
      }
    })
  }
  toggleDone = (id) => {
    this.setState(({todoData}) => {
      const newArr = this.toggleProperty(todoData, id, 'done')

      return {
        todoData: newArr
      }
    })
  }

  toggleImportant = (id) => {
    this.setState(({todoData}) => {
      const newArr = this.toggleProperty(todoData, id, 'important')

      return {
        todoData: newArr
      }
    })
  }

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id)
    const oldItem = arr[idx]
    const newItem = {...oldItem, [propName]: !oldItem[propName]}

    return [
      ...arr.slice(0, idx),
      newItem,
      ...arr.slice(idx + 1)
    ]
  }

  render() {
    const {todoData} = this.state
    const isLogin = false
    const loginBox = <p>Please login</p>
    const doneCount = todoData.filter((el) => el.done).length
    const todoCount = todoData.length - doneCount

    return (
      <div>
        {isLogin ? null : loginBox}
        <AppHeader done={doneCount} toDo={todoCount}/>
        <SearchPanel />
        <ItemStatusFilter />
        <TodoList
          todos={this.state.todoData}
          onDeleted={this.deleteItem}
          onToggleImportant={this.toggleImportant}
          onToggleDone={this.toggleDone}/>
        <ItemAddForm onItemAdded={this.addItem}/>
      </div>
    )
  }

}
