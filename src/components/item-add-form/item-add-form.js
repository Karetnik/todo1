import React, {Component} from "react";

import './item-add-form.css'

export default class ItemAddForm extends Component {

  state = {
    label: ''
  }

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    })
  }

  onSubmit = () => {
    this.props.onItemAdded(this.state.label)
  }

  render() {
    const {onItemAdded} = this.props

    return (
      <form>
        <input
          type="text"
          placeholder="What needs to be done"
          onChange={this.onLabelChange}/>
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={() => this.onSubmit()}>
          AddItem
        </button>
      </form>
    )
  }
}

