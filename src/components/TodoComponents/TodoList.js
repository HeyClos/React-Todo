import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <div className="class-list">
      {props.app.map(todo => (
        <Todo 
          todo={todo} 
          task={todo.task} 
          id={todo.id} 
          completed={todo.completed} 
        />
      ))}
    </div>
  );
};

export default TodoList;