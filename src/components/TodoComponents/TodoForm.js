import React, { Component } from 'react'

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      todo: ''
    };
  }

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  // why does addTtask stay in App and changeHandler does not?
  submitTodo = e => {
    e.preventDefault();
    this.props.addTodo(this.state.todo);
  };

  render() {
    return (
      <form onSubmit={this.submitTodo}>
        <input
          type="text"
          placeholder="What do you want to do?"
          value={this.todo}
          name="todo"
          onChange={this.changeHandler}
        />
        <button type="submit">Add Todo</button>
        {/* <button onClick={this.props.clearTodo}>Clear Completed</button> */}
      </form>
    )
  }
}

export default TodoForm;
