import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

const todos = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  },
];


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos
    };
  }

  toggleTodo = id => {
    console.log(id)
    this.setState({
      todos: this.state.todos.map( todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
           }
          } else {
            return todo;
        }
      })
    })
  };
  
  // NAMING CONVENTION NOTE: todo is an object holding 3 properties. Not to be 
  // confused with task, which is the name of the task within the todo object.

  addTodo = todoName => {
    const newTodo = {
      task: todoName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }


  clearTodo = () => {
    this.setState ({
      todos: this.state.todos.filter(todo => !todo.completed)
    })
  }

  render() {
    return (
      <div>
        <TodoList 
          todos={this.state.todos}
          toggleTodo={this.toggleTodo} 
          clearTodo={this.clearTodo}
        />
        <TodoForm 
          task={this.state.task}
          id={this.state.id}
          completed={this.state.completed}
          addTodo={this.addTodo} 
        />
        {this.state.task}
      </div>
    );
  }
}

export default App;
