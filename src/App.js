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
      // app: todo,
      // task: "",
      // id: "",
      // completed: "",
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
  
  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addTask = e => {
    e.preventDefault();
    this.setState({
      app: [
        ...this.state.app,
        {
          task: this.state.task,
          id: this.state.id,
          completed: this.state.completed,
        }
      ],
      task: "",
      id: "",
      completed: "",
    });
  };


  render() {
    return (
      <div>
        <TodoList app={this.state.app} />
        <TodoForm 
          task={this.state.task}
          id={this.state.id}
          completed={this.state.completed}
          addTask={this.addTask} 
          changeHandler={this.changeHandler} 
        />
        {this.state.task}
      </div>
    );
  }
}

export default App;
